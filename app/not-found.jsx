import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFF7F1] flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-20 px-5 sm:px-8">
        <div className="max-w-md w-full text-center flex flex-col items-center">
          {/* Stylized Leafy 404 Indicator */}
          <div className="relative mb-6">
            <h1 className="text-8xl sm:text-[110px] font-extrabold text-[#192c27] tracking-tight select-none">
              404
            </h1>
            <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#b07d2e] rounded-full flex items-center justify-center text-white shadow-lg rotate-12">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#192c27] mb-3">
            Page Not Found
          </h2>
          <p className="text-[14.5px] text-[#5a7060] leading-relaxed mb-8">
            The page you are looking for doesn&apos;t exist, has been removed, or is temporarily unavailable. Let&apos;s guide you back to health.
          </p>

          {/* Helpful Navigation Links */}
          <div className="w-full bg-white rounded-[20px] border border-[#d6e8dc] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] mb-8 text-left">
            <h3 className="text-[13px] font-bold text-[#b07d2e] uppercase tracking-wider mb-3">
              Popular Pages
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link 
                  href="/" 
                  className="text-[14px] font-semibold text-[#192c27] hover:text-[#0595C4] transition-colors flex items-center justify-between group"
                >
                  <span>Praanavaidya Home</span>
                  <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </li>
              <li className="border-t border-gray-100 pt-3">
                <Link 
                  href="/best-piles-and-fistula-treatment-in-mumbai" 
                  className="text-[14px] font-semibold text-[#192c27] hover:text-[#0595C4] transition-colors flex items-center justify-between group"
                >
                  <span>Piles & Fistula Treatment (Mumbai)</span>
                  <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </li>
              <li className="border-t border-gray-100 pt-3">
                <Link 
                  href="/ayurvedic-wellness-bangalore" 
                  className="text-[14px] font-semibold text-[#192c27] hover:text-[#0595C4] transition-colors flex items-center justify-between group"
                >
                  <span>Ayurvedic Wellness Centre (Bangalore)</span>
                  <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </li>
            </ul>
          </div>

          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-[#0595C4] hover:bg-[#047aa2] text-white px-8 py-3.5 rounded-[16px] font-bold text-[15px] shadow-lg shadow-[#0595C4]/15 hover:shadow-xl active:scale-[0.98] transition-all"
          >
            Go Back Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
