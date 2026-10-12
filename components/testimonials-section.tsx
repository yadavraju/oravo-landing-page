"use client";

import { Doodle } from "./landing/Doodle";
import { Parallax } from "./landing/Parallax";
import { Reveal, RevealWords } from "./landing/Reveal";

import { useState, useEffect } from "react";
import type React from "react";

// Badge component for consistency
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">
        {icon}
      </div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      quote:
        "I write 40+ emails a day. Oravo cut that time in half. The accuracy is shockingly good — I rarely need to fix anything.",
      name: "Abhinash Y",
      company: "Software Engineer at OSU",
      image: "/osu.svg",
    },
    {
      quote:
        "In genomics research, we're constantly documenting assay protocols, analyzing transplant rejection data, and updating case notes. Oravo has become essential for my workflow—I can dictate observations during experiments and capture technical findings without breaking focus. It handles specialized terminology like dd-cfDNA and HLA nomenclature surprisingly well. Saves me hours every week on documentation.",
      name: "Archana Y.",
      company: "Research Scientist at CareDx",
      image: "/caredx.png",
    },
    {
      quote:
        "I spend most of my day documenting customer feedback and product notes. Oravo's dictation speed and clarity blew me away. It's smoother than any speech tool I've tried and feels built for people who live in Slack and email all day. Worth every cent.",
      name: "Rabin N.",
      company: "Customer Success Manager at NTT Data",
      image: "/ntt.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 100);
      }, 300);
    }, 12000); // increased from 6000ms to 12000ms for longer testimonial display

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleNavigationClick = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTestimonial(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 300);
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <div className="mx-auto mb-10 flex max-w-[760px] flex-col items-center text-center">
        <Parallax speed={18} className="mb-4">
          <Doodle name="quote" className="w-28 sm:w-32" />
        </Parallax>
        <Reveal><p className="eyebrow">In their words</p></Reveal>
        <h2 className="display-2 mt-3 text-ink">
          <RevealWords text="What people say after a week." />
        </h2>
      </div>
      {/* TODO: Replace with 2-3 real professional testimonials from knowledge-worker users.
          Target quotes from founders, engineers, or sales professionals — not students.
          Each should include: name, role, company, and optional LinkedIn link. */}

      {/* Testimonial Content */}
      <div className="surface-solid !rounded-2xl px-2 overflow-hidden flex justify-start items-center">
        <div className="flex-1 py-10 md:py-12 flex flex-col md:flex-row justify-center items-end gap-6">
          <div className="self-stretch px-3 md:px-12 justify-center items-start gap-4 flex flex-col md:flex-row">
            <img
              className="w-48 h-50 md:w-48 md:h-50 rounded-lg object-contain transition-all duration-700 ease-in-out"
              style={{
                opacity: isTransitioning ? 0.6 : 1,
                transform: isTransitioning ? "scale(0.95)" : "scale(1)",
                transition:
                  "opacity 0.7s ease-in-out, transform 0.7s ease-in-out",
              }}
              src={testimonials[activeTestimonial].image || "/placeholder.svg"}
              alt={testimonials[activeTestimonial].name}
            />
            <div className="flex-1 px-6 py-6 shadow-[0px_0px_0px_0.75px_rgba(50,45,43,0.12)] overflow-hidden flex flex-col justify-start items-start gap-6 shadow-none pb-0 pt-0">
              <div
                // CHANGED: Reduced font size to text-base (mobile) and md:text-lg.
                // CHANGED: Reduced line height to leading-6 and md:leading-7 to match the smaller font.
                className="self-stretch justify-start flex flex-col text-ink font-serif text-xl md:text-2xl leading-snug overflow-hidden transition-all duration-700 ease-in-out tracking-tight"
                style={{
                  filter: isTransitioning ? "blur(4px)" : "blur(0px)",
                  transition: "filter 0.7s ease-in-out",
                }}
              >
                {testimonials[activeTestimonial].quote}
              </div>
              <div
                className="self-stretch flex flex-col justify-start items-start gap-1 transition-all duration-700 ease-in-out"
                style={{
                  filter: isTransitioning ? "blur(4px)" : "blur(0px)",
                  transition: "filter 0.7s ease-in-out",
                }}
              >
                <div className="self-stretch justify-center flex flex-col text-ink font-display text-[15px] font-semibold leading-6">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="self-stretch justify-center flex flex-col text-ink-soft font-display text-[14px] leading-6">
                  {testimonials[activeTestimonial].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="pr-6 justify-start items-start gap-[14px] flex">
            <button
              onClick={() =>
                handleNavigationClick(
                  (activeTestimonial - 1 + testimonials.length) %
                    testimonials.length,
                )
              }
              aria-label="Show testimonial" className="w-9 h-9 overflow-hidden rounded-lg border-2 border-white bg-gradient-to-b from-white to-white/25 shadow-[0_2px_4px_rgba(51,48,42,0.08)] ring-1 ring-line justify-center items-center gap-2 flex transition-all hover:to-white/60"
            >
              <div className="w-6 h-6 relative overflow-hidden">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="#46413E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
            <button
              onClick={() =>
                handleNavigationClick(
                  (activeTestimonial + 1) % testimonials.length,
                )
              }
              aria-label="Show testimonial" className="w-9 h-9 overflow-hidden rounded-lg border-2 border-white bg-gradient-to-b from-white to-white/25 shadow-[0_2px_4px_rgba(51,48,42,0.08)] ring-1 ring-line justify-center items-center gap-2 flex transition-all hover:to-white/60"
            >
              <div className="w-6 h-6 relative overflow-hidden">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="#46413E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
