import React from "react";
import type { ContentData } from "../types";
import { Button } from "./ui/Button";
import { RightArrowWhite } from "./icons/RightArrowWhite";

interface WhyChooseProps {
  whyChoose: ContentData["whyChoose"];
}

export const WhyChoose: React.FC<WhyChooseProps> = ({ whyChoose }) => {
  return (
    <section className="py-4 sm:py-10 lg:py-12 bg-gray-100 px-4 sm:px-6 lg:px-12 mt-4 lg:mt-16">
      <h2 className="text-3xl lg:text-5xl font-normal text-black mb-8 lg:mb-12 text-center lg:text-left">
        {whyChoose.title}
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Image */}
        <div className="flex-1 relative overflow-hidden min-h-[400px]">
          <img
            src={whyChoose.content.image}
            alt="Skincare consultation"
            className="w-full h-full object-cover scale-[1.75] absolute"
            style={{ objectPosition: "250% -60px" }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl lg:text-3xl font-normal text-black">
            {whyChoose.content.heading}
          </h3>
          <p className="text-base lg:text-lg font-light text-black">
            {whyChoose.content.description}
          </p>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-lg font-light flex items-center gap-3 bg-white hover:border-gray-400"
            onClick={() => (window.location.href = whyChoose.content.ctaLink)}
          >
            {whyChoose.content.ctaText}
            <RightArrowWhite width={30} height={30} color="#374151" />
          </Button>
        </div>
      </div>
    </section>
  );
};
