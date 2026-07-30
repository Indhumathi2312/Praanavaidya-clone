import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import FeaturedTherapies from '@/components/FeaturedTherapies';
import Expertise from '@/components/Expertise';
import Doctors from '@/components/Doctors';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import PromoPopup from '@/components/PromoPopup';
import Customer from '@/components/Customer';

import { 
  bangaloreHeroData, 
  bangaloreExpertiseData,
  bangaloreDoctorsData,
  bangaloreCustomerData,
  bangaloreFaqData,
  bangaloreFeaturedTherapiesData,
  statsData 
} from '@/data/siteData';

export const metadata = {
  title: "Best Ayurvedic Wellness Centre in Bangalore - Praanavaidya",
  description: "PraanaVaidya offers personalized Ayurvedic wellness care in Bangalore to support energy, immunity, digestion, sleep, and stress relief naturally."
};

export default function BangaloreWellnessPage() {
  return (
    <main className="min-h-screen bg-[#FFF7F1]">
      <PromoPopup />
      <Navbar />
      <Hero data={bangaloreHeroData} />
      <FeaturedTherapies data={bangaloreFeaturedTherapiesData} />
      <Doctors data={bangaloreDoctorsData} />
      <Expertise data={bangaloreExpertiseData} />
      <Stats data={statsData} />
      <Customer data={bangaloreCustomerData} />
      <FAQ data={bangaloreFaqData} />
      <Footer />
      <StickyCTA />
    </main>
  );
}
