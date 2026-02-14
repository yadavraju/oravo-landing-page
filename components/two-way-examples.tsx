"use client";

export default function TwoWayExamples() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Examples */}
      <div className="w-full max-w-[1060px] px-4 sm:px-6 md:px-8 pb-12 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Example 1 - Email */}
          <div className="p-6 bg-white border border-[#E0DEDB] rounded-xl flex flex-col gap-4">
            <div className="px-3 py-1 bg-[#F7F5F3] rounded-full w-fit">
              <span className="text-[#605A57] text-xs font-semibold font-sans uppercase tracking-wide">
                Email
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <span className="text-[#847971] text-xs font-medium font-sans">
                  You speak (Spanish):
                </span>
                <p className="text-[#37322F] text-sm font-normal leading-relaxed font-sans italic">
                  &ldquo;Dile a María que terminé el diseño y lo envío en una
                  hora.&rdquo;
                </p>
              </div>
              <div className="w-full h-px bg-[#E0DEDB]" />
              <div className="flex flex-col gap-1.5">
                <span className="text-[#847971] text-xs font-medium font-sans">
                  Oravo types (English, email-ready):
                </span>
                <p className="text-[#37322F] text-sm font-semibold leading-relaxed font-sans">
                  &ldquo;Hi María — I&apos;ve finished the design. I&apos;ll
                  send it over within the next hour.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Example 2 - Chat */}
          <div className="p-6 bg-white border border-[#E0DEDB] rounded-xl flex flex-col gap-4">
            <div className="px-3 py-1 bg-[#F7F5F3] rounded-full w-fit">
              <span className="text-[#605A57] text-xs font-semibold font-sans uppercase tracking-wide">
                Chat
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <span className="text-[#847971] text-xs font-medium font-sans">
                  You speak (English):
                </span>
                <p className="text-[#37322F] text-sm font-normal leading-relaxed font-sans italic">
                  &ldquo;Tell them I&apos;m running 10 minutes late.&rdquo;
                </p>
              </div>
              <div className="w-full h-px bg-[#E0DEDB]" />
              <div className="flex flex-col gap-1.5">
                <span className="text-[#847971] text-xs font-medium font-sans">
                  Oravo types (Spanish, chat tone):
                </span>
                <p className="text-[#37322F] text-sm font-semibold leading-relaxed font-sans">
                  &ldquo;Voy 10 minutos tarde.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
