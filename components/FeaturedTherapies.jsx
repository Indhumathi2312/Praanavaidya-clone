"use client";

import Image from 'next/image';

export default function FeaturedTherapies({ data = [] }) {
  if (!data || data.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 bg-[#FFF7F1] text-[#192c27] font-sans border-t border-black/5">
      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 flex flex-col gap-24">
        {data.map((therapy) => (
          <div key={therapy.id} className="flex flex-col gap-10">
            {/* Header Content */}
            <div className="text-left">
              <span className="text-xs font-bold text-[#b07d2e] tracking-[0.12em] uppercase block mb-3">
                {therapy.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#192c27] leading-[1.2] tracking-tight mb-4 max-w-[900px]">
                {therapy.title}
              </h2>
              <p className="text-[15px] text-[#5a7060] leading-relaxed max-w-[800px]">
                {therapy.description}
              </p>
            </div>

            {/* Core Row: Grid on Left, Image on Right */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
              
              {/* Left Column: 4 Cards */}
              <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-5">
                {therapy.cards.map((card, cardIdx) => (
                  <div 
                    key={cardIdx} 
                    className="bg-white rounded-[16px] p-6 border border-[#d6e8dc] shadow-[0_4px_15px_rgba(0,0,0,0.02)] flex flex-col justify-start"
                  >
                    <h3 className="text-[15px] font-bold text-[#192c27] mb-3 flex items-center gap-2">
                      {card.title}
                    </h3>
                    <ul className="list-disc pl-4 flex flex-col gap-2 text-[13.5px] text-[#444444] leading-relaxed">
                      {card.content.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Right Column: Image */}
              <div className="w-full lg:w-[40%] relative min-h-[300px] lg:min-h-auto rounded-[20px] overflow-hidden border border-[#d6e8dc] shadow-[0_8px_25px_rgba(0,0,0,0.05)]">
                <Image 
                  src={therapy.image} 
                  alt={therapy.title}
                  fill
                  className="object-cover"
                />
              </div>

            </div>

            {/* Optional How a Session Works Section */}
            {therapy.steps && (
              <div className="mt-4">
                <span className="text-[11px] font-bold text-[#5a7060] tracking-wider uppercase block mb-5">
                  {therapy.stepsLabel || "HOW A SESSION WORKS"}
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {therapy.steps.map((step, stepIdx) => (
                    <div 
                      key={stepIdx} 
                      className="bg-white rounded-[16px] p-6 border border-[#d6e8dc] shadow-[0_4px_15px_rgba(0,0,0,0.02)]"
                    >
                      <div className="text-[11px] font-bold text-[#b07d2e] tracking-wider mb-2 uppercase">
                        {step.num}
                      </div>
                      <h4 className="text-[15px] font-bold text-[#192c27] mb-2">{step.title}</h4>
                      <p className="text-[13px] text-[#5a7060] leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Row: Key Benefits */}
            {therapy.benefits && (
              <div className="mt-4">
                <span className="text-[11px] font-bold text-[#5a7060] tracking-wider uppercase block mb-5">
                  {therapy.benefitsLabel}
                </span>
                <div className="flex flex-wrap gap-3">
                  {therapy.benefits.map((benefit, benIdx) => (
                    <div 
                      key={benIdx} 
                      className="bg-white border border-[#d6e8dc] rounded-[12px] px-4 py-3 text-[13px] font-semibold text-[#192c27] flex items-center gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-[#b07d2e]/30 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#b07d2e] flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
