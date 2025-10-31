"use client";

import { useState, useEffect } from "react";
import { Search, User, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const navLinks = ["Home", "Catalog", "Contact", "About Us"];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`header-menu style-one absolute top-0 left-0 right-0 w-full md:h-[74px] h-[56px] transition-all duration-300 z-50 ${
      isScrolled 
        ? "bg-white shadow-md" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-8 md:px-12 h-full flex items-center justify-between">
        {/* Left side - Logo */}
        <div className="flex items-center flex-shrink-0">
          <a href="/" className={`text-xl md:text-2xl font-bold transition-all duration-300 hover:scale-105 ${
            isScrolled ? "text-gray-900" : "text-gray-900"
          }`} style={{ 
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontStyle: 'italic',
            letterSpacing: '0.1em'
          }}>
            BS
          </a>
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex items-center justify-center gap-10 md:gap-12 flex-1 px-8">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href="#"
              className={`text-xs md:text-sm font-semibold uppercase tracking-widest transition-all duration-200 relative ${
                isScrolled ? "text-gray-800 hover:text-gray-600" : "text-gray-900 hover:text-gray-700"
              } ${
                index === 0 ? "border-b-2 border-gray-900" : ""
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right side - Icons */}
        <div className="flex items-center gap-5 md:gap-6 flex-shrink-0">
          {/* Search Icon */}
          <a
            href="#"
            className={`transition-all duration-200 ${
              isScrolled ? "text-gray-800 hover:text-gray-600" : "text-gray-900 hover:text-gray-700"
            }`}
            aria-label="Search"
          >
            <Search className="w-4 h-4 md:w-5 md:h-5 stroke-2" />
          </a>

          {/* User Icon */}
          <a
            href="#"
            className={`transition-all duration-200 ${
              isScrolled ? "text-gray-800 hover:text-gray-600" : "text-gray-900 hover:text-gray-700"
            }`}
            aria-label="User Account"
          >
            <User className="w-4 h-4 md:w-5 md:h-5 stroke-2" />
          </a>

          {/* Shopping Bag Icon */}
          <a
            href="#"
            className={`transition-all duration-200 relative ${
              isScrolled ? "text-gray-800 hover:text-gray-600" : "text-gray-900 hover:text-gray-700"
            }`}
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 stroke-2" />
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold">
              0
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}

