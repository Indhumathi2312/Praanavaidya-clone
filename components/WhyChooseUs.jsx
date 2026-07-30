import Image from 'next/image';
import { whyChooseData as defaultWhyChooseData } from '@/data/siteData';

export default function WhyChooseUs({ data = defaultWhyChooseData }) {
  const {
    badgeText1 = "Discover Why",
    badgeText2 = "We’re Best For You",
    title = "Excellence in Natural Healing for Piles & Fistula",
    quote = "We specialize in effective Ayurvedic treatments for piles and fistula that are safe, natural, and minimally invasive. Our therapies reduce pain, swelling, and discomfort while strengthening digestive health and preventing recurrence. With personalized care and expert guidance, we help patients achieve fast recovery and lasting relief through trusted Ayurvedic methods.",
    image = "/images/Fissure.avif",
    ctaText = "Book Appointment",
    ctaLink = "#locations"
  } = data || {};

  return (
    <section className="py-14 sm:py-20 bg-[#FFF7F1] border-t border-black/5 font-sans">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Green Highlight Badge Headline matching HTML */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-start">
            <div className="text-[26px] sm:text-[30px] lg:text-[34px] font-bold  leading-tight tracking-tight text-center lg:text-left">
              <span className="inline-block  text-black px-3.5 py-1 rounded-[4px] ">
                {badgeText1}
              </span>
              <br />
              <span className="inline-block  text-black px-3.5 py-1 rounded-[4px]  mt-2">
                {badgeText2}
              </span>
            </div>
          </div>

          {/* Middle Column: White Card with Title, Italicized Quote & Cyan CTA Button */}
          <div className="lg:col-span-4 bg-white rounded-[16px] p-7 sm:p-8 lg:p-9 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-black/5 flex flex-col justify-between h-full min-h-[460px]">
            <div>
              <h3 className="text-xl sm:text-[22px] font-bold text-[#192c27] leading-snug mb-4 tracking-tight">
                {title}
              </h3>
              <p className="text-[14px] sm:text-[15px] italic text-[#555555] leading-relaxed font-normal mb-6">
                {quote}
              </p>
            </div>

            <a 
              href={ctaLink} 
              className="w-full py-3.5 px-6 rounded-full bg-[#0595C4] hover:bg-[#047aa2] text-white font-bold text-[15px] text-center transition-all duration-200 shadow-sm active:scale-95 block mt-4"
            >
              {ctaText}
            </a>
          </div>

          {/* Right Column: Fissure Treatment Image Card */}
          <div className="lg:col-span-4 rounded-[16px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-black/5 h-[380px] sm:h-[450px] lg:h-[480px] relative">
            <Image 
              src={image} 
              alt={title} 
              fill 
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover rounded-[16px]"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
}
