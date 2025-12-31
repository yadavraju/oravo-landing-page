import { Header } from '@/components/header';
import Logo from '@/components/Logo';

// Skeleton component for loading state
function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-[#E0DEDB]/50 rounded ${className}`} />
  );
}

export default function DownloadLoading() {
  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Main container with proper margins */}
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Right vertical line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-1 w-full mt-20 md:mt-24 lg:mt-28 relative z-10">
            <div className="max-w-[800px] mx-auto px-6 md:px-12 py-12 md:py-16">
              {/* Hero Section */}
              <div className="text-center mb-12 lg:mb-16">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 bg-white rounded-3xl shadow-[0px_0px_0px_2px_white,0px_4px_12px_rgba(55,50,47,0.08)] flex items-center justify-center">
                    <Logo className="w-16 h-16 lg:w-20 lg:h-20" />
                  </div>
                </div>
                <h1 className="text-[#37322F] text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif mb-6">
                  Download Oravo
                </h1>
                <p className="text-[#605A57] text-xl md:text-2xl leading-relaxed font-sans">
                  Available for macOS, Windows, and Linux.
                </p>
              </div>

              {/* Version Section Skeleton */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[rgba(55,50,47,0.12)] p-6 md:p-8 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-8 w-16" />
                    <Skeleton className="h-6 w-16 rounded-full" />
                  </div>
                  <Skeleton className="h-5 w-32" />
                </div>

                {/* Download Sections Skeleton */}
                <div className="space-y-4">
                  {/* macOS Section Skeleton */}
                  <div className="border border-[rgba(55,50,47,0.12)] rounded-xl overflow-hidden">
                    <div className="w-full px-4 sm:px-6 py-4 bg-[#F7F5F3] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Skeleton className="w-5 h-5 rounded" />
                        <Skeleton className="h-6 w-20" />
                      </div>
                      <Skeleton className="w-5 h-5" />
                    </div>
                    <div className="bg-white p-4 sm:p-6">
                      <Skeleton className="h-4 w-48 mb-4" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <Skeleton className="h-28 rounded-xl" />
                        <Skeleton className="h-28 rounded-xl" />
                      </div>
                    </div>
                  </div>

                  {/* Windows Section Skeleton */}
                  <div className="border border-[rgba(55,50,47,0.12)] rounded-xl overflow-hidden">
                    <div className="w-full px-4 sm:px-6 py-4 bg-[#F7F5F3] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Skeleton className="w-5 h-5 rounded" />
                        <Skeleton className="h-6 w-24" />
                      </div>
                      <Skeleton className="w-5 h-5" />
                    </div>
                    <div className="bg-white px-4 sm:px-6 py-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <Skeleton className="h-5 w-32 mb-2" />
                          <Skeleton className="h-4 w-20" />
                        </div>
                        <Skeleton className="h-10 w-full sm:w-28 rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Previous Versions Link */}
              <div className="text-center">
                <Skeleton className="h-5 w-40 mx-auto" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
