"use client";

export default function Footer() {
  return (
    <footer id="locations" className="bg-[#FFF7F1] text-[#2b2b2b] pt-[100px] pb-[50px] font-sans border-t border-black/10">
      <div className="max-w-[1340px] mx-auto px-5 sm:px-8">

        {/* Top Section: Centered Buttons & Bullet Features */}
        <div className="flex flex-col items-center justify-center text-center pb-[45px] border-b border-black/10">

          {/* Buttons Row */}
          <div className="flex flex-wrap justify-center items-center gap-[15px] mb-[20px]">
            <a
              href="#locations"
              className="book-appointment-btn inline-flex items-center gap-2 bg-[#0595C4] hover:bg-[#047aa2] text-white px-6 py-3 rounded-[14px] font-semibold text-sm shadow-sm transition-all duration-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512" aria-hidden="true">
                <path d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z" />
              </svg>
              <span>Book Consultation</span>
            </a>

            <a
              href="tel:08065903127"
              className="inline-flex items-center gap-2 border border-[#0595C4] text-[#0595C4] hover:bg-[#0595C4] hover:text-white px-6 py-3 rounded-[14px] font-medium text-sm transition-all duration-200 bg-white"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512" aria-hidden="true">
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
              </svg>
              <span>Call Us Now</span>
            </a>
          </div>

          {/* Badges Bullet Row */}
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-[40px] text-sm font-medium text-[#2b2b2b]">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0595C4]"></span>
              <span>No-cost EMI Available</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0595C4]"></span>
              <span>Saturday &amp; Sunday OPD Available</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0595C4]"></span>
              <span>Online Consultations</span>
            </div>
          </div>

        </div>

        {/* Middle Section: 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[50px] py-[45px] text-left">

          {/* Column 1: Explore */}
          <div>
            <h4 className="text-[18px] font-bold text-[#192c27] mb-4">Explore</h4>
            <ul className="space-y-[12px] text-sm text-[#2b2b2b] font-normal">
              <li><a href="#Home" className="hover:text-[#0595C4] transition-colors">Home</a></li>
              <li><a href="#Testimonials" className="hover:text-[#0595C4] transition-colors">Testimonials</a></li>
              <li><a href="#Treatments" className="hover:text-[#0595C4] transition-colors">Treatment</a></li>
              <li><a href="#Doctors" className="hover:text-[#0595C4] transition-colors">Doctors</a></li>
              <li><a href="#Faqs" className="hover:text-[#0595C4] transition-colors">Faq&apos;s</a></li>
              <li><a href="#locations" className="hover:text-[#0595C4] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 2: Bangalore Locations */}
          <div>
            <h4 className="text-[18px] font-bold text-[#192c27] mb-4">Bangalore Locations</h4>
            <ul className="space-y-[12px] text-sm text-[#2b2b2b] font-normal">
              <li>
                <a href="https://maps.app.goo.gl/Y2V4W84xrxFaoy4i7" target="_blank" rel="noopener noreferrer" className="hover:text-[#0595C4] transition-colors">
                  Rajajinagar
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/3qDeMucneJiyW6pJ6" target="_blank" rel="noopener noreferrer" className="hover:text-[#0595C4] transition-colors">
                  Indiranagar
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/wMuEvTCyNGn3PBsz5" target="_blank" rel="noopener noreferrer" className="hover:text-[#0595C4] transition-colors">
                  Yelahanka
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/HCpSru7VLShcviqZA" target="_blank" rel="noopener noreferrer" className="hover:text-[#0595C4] transition-colors">
                  Chamrajpet
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Other Locations */}
          <div>
            <h4 className="text-[18px] font-bold text-[#192c27] mb-4">Other Locations</h4>
            <ul className="space-y-[12px] text-sm text-[#2b2b2b] font-normal">
              <li>
                <a href="https://maps.app.goo.gl/srDTCxxmoa4u3T5T8" target="_blank" rel="noopener noreferrer" className="hover:text-[#0595C4] transition-colors">
                  Hubballi
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/KZrRv2ALsFe6K9ro9" target="_blank" rel="noopener noreferrer" className="hover:text-[#0595C4] transition-colors">
                  Mangalore
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/9PQqvqg45Q8rkWMu7" target="_blank" rel="noopener noreferrer" className="hover:text-[#0595C4] transition-colors">
                  Mumbai
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/48pHQEDQH792futD6" target="_blank" rel="noopener noreferrer" className="hover:text-[#0595C4] transition-colors">
                  Delhi
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/jV2EJm74rZAiMoaR7" target="_blank" rel="noopener noreferrer" className="hover:text-[#0595C4] transition-colors">
                  Lucknow
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-[18px] font-bold text-[#192c27] mb-4">Contact</h4>
            <div className="space-y-[12px] text-sm text-[#2b2b2b]">
              <p className="font-semibold">
                <a href="tel:08065903127" className="hover:text-[#0595C4] transition-colors">08065903127</a>
              </p>
              <p>
                <a href="mailto:support@praanavaidya.com" className="hover:text-[#0595C4] transition-colors">
                  support@praanavaidya.com
                </a>
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-[10px] pt-2">
                <a
                  href="https://www.facebook.com/people/Praanavaidya/100086202962051/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[34px] h-[34px] rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/@praanavaidya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[34px] h-[34px] rounded-full bg-[#cd201f] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                  aria-label="Youtube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 576 512">
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/praanavaidya.hospitals/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[34px] h-[34px] rounded-full bg-[#262626] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright & Credit */}
        <div className="pt-[25px] border-t border-black/10 flex flex-col sm:flex-row items-center justify-between text-sm font-semibold text-[#2b2b2b] gap-2">
          <p>Copyright © 2025 Praanavaidya</p>
          <p>
            <a
              href="https://advaitlabs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0595C4] transition-colors"
            >
              Designed by Advaitlabs
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
