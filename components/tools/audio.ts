// Audio processing for the browser-only cleanup tools. Everything runs on the
// visitor's machine: decode with Web Audio, edit the samples, write a WAV.

export const MAX_AUDIO_SECONDS = 10 * 60;
export const MAX_AUDIO_FILE_BYTES = 100 * 1024 * 1024;

export type MonoAudio = { samples: Float32Array; sampleRate: number };

/** Decodes any format the browser can play and mixes it down to mono. */
export async function decodeToMono(blob: Blob): Promise<MonoAudio> {
  const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  const ctx = new Ctx();
  try {
    const buffer = await ctx.decodeAudioData(await blob.arrayBuffer());
    const samples = new Float32Array(buffer.length);
    for (let c = 0; c < buffer.numberOfChannels; c++) {
      const data = buffer.getChannelData(c);
      for (let i = 0; i < data.length; i++) samples[i] += data[i] / buffer.numberOfChannels;
    }
    return { samples, sampleRate: buffer.sampleRate };
  } finally {
    ctx.close().catch(() => {});
  }
}

/** 16-bit PCM WAV. */
export function encodeWav({ samples, sampleRate }: MonoAudio): Blob {
  const bytes = 44 + samples.length * 2;
  const view = new DataView(new ArrayBuffer(bytes));
  const text = (offset: number, s: string) => [...s].forEach((ch, i) => view.setUint8(offset + i, ch.charCodeAt(0)));
  text(0, "RIFF");
  view.setUint32(4, bytes - 8, true);
  text(8, "WAVE");
  text(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  text(36, "data");
  view.setUint32(40, samples.length * 2, true);
  for (let i = 0, o = 44; i < samples.length; i++, o += 2) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(o, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }
  return new Blob([view], { type: "audio/wav" });
}

export function formatDuration(seconds: number) {
  const s = Math.max(0, Math.round(seconds));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

/** Lets the page paint between heavy steps. */
export const nextFrame = () => new Promise((r) => setTimeout(r, 0));

/* --- Silence ------------------------------------------------------------- */

export type SilenceOptions = {
  /** Anything quieter than this (dBFS) counts as silence. */
  thresholdDb: number;
  /** Pauses shorter than this are left alone. */
  minSilence: number;
  /** How long each long pause becomes. */
  keepPause: number;
};

/**
 * Shortens every pause longer than `minSilence` down to `keepPause`, with a
 * short fade either side of each cut so the joins do not click.
 */
export function shortenSilences(audio: MonoAudio, { thresholdDb, minSilence, keepPause }: SilenceOptions) {
  const { samples, sampleRate } = audio;
  const win = Math.round(sampleRate * 0.02);
  const threshold = Math.pow(10, thresholdDb / 20);
  const frames = Math.ceil(samples.length / win);
  const quiet = new Uint8Array(frames);
  for (let f = 0; f < frames; f++) {
    let sum = 0;
    const end = Math.min(samples.length, (f + 1) * win);
    for (let i = f * win; i < end; i++) sum += samples[i] * samples[i];
    quiet[f] = Math.sqrt(sum / Math.max(1, end - f * win)) < threshold ? 1 : 0;
  }

  // Collect the sample ranges to drop: the middle of each long quiet run.
  const cuts: [number, number][] = [];
  const minFrames = Math.ceil(minSilence / 0.02);
  for (let f = 0; f < frames; ) {
    if (!quiet[f]) {
      f++;
      continue;
    }
    let g = f;
    while (g < frames && quiet[g]) g++;
    if (g - f >= minFrames) {
      const runStart = f * win;
      const runEnd = Math.min(samples.length, g * win);
      const keep = Math.round(keepPause * sampleRate);
      const from = runStart + Math.floor(keep / 2);
      const to = runEnd - Math.ceil(keep / 2);
      if (to > from) cuts.push([from, to]);
    }
    f = g;
  }

  const removed = cuts.reduce((n, [a, b]) => n + (b - a), 0);
  const out = new Float32Array(samples.length - removed);
  const fade = Math.round(sampleRate * 0.008);
  let o = 0;
  let pos = 0;
  for (const [from, to] of [...cuts, [samples.length, samples.length] as [number, number]]) {
    out.set(samples.subarray(pos, from), o);
    const segEnd = o + (from - pos);
    // Fade out the end of this segment and in the start of the next.
    for (let i = 0; i < fade && segEnd - 1 - i >= o; i++) out[segEnd - 1 - i] *= i / fade;
    if (pos > 0) for (let i = 0; i < fade && o + i < segEnd; i++) out[o + i] *= i / fade;
    o = segEnd;
    pos = to;
  }
  return { audio: { samples: out, sampleRate }, cuts: cuts.length, removedSeconds: removed / sampleRate };
}

/* --- Noise --------------------------------------------------------------- */

const N = 2048;
const HOP = N / 4;

function fft(re: Float64Array, im: Float64Array, inverse: boolean) {
  const n = re.length;
  for (let i = 1, j = 0; i < n; i++) {
    let bit = n >> 1;
    for (; j & bit; bit >>= 1) j ^= bit;
    j ^= bit;
    if (i < j) {
      [re[i], re[j]] = [re[j], re[i]];
      [im[i], im[j]] = [im[j], im[i]];
    }
  }
  for (let len = 2; len <= n; len <<= 1) {
    const ang = ((inverse ? 2 : -2) * Math.PI) / len;
    const wr = Math.cos(ang);
    const wi = Math.sin(ang);
    for (let i = 0; i < n; i += len) {
      let cr = 1;
      let ci = 0;
      for (let k = 0; k < len / 2; k++) {
        const a = i + k;
        const b = a + len / 2;
        const tr = re[b] * cr - im[b] * ci;
        const ti = re[b] * ci + im[b] * cr;
        re[b] = re[a] - tr;
        im[b] = im[a] - ti;
        re[a] += tr;
        im[a] += ti;
        const nr = cr * wr - ci * wi;
        ci = cr * wi + ci * wr;
        cr = nr;
      }
    }
  }
  if (inverse) for (let i = 0; i < n; i++) (re[i] /= n), (im[i] /= n);
}

/**
 * Spectral gating: learns the noise floor of each frequency from the quietest
 * tenth of the recording, then turns each frequency down wherever it does not
 * rise clearly above that floor. Suits steady noise: hum, hiss, fans, traffic.
 * `strength` runs from 0 (off) to 1 (aggressive).
 */
export async function reduceNoise(audio: MonoAudio, strength: number, onProgress?: (p: number) => void): Promise<MonoAudio> {
  const { samples, sampleRate } = audio;
  const bins = N / 2 + 1;
  const window = new Float64Array(N).map((_, i) => 0.5 - 0.5 * Math.cos((2 * Math.PI * i) / N));
  const frames = Math.max(1, Math.ceil((samples.length - N) / HOP) + 1);
  const re = new Float64Array(N);
  const im = new Float64Array(N);

  const load = (f: number) => {
    const start = f * HOP;
    for (let i = 0; i < N; i++) {
      re[i] = (samples[start + i] ?? 0) * window[i];
      im[i] = 0;
    }
    fft(re, im, false);
  };

  // Pass 1: per-frame energy, to find the quietest frames.
  const energy = new Float64Array(frames);
  for (let f = 0; f < frames; f++) {
    let e = 0;
    for (let i = 0; i < N; i++) e += (samples[f * HOP + i] ?? 0) ** 2;
    energy[f] = e;
  }
  const order = [...energy.keys()].sort((a, b) => energy[a] - energy[b]);
  const quietFrames = order.slice(0, Math.max(4, Math.floor(frames * 0.1)));

  // Pass 2: the noise profile, the mean magnitude of each bin in those frames.
  const noise = new Float64Array(bins);
  for (const f of quietFrames) {
    load(f);
    for (let k = 0; k < bins; k++) noise[k] += Math.hypot(re[k], im[k]) / quietFrames.length;
  }

  // Pass 3: gate each frame and overlap-add it back together.
  const over = 1 + strength * 1.5;
  // Strength 0.6 lets noise down by about 18 dB; full strength by 30 dB.
  const floor = Math.pow(10, (-30 * strength) / 20);
  const out = new Float64Array(samples.length + N);
  const norm = new Float64Array(samples.length + N);
  const prevGain = new Float64Array(bins).fill(1);
  for (let f = 0; f < frames; f++) {
    load(f);
    for (let k = 0; k < bins; k++) {
      const mag = Math.hypot(re[k], im[k]) || 1e-12;
      let g = Math.max(floor, 1 - (over * noise[k]) / mag);
      // Smooth over time so the gate does not flutter ("musical noise").
      g = 0.6 * g + 0.4 * prevGain[k];
      prevGain[k] = g;
      re[k] *= g;
      im[k] *= g;
      if (k > 0 && k < N / 2) {
        re[N - k] = re[k];
        im[N - k] = -im[k];
      }
    }
    fft(re, im, true);
    const start = f * HOP;
    for (let i = 0; i < N; i++) {
      out[start + i] += re[i] * window[i];
      norm[start + i] += window[i] * window[i];
    }
    if (f % 400 === 0) {
      onProgress?.(f / frames);
      await nextFrame();
    }
  }

  const result = new Float32Array(samples.length);
  for (let i = 0; i < samples.length; i++) result[i] = norm[i] > 1e-6 ? out[i] / norm[i] : 0;
  onProgress?.(1);
  return { samples: result, sampleRate };
}
