import React from 'react';
import type { ContentData } from '../types';
import { Button } from '../ui/Button';
import { RightArrowWhite } from '../icons/RightArrowWhite';

interface WhyChooseProps {
  whyChoose: ContentData['whyChoose'];
}

export const WhyChoose: React.FC<WhyChooseProps> = ({ whyChoose }) => {
  return (
    <section className="py-12 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-5xl font-normal text-black mb-8 lg:mb-12 text-center lg:text-left">
          {whyChoose.title}
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image */}
          <div className="flex-1">
            <img
              src={whyChoose.content.image}
              alt="Skincare consultation"
              className="w-full h-64 lg:h-96 object-cover rounded-2xl"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl lg:text-3xl font-normal text-black">
              {whyChoose.content.heading}
            </h3>
            <p className="text-base lg:text-lg font-light text-black leading-relaxed">
              {whyChoose.content.description}
            </p>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-lg font-light flex items-center gap-3 border-gray-300 hover:border-gray-400"
              onClick={() => window.location.href = whyChoose.content.ctaLink}
            >
              {whyChoose.content.ctaText}
              <RightArrowWhite width={30} height={30} color="#374151" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};