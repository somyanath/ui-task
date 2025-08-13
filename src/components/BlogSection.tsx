import React from "react";
import type { ContentData } from "../types";
import { Button } from "./ui/Button";
import { RightArrowWhite } from "./icons/RightArrowWhite";

interface BlogSectionProps {
  blog: ContentData["blog"];
}

export const BlogSection: React.FC<BlogSectionProps> = ({ blog }) => {
  return (
    <section className="bg-gray-100 max-h-[700px]">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Content */}
        <div className="flex-1 space-y-4 p-8 lg:p-12 overflow-y-auto max-h-[700px]">
          <h2 className="text-3xl lg:text-5xl font-normal text-black">
            {blog.title}
          </h2>

          <div className="space-y-4">
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
            className="rounded-full text-lg font-light flex items-center gap-3 bg-white border-gray-300 hover:border-gray-400 mt-4"
            onClick={() => (window.location.href = blog.featured.ctaLink)}
          >
            {blog.featured.ctaText}
            <RightArrowWhite width={30} height={30} color="#374151" />
          </Button>
        </div>

        {/* Image */}
        <div className="flex-1 h-[700px] overflow-hidden">
          <img
            src={blog.featured.image}
            alt="Radiant skin guide"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};
