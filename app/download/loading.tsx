import Logo from '@/components/Logo';
import { MarketingShell } from '@/components/landing/MarketingShell';

// Skeleton component for loading state
function Skeleton({ className }: { className?: string }) {
  return <div className={`animate-pulse rounded-lg bg-ink/[0.06] motion-reduce:animate-none ${className}`} />;
}

export default function DownloadLoading() {
  return (
    <MarketingShell>
      <section className="relative w-full overflow-hidden bg-sand pb-16 pt-32 sm:pb-24 sm:pt-40">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="mx-auto flex max-w-[44rem] flex-col items-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-[22px] bg-raised shadow-[0_0_0_1px_var(--o-line)] sm:h-24 sm:w-24 sm:rounded-[26px]">
              <Logo className="h-11 w-11 fill-ink sm:h-14 sm:w-14" />
            </div>
            <p className="eyebrow mt-7">Download</p>
            <h1 className="display-1 mt-3 text-ink">Download Oravo</h1>
            <p className="subtitle mx-auto mt-5 max-w-[34rem]">Voice typing and AI meeting notes for Windows, Mac and Android. iOS is coming soon.</p>
          </div>

          <div className="mt-12 grid gap-5 pt-3 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col rounded-2xl bg-raised p-5 shadow-[0_0_0_1px_var(--o-line)] sm:p-6">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-11 w-11 !rounded-xl" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>
                <Skeleton className="mt-8 h-12 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
