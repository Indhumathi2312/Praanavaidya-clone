"use client";

import { useState } from 'react';
import { Phone, MapPin, X } from 'lucide-react';

export default function StickyCTA() {
  const [expanded, setExpanded] = useState(false);

  const locations = [
    { name: "Chamrajpet", mapUrl: "https://maps.app.goo.gl/HCpSru7VLShcviqZA" },
    { name: "Indiranagar", mapUrl: "https://maps.app.goo.gl/3qDeMucneJiyW6pJ6" },
  ];

  return (
    <div id="locations" className={`sticky-cta ${expanded ? 'expanded' : ''}`}>
      
      {/* Initial Buttons (Mobile view) */}
      {!expanded ? (
        <div className="cta-initial-buttons">
          <button 
            type="button"
            className="cta-btn" 
            onClick={() => setExpanded(true)}
          >
            <MapPin className="w-4 h-4 text-[#007f5f]" />
            Our Locations
          </button>
          <a className="cta-btn" href="tel:09611773811">
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      ) : (
        /* Expanded Locations Grid */
        <div className="expanded-content block w-full">
          <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
            <span className="text-base font-bold text-gray-900 flex items-center gap-1.5">
              <MapPin className="w-5 h-5 text-[#007f5f]" /> Select Location
            </span>
            <button 
              type="button"
              className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
              onClick={() => setExpanded(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-3">
            {locations.map((loc, idx) => (
              <a 
                key={idx}
                href={loc.mapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-gray-50 hover:bg-[#007f5f]/10 text-gray-900 hover:text-[#007f5f] rounded-xl text-center text-sm font-semibold transition-colors border border-gray-200"
              >
                {loc.name}
              </a>
            ))}
          </div>

          <a 
            href="tel:09611773811" 
            className="w-full flex items-center justify-center gap-2 bg-[#0595C4] text-white py-2.5 rounded-xl font-bold text-sm"
          >
            <Phone className="w-4 h-4" /> Call Hospital: 09611773811
          </a>
        </div>
      )}

    </div>
  );
}
