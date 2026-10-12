"use client";

import { Check, CircleHelp, LifeBuoy, Mic, Sparkles, Users } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";

type Cycle = "month" | "year";

type Plan = {
  id: "starter" | "pro" | "team";
  label: string;
  blurb: string;
  monthly: number;
  yearly: number;
  unit: string;
  allowance: { icon: typeof Mic; title: string; detail: string };
  features: string[];
  cta: { label: string; href: string };
  note: string;
};

const PLANS: Plan[] = [
  {
    id: "starter",
    label: "Starter",
    blurb: "Free forever. No credit card required.",
    monthly: 0,
    yearly: 0,
    unit: "/month",
    allowance: { icon: Mic, title: "30 minutes a month", detail: "Free forever, every month" },
    features: [
      "Instant dictation & smart formatting",
      "Works anywhere (Slack, Gmail, Notion, etc.)",
      "Custom vocabulary support",
      "Context-aware suggestions",
      "Basic punctuation commands",
      "Voice-activated editing",
      "Multi-language support",
      "Secure cloud sync",
    ],
    cta: { label: "Download free", href: "/download" },
    note: "No credit card · Free forever",
  },
  {
    id: "pro",
    label: "Professional",
    blurb: "Everything in Starter, plus unlimited.",
    monthly: 9.99,
    yearly: 99.99,
    unit: "/month",
    allowance: { icon: Sparkles, title: "Unlimited words", detail: "5,000 words free to start" },
    features: [
      "Advanced voice commands & custom macros",
      "Offline dictation mode",
      "Smart memory of your writing style",
      "Priority customer support",
      "Early access to new features",
      "Export & backup options",
      "Full personalization across apps",
    ],
    cta: { label: "Start free trial", href: "/download" },
    note: "Trial starts on install · No credit card",
  },
  {
    id: "team",
    label: "Enterprise",
    blurb: "Everything in Professional, plus team features. Minimum 3 users.",
    monthly: 8.99,
    yearly: 89.99,
    unit: "/user/month",
    allowance: { icon: Users, title: "Unlimited for every seat", detail: "Billed per user, 3 seats minimum" },
    features: [
      "Centralized billing",
      "Administrative controls",
      "Team-wide personalization",
      "Dedicated account manager",
      "Priority onboarding and support",
      "Custom integrations & API access",
      "Advanced analytics & reporting",
      "SSO & security compliance",
      "Volume discounts available",
    ],
    cta: { label: "Contact sales", href: "mailto:hello@oravo.ai?subject=Oravo%20Enterprise%20inquiry" },
    note: "We reply within one business day",
  },
];

const FEATURED: Plan["id"] = "pro";

// Read from the prices rather than typed, so the switch can never advertise a
// discount the numbers do not give.
const YEARLY_SAVING = Math.round((1 - PLANS[1].yearly / (PLANS[1].monthly * 12)) * 100);

function splitPrice(amount: number) {
  const [dollars, cents] = amount.toFixed(2).split(".");
  return { dollars, cents };
}

