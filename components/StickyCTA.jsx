"use client";

import { useState } from 'react';

export default function StickyCTA() {
  const [expanded, setExpanded] = useState(false);

  const locations = [
    { name: "Chamrajpet", mapUrl: "https://maps.app.goo.gl/HCpSru7VLShcviqZA" },
    { name: "Indiranagar", mapUrl: "https://maps.app.goo.gl/3qDeMucneJiyW6pJ6" },
    { name: "Rajajinagar", mapUrl: "https://maps.app.goo.gl/Y2V4W84xrxFaoy4i7" },
    { name: "Yelahanka", mapUrl: "https://maps.app.goo.gl/wMuEvTCyNGn3PBsz5" },
    { name: "Mumbai", mapUrl: "https://maps.app.goo.gl/9KVaxGz7L6wk5vxTA" },
    { name: "Mangalore", mapUrl: "https://maps.app.goo.gl/JbwWdkFbs4g6i3eB7" },
    { name: "Hubballi", mapUrl: "https://maps.app.goo.gl/p2uveXTr5x26nKjM8" },
    { name: "Delhi", mapUrl: "https://maps.app.goo.gl/59y2WRSnofHMKVkL7" },
    { name: "Lucknow", mapUrl: "https://maps.app.goo.gl/CCAq6ip8HeeXMCct8" }
  ];

  return (
    <div 
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] md:hidden bg-white shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 ${
        expanded 
          ? 'w-[92%] max-w-[480px] rounded-[20px] p-5 flex flex-col' 
          : 'w-[92%] max-w-[400px] rounded-full p-1.5 flex items-center justify-between gap-2'
      }`}
    >
      {!expanded ? (
        /* Initial Collapsed State */
        <div className="flex items-center gap-2 w-full">
          <button 
            type="button"
            onClick={() => setExpanded(true)}
            className="w-1/2 py-3 px-4 rounded-full bg-[#f7f7f7] hover:bg-[#eaeaea] text-[#111111] font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
          >
            <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Our Locations</span>
          </button>

          <a 
            href="tel:08065903131"
            className="w-1/2 py-3 px-4 rounded-full bg-[#0595C4] hover:bg-[#047aa2] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
              <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/>
            </svg>
            <span>Call Now</span>
          </a>
        </div>
      ) : (
        /* Expanded Locations Modal Container */
        <div className="w-full">
          <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
            <span className="text-base font-bold text-[#111111]">Choose Your Location</span>
            <button 
              type="button"
              onClick={() => setExpanded(false)}
              className="w-8 h-8 rounded-full bg-[#f5f5f5] hover:bg-[#e5e5e5] text-gray-600 flex items-center justify-center text-lg font-bold transition-colors"
              aria-label="Close locations modal"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 max-h-[280px] overflow-y-auto pr-1">
            {locations.map((loc, idx) => (
              <a 
                key={idx}
                href={loc.mapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="py-2.5 px-3 rounded-xl bg-[#f5f5f5] hover:bg-[#0595C4] text-[#111111] hover:text-white text-center text-xs font-semibold transition-all duration-200"
              >
                {loc.name}
              </a>
            ))}
          </div>

          <a 
            href="tel:08065903131" 
            className="w-full mt-4 py-3 rounded-xl bg-[#0595C4] hover:bg-[#047aa2] text-white text-center font-bold text-sm flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
              <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/>
            </svg>
            <span>Call Hospital: 08065903131</span>
          </a>
        </div>
      )}
    </div>
  );
}
