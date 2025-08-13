import React from "react";
import type { Testimonial } from "../types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
}) => {
  return (
    <div className="bg-white rounded-2xl p-2 pb-4 shadow-sm border border-gray-100 w-full">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Avatar */}
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover flex-shrink-0"
        />

        {/* Title */}
        <h3 className="text-lg lg:text-xl font-normal text-black">
          {testimonial.title}
        </h3>

        {/* Content */}
        <p className="text-sm lg:text-base font-light text-black leading-relaxed">
          {testimonial.content} –{" "}
          <span className="font-medium">
            {testimonial.name}, {testimonial.designation}
          </span>
        </p>
      </div>
    </div>
  );
};
