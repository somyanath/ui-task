import React from 'react';
import type { ContentData } from '../types';
import { Button } from './ui/Button';
import { RightArrowWhite } from './icons/RightArrowWhite';

interface BlogSectionProps {
  blog: ContentData['blog'];
}

export const BlogSection: React.FC<BlogSectionProps> = ({ blog }) => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Content */}
          <div className="flex-1 space-y-6">
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
              className="rounded-full px-8 py-4 text-lg font-light flex items-center gap-3 border-gray-300 hover:border-gray-400"
              onClick={() => window.location.href = blog.featured.ctaLink}
            >
              {blog.featured.ctaText}
              <RightArrowWhite width={20} height={20} color="#374151" />
            </Button>
          </div>
          
          {/* Image */}
          <div className="flex-1">
            <img
              src={blog.featured.image}
              alt="Radiant skin guide"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};