"use client";

import Image from 'next/image';
import { Phone, CheckCircle2, ShieldCheck, CreditCard, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#F2F7F6] via-[#E6F0EE] to-[#FFF7F1] pt-8 pb-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Benefits */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-[#007f5f]/10 text-[#007f5f] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
              <ShieldCheck className="w-4 h-4" />
              NABH Accredited Hospital
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#192c27] leading-tight sm:leading-snug">
              Authentic <span className="text-[#007f5f]">Ayurvedic Treatment</span> Hospital in Bangalore
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
              Specialist care for Piles, Fissure, Fistula, Joint Pain, Panchakarma, Kidney Stones, Diabetes Reversal, and Chronic Conditions with 100% Herbal & Scientific Ayurvedic Therapies.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 py-2 sm:max-w-lg">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-[#007f5f] flex-shrink-0" />
                <span>Cashless Insurance</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
                <CreditCard className="w-5 h-5 text-[#007f5f] flex-shrink-0" />
                <span>0% EMI Available</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
                <Clock className="w-5 h-5 text-[#007f5f] flex-shrink-0" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-[#007f5f] flex-shrink-0" />
                <span>15+ Yrs Experts</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:09611773811" 
                className="flex items-center justify-center gap-2.5 bg-[#007f5f] hover:bg-[#365951] text-white px-8 py-4 rounded-full text-base font-bold shadow-lg transition-all duration-200 hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                <span>Call Doctor Now: 09611773811</span>
              </a>
              <a 
                href="#locations" 
                className="flex items-center justify-center gap-2 bg-[#0595C4] hover:bg-[#047aa2] text-white px-8 py-4 rounded-full text-base font-bold shadow-md transition-all duration-200 hover:shadow-lg"
              >
                <span>View Hospital Locations</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Video & Booking Banner */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black aspect-video lg:aspect-square flex items-center justify-center">
              <video 
                src="/media/hero-bg-video.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <div className="text-white text-left">
                  <p className="text-xs uppercase tracking-wider font-semibold text-green-300">Praanavaidya Ayurveda</p>
                  <p className="text-lg font-bold">Natural Healing Without Surgery</p>
                </div>
              </div>
            </div>

            {/* Floating NABH & Insurance Badges */}
            <div className="absolute -bottom-6 -left-4 sm:left-4 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
              <Image 
                src="/images/all-insurance.avif" 
                alt="All Insurance Accepted" 
                width={80} 
                height={40} 
                className="h-8 w-auto object-contain"
              />
              <div className="text-left">
                <p className="text-xs font-bold text-gray-900">Cashless Insurance</p>
                <p className="text-[10px] text-gray-500">All Major TPAs Covered</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
