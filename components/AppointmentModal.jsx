"use client";

import { useState, useEffect } from 'react';

export default function AppointmentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Find closest link, button, or element with class 'book-appointment-btn'
      const target = e.target.closest('a, button, .book-appointment-btn');
      if (target) {
        const text = target.textContent?.toLowerCase() || '';
        const href = target.getAttribute('href') || '';
        const id = target.getAttribute('id') || '';
        
        if (
          target.classList.contains('book-appointment-btn') || 
          text.includes('book appointment') || 
          text.includes('book now') || 
          text.includes('book consultation') ||
          href === '#locations' ||
          id === 'dynamiclink-button' ||
          id === 'dynamiclink-buttontwo'
        ) {
          e.preventDefault();
          setIsOpen(true);
          setIsSubmitted(false);
          setFullName('');
          setPhoneNumber('');
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  if (!isOpen) return null;

  const handleNameChange = (e) => {
    const val = e.target.value;
    if (val.startsWith(' ')) return;
    if (val.includes('  ')) return;
    const cleanVal = val.replace(/[^a-zA-Z\s]/g, '');
    setFullName(cleanVal);
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value;
    if (val.startsWith(' ')) return;
    const cleanVal = val.replace(/\D/g, '').slice(0, 10);
    setPhoneNumber(cleanVal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName.trim().length < 2) {
      alert("Please enter a valid name (at least 2 letters).");
      return;
    }
    if (phoneNumber.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    
    // Simulate successful form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99999] flex items-center justify-center p-4 animate-fadeIn">
      {/* Modal Box */}
      <div className="bg-white rounded-[24px] max-w-[480px] w-full p-6 sm:p-8 relative shadow-2xl flex flex-col items-center text-center animate-scaleUp">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 flex items-center justify-center transition-all duration-200 focus:outline-none"
          aria-label="Close modal"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!isSubmitted ? (
          <>
            {/* Header Icon */}
            <div className="w-16 h-16 rounded-full bg-[#0595C4] text-white flex items-center justify-center mb-5 shadow-lg shadow-[#0595C4]/20">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-2xl font-bold text-[#192c27] mb-2 leading-tight">
              Book Your Appointment
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Fill in your details and we&apos;ll get back to you shortly
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 text-left">
              <div>
                <label className="text-[13px] font-bold text-[#192c27] block mb-1.5">
                  Full Name *
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="Enter your full name" 
                  value={fullName}
                  onChange={handleNameChange}
                  className="w-full px-4 py-3 rounded-[12px] bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#0595C4] focus:bg-white text-[14px] text-gray-800 transition-all font-medium"
                />
              </div>

              <div>
                <label className="text-[13px] font-bold text-[#192c27] block mb-1.5">
                  Phone Number *
                </label>
                <div className="flex gap-2">
                  <div className="flex items-center justify-center bg-gray-50 border border-gray-200 rounded-[12px] px-3.5 text-[14px] text-gray-600 font-bold">
                    +91
                  </div>
                  <input 
                    type="tel" 
                    required
                    pattern="[0-9]{10}"
                    placeholder="Enter your phone number" 
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    className="flex-1 px-4 py-3 rounded-[12px] bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#0595C4] focus:bg-white text-[14px] text-gray-800 transition-all font-medium"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#0595C4] hover:bg-[#047aa2] text-white py-3.5 px-6 rounded-[16px] font-bold text-[15px] flex items-center justify-center gap-2 transition-all duration-200 mt-2 shadow-lg shadow-[#0595C4]/15 active:scale-[0.98]"
              >
                <span>Book Appointment</span>
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </>
        ) : (
          <div className="py-8 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#7ed957] text-white flex items-center justify-center shadow-lg shadow-[#7ed957]/20 animate-bounce">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#192c27]">
              Appointment Requested!
            </h3>
            <p className="text-sm text-gray-500 max-w-[320px]">
              Thank you {fullName}. We have received your request and will call you shortly.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
