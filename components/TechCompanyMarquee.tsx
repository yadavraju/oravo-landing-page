"use client";

import { siMeta, siSalesforce } from "simple-icons";

type Company = {
  name: string;
  icon?: any; // Simple Icons object
  imageSrc?: string; // Image path
};

const techCompanies = {
  row1: [
    { name: "Disney", imageSrc: "/disney.png" },
    { name: "MIU", imageSrc: "/mum.svg" },
    { name: "CareDx", imageSrc: "/caredx.png" },
    { name: "OSU", imageSrc: "/osu.svg" },
    { name: "uco", imageSrc: "/uco.png" },
  ],
  row2: [
    { name: "Salesforce", icon: siSalesforce },
    { name: "globant", imageSrc: "/globant.svg" },
    { name: "ntt", imageSrc: "/ntt.jpg" },
    { name: "uco", imageSrc: "/pits.jpg" },
    { name: "Meta", icon: siMeta },
  ],
};

function CompanyLogo({ icon, imageSrc, name }: Company) {
  // If it's an image source, render as img
  if (imageSrc) {
    return (
      <div className="flex items-center px-8 flex-shrink-0 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100">
        <img src={imageSrc} alt={name} className="h-8 w-auto object-contain" />
      </div>
    );
  }

  // Otherwise render as SVG from Simple Icons
  return (
    <div className="flex items-center px-8 flex-shrink-0 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100">
      <div
        className="w-8 h-8 flex items-center justify-center"
        dangerouslySetInnerHTML={{ __html: icon.svg }}
        style={{ fill: `#${icon.hex}` }}
      />
    </div>
  );
}

// One looping row, built like video-shala's: the row is sized to its content
// (`w-max`) and holds the list twice, so translating by -50% lands exactly on
// the seam and the loop is invisible. Each half repeats the logos enough times
// to stay wider than the viewport, so the row never shows an empty gap.
function MarqueeRow({ items, reverse = false }: { items: Company[]; reverse?: boolean }) {
  const half = [...items, ...items, ...items];
  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className="flex w-max items-center"
        style={{
          animation: "o-marquee 60s linear infinite",
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[...half, ...half].map((company, i) => (
          <CompanyLogo key={`${company.name}-${i}`} {...company} />
        ))}
      </div>
    </div>
  );
}

export default function TechCompanyMarquee() {
  return (
    <div className="w-full" aria-hidden="true">
      <div className="flex flex-col gap-6">
        <MarqueeRow items={techCompanies.row1} />
        <MarqueeRow items={techCompanies.row2} reverse />
      </div>
    </div>
  );
}
