import React from "react";
import type { ContentData } from "../types";
import { Button } from "./ui/Button";
import { RightArrowWhite } from "./icons/RightArrowWhite";
import { useResponsiveImage } from "../hooks/useResponsiveImage";

interface WhyChooseProps {
  whyChoose: ContentData["whyChoose"];
}

export const WhyChoose: React.FC<WhyChooseProps> = ({ whyChoose }) => {
  const imageTransform = useResponsiveImage({
    mobile: {
      transform: "scale(1.3)",
      objectPosition: "45% 25%",
    },
    tablet: {
      transform: "scale(1.5)",
      objectPosition: "45% 30%",
    },
    desktop: {
      transform: "scale(1.75)",
      objectPosition: "250% -60px",
    },
  });

  return (
    <section className="py-8 sm:py-10 lg:py-16 bg-gray-100 px-4 sm:px-6 lg:px-8 mt-4 lg:mt-12">
      <h2 className="text-3xl lg:text-5xl font-normal text-black mb-8 lg:mb-12 text-center lg:text-left">
        {whyChoose.title}
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2 relative overflow-hidden h-[300px] sm:h-[350px] md:h-[400px]">
          <img
            src={whyChoose.content.image}
            alt="Skincare consultation"
            className="w-full h-full object-cover"
            style={imageTransform}
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 space-y-6">
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
            to={whyChoose.content.ctaLink}
          >
            {whyChoose.content.ctaText}
            <RightArrowWhite width={30} height={30} color="#374151" />
          </Button>
        </div>
      </div>
    </section>
  );
};
