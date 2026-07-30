import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Expertise from '@/components/Expertise';
import Doctors from '@/components/Doctors';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import PromoPopup from '@/components/PromoPopup';
import WhyChooseUs from '@/components/WhyChooseUs';
import Customer from '@/components/Customer';

import { 
  mumbaiHeroData, 
  mumbaiExpertiseData,
  mumbaiDoctorsData,
  mumbaiWhyChooseData,
  mumbaiTestimonialsData,
  mumbaiFaqData,
  statsData 
} from '@/data/siteData';

export const metadata = {
  title: "Piles and fistula Treatment in Mumbai - Praanavaidya",
  description: "Our natural therapies help reduce pain, swelling, and discomfort while promoting long-term healing and overall digestive health in Mumbai."
};

export default function MumbaiPilesFistulaPage() {
  return (
    <main className="min-h-screen bg-[#FFF7F1]">
      <PromoPopup />
      <Navbar />
      <Hero data={mumbaiHeroData} />
      <Expertise data={mumbaiExpertiseData} />
      <Stats data={statsData} />
      <Doctors data={mumbaiDoctorsData} />
      <WhyChooseUs data={mumbaiWhyChooseData} />
      <Customer data={mumbaiTestimonialsData} />
      <FAQ data={mumbaiFaqData} />
      <Footer />
      <StickyCTA />
    </main>
  );
}
