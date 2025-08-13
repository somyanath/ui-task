import React, { useState } from 'react';
import type { ContentData } from '../types';
import XtragleamIcon from './icons/XtragleamIcon';
import { Button } from './ui/Button';

interface FooterProps {
  footer: ContentData['footer'];
}

export const Footer: React.FC<FooterProps> = ({ footer }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <XtragleamIcon width={53} height={58} color="white" />
            <span className="text-2xl lg:text-4xl font-playfair font-normal tracking-tight">
              {footer.logo}
            </span>
          </div>

          {/* Links and Newsletter */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg lg:text-xl font-bold">
                {footer.quickLinks.title}
              </h3>
              <div className="space-y-3">
                {footer.quickLinks.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-base lg:text-lg font-medium text-white/75 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div className="space-y-6">
              <h3 className="text-lg lg:text-xl font-bold">
                {footer.company.title}
              </h3>
              <div className="space-y-3">
                {footer.company.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-base lg:text-lg font-medium text-white/75 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h3 className="text-base lg:text-lg font-normal max-w-xs">
                {footer.newsletter.title}
              </h3>
              <form onSubmit={handleSubmit} className="flex">
                <div className="bg-gray-200 rounded-md flex overflow-hidden p-0.5">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={footer.newsletter.placeholder}
                    className="px-4 py-3 bg-transparent text-gray-600 placeholder-gray-500 focus:outline-none flex-1"
                    required
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    className="px-6 py-3 bg-black text-white hover:bg-gray-800 font-medium rounded-md"
                  >
                    {footer.newsletter.buttonText}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-sm lg:text-base font-normal text-center text-white/75">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};