"use client";

import { motion } from "framer-motion";
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

export default function TechCompanyMarquee() {
  return (
    <div className="self-stretch flex justify-center items-start">

      <div className="flex-1 overflow-hidden py-4">
        {/* Row 1 - Moving left to right */}
        <div className="relative overflow-hidden mb-8">
          <motion.div
            className="flex"
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* First set */}
            {techCompanies.row1.map((company, index) => (
              <CompanyLogo key={`row1-first-${index}`} {...company} />
            ))}
            {/* Duplicate for seamless loop */}
            {techCompanies.row1.map((company, index) => (
              <CompanyLogo key={`row1-second-${index}`} {...company} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Moving right to left */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* First set */}
            {techCompanies.row2.map((company, index) => (
              <CompanyLogo key={`row2-first-${index}`} {...company} />
            ))}
            {/* Duplicate for seamless loop */}
            {techCompanies.row2.map((company, index) => (
              <CompanyLogo key={`row2-second-${index}`} {...company} />
            ))}
          </motion.div>
        </div>
      </div>

    </div>
  );
}
