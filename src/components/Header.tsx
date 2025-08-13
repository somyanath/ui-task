import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import type { ContentData } from "../types";
import { HeartIcon } from "./icons/HeartIcon";
import { ProfileIcon } from "./icons/ProfileIcon";
import { XtragleamIcon } from "./icons/XtragleamIcon";
import { SearchIcon } from "./icons/SearchIcon";
import { CartIcon } from "./icons/CartIcon";

interface HeaderProps {
  navigation: ContentData["navigation"];
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({ navigation, cartCount }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full bg-white border-b border-gray-100">
      {/* Main Navigation */}
      <div className="flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <XtragleamIcon width={53} height={58} color="#121212" />
          <span className="text-2xl lg:text-4xl font-playfair font-normal text-black tracking-tight">
            {navigation.logo}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigation.primaryNav.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-lg font-light tracking-wide transition-colors ${
                location.pathname === item.href
                  ? "text-gray-700 underline"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-5">
          <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <CartIcon width={40} height={40} color="#121212" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <HeartIcon width={40} height={40} color="#121212" />
          <ProfileIcon width={40} height={40} color="#121212" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-gray-50 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen
                  ? "rotate-45 translate-y-1"
                  : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen
                  ? "-rotate-45 -translate-y-1"
                  : "translate-y-0.5"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Secondary Navigation - Desktop */}
      <div className="hidden lg:flex items-center justify-between py-4">
        <div className="flex items-center gap-6 font-light">
          {navigation.secondaryNav.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-lg font-light transition-colors py-2 px-2 bg-gray-100 rounded-sm ${
                location.pathname === item.href
                  ? "text-black font-medium"
                  : "text-black hover:text-gray-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
          <SearchIcon width={43} height={43} color="#121212" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-4">
            {navigation.primaryNav.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`block text-lg font-light ${
                  location.pathname === item.href
                    ? "text-gray-700"
                    : "text-gray-500"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-gray-100 pt-4 mt-4">
              {navigation.secondaryNav.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`block text-base font-light py-2 ${
                    location.pathname === item.href
                      ? "text-gray-700"
                      : "text-black"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
              <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <CartIcon width={32} height={32} color="#121212" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <SearchIcon width={32} height={32} color="#121212" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
