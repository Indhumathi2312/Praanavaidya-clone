"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      {/* Top Banner / Announcement Bar */}
      <div className="bg-[#007f5f] text-white text-xs py-1.5 px-4 text-center font-medium">
        🏥 NABH Accredited Ayurvedic Hospital in Bangalore | 📞 Call: <a href="tel:09611773811" className="underline hover:text-green-200">09611773811</a> | Cashless Insurance Available
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/Logo-Pranavadhya.webp" 
                alt="Praanavaidya Logo" 
                width={180} 
                height={55} 
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>
            <div className="hidden sm:block border-l border-gray-200 pl-3">
              <Image 
                src="/images/Praanavaidya-NABH-logo.avif" 
                alt="NABH Accredited" 
                width={50} 
                height={50} 
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#treatments" className="hover:text-[#007f5f] transition-colors">Treatments</a>
            <a href="#panchakarma" className="hover:text-[#007f5f] transition-colors">Panchakarma</a>
            <a href="#doctors" className="hover:text-[#007f5f] transition-colors">Specialist Doctors</a>
            <a href="#testimonials" className="hover:text-[#007f5f] transition-colors">Patient Reviews</a>
            <a href="#locations" className="hover:text-[#007f5f] transition-colors flex items-center gap-1">
              <MapPin className="w-4 h-4 text-[#007f5f]" /> Locations
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a 
              href="tel:09611773811" 
              className="flex items-center gap-2 bg-[#007f5f] hover:bg-[#365951] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 animate-pulse" />
              <span>Call 09611773811</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            type="button"
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-4 space-y-3 shadow-lg">
          <a href="#treatments" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700 font-medium">Treatments</a>
          <a href="#panchakarma" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700 font-medium">Panchakarma</a>
          <a href="#doctors" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700 font-medium">Specialist Doctors</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700 font-medium">Patient Reviews</a>
          <a href="#locations" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700 font-medium">Our Locations</a>
          <div className="pt-2">
            <a 
              href="tel:09611773811" 
              className="w-full flex items-center justify-center gap-2 bg-[#007f5f] text-white py-3 rounded-xl font-semibold shadow"
            >
              <Phone className="w-4 h-4" /> Call 09611773811
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
