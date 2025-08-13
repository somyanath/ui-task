import React from "react";
import type { ContentData } from "../types";
import { Button } from "./ui/Button";
import { RightArrowWhite } from "./icons/RightArrowWhite";

interface BlogSectionProps {
  blog: ContentData["blog"];
}

export const BlogSection: React.FC<BlogSectionProps> = ({ blog }) => {
  return (
    <section className="bg-gray-100">
      <div className="flex flex-col md:flex-row md:h-[600px] max-w-7xl mx-auto">
        {/* Content */}
        <div className="w-full md:w-1/2 space-y-4 p-6 sm:p-8 lg:p-12 flex flex-col">
          <h2 className="text-3xl lg:text-5xl font-normal text-black">
            {blog.title}
          </h2>

          <div className="space-y-4 flex-grow">
            <h3 className="text-xl lg:text-2xl font-normal text-black">
              {blog.featured.title}
            </h3>
            <p className="text-base lg:text-lg font-light text-black leading-relaxed">
              {blog.featured.excerpt}
            </p>
          </div>

          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-lg font-light flex items-center gap-3 bg-white border-gray-300 hover:border-gray-400 mt-4 self-start"
            to={blog.featured.ctaLink}
          >
            {blog.featured.ctaText}
            <RightArrowWhite width={30} height={30} color="#374151" />
          </Button>
        </div>

        {/* Image Container */}
        <div className="w-full md:w-1/2 md:h-full px-4 md:px-0">
          {/* Image with full height on desktop */}
          <img
            src={blog.featured.image}
            alt="Radiant skin guide"
            className="w-full h-auto md:h-full object-contain md:object-cover"
          />
        </div>
      </div>
    </section>
  );
};