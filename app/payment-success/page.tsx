"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Loader2, ShieldCheck } from "lucide-react";
import Logo from "@/components/Logo";
import { Doodle } from "@/components/landing/Doodle";
import { Parallax } from "@/components/landing/Parallax";

const COUNTDOWN_FROM = 8;

/*
 * The success mark: a hand-drawn circle that sketches itself in, then the
 * tick, then a few strokes that burst out like a pen flourish. Warm ink with
 * the brand accent on the tick; frozen in its drawn state under reduced
 * motion.
 */
function DrawnCheck() {
  const reduceMotion = useReducedMotion();
  const draw = (delay: number, duration = 0.9) =>
    reduceMotion
      ? { initial: false as const, animate: { pathLength: 1, opacity: 1 } }
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration, delay, ease: [0.33, 0.1, 0.25, 1] as const },
        };
  const bursts = [
    "M60 8 V0",
    "M96 22 L102 16",
    "M112 60 H120",
    "M24 22 L18 16",
    "M8 60 H0",
    "M96 98 L102 104",
    "M24 98 L18 104",
  ];
  return (
    <motion.svg
      viewBox="-6 -6 132 132"
      className="h-32 w-32 sm:h-36 sm:w-36"
      fill="none"
      aria-hidden="true"
      animate={reduceMotion ? undefined : { rotate: [0, -2, 0, 1.5, 0], y: [0, -3, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}
    >
      {/* A loose, slightly overshooting circle, like one drawn by hand. */}
      <motion.path
        d="M64 18 C38 16 18 36 18 61 C18 86 38 103 62 102 C87 101 104 82 102 57 C100 34 84 18 58 19"
        stroke="var(--o-ink)"
        strokeOpacity={0.55}
        strokeWidth={2.4}
        strokeLinecap="round"
        {...draw(0.15, 1.1)}
      />
      <motion.path
        d="M40 62 L54 76 L82 44"
        stroke="var(--o-accent)"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...draw(1.05, 0.55)}
      />
      {bursts.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          stroke="var(--o-ink)"
          strokeOpacity={0.4}
          strokeWidth={2.2}
          strokeLinecap="round"
          {...draw(1.5 + i * 0.05, 0.35)}
        />
      ))}
    </motion.svg>
  );
}

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const reduceMotion = useReducedMotion();
  const [countdown, setCountdown] = useState(8);
  const [isReturning, setIsReturning] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [customSession, setCustomSession] = useState("");
  const [paymentDate, setPaymentDate] = useState("");

  useEffect(() => {
    // Get URL parameters
    const session = searchParams.get("session_id") || "";
    const custom = searchParams.get("custom_session") || "";

    setSessionId(session);
    setCustomSession(custom);

    // Set payment date
    const date = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setPaymentDate(date);

    // Start countdown
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          returnToApp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [searchParams]);

  const returnToApp = () => {
    if (isReturning) return;
    setIsReturning(true);

    const sessionToUse = customSession || sessionId || "";
    const returnUrl = `http://localhost:8080/payment-success?session_id=${encodeURIComponent(
      sessionToUse
    )}&status=success`;

    console.log("Attempting to return to desktop app:", returnUrl);

    try {
      window.location.href = returnUrl;

      setTimeout(() => {
        setIsReturning(false);
      }, 2500);
    } catch (error) {
      console.error("Failed to open desktop app:", error);
      setIsReturning(false);
    }
  };

  const displaySession = customSession || sessionId || "N/A";
  const truncatedSession =
    displaySession.length > 25
      ? displaySession.substring(0, 25) + "..."
      : displaySession;

  const details: { label: string; value: React.ReactNode }[] = [
    {
      label: "Status",
      value: (
        <span className="inline-flex items-center gap-1.5 font-semibold text-ink">
          <Check aria-hidden="true" className="h-3.5 w-3.5 text-brand" strokeWidth={3} />
          Completed
        </span>
      ),
    },
    { label: "Date", value: <span className="font-semibold text-ink">{paymentDate}</span> },
    {
      label: "Session",
      value: (
        <span className="inline-block max-w-full truncate rounded-md bg-canvas px-2 py-1 align-middle font-mono text-[12px] font-semibold text-ink ring-1 ring-line">
          {truncatedSession}
        </span>
      ),
    },
    { label: "Transaction", value: <span className="font-semibold text-ink">Stripe Checkout</span> },
  ];

  const steps: React.ReactNode[] = [
    <>
      <strong className="font-semibold text-ink">Click "Return to Application"</strong> above
    </>,
    <>
      If the app doesn't open, <strong className="font-semibold text-ink">manually launch your desktop application</strong>
    </>,
    <>Your payment is confirmed and your account will be updated</>,
    <>If you encounter issues, restart the desktop application</>,
  ];

  const enter = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <div className="grain relative flex min-h-screen w-full flex-col overflow-x-hidden bg-sand text-ink">
      {/* Background shapes and doodles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <Parallax speed={80} className="absolute -left-36 top-24">
          <div className="h-80 w-80 rounded-full bg-sand-deep sm:h-[420px] sm:w-[420px]" />
        </Parallax>
        <Parallax speed={-60} className="absolute -right-28 bottom-10">
          <div className="h-72 w-72 rotate-12 rounded-[56px] bg-clay sm:h-80 sm:w-80" />
        </Parallax>
        <div className="absolute left-[6%] top-[38%] hidden xl:block">
          <Doodle name="sparkle" className="w-36" />
        </div>
        <div className="absolute right-[6%] top-[18%] hidden xl:block">
          <Doodle name="plane" className="w-40" />
        </div>
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center px-5 pt-6 sm:px-8">
        <a href="/" className="inline-flex items-center gap-2 font-display text-[17px] font-bold tracking-[-0.02em] text-ink">
          <Logo />
          oravo
        </a>
      </header>

      <main className="relative z-10 flex flex-1 items-start justify-center px-5 pb-16 pt-8 sm:items-center sm:px-8 sm:pt-6">
        <div className="w-full max-w-[540px]">
          <motion.div {...enter(0)} className="surface-solid !rounded-2xl px-6 pb-8 pt-8 sm:px-10 sm:pb-10">
            <div className="flex flex-col items-center text-center">
              <DrawnCheck />
              <p className="eyebrow mt-3">You're all set</p>
              <h1 className="display-2 mt-2 text-ink">Payment Successful!</h1>
              <p className="subtitle mt-3 max-w-sm">
                Your payment has been processed successfully.
                <br />
                Thank you for your purchase!
              </p>
            </div>

            {/* Payment details */}
            <dl className="mt-8 divide-y divide-line rounded-xl bg-canvas px-5 ring-1 ring-line">
              {details.map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-4 py-3 font-display text-[13.5px]">
                  <dt className="text-ink-soft">{row.label}</dt>
                  <dd className="min-w-0 text-right">{row.value}</dd>
                </div>
              ))}
            </dl>

            {/* Return button */}
            <button
              onClick={returnToApp}
              disabled={isReturning}
              className="btn-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isReturning ? (
                <>
                  <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
                  Opening Application...
                </>
              ) : (
                <>
                  Return to Application
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </>
              )}
            </button>

            {/* Auto redirect notice */}
            {countdown > 0 && !isReturning && (
              <div className="mt-4" aria-live="polite">
                <p className="text-center font-display text-[13px] text-ink-soft">
                  Automatically returning in{" "}
                  <span className="font-semibold tabular-nums text-ink">{countdown}</span>{" "}
                  seconds...
                </p>
                <div className="mx-auto mt-2.5 h-1 w-40 overflow-hidden rounded-full bg-line" aria-hidden="true">
                  <div
                    className="h-full rounded-full bg-ink/60 transition-[width] duration-1000 ease-linear"
                    style={{ width: `${(countdown / COUNTDOWN_FROM) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </motion.div>

          {/* Next steps */}
          <motion.div {...enter(0.15)} className="mt-5 rounded-2xl bg-paper px-6 py-6 ring-1 ring-line sm:px-8">
            <h2 className="display-3 text-ink">Return to Your Desktop App</h2>
            <ol className="mt-4 grid gap-3">
              {steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-ink-soft">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-raised font-display text-[12px] font-bold text-brand ring-1 ring-line">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-5 flex items-start gap-3 rounded-xl bg-raised/80 p-4 ring-1 ring-line">
              <ShieldCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-ink-soft" />
              <div>
                <p className="font-display text-[14px] font-semibold text-ink">Payment Confirmed</p>
                <p className="mt-0.5 text-[13px] leading-relaxed text-ink-soft">
                  Your subscription is being activated. Check your account in the desktop app.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen w-full items-center justify-center bg-sand">
          <div className="inline-flex items-center gap-2 font-display text-[15px] text-ink-soft">
            <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
            Loading...
          </div>
        </div>
      }
    >
      <PaymentSuccessContent />
    </Suspense>
  );
}
