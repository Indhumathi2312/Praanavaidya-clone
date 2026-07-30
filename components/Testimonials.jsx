"use client";

import { useState, useEffect } from 'react';
import { testimonialsData as defaultTestimonialsData } from '@/data/siteData';

export default function Testimonials({ data = defaultTestimonialsData }) {
  const { title, videos } = data;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll every 3 seconds (3000ms), matching praanavaidya.html script
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [videos.length, isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  // Compute 3 visible videos starting from currentIndex
  const visibleVideos = [
    videos[currentIndex % videos.length],
    videos[(currentIndex + 1) % videos.length],
    videos[(currentIndex + 2) % videos.length]
  ];

  return (
    <section 
      id="Testimonials" 
      className="bg-[#FFF7F1] text-[#192c27] py-14 sm:py-18 font-sans border-t border-black/5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Centered Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#192c27] text-center tracking-tight mb-10 sm:mb-12">
          {title}
        </h2>

        {/* Carousel Wrapper with Left & Right Overlay Buttons */}
        <div className="relative px-2 sm:px-8 lg:px-12">
          
          {/* Left Arrow Button (Dark Charcoal Circle) */}
          <button 
            onClick={handlePrev}
            className="absolute -left-2 sm:-left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#555555] hover:bg-[#333333] text-white shadow-md flex items-center justify-center active:scale-95 transition-all duration-200"
            aria-label="Previous video testimonial"
          >
            <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button (Dark Charcoal Circle) */}
          <button 
            onClick={handleNext}
            className="absolute -right-2 sm:-right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#555555] hover:bg-[#333333] text-white shadow-md flex items-center justify-center active:scale-95 transition-all duration-200"
            aria-label="Next video testimonial"
          >
            <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Video Cards Grid: 1 on mobile, 2 on tablet (md), 3 on desktop (lg) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 transition-all duration-500 ease-in-out">
            {visibleVideos.map((item, idx) => (
              <div 
                key={`${item.id}-${idx}`}
                className={`relative rounded-[16px] overflow-hidden bg-black shadow-lg border border-black/10 aspect-[3/4] h-[380px] sm:h-[420px] lg:h-[460px] ${
                  idx === 1 ? 'hidden md:block' : ''
                } ${
                  idx === 2 ? 'hidden lg:block' : ''
                }`}
              >
                <video 
                  src={item.src} 
                  controls 
                  preload="metadata"
                  className="w-full h-full object-cover rounded-[16px]"
                />
              </div>
            ))}
          </div>

          {/* Bottom Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {videos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx 
                    ? 'w-6 bg-[#192c27]' 
                    : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to video slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
