"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { doctorsData as defaultDoctorsData } from '@/data/siteData';

export default function Doctors({ data = defaultDoctorsData }) {
  const { title, doctors } = data;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play carousel every 3 seconds (3000ms)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % doctors.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [doctors.length, isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + doctors.length) % doctors.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % doctors.length);
  };

  // Compute visible doctors based on responsive indexes
  const visibleDoctors = [
    doctors[currentIndex % doctors.length],
    doctors[(currentIndex + 1) % doctors.length],
    doctors[(currentIndex + 2) % doctors.length]
  ];

  return (
    <section 
      id="Doctors"
      className="bg-[#FFF7F1] text-[#192c27] py-12 sm:py-16 font-sans border-t border-black/5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#192c27] text-center tracking-tight mb-8 sm:mb-10">
          {title}
        </h2>

        {/* Carousel Outer Wrapper */}
        <div className="relative px-2 sm:px-8 lg:px-12">
          
          {/* Left Arrow Button */}
          <button 
            onClick={handlePrev}
            className="pd-a pd-prev absolute -left-2 sm:-left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-gray-800 border border-gray-200 shadow-md flex items-center justify-center hover:bg-[#0595C4] hover:text-white hover:border-[#0595C4] active:scale-95 transition-all duration-200"
            aria-label="Previous doctor"
          >
            <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button 
            onClick={handleNext}
            className="pd-a pd-next absolute -right-2 sm:-right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-gray-800 border border-gray-200 shadow-md flex items-center justify-center hover:bg-[#0595C4] hover:text-white hover:border-[#0595C4] active:scale-95 transition-all duration-200"
            aria-label="Next doctor"
          >
            <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Doctor Cards Grid: 1 on mobile, 2 on tablet (md), 3 on desktop (lg) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 transition-all duration-500 ease-in-out">
            {visibleDoctors.map((doc, idx) => (
              <div 
                key={`${doc.id}-${idx}`}
                className={`bg-white rounded-[16px] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col justify-between ${
                  idx === 1 ? 'hidden md:flex' : ''
                } ${
                  idx === 2 ? 'hidden lg:flex' : ''
                }`}
              >
                {/* Doctor Photo Box */}
                <div className="relative w-full h-[300px] sm:h-[340px] md:h-[350px] lg:h-[380px] rounded-[12px] overflow-hidden bg-[#e8f1f5] mb-[15px]">
                  <Image 
                    src={doc.image} 
                    alt={doc.name} 
                    fill 
                    className="object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Doctor Text Details */}
                <div className="text-center">
                  <h3 className="text-[17px] sm:text-[18px] font-bold text-[#192c27] mb-[5px]">
                    {doc.name}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-[#666666] mb-[5px] font-normal">
                    {doc.role}
                  </p>
                  <span className="text-[12px] sm:text-[13px] text-[#777777] font-medium block">
                    {doc.experience}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Pagination Indicator Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {doctors.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx 
                    ? 'w-6 bg-[#0595C4]' 
                    : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
