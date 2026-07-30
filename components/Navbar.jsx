"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-[20px] z-50 px-2 sm:px-4 font-sans">
      <div className="max-w-[1340px] mx-auto bg-white rounded-[16px] sm:rounded-[20px] px-4 sm:px-6 py-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-black/5 flex items-center justify-between gap-3 sm:gap-4">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#Home" className="block">
            <Image 
              src="/images/Logo-Pranavadhya.webp" 
              alt="Praana Vaidya" 
              width={180} 
              height={46}
              priority
              className="h-[40px] sm:h-[46px] w-auto object-contain"
            />
          </a>
        </div>

        {/* Desktop Navigation Links - Pure anchor hashes for smooth, refresh-free scroll */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[#192c27] text-[15px] font-medium tracking-tight">
          <a href="#Home" className="hover:text-[#007f5f] transition-colors">Home</a>
          <a href="#Testimonials" className="hover:text-[#007f5f] transition-colors">Testimonials</a>
          <a href="#Treatments" className="hover:text-[#007f5f] transition-colors">Treatments</a>
          <a href="#Doctors" className="hover:text-[#007f5f] transition-colors">Doctors</a>
          <a href="#Faqs" className="hover:text-[#007f5f] transition-colors">Faq&apos;s</a>
          <a href="#locations" className="hover:text-[#007f5f] transition-colors">Contact</a>
        </nav>

        {/* Right Section: Badges, Call Button, CTA Button */}
        <div className="flex items-center gap-3">

          {/* 5 Badge Icons (Visible on XL screens) */}
          <div className="hidden xl:flex items-center gap-2">
            <Image src="/images/Praanavaidya-NABH-logo.avif" alt="NABH" width={34} height={34} className="h-[34px] w-auto object-contain" />
            <Image src="/images/24-7-Pateint-Health-Support.avif" alt="24/7 Support" width={34} height={34} className="h-[34px] w-auto object-contain" />
            <Image src="/images/no-cost-emi-available.avif" alt="No Cost EMI" width={34} height={34} className="h-[34px] w-auto object-contain" />
            <Image src="/images/health-support.avif" alt="Health Support" width={34} height={34} className="h-[34px] w-auto object-contain" />
            <Image src="/images/all-insurance.avif" alt="All Insurance" width={34} height={34} className="h-[34px] w-auto object-contain" />
          </div>

          {/* Call Button (Outlined Cyan Pill) */}
          <a 
            href="tel:08065903131" 
            className="hidden sm:inline-flex items-center gap-2 border border-[#0595C4] text-[#0595C4] hover:bg-[#0595C4] hover:text-white px-4 py-2 rounded-[20px] font-semibold text-sm transition-all duration-200 bg-white"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512" aria-hidden="true">
              <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/>
            </svg>
            <span>08065903131</span>
          </a>

          {/* Book Appointment CTA Button (Solid Cyan) */}
          <a 
            href="#locations" 
            className="inline-flex items-center justify-center bg-[#0595C4] hover:bg-[#047aa2] text-white px-4 sm:px-5 py-2.5 rounded-[20px] font-semibold text-sm shadow-sm transition-all duration-200"
          >
            Book Appointment
          </a>

          {/* Hamburger Menu (Mobile) */}
          <button 
            className="lg:hidden p-2 text-gray-700 hover:text-black focus:outline-none" 
            aria-label="Toggle Mobile Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-[1340px] mx-auto bg-white rounded-2xl p-5 mt-2 shadow-xl border border-black/5 flex flex-col gap-4 animate-fadeIn text-[#192c27] font-semibold text-base">
          <a href="#Home" onClick={() => setMobileMenuOpen(false)} className="pb-2 border-b border-gray-100 hover:text-[#007f5f]">Home</a>
          <a href="#Testimonials" onClick={() => setMobileMenuOpen(false)} className="pb-2 border-b border-gray-100 hover:text-[#007f5f]">Testimonials</a>
          <a href="#Treatments" onClick={() => setMobileMenuOpen(false)} className="pb-2 border-b border-gray-100 hover:text-[#007f5f]">Treatments</a>
          <a href="#Doctors" onClick={() => setMobileMenuOpen(false)} className="pb-2 border-b border-gray-100 hover:text-[#007f5f]">Doctors</a>
          <a href="#Faqs" onClick={() => setMobileMenuOpen(false)} className="pb-2 border-b border-gray-100 hover:text-[#007f5f]">Faq&apos;s</a>
          <a href="#locations" onClick={() => setMobileMenuOpen(false)} className="pb-2 border-b border-gray-100 hover:text-[#007f5f]">Contact</a>
          <a href="tel:08065903131" className="text-[#0595C4] font-bold">Call: 08065903131</a>
        </div>
      )}

    </header>
  );
}
