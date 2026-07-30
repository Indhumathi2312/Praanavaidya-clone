import Image from 'next/image';

export default function TrustBadges() {
  const badges = [
    {
      img: "/images/Praanavaidya-NABH-logo.avif",
      title: "NABH Accredited",
      desc: "Highest Standard of Care & Safety"
    },
    {
      img: "/images/all-insurance.avif",
      title: "All Insurance Accepted",
      desc: "Hassle-Free Cashless Claims"
    },
    {
      img: "/images/no-cost-emi-available.avif",
      title: "No Cost EMI Available",
      desc: "Flexible Monthly Payment Plans"
    },
    {
      img: "/images/24-7-Pateint-Health-Support.avif",
      title: "24/7 Health Support",
      desc: "Continuous Doctor Assistance"
    }
  ];

  return (
    <section className="bg-white py-10 border-y border-gray-100 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {badges.map((badge, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center p-4 rounded-2xl bg-[#F2F7F6]/50 hover:bg-[#F2F7F6] transition-colors duration-200 border border-transparent hover:border-gray-200"
            >
              <div className="w-16 h-16 relative mb-3 flex items-center justify-center">
                <Image 
                  src={badge.img} 
                  alt={badge.title} 
                  width={64} 
                  height={64} 
                  className="max-h-14 w-auto object-contain"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900">{badge.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
