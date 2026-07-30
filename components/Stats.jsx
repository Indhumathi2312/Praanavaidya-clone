"use client";

import { statsData as defaultStatsData } from '@/data/siteData';

export default function Stats({ data = defaultStatsData }) {
  const { title, description, stats } = data;

  return (
    <section className="bg-[#FFF7F1] text-[#192c27] py-16 sm:py-20 font-sans">
      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 text-center">
        
        {/* Centered Top Header & Description */}
        <div className="max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#192c27] leading-tight tracking-tight">
            {title}
          </h2>
          <p className="text-base text-[#555555] leading-relaxed max-w-xl mx-auto">
            {description}
          </p>
        </div>

        {/* 4 Stat Counter Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 items-center justify-center">
          {stats.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center space-y-2">
              <h3 className="text-5xl sm:text-6xl lg:text-[64px] font-extrabold text-[#192c27] leading-none tracking-tight">
                {item.number}
              </h3>
              <p className="text-xs sm:text-[13px] font-bold tracking-wider text-[#192c27] uppercase pt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
