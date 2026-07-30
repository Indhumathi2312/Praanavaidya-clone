"use client";

import { heroData as defaultHeroData } from '@/data/siteData';

export default function Hero({ data = defaultHeroData }) {
  const { title, description, ctaText, ctaLink, videoSrc } = data;

  return (
    <section id="Home" className="bg-[#FFF7F1] text-[#192c27] font-sans py-[60px] lg:py-[80px]">
      <div className="max-w-[1340px] mx-auto px-5 sm:px-8">
        
        {/* Main Hero Container */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
          
          {/* Left Column: Heading, Subtitle, CTA Button */}
          <div className="w-full lg:w-[52%] text-left">
            
            <h1 className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-[#192c27] leading-[1.2] tracking-tight mb-5">
              {title.part1}
              <span className="text-[#0595C4]">{title.highlight1}</span>
              {title.part2}
              <span className="text-[#7ed957]">{title.highlight2}</span>
              <span className='block'>{title.inCity}</span>
              
            </h1>

            <p className="text-[15px] sm:text-[16px] text-[#555555] leading-[26px] max-w-[500px] mb-8">
              {description}
            </p>

            <div>
              <a 
                href={ctaLink} 
                className="prana-who-cta-button book-appointment-btn inline-flex items-center gap-[8px] bg-[#0595C4] hover:bg-[#047aa2] text-white px-[30px] py-[15px] rounded-[24px] text-[16px] font-semibold transition-all duration-200 shadow-md"
              >
                <span>{ctaText}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path 
                    d="M7 17L17 7M17 7H7M17 7V17" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Video Player */}
          <div className="w-full lg:w-[48%] max-w-[560px]">
            <div className="relative rounded-[20px] overflow-hidden shadow-xl border-4 border-white bg-black">
              <video 
                src={videoSrc} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover rounded-[16px]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
