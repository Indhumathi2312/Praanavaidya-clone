import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Therapies from '@/components/Therapies';
import Expertise from '@/components/Expertise';
import Doctors from '@/components/Doctors';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import TrustBadges from '@/components/TrustBadges';
import WhyChooseUs from '@/components/WhyChooseUs';
import StickyCTA from '@/components/StickyCTA';
import Footer from '@/components/Footer';
import PromoPopup from '@/components/PromoPopup';

import { heroData, statsData, therapiesData, doctorsData, expertiseData, testimonialsData, faqData } from '@/data/siteData';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF7F1]">
      <PromoPopup />
      <Navbar />
      <Hero data={heroData} />
      <Stats data={statsData} />
      <Therapies data={therapiesData} />
      <Doctors data={doctorsData} />
      <Expertise data={expertiseData} />
      <Testimonials data={testimonialsData} />
      <FAQ data={faqData} />
      {/* <TrustBadges />
      <WhyChooseUs /> */}
      <Footer />
      <StickyCTA />
    </main>
  );
}
