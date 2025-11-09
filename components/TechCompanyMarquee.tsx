"use client";

import { motion } from "framer-motion";
import {
  siMeta,
  siGoogle,
  siX,
  siApple,
  siTesla,
  siNetflix,
  siSpotify,
  siUber,
  siSalesforce,
  siSlack,
  siZoom,
  siFigma,
  siNotion,
  siStripe,
  siShopify,
  siAirbnb,
  siDropbox,
  siReddit,
  siGithub,
  siDiscord,
  siTwitch,
  siDuolingo,
  siCoursera,
  siYale,
} from "simple-icons";

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
    { name: "uco", imageSrc: "/pits.jpg" },
    { name: "Meta", icon: siMeta },
  ],
  row2: [
    { name: "Salesforce", icon: siSalesforce },
    { name: "Slack", icon: siSlack },
    { name: "Zoom", icon: siZoom },
    { name: "Figma", icon: siFigma },
    { name: "Notion", icon: siNotion },
    { name: "Apple", icon: siApple },
    { name: "Tesla", icon: siTesla },
    { name: "Uber", icon: siUber },
    { name: "globant", imageSrc: "/globant.svg" },
    { name: "ntt", imageSrc: "/ntt.jpg" },
  ],
};

function CompanyLogo({ icon, imageSrc, name }: Company) {
  // If it's an image source, render as img
  if (imageSrc) {
    return (
      <div className="flex items-center px-8 flex-shrink-0">
        <img src={imageSrc} alt={name} className="h-8 w-auto object-contain" />
      </div>
    );
  }

  // Otherwise render as SVG from Simple Icons
  return (
    <div className="flex items-center px-8 flex-shrink-0">
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
    <div className="self-stretch border-[rgba(55,50,47,0.12)] flex justify-center items-start border-t border-b-0">
      <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
        {/* Left decorative pattern */}
        <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
            />
          ))}
        </div>
      </div>

      <div className="flex-1 border-l border-r border-[rgba(55,50,47,0.12)] overflow-hidden py-8">
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
        <div className="relative overflow-hidden border-t border-[rgba(55,50,47,0.12)] pt-8">
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

      <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
        {/* Right decorative pattern */}
        <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
