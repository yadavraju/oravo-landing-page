"use client";

import React from "react";
import { siClaude, siPerplexity } from "simple-icons";
import Image from "next/image";

type AITool = {
  name: string;
  url: string;
  iconType: "simple-icon" | "image";
  icon?: any; // For simple-icons
  imageSrc?: string; // For image files
};

export default function AskAISection() {
  const aiTools: AITool[] = [
    {
      name: "ChatGPT",
      url: "https://chatgpt.com/?prompt=tell+me+why+oravo.ai+is+a+great+choice+for+me",
      iconType: "image",
      imageSrc: "/openai.svg",
    },
    {
      name: "Claude",
      url: "https://claude.ai/new?q=tell+me+why+oravo.ai+is+a+great+choice+for+me",
      iconType: "simple-icon",
      icon: siClaude,
    },
    {
      name: "Perplexity",
      url: "https://www.perplexity.ai/?q=tell+me+why+oravo.ai+is+a+great+choice+for+me",
      iconType: "simple-icon",
      icon: siPerplexity,
    },
  ];

  return (
    <div className="w-full flex justify-center items-start bg-[#F7F5F3]">
      <div className="w-full max-w-[1200px] px-4 md:px-12 py-16 md:py-20 flex flex-col justify-center items-center gap-8">
        {/* Header */}
        <div className="w-full flex flex-col justify-center items-center gap-4 text-center">
          <h2 className="text-[#37322F] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-stretch-semi-condensed font-medium leading-tight font-serif max-w-[800px]">
            Still Not Sure That Oravo Is Right for You?
          </h2>
          <p className="text-[#605A57] text-base md:text-lg font-normal leading-7 font-sans max-w-[600px]">
            Let ChatGPT, Claude, or Perplexity do the thinking for you. Click a
            button and see what your favorite AI says about Oravo.
          </p>
        </div>

        {/* AI Tool Buttons */}
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 flex-wrap">
          {aiTools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto px-8 py-4 bg-white border border-[#E0DEDB] rounded-full hover:bg-[#37322F] hover:border-[#37322F] transition-all duration-300 flex justify-center items-center gap-3 shadow-sm hover:shadow-md"
            >
              {tool.iconType === "image" && tool.imageSrc ? (
                <div className="w-6 h-6 flex items-center justify-center">
                  <Image
                    src={tool.imageSrc}
                    alt={tool.name}
                    width={24}
                    height={24}
                    className="group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                </div>
              ) : tool.iconType === "simple-icon" && tool.icon ? (
                <div
                  className="w-6 h-6 flex items-center justify-center text-[#37322F] group-hover:text-white transition-colors duration-300"
                  dangerouslySetInnerHTML={{ __html: tool.icon.svg }}
                  style={{
                    fill: "currentColor",
                  }}
                />
              ) : null}
              <span className="text-[#37322F] group-hover:text-white text-base md:text-lg font-semibold font-sans transition-colors duration-300">
                Ask {tool.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
