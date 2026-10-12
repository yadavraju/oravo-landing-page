import type { DownloadData } from '@/lib/downloadApi';
import Logo from '@/components/Logo';
import { InstallSteps } from '@/components/download/InstallSteps';
import { PlatformCards } from '@/components/download/PlatformSection';
import { VersionSection } from '@/components/download/VersionSection';
import { Band } from '@/components/landing/Band';
import { Doodle } from '@/components/landing/Doodle';
import { MarketingShell } from '@/components/landing/MarketingShell';
import { CtaPanel, SectionIntro } from '@/components/landing/PageBlocks';
import { Parallax } from '@/components/landing/Parallax';
import { Reveal, RevealWords } from '@/components/landing/Reveal';

// Local copy: constants exported from a "use client" module arrive in server
// components as client references, not strings.
const SHELL = 'mx-auto w-full max-w-6xl px-5 sm:px-8';

/*
 * The /download page body: hero with the latest build per platform, release
 * history, after-install steps and help. Data is fetched by app/download/page.tsx.
 */
export function DownloadPageView({ versionGroups }: { versionGroups: { version: string; downloads: DownloadData[]; isLatest: boolean }[] }) {
  const latest = versionGroups.find((group) => group.isLatest);

  return (
    <MarketingShell>
      {/* Hero: the latest build for each platform, right under the title. */}
      <section className="relative w-full overflow-hidden bg-sand pb-16 pt-32 sm:pb-24 sm:pt-40">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Parallax speed={140} className="absolute -left-40 top-16 sm:-left-24">
            <div className="h-[360px] w-[360px] rounded-full bg-sand-deep sm:h-[440px] sm:w-[440px]" />
          </Parallax>
          <Parallax speed={-90} className="absolute -right-32 top-[44%] sm:-right-16">
            <div className="h-[280px] w-[280px] rotate-12 rounded-[56px] bg-clay sm:h-[340px] sm:w-[340px]" />
          </Parallax>
          <Parallax speed={60} className="absolute left-[4%] top-[200px] hidden xl:block">
            <Doodle name="windows" className="w-40" />
          </Parallax>
          <Parallax speed={-40} className="absolute right-[4%] top-[150px] hidden xl:block">
            <Doodle name="mic" className="w-36" />
          </Parallax>
        </div>

        <div className={`${SHELL} relative`}>
          <div className="mx-auto flex max-w-[44rem] flex-col items-center text-center">
            <Reveal>
              <div className="flex h-20 w-20 items-center justify-center rounded-[22px] bg-raised shadow-[0_0_0_1px_var(--o-line),0_18px_36px_-20px_rgba(51,48,42,0.45)] sm:h-24 sm:w-24 sm:rounded-[26px]">
                <Logo className="h-11 w-11 fill-ink sm:h-14 sm:w-14" />
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="eyebrow mt-7">{latest ? `Version ${latest.version}` : 'Download'}</p>
            </Reveal>
            <h1 className="display-1 mt-3 text-ink">
              <RevealWords text="Download Oravo" delay={0.05} />
            </h1>
            <Reveal delay={0.3}>
              <p className="subtitle mx-auto mt-5 max-w-[34rem] text-balance">
                Voice typing and AI meeting notes for Windows, Mac and Android. <span className="text-accent">iOS is coming soon.</span>
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="mt-5 inline-flex items-center gap-2 rounded-lg bg-raised/70 px-3 py-2 font-display text-[12.5px] text-ink-soft ring-1 ring-line">
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-brand" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M3 8.5l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Your 14-day Pro trial starts automatically when you install. No credit card required.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 sm:mt-14">
            <PlatformCards downloads={latest?.downloads ?? []} />
          </div>
        </div>
      </section>

      {/* Every build, for anyone who needs a specific version or chip. */}
      <Band color="var(--o-paper)" from="var(--o-band-sand)" className="pb-20 pt-24 sm:pb-24 sm:pt-28">
        <div className={`${SHELL} grid gap-10 lg:grid-cols-[19rem_1fr] lg:gap-14`}>
          <SectionIntro
            align="left"
            doodle="notebook"
            eyebrow="Release history"
            title="Every build, every platform."
            lede="Need an older version or a build for a specific Mac chip? Every release is here."
          />
          <div className="space-y-4">
            {versionGroups.length === 0 ? (
              <Reveal>
                <div className="frame-dotted bg-raised/50 px-6 py-10 text-center">
                  <p className="font-display text-[15px] font-semibold text-ink">We could not load the release list just now.</p>
                  <p className="mt-2 text-[14px] text-ink-soft">
                    Refresh the page in a moment, or email{' '}
                    <a href="mailto:hi@oravo.ai" className="font-semibold text-primary-500 underline-offset-4 hover:underline">
                      hi@oravo.ai
                    </a>{' '}
                    and we will send you a link.
                  </p>
                </div>
              </Reveal>
            ) : (
              versionGroups.map((group, i) => (
                <Reveal key={group.version} delay={Math.min(i, 4) * 0.05}>
                  <VersionSection
                    version={group.version}
                    downloads={group.downloads}
                    isLatest={group.isLatest}
                    defaultExpanded={group.isLatest}
                  />
                </Reveal>
              ))
            )}
          </div>
        </div>
      </Band>

      {/* What happens after the download finishes. */}
      <Band color="var(--o-band-clay)" from="var(--o-paper)" blend={200} className="pb-20 pt-24 sm:pb-24 sm:pt-28">
        <div className={`${SHELL} grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16`}>
          <SectionIntro
            align="left"
            doodle="hotkey"
            eyebrow="After you install"
            title="Up and talking in a minute."
            lede="Three steps from download to your first dictation. Then press, speak and let go in any app you already use."
          />
          <Reveal y={20}>
            <InstallSteps />
          </Reveal>
        </div>
      </Band>

      <Band color="var(--o-blush)" from="var(--o-band-clay)" className="pb-20 pt-16 sm:pt-20">
        <div className={SHELL}>
          <CtaPanel
            eyebrow="Need a hand?"
            title="We are here if you get stuck."
            description={
              <>
                Read the setup guide or email us at <span className="font-semibold text-ink">hi@oravo.ai</span>. We reply to every message.
              </>
            }
            primary={{ label: 'Open the setup guide', href: '/how-to-use' }}
            secondary={{ label: 'Email support', href: 'mailto:hi@oravo.ai' }}
            doodle="question"
          />
        </div>
      </Band>
    </MarketingShell>
  );
}
