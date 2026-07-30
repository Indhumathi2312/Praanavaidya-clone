import './globals.css';
import AppointmentModal from '@/components/AppointmentModal';

export const metadata = {
  title: 'Ayurvedic Treatment Hospital in Bangalore – Praanavaidya',
  description: 'Leading Ayurvedic Hospital in Bangalore providing treatments for Piles, Fissure, Panchakarma, Joint Pain, Kidney Stones & More.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/cropped-pv-site-icon.avif" />
      </head>
      <body className="antialiased text-[#192c27] bg-[#FFF7F1]">
        {children}
        <AppointmentModal />
      </body>
    </html>
  );
}
