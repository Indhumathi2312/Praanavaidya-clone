import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#192c27] text-white pt-16 pb-24 lg:pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-2.5 rounded-xl inline-block">
              <Image 
                src="/images/Logo-Pranavadhya.webp" 
                alt="Praanavaidya" 
                width={180} 
                height={50} 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Praanavaidya is a premier NABH Accredited Ayurvedic Treatment Hospital in Bangalore offering specialized care for Piles, Fissure, Fistula, Panchakarma, Joint Disorders, and Chronic Conditions.
            </p>
            <div className="pt-2">
              <a 
                href="tel:09611773811" 
                className="inline-flex items-center gap-2 bg-[#007f5f] hover:bg-[#55a630] text-white px-5 py-2.5 rounded-full text-xs font-bold transition-colors"
              >
                <Phone className="w-4 h-4" /> Call: 09611773811
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-[#55a630] uppercase tracking-wider">Treatments & Care</h3>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><a href="#treatments" className="hover:text-white transition-colors">Piles & Ksharasutra Therapy</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">Fissure & Fistula Treatment</a></li>
              <li><a href="#panchakarma" className="hover:text-white transition-colors">Full Body Panchakarma Detox</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">Joint & Back Pain Relief</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">Diabetes & Metabolic Correction</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">Skin & Psoriasis Detox</a></li>
            </ul>
          </div>

          {/* Col 3: Hospital Locations */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-bold text-[#55a630] uppercase tracking-wider">Clinic Locations in Bangalore</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-300">
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <div className="flex items-center gap-1.5 font-bold text-white mb-1">
                  <MapPin className="w-4 h-4 text-[#55a630]" /> Chamrajpet Clinic
                </div>
                <p className="text-[11px] text-gray-400">Main Road, Chamrajpet, Bangalore, Karnataka</p>
                <a href="https://maps.app.goo.gl/HCpSru7VLShcviqZA" target="_blank" rel="noopener" className="inline-block mt-2 text-[#55a630] hover:underline text-[11px]">
                  Get Directions →
                </a>
              </div>

              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <div className="flex items-center gap-1.5 font-bold text-white mb-1">
                  <MapPin className="w-4 h-4 text-[#55a630]" /> Indiranagar Clinic
                </div>
                <p className="text-[11px] text-gray-400">100 Feet Road, Indiranagar, Bangalore, Karnataka</p>
                <a href="https://maps.app.goo.gl/3qDeMucneJiyW6pJ6" target="_blank" rel="noopener" className="inline-block mt-2 text-[#55a630] hover:underline text-[11px]">
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Clock className="w-4 h-4 text-[#55a630]" /> OPD Hours: Monday – Sunday: 9:00 AM – 8:00 PM
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 text-center text-xs text-gray-400 space-y-2">
          <p>© {new Date().getFullYear()} Praanavaidya Ayurvedic Hospital. All Rights Reserved.</p>
          <p className="text-[10px] text-gray-500 max-w-3xl mx-auto">
            Disclaimer: The medical information provided on this website is for educational and informational purposes only. Treatment plans may vary based on individual health diagnosis.
          </p>
        </div>

      </div>
    </footer>
  );
}