function CycleSwitch({ value, onChange }: { value: Cycle; onChange: (c: Cycle) => void }) {
  return (
    <div role="tablist" aria-label="Billing cycle" className="inline-flex h-11 items-center gap-0.5 rounded-xl border border-line bg-raised/70 p-1 backdrop-blur-sm">
      {(["month", "year"] as Cycle[]).map((cycle) => {
        const selected = value === cycle;
        return (
          <button
            key={cycle}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(cycle)}
            className={`inline-flex h-full items-center rounded-lg px-4 font-display text-[13.5px] font-medium transition-colors ${
              selected ? "bg-primary-500 text-white shadow-[0_1px_2px_rgba(15,106,158,0.25)]" : "text-ink-soft hover:text-ink"
            }`}
          >
            {cycle === "month" ? "Monthly" : "Yearly"}
            {cycle === "year" && (
              <span className={selected ? "ml-1 text-white/75" : "ml-1 text-brand"}>
                {"· Save "}
                {YEARLY_SAVING}%
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

function PlanCard({ plan, cycle, index }: { plan: Plan; cycle: Cycle; index: number }) {
  const featured = plan.id === FEATURED;
  const free = plan.monthly === 0;
  const yearly = cycle === "year";
  const perMonth = yearly ? plan.yearly / 12 : plan.monthly;
  const { dollars, cents } = splitPrice(perMonth);

  return (
    <Reveal delay={index * 0.06} className="flex w-full flex-col text-left sm:w-[19.5rem] sm:shrink-0">
      {/* The strip above every card, filled on one, so all cards start their content on one line. */}
      <div
        className={`flex h-[3.25rem] items-start justify-between gap-2 rounded-t-2xl px-4 pt-2.5 font-display text-[11.5px] font-semibold ${
          featured ? "bg-brand-soft text-brand" : "bg-transparent"
        }`}
      >
        {featured && (
          <>
            <span className="inline-flex items-center gap-1.5 uppercase tracking-[0.08em]">
              <Sparkles aria-hidden="true" className="h-3 w-3" strokeWidth={2.5} />
              Most popular
            </span>
            {yearly && <span className="tabular-nums">Save ${(plan.monthly * 12 - plan.yearly).toFixed(2)}</span>}
          </>
        )}
      </div>

      <article
        className={`-mt-5 flex flex-1 flex-col rounded-2xl border bg-raised p-5 pb-6 shadow-[0_1px_2px_rgba(51,48,42,0.04)] ${
          featured ? "border-brand/35" : "border-line"
        }`}
      >
        <h3 className="font-display text-[16px] font-bold tracking-[-0.02em] text-ink">{plan.label}</h3>
        <p className="mt-1 min-h-[2.5rem] font-display text-[12.5px] leading-snug text-ink-soft">{plan.blurb}</p>

        <p className="mt-3 flex items-baseline gap-1 text-ink">
          {free ? (
            <span className="font-display text-[2.4rem] font-bold leading-none tracking-[-0.045em]">Free</span>
          ) : (
            <>
              <span className="translate-y-[-0.55em] font-display text-[15px] font-medium">$</span>
              <span className="font-display text-[2.4rem] font-bold leading-none tracking-[-0.045em] tabular-nums">{dollars}</span>
              <span className="font-display text-[13px] font-medium tabular-nums text-ink-soft">
                .{cents}
                {plan.unit}
              </span>
            </>
          )}
        </p>
        {/* Fixed height so switching cycle does not shunt the cards. */}
        <p className="mt-1.5 h-4 font-display text-[11.5px] tabular-nums text-ink-faint">
          {yearly && !free ? `$${plan.yearly.toFixed(2)} billed yearly${plan.id === "team" ? " per user" : ""}` : ""}
        </p>

        <a href={plan.cta.href} className={`mt-4 w-full !h-11 !text-[14px] ${featured ? "btn-primary" : "btn-secondary !border-line"}`}>
          {plan.cta.label}
        </a>
        <p className="mt-2 text-center font-display text-[11.5px] text-ink-faint">{plan.note}</p>

        <div className="mt-5 rounded-xl bg-canvas p-3">
          <p className="flex items-center gap-2">
            <plan.allowance.icon aria-hidden="true" className="h-4 w-4 shrink-0 text-brand" />
            <span className="font-display text-[13px] font-semibold text-ink">{plan.allowance.title}</span>
          </p>
          <p className="mt-1.5 pl-6 font-display text-[12.5px] leading-snug text-ink-soft">{plan.allowance.detail}</p>
        </div>

        <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 font-display text-[12.5px] leading-snug text-ink">
              <Check aria-hidden="true" className="mt-[1px] h-3.5 w-3.5 shrink-0 text-primary-500" strokeWidth={2.5} />
              {feature}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}

export function PricingPlans() {
  const [cycle, setCycle] = useState<Cycle>("month");
  return (
    <div>
      <Reveal className="flex justify-center">
        <CycleSwitch value={cycle} onChange={setCycle} />
      </Reveal>

      <div className="mt-10 w-full overflow-x-auto sm:mt-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="mx-auto flex w-full flex-col gap-4 px-5 sm:w-max sm:flex-row sm:gap-5 sm:px-8">
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} cycle={cycle} index={i} />
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="mt-7 text-center font-display text-[13px] text-ink-soft">
          {cycle === "year"
            ? `Yearly plans are billed once, ${YEARLY_SAVING}% below twelve monthly payments.`
            : `Paying yearly saves ${YEARLY_SAVING}% on every paid plan.`}{" "}
          All prices in USD.
        </p>
        <div className="mt-6 flex items-center justify-center gap-6">
          <a href="#faq" className="inline-flex items-center gap-1.5 font-display text-[13.5px] font-medium text-ink-soft transition-colors hover:text-ink">
            <CircleHelp aria-hidden="true" className="h-4 w-4 text-ink-faint" />
            FAQs
          </a>
          <a href="mailto:hi@oravo.ai" className="inline-flex items-center gap-1.5 font-display text-[13.5px] font-medium text-ink-soft transition-colors hover:text-ink">
            <LifeBuoy aria-hidden="true" className="h-4 w-4 text-ink-faint" />
            Help
          </a>
        </div>
      </div>
    </div>
  );
}
