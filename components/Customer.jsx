import { customerData as defaultData } from '@/data/siteData';

export default function Customer({ data = defaultData }) {
  const { title = "See why customers love", reviews = [] } = data || {};

  const displayReviews = (reviews && reviews.length > 0) ? reviews : (defaultData.reviews || []);

  return (
    <section id="Testimonials" className="py-16 sm:py-20 bg-[#FFF7F1] text-[#192c27] font-sans border-t border-black/5">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title matching praanavaidya HTML 1340px layout */}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#192c27] text-center tracking-tight mb-10 sm:mb-14">
          {title}
        </h2>

        {/* 3 Review Cards Grid matching 1340px container & html card sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {displayReviews.slice(0, 3).map((item, idx) => (
            <div 
              key={item.id || idx}
              className="bg-white rounded-[20px] p-7 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-black/5 flex flex-col justify-between h-full min-h-[340px] transition-all duration-300 hover:shadow-lg"
            >
              <div>
                {/* Header: Google G Icon + 5 Yellow Stars */}
                <div className="flex items-center gap-3 mb-5">
                  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  
                  <div className="flex items-center gap-1 text-[#FFC107] text-base tracking-widest">
                    ★★★★★
                  </div>
                </div>

                {/* Review Text Body */}
                <p className="text-base text-[#333333] leading-relaxed font-normal mb-8">
                  {item.text}
                </p>
              </div>

              {/* Author Footer matching 1340px container styling */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100 mt-auto">
                <div className="w-9 h-9 rounded-full bg-[#0595C4] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <span className="text-base font-bold text-[#192c27]">{item.author}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
