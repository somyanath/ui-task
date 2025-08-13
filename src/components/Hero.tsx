import React from "react";
import type { ContentData } from "../types";
import { Button } from "./ui/Button";
import { RightArrowWhite } from "./icons/RightArrowWhite";
import heroProductImage from "../assets/hero-product.png";
import { SendIcon } from "./icons/SendIcon";
import { XtragleamIcon } from "./icons/XtragleamIcon";

interface HeroProps {
  hero: ContentData["hero"];
}

export const Hero: React.FC<HeroProps> = ({ hero }) => {
  return (
    <section className="relative bg-pink-50 overflow-hidden rounded-2xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 flex items-end justify-center opacity-10 overflow-hidden">
        <div className="transform scale-[3.5] pl-10 mb-[-20px] flex flex-row items-center">
          <XtragleamIcon width={120} height={130} color="#666666" />
          <span className="text-7xl font-normal text-gray-600 tracking-tight -ml-2">
            tragleam
          </span>
        </div>
      </div>

      <div className="relative">
        <div className="flex flex-col sm:flex-row lg:flex-row items-center justify-between py-12 lg:py-20 px-4 lg:px-12 gap-8 lg:gap-12">
          {/* Content */}
          <div className="flex-1 text-center sm:text-left lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-black mb-6">
              <span className="lg:flex items-center block gap-2">Glow Beyond <span className="hidden lg:block"><SendIcon width={48} height={48} color="black" /></span></span>
              <span className="lg:pl-60">Expectations</span>
            </h1>
            <p className="text-lg lg:text-xl font-light text-black mb-8 max-w-lg mx-auto sm:mx-0 lg:mx-0 leading-relaxed">
              {hero.subtitle}
            </p>
            <Button
              variant="primary"
              size="lg"
              className="rounded-full text-lg font-light flex items-center gap-3 mx-auto lg:mx-0"
              to={hero.ctaLink}
            >
              {hero.ctaText}
              <RightArrowWhite width={30} height={30} color="white" />
            </Button>
          </div>

          {/* Product Images - Hidden on mobile, shown on desktop */}
          <img
            src={heroProductImage}
            alt="Xtragleam Product Collection"
            className="w-auto h-auto max-h-[450px] absolute bottom-0 right-0 lg:block sm:block hidden"
          />
        </div>
      </div>
    </section>
  );
};
