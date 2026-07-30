"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { therapiesData as defaultTherapiesData } from '@/data/siteData';

export default function Therapies({ data = defaultTherapiesData }) {
  const { title, therapies } = data;
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#FFF7F1] text-[#192c27] py-16 sm:py-20 font-sans border-t border-black/5">
      <div className="max-w-[1340px] mx-auto px-5 sm:px-8">
        
        {/* Header Row: Title on Left, Carousel Arrows on Right */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#192c27] tracking-tight">
            {title}
          </h2>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-50 active:scale-95 transition-all duration-200"
              aria-label="Previous therapy"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button 
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-50 active:scale-95 transition-all duration-200"
              aria-label="Next therapy"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Slider of Therapy Cards */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none pb-4 pt-2 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {therapies.map((item) => (
            <div 
              key={item.id}
              className="flex-shrink-0 w-[280px] sm:w-[320px] bg-white rounded-[24px] p-5 border border-black/5 shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:shadow-lg transition-all duration-300 snap-start flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-[180px] rounded-[16px] overflow-hidden bg-gray-100 mb-4">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-xl font-bold text-[#192c27] mb-2 text-left">
                  {item.title}
                </h3>

                <p className="text-sm text-[#666666] leading-relaxed text-left">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
