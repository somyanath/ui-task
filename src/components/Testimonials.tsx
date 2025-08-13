import React from 'react';
import type { ContentData } from '../types';
import { TestimonialCard } from './TestimonialCard';

interface TestimonialsProps {
  testimonials: ContentData['testimonials'];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="py-12 lg:py-20 pt-12 lg:pt-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-5xl font-normal text-black mb-8 lg:mb-12 text-center lg:text-left">
          {testimonials.title}
        </h2>
        
        {/* Using flexbox with equal width and dynamic height */}
        <div className="flex flex-wrap gap-2">
          {testimonials.reviews.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              style={{ order: index }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};