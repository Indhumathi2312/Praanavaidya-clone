import Image from 'next/image';

export default function Panchakarma() {
  const therapies = [
    { title: "Abhyanga", desc: "Full Body Herbal Oil Massage for Rejuvenation", img: "/images/Abhyanga.avif" },
    { title: "Shirodhara", desc: "Medicated Oil Pouring on Third Eye for Stress & Anxiety", img: "/images/Shirodhara.avif" },
    { title: "Kati Basti", desc: "Targeted Warm Herbal Oil Reservoir for Lower Back Pain", img: "/images/Kati-Basti.avif" },
    { title: "Bashpasweda", desc: "Herbal Steam Bath for Toxins Expulsion", img: "/images/Bashpasweda-img.png" },
    { title: "Nasyam", desc: "Nasal Instillation for Migraine, Sinusitis & Headaches", img: "/images/Nasyam.avif" },
    { title: "Netra Tarpana", desc: "Eye Cleansing & Rejuvenation Therapy", img: "/images/Netra-Tarpana.avif" },
    { title: "Greevavasthi", desc: "Cervical Spine Care & Neck Stiffness Therapy", img: "/images/Greevavasthi-img.png" },
    { title: "Januvasthi", desc: "Knee Joint Warm Oil Therapy for Osteoarthritis", img: "/images/Januvasthi-img.png" },
    { title: "Mukhalepa", desc: "Herbal Facial Pack for Glowing Skin & Acne Treatment", img: "/images/Mukhalepa-img.png" },
    { title: "Padabhyanga", desc: "Foot Reflexology Massage for Deep Sleep & Relaxation", img: "/images/Padabhyanga-img.png" },
    { title: "Udvartanam", desc: "Herbal Powder Scrub Massage for Weight Loss", img: "/images/Udvartanam.avif" },
    { title: "Karnapoorana", desc: "Ear Instillation for Tinnitus & Ear Pain", img: "/images/Karnapoorana-img.png" }
  ];

  return (
    <section id="panchakarma" className="py-16 bg-[#F2F7F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <span className="text-[#007f5f] font-bold text-xs sm:text-sm tracking-widest uppercase bg-white px-3 py-1 rounded-full border border-gray-200">
          Traditional Detoxification
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#192c27] mt-3 mb-4">
          Panchakarma Therapies
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base mb-12">
          Experience authentic body detoxification, cellular rejuvenation, and stress relief administered by certified Panchakarma therapists.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
          {therapies.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col group"
            >
              <div className="relative w-full h-36 rounded-xl overflow-hidden mb-3 bg-gray-50">
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-base font-bold text-[#192c27] group-hover:text-[#007f5f] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-snug">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
