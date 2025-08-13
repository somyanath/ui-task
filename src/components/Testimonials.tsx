import React from "react";
import type { ContentData } from "../types";
import { TestimonialCard } from "./TestimonialCard";
import { MasonryLayout } from "./MasonryLayout";

interface TestimonialsProps {
  testimonials: ContentData["testimonials"];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const testimonialCards = testimonials.reviews.map((testimonial) => (
    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
  ));

  return (
    <section className="py-8 lg:pt-12 bg-gray-100 px-4">
      <h2 className="text-3xl lg:text-5xl font-normal text-black mb-8 lg:mb-12 text-center lg:text-left">
        {testimonials.title}
      </h2>

      <MasonryLayout columns={{ mobile: 1, tablet: 2, desktop: 3 }} gap={4}>
        {testimonialCards}
      </MasonryLayout>
    </section>
  );
};
