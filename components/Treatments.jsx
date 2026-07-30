import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Treatments() {
  const treatments = [
    {
      title: "Piles (Haemorrhoids)",
      desc: "Non-surgical Ksharasutra & Ayurvedic management for permanent relief.",
      img: "/images/piles-praanavaidya.avif"
    },
    {
      title: "Fissure Treatment",
      desc: "Pain-free healing of anal fissures without side effects.",
      img: "/images/Fissure.avif"
    },
    {
      title: "Fistula Care",
      desc: "Specialized Ksharasutra therapy for high and low fistula in ano.",
      img: "/images/fistula.avif"
    },
    {
      title: "Joint & Back Pain",
      desc: "Holistic relief from Sciatica, Arthritis, Spondylitis, and Disc prolapse.",
      img: "/images/Joint-Back-Pain.avif"
    },
    {
      title: "Asthma & Respiratory Care",
      desc: "Immunity strengthening herbal formulations for chronic asthma and allergy.",
      img: "/images/Asthma.avif"
    },
    {
      title: "Kidney Stones",
      desc: "Natural dissolution and expulsion of renal calculi using Ayurvedic herbs.",
      img: "/images/Kidney-Stones.avif"
    },
    {
      title: "Diabetes Reversal",
      desc: "Scientific metabolic correction & insulin sensitivity improvement.",
      img: "/images/Diabetes-Reversal.avif"
    },
    {
      title: "PCOS & Thyroid",
      desc: "Hormonal balancing therapies for irregular periods, PCOS & Thyroid disorders.",
      img: "/images/PCOSThyroid.avif"
    },
    {
      title: "Skin Conditions",
      desc: "Deep blood detoxification for Psoriasis, Eczema, Acne & Dermatitis.",
      img: "/images/Skin-Condition.avif"
    },
    {
      title: "Weight Loss & Obesity",
      desc: "Udvartanam & customized diet plans for sustainable weight management.",
      img: "/images/Weight-Loss.avif"
    }
  ];

  return (
    <section id="treatments" className="py-16 bg-[#FFF7F1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <span className="text-[#007f5f] font-bold text-xs sm:text-sm tracking-widest uppercase bg-[#007f5f]/10 px-3 py-1 rounded-full">
          Specialized Medical Treatments
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#192c27] mt-3 mb-4">
          Ayurvedic Speciality Care
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base mb-12">
          Combining ancient Panchakarma wisdom with modern diagnostic standards for long-lasting health.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-left">
          {treatments.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4 bg-gray-100">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#192c27] group-hover:text-[#007f5f] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#007f5f]">
                <span>Consult Specialist</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
