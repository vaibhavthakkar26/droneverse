import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col font-poppins">
      {/* Main Content Area */}
      <main className="flex-1 bg-[#fef7e0] relative flex items-center justify-center min-h-[calc(100vh-80px)] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-10">
          <div className="absolute w-[150px] h-[150px] bg-[rgba(255,184,1,0.05)] rounded-full top-[20%] left-[8%] animate-float-1"></div>
          <div className="absolute w-[100px] h-[100px] bg-[rgba(255,184,1,0.04)] rounded-full top-[65%] right-[12%] animate-float-2"></div>
          <div className="absolute w-[80px] h-[80px] bg-[rgba(255,184,1,0.06)] rounded-full top-[30%] right-[20%] animate-float-3"></div>
          <div className="absolute w-[120px] h-[60px] bg-[rgba(255,184,1,0.03)] rounded-[30px] top-[75%] left-[15%] animate-float-4"></div>
          <div className="absolute w-[180px] h-[80px] bg-[rgba(255,184,1,0.025)] rounded-[40px] top-[12%] right-[3%] animate-float-5"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-20 text-center max-w-4xl px-8 py-12 animate-fade-in-up">
          {/* Central Logo */}
          <div className="mb-12">
            <Image
              src="/assets/logo/black-logo.svg"
              alt="Droneverse Logo"
              width={350}
              height={70}
              className="w-[350px] h-auto max-w-full mx-auto md:w-[280px] sm:w-[220px]"
              priority
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-4xl sm:text-3xl font-extrabold text-[#1a1a1a] mb-8 leading-none tracking-tight">
            Coming soon!
          </h1>

          {/* Description */}
          <p className="text-2xl md:text-xl sm:text-lg font-medium text-[#2d2d2d] leading-relaxed mb-16 max-w-3xl mx-auto">
            Get ready to elevate your experience with DroneVerse -<br />
            Unleashing Innovation in Aerial Mastery.
          </p>

          {/* Social Media Section */}
          <div className="mt-8">
            <p className="text-lg md:text-base font-semibold text-[#2d2d2d] mb-8">
              Stay Connected. Stay informed! Follow us on Social media.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex justify-center gap-6 flex-wrap">
              <a 
                href="#" 
                className="flex items-center justify-center w-14 h-14 bg-[#1a1a1a] text-[#fef7e0] rounded-full text-xl transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-[#1a1a1a] hover:-translate-y-1 hover:shadow-lg hover:shadow-[rgba(255,184,1,0.4)] md:w-12 md:h-12 md:text-lg sm:w-11 sm:h-11 sm:text-base" 
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-14 h-14 bg-[#1a1a1a] text-[#fef7e0] rounded-full text-xl transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-[#1a1a1a] hover:-translate-y-1 hover:shadow-lg hover:shadow-[rgba(255,184,1,0.4)] md:w-12 md:h-12 md:text-lg sm:w-11 sm:h-11 sm:text-base" 
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-14 h-14 bg-[#1a1a1a] text-[#fef7e0] rounded-full text-xl transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-[#1a1a1a] hover:-translate-y-1 hover:shadow-lg hover:shadow-[rgba(255,184,1,0.4)] md:w-12 md:h-12 md:text-lg sm:w-11 sm:h-11 sm:text-base" 
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-14 h-14 bg-[#1a1a1a] text-[#fef7e0] rounded-full text-xl transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-[#1a1a1a] hover:-translate-y-1 hover:shadow-lg hover:shadow-[rgba(255,184,1,0.4)] md:w-12 md:h-12 md:text-lg sm:w-11 sm:h-11 sm:text-base" 
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
