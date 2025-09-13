import React from 'react';
import Image from 'next/image';
import PatternBg from '../../../public/assets/img/comming-soon-bg.png'
import logo from '../../../public/assets/img/Comming-soon-logo.png'
import logoText from '../../../public/assets/img/Comming-soon-logo-text.png'
import { FaFacebook , FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function ComingSoonPage() {

  const socialIcon = [
    {
      name: "Facebook",
      icon: FaFacebook ,
      link: "https://www.facebook.com",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      link: "https://www.twitter.com",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-poppins pt-18">
      {/* Main Content Area */}
      <main className="flex-1 bg-[#FFF1CC] relative flex items-center justify-center  overflow-hidden" >
        {/* Background Pattern */}
        <div className="absolute top-0 bottom-0 left-0 right-0 z-10 pointer-events-none">
          <div className="absolute w-[150px] h-[150px] bg-[rgba(255,184,1,0.05)] rounded-full top-[20%] left-[8%] animate-float-1"></div>
          <div className="absolute w-[100px] h-[100px] bg-[rgba(255,184,1,0.04)] rounded-full top-[65%] right-[12%] animate-float-2"></div>
          <div className="absolute w-[80px] h-[80px] bg-[rgba(255,184,1,0.06)] rounded-full top-[30%] right-[20%] animate-float-3"></div>
          <div className="absolute w-[120px] h-[60px] bg-[rgba(255,184,1,0.03)] rounded-[30px] top-[75%] left-[15%] animate-float-4"></div>
          <div className="absolute w-[180px] h-[80px] bg-[rgba(255,184,1,0.025)] rounded-[40px] top-[12%] right-[3%] animate-float-5"></div>
        </div>

        <Image src={PatternBg} alt='patternbg' className='absolute top-0 left-0 w-full -h-full opacity-20' />

        {/* Content Container */}
        <div className="relative z-20 max-w-4xl px-8 py-12 text-center animate-fade-in-up">
          {/* Central Logo */}
          <div className="flex flex-col items-center justify-center mb-6 text-center xl:mb-20">
            {/* <Image
              src="/assets/logo/black-logo.svg"
              alt="Droneverse Logo"
              width={350}
              height={70}
              className="w-[350px] h-auto max-w-full mx-auto md:w-[280px] sm:w-[220px]"
              priority
            /> */}
            <Image src={logo} alt="logo" className='object-contain mb-1.5 w-15' />
            <Image src={logoText} alt="logoText" className='object-contain' />

          </div>

          {/* Main Heading */}
          <h1 className="mb-4 text-4xl font-semibold leading-none tracking-tight text-black md:text-5xl sm:text-4xl">
            Coming soon!
          </h1>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-base font-normal leading-relaxed text-black md:mb-16 md:text-xl sm:text-lg md:10">
            Get ready to elevate your experience with DroneVerse -<br />
            Unleashing Innovation in Aerial Mastery.
          </p>

          {/* Social Media Section */}
          <div className="mt-8">
            <p className="text-base md:text-base font-normal text-[#2d2d2d] mb-6">
              Stay Connected. Stay informed! Follow us on Social media.
            </p>

            {/* Social Media Icons */}
            <div className="flex flex-wrap justify-center gap-10">
              {socialIcon.map(({ name, icon: Icon, link }) => (
                <a key={name} href={link} className="flex items-center justify-center  text-[#080114] rounded-full transition-all duration-300 hover:text-[var(--color-primary)] hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon className='text-3xl' />
                </a>
              ))}

              {/* <a
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
              </a> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
