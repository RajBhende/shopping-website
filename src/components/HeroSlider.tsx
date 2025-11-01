"use client";

import { useState, useEffect } from "react";
import TopNav from "./TopNav";
import Navbar from "./Navbar";

interface Slide {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  buttonText: string;
}

interface HeroSliderProps {
  slides: Slide[];
  autoSlideInterval?: number;
}

export default function HeroSlider({ slides, autoSlideInterval = 5000 }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    if (autoSlideInterval > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, autoSlideInterval);
      return () => clearInterval(interval);
    }
  }, [slides.length, autoSlideInterval]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="hero-slider relative w-full bg-[#FFFEF7] overflow-hidden pt-19">
      <TopNav />
      <Navbar />
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slider-item h-full w-full relative flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
              index === currentSlide ? "flex" : "hidden"
            }`}
          >
            {/* Left side - Text content */}
            <div className="flex-1 flex flex-col justify-center pl-0 md:pl-20 lg:pl-32 xl:pl-40 space-y-6 md:space-y-8">
              {/* Badge */}
              <div className="text-[11px] md:text-sm font-semibold uppercase tracking-[2px] text-gray-800">
                {slide.badge}
              </div>

              {/* Main Heading */}
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {slide.title}
                </h1>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {slide.subtitle}
                </h2>
              </div>

              {/* CTA Button */}
              <button className="button-main bg-gray-900 text-white px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wide hover:bg-gray-800 transition-colors duration-200 md:mt-8 mt-3 w-fit">
                {slide.buttonText}
              </button>
            </div>

            {/* Right side - Image */}
            <div className="flex-1 w-full md:w-auto flex items-center justify-center">
              <div className="relative aspect-square md:aspect-[4/5] w-full max-w-md">
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Clickable areas for slider navigation */}
        {slides.length > 1 && (
          <>
            <div 
              onClick={goToPrevious}
              className="absolute left-0 top-0 bottom-[80px] w-1/3 cursor-pointer z-10"
              aria-label="Previous slide"
            ></div>
            <div 
              onClick={goToNext}
              className="absolute right-0 top-0 bottom-[80px] w-1/3 cursor-pointer z-10"
              aria-label="Next slide"
            ></div>
          </>
        )}

        {/* Slider Indicators */}
        {slides.length > 1 && (
          <div className="flex justify-center items-center gap-3 mt-6 md:mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group relative w-4 h-4 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label={`Go to slide ${index + 1}`}
              >
                {/* Outer circle */}
                <div className={`absolute inset-0 rounded-full border-2 transition-all duration-300 ${
                  index === currentSlide
                    ? "border-black scale-100"
                    : "border-gray-400 group-hover:border-gray-600 scale-90"
                }`}></div>
                {/* Inner dot */}
                <div className={`absolute w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-black scale-100"
                    : "bg-transparent scale-0 group-hover:bg-gray-400 group-hover:scale-75"
                }`}></div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

