"use client";

import { Star, Quote, Play } from 'lucide-react';
import { useState } from 'react';

export default function Testimonials() {
  const videoTestimonials = [
    { id: 1, src: "/media/pv-testimonial-1.mp4", title: "Piles & Fissure Recovery Experience", patient: "Patient from Bangalore" },
    { id: 2, src: "/media/pv-testimonial-2.mp4", title: "Panchakarma Rejuvenation Journey", patient: "Panchakarma Patient" },
    { id: 3, src: "/media/pv-testimonial-3.mp4", title: "Joint & Spine Pain Relief", patient: "Spine Treatment Patient" },
    { id: 4, src: "/media/pv-testimonial-4.mp4", title: "Diabetes Management Success", patient: "Ayurveda Wellness Patient" },
    { id: 5, src: "/media/pv-testmonial-5.mp4", title: "Kidney Stones Expulsion Story", patient: "Kidney Care Patient" },
    { id: 6, src: "/media/pv-testimonial-6.mp4", title: "Skin Condition Detox Recovery", patient: "Psoriasis Treatment Patient" }
  ];

  return (
    <section id="testimonials" className="py-16 bg-[#FFF7F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-[#007f5f] font-bold text-xs sm:text-sm tracking-widest uppercase bg-white px-3 py-1 rounded-full border border-amber-200">
          4.9★ Patient Ratings
        </span>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#192c27] mt-3 mb-4">
          Real Patient Stories & Video Testimonials
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base mb-12">
          Watch video reviews from patients who experienced successful recovery through Praanavaidya&apos;s natural Ayurvedic treatments.
        </p>

        {/* Video Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {videoTestimonials.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative w-full aspect-video bg-black flex items-center justify-center">
                <video 
                  src={item.src} 
                  controls 
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-base font-bold text-[#192c27] group-hover:text-[#007f5f] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                    <Quote className="w-3 h-3 text-[#007f5f]" />
                    {item.patient}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
