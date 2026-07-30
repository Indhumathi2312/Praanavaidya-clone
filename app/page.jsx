import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import Treatments from '@/components/Treatments';
import Panchakarma from '@/components/Panchakarma';
import Doctors from '@/components/Doctors';
import Testimonials from '@/components/Testimonials';
import WhyChooseUs from '@/components/WhyChooseUs';
import StickyCTA from '@/components/StickyCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustBadges />
      <Treatments />
      <Panchakarma />
      <Doctors />
      <Testimonials />
      <WhyChooseUs />
      <Footer />
      <StickyCTA />
    </main>
  );
}
