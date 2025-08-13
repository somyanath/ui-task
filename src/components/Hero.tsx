import React from "react";
import type { ContentData } from "../types";
import { Button } from "./ui/Button";
import { RightArrowWhite } from "./icons/RightArrowWhite";
import heroProductImage from "../assets/hero-product.png";

interface HeroProps {
  hero: ContentData["hero"];
}

export const Hero: React.FC<HeroProps> = ({ hero }) => {
  return (
    <section className="relative bg-pink-50 overflow-hidden">
      {/* Background Pattern
      <div className="absolute inset-0">
        <img
          src={hero.backgroundImage}
          alt="Hero background"
          className="w-full h-full object-cover opacity-30"
        />
      </div> */}

      <div className="relative">
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20 gap-8 lg:gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-black mb-6 leading-tight">
              <span className="block">Glow Beyond</span>
              <span className="block">Expectations</span>
            </h1>
            <p className="text-lg lg:text-xl font-light text-black mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {hero.subtitle}
            </p>
            <Button
              variant="primary"
              size="lg"
              className="rounded-full text-lg font-light flex items-center gap-3 mx-auto lg:mx-0"
              onClick={() => (window.location.href = hero.ctaLink)}
            >
              {hero.ctaText}
              <RightArrowWhite width={30} height={30} color="white" />
            </Button>
          </div>

          {/* Product Images - Hidden on mobile, shown on desktop */}
          <img
            src={heroProductImage}
            alt="Xtragleam Product Collection"
            className="w-auto h-auto max-h-[450px] absolute bottom-0 right-0"
          />
        </div>
      </div>
    </section>
  );
};
