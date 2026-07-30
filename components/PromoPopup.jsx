"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(true);

  // Automatically close popup after 5 seconds (5000ms) on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] bg-black/65 backdrop-blur-[2px] flex items-center justify-center p-4 transition-all duration-300 animate-fadeIn">
      
      {/* Backdrop Click to Close */}
      <div 
        className="absolute inset-0" 
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Popup Container */}
      <div className="relative max-w-[440px] sm:max-w-[480px] w-full bg-white rounded-[20px] shadow-2xl overflow-hidden z-10 transition-transform duration-300 scale-100">
        
        {/* Top-Right X Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-gray-800 hover:text-black flex items-center justify-center font-bold text-lg sm:text-xl shadow-md transition-all duration-200 active:scale-95 border border-black/10"
          aria-label="Close promotion popup"
        >
          ✕
        </button>

        {/* Promo Image */}
        <div className="relative w-full overflow-hidden rounded-[20px]">
          <Image 
            src="/images/monsoon-popup-img.avif" 
            alt="Monsoon Rejuvenation Special Offer" 
            width={480} 
            height={640} 
            priority
            className="w-full h-auto object-contain rounded-[20px] display-block"
          />
        </div>

      </div>

    </div>
  );
}
