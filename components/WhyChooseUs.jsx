import Image from 'next/image';
import { ShieldCheck, HeartHandshake, Sparkles, Clock, CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "NABH Accredited Standard",
      desc: "Strict clinical protocols, hygienic Panchakarma suites, and sterile procedure rooms."
    },
    {
      icon: HeartHandshake,
      title: "Cashless Hospitalization",
      desc: "Accepted by all major health insurance policies & TPAs with hassle-free desk assistance."
    },
    {
      icon: Sparkles,
      title: "No-Surgery Anorectal Care",
      desc: "Specialized Ksharasutra therapy for Piles & Fistula ensuring low recurrence and fast recovery."
    },
    {
      icon: Clock,
      title: "24/7 Dedicated Support",
      desc: "Continuous post-treatment follow-up and round-the-clock emergency medical assistance."
    }
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#007f5f] font-bold text-xs sm:text-sm tracking-widest uppercase bg-[#007f5f]/10 px-3 py-1 rounded-full">
              Why Praanavaidya
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#192c27] leading-tight">
              Leading Ayurvedic Hospital in Bangalore
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              At Praanavaidya, we bridge traditional Ayurvedic root-cause treatment with modern clinical safety to deliver holistic and lasting health outcomes.
            </p>

            <div className="space-y-4 pt-2">
              {reasons.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 p-3 rounded-xl bg-[#F2F7F6]/60 border border-gray-100">
                    <div className="p-2.5 rounded-lg bg-[#007f5f] text-white flex-shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#192c27]">{item.title}</h3>
                      <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column Highlights / Badges Banner */}
          <div className="lg:col-span-6 bg-[#E6F0EE]/50 rounded-3xl p-8 border border-[#007f5f]/20 text-center relative overflow-hidden">
            <div className="space-y-6">
              <div className="relative w-28 h-28 mx-auto">
                <Image 
                  src="/images/Praanavaidya-NABH-logo.avif" 
                  alt="NABH Logo" 
                  fill 
                  className="object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#192c27]">
                NABH Accredited & Certified Clinic
              </h3>
              <p className="text-xs text-gray-700 max-w-md mx-auto leading-relaxed">
                Recognized for excellence in Ayurvedic Healthcare, Patient Safety, Infection Control, and Clinical Outcomes.
              </p>

              <div className="flex flex-wrap justify-center gap-3 pt-4">
                <div className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-full shadow-sm text-xs font-semibold text-[#007f5f]">
                  <CheckCircle className="w-4 h-4" /> 100% Herbal Formulations
                </div>
                <div className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-full shadow-sm text-xs font-semibold text-[#007f5f]">
                  <CheckCircle className="w-4 h-4" /> Zero Side Effects
                </div>
                <div className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-full shadow-sm text-xs font-semibold text-[#007f5f]">
                  <CheckCircle className="w-4 h-4" /> 0% EMI Options
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
