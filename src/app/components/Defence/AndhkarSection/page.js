import React from "react";
import droneImage from "../../../../../public/assets/img/defence/andhkar-img.png";
import Image from "next/image";

import icon1 from "../../../../../public/assets/img/defence/icon1.png";
import icon2 from "../../../../../public/assets/img/defence/icon2.png";
import icon3 from "../../../../../public/assets/img/defence/iicon3.png";
import icon4 from "../../../../../public/assets/img/defence/icon4.png";
import icon5 from "../../../../../public/assets/img/defence/icon5.png";
import icon6 from "../../../../../public/assets/img/defence/icon6.png";

const AndhkarSection = () => {
  const features = [
    {
      icon: icon1,
      label: "Flight Time 30-45 mins",
    },
    {
      icon: icon2,
      label: "flying at speeds up to 120 kph",
    },
    {
      icon: icon3,
      label: "Range 35km+",
    },
    {
      icon: icon4,
      label: "flying in wind speeds 35 knots",
    },
    {
      icon: icon5,
      label: "Operating in temperatures -20C to +50C",
    },
  ];

  const navigationTabs = [
    { name: "DV ANDHKAAR", active: true },
    { name: "STARLOCK", active: false },
    { name: "VANRAKSHAK", active: false },
    { name: "SURAKHSHA VEIL", active: false },
    { name: "KAVACH", active: false },
  ];

  return (
    <div className="min-h-screen bg-black p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start mb-8 md:mb-12">
          {/* Left Column - Drone Image */}
          <div className="order-1 lg:order-1 mt-8 sm:mt-12 md:mt-16 lg:mt-36 xl:mt-40">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={droneImage}
                alt="DV Andhkaar Drone"
                className="w-full h-auto aspect-video object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Column - Header, Description and Features */}
          <div className="order-2 lg:order-2 space-y-6">
            {/* Header */}
            <div className="text-left mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <p className="text-[16px] md:text-[16px] text-[#F4F4F4] uppercase tracking-wider mb-2">
                ANTI DRONE CLOAK
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                DV ANDHKAAR
              </h1>
            </div>

            {/* Description */}
            <div className="text-left">
              <p className="text-white text-sm md:text-[18px] lg:text-[18px] leading-relaxed mb-6 md:mb-8">
                DroneVerse's cutting-edge FPV (First Person View) drones
                deliver real-time situational awareness, empowering troops in
                asymmetric warfare. From tactical surveillance to high-speed
                ops, they redefine control, clarity, and command on the
                battlefield.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 md:space-x-4 w-full max-w-full ${
                    index === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={feature.icon}
                      alt={feature.label}
                      height={48}
                      width={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm md:text-base lg:text-lg">
                      {feature.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Button - Centered */}
        <div className="mb-8 md:mb-12 text-center">
          <button className="bg-[#FFB801] text-black font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-lg transition-colors duration-200 shadow-sm text-sm md:text-base">
            Contact Us
          </button>
        </div>

        {/* Navigation Tabs - Horizontal Scrollable */}
        <div className="relative">
          {/* All screen sizes: Scrollable container */}
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
            <div className="flex gap-3 min-w-max">
              {navigationTabs.map((tab, index) => (
                <button
                  key={index}
                  className={`
                    w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] xl:w-[260px] h-[60px] sm:h-[68px] md:h-[76px] lg:h-[82px] xl:h-[86px] border px-3 sm:px-4 md:px-6 py-3 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-semibold transition-colors duration-200 rounded-tr-3xl whitespace-nowrap flex-shrink-0
                    ${
                      tab.active
                        ? "bg-gray-300 border-gray-300 text-black cursor-not-allowed"
                        : "border-white text-white hover:bg-white hover:text-black"
                    }
                  `}
                  disabled={tab.active}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default AndhkarSection;