"use client";

import { useState } from 'react';
import { faqData as defaultFaqData } from '@/data/siteData';

export default function FAQ({ data = defaultFaqData }) {
  const { title, faqs } = data;
  const [openId, setOpenId] = useState(1); // First item open by default like in screenshot

  const toggleFaq = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section id="Faqs" className="bg-[#FFF7F1] text-[#192c27] py-16 sm:py-20 font-sans border-t border-black/5">
      <div className="max-w-[1000px] mx-auto px-5 sm:px-8">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#192c27] text-left tracking-tight mb-10 leading-tight">
          {title.split(" ").map((word, i) => (
            <span key={i} className="block sm:inline">{word}{" "}</span>
          ))}
        </h2>

        {/* Stacked Accordion Cards */}
        <div className="space-y-4">
          {faqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-[20px] p-6 sm:p-7 border border-black/5 shadow-[0_4px_15px_rgba(0,0,0,0.03)] transition-all duration-300"
              >
                {/* Accordion Header */}
                <div
                  onClick={() => toggleFaq(item.id)}
                  className="flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <h3 className="text-base sm:text-[18px] font-bold text-[#192c27] leading-snug">
                    {item.question}
                  </h3>

                  {/* Cyan Toggle Box */}
                  <button
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-[10px] bg-[#0595C4] hover:bg-[#047aa2] text-white flex items-center justify-center font-bold text-lg flex-shrink-0 transition-colors shadow-sm"
                    aria-label={isOpen ? "Close answer" : "Open answer"}
                  >
                    {isOpen ? "✕" : "+"}
                  </button>
                </div>

                {/* Accordion Answer Content */}
                {isOpen && (
                  <div className="pt-5 border-t border-black/5 mt-4 animate-fadeIn">
                    <p className="text-[15px] sm:text-[16px] text-[#555555] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
