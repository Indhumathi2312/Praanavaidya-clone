import Image from 'next/image';
import { Award, GraduationCap, PhoneCall } from 'lucide-react';

export default function Doctors() {
  const seniorDoctors = [
    {
      name: "Dr. Chetan Upadhyaya",
      qualification: "BAMS, MS (Ayurveda)",
      spec: "Senior Anorectal & Ksharasutra Specialist (Piles, Fissure, Fistula)",
      exp: "20+ Years Experience",
      img: "/images/Dr.-CHETAN-UPADHYAYA-img.png"
    },
    {
      name: "Dr. Pramod Karanth",
      qualification: "BAMS, MD (Ayurveda)",
      spec: "Senior Panchakarma & Metabolic Disorders Specialist",
      exp: "18+ Years Experience",
      img: "/images/DR.-PRAMOD-KARANTH.png"
    },
    {
      name: "Dr. Swasthika Upadhyaya",
      qualification: "BAMS, MS (Ayurveda)",
      spec: "Ayurvedic Gynaecology, PCOS & Infertility Specialist",
      exp: "15+ Years Experience",
      img: "/images/DR.-SWASTHIKA-UPADHYAYA.png"
    }
  ];

  const residentDoctors = [
    { name: "Dr. Kruthika", qual: "BAMS", spec: "Panchakarma & General Physician", img: "/images/doctor-kruthika.avif" },
    { name: "Dr. Chinmayi", qual: "BAMS", spec: "Ayurvedic Lifestyle & Diet Consultant", img: "/images/doctor-chinmayi.avif" },
    { name: "Dr. Pallavi", qual: "BAMS", spec: "Skin & Spine Specialist", img: "/images/doctor-pallavi.avif" },
    { name: "Dr. Pragathi", qual: "BAMS", spec: "Metabolic & Pain Management", img: "/images/doctor-pragathi.avif" },
    { name: "Dr. Vyshnavi", qual: "BAMS", spec: "General Ayurvedic Physician", img: "/images/doctor-vyshnavi.avif" },
    { name: "Dr. Sharanbasappa", qual: "BAMS", spec: "Anorectal & Surgical Assistant", img: "/images/Dr.-Sharanbasappa.avif" }
  ];

  return (
    <section id="doctors" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <span className="text-[#007f5f] font-bold text-xs sm:text-sm tracking-widest uppercase bg-[#007f5f]/10 px-3 py-1 rounded-full">
          Expert Medical Team
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#192c27] mt-3 mb-4">
          Our Specialist Ayurvedic Doctors
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base mb-12">
          Consult with highly experienced Ayurvedic physicians and surgeons in Bangalore for accurate diagnosis and personalized treatment plans.
        </p>

        {/* Senior Doctors Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left">
          {seniorDoctors.map((doc, idx) => (
            <div 
              key={idx}
              className="bg-[#F2F7F6]/60 rounded-3xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-5 bg-gradient-to-t from-gray-200 to-gray-50">
                  <Image 
                    src={doc.img} 
                    alt={doc.name} 
                    fill 
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#007f5f] bg-[#007f5f]/10 px-3 py-1 rounded-full mb-2">
                  <Award className="w-3.5 h-3.5" />
                  {doc.exp}
                </div>
                <h3 className="text-xl font-bold text-[#192c27]">{doc.name}</h3>
                <p className="text-xs font-semibold text-gray-500 flex items-center gap-1 mt-1">
                  <GraduationCap className="w-4 h-4 text-[#007f5f]" />
                  {doc.qualification}
                </p>
                <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                  {doc.spec}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <a 
                  href="tel:09611773811" 
                  className="w-full flex items-center justify-center gap-2 bg-[#007f5f] hover:bg-[#365951] text-white py-2.5 rounded-xl font-semibold text-xs transition-colors"
                >
                  <PhoneCall className="w-4 h-4" /> Book Appointment
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Resident Doctors Grid */}
        <h3 className="text-xl font-bold text-[#192c27] mb-6 text-left border-l-4 border-[#007f5f] pl-3">
          Resident Ayurvedic Physicians
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-left">
          {residentDoctors.map((doc, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm text-center">
              <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden mb-2 bg-gray-100 border-2 border-[#007f5f]/20">
                <Image 
                  src={doc.img} 
                  alt={doc.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <h4 className="text-xs font-bold text-gray-900 line-clamp-1">{doc.name}</h4>
              <p className="text-[10px] text-[#007f5f] font-semibold">{doc.qual}</p>
              <p className="text-[10px] text-gray-500 line-clamp-2 mt-1">{doc.spec}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
