import React, { useState } from "react";
import droneImage from "../../../../../public/assets/img/defence/andhkar-img.png";
import Image from "next/image";
import leftWing from "../../../../../public/assets/img/defence/leftWings.png";
import PatternBg from '../../../../../public/assets/img/defence/PatternDark.png'
import icon1 from "../../../../../public/assets/img/defence/icon1.png";
import icon2 from "../../../../../public/assets/img/defence/icon2.png";
import icon3 from "../../../../../public/assets/img/defence/iicon3.png";
import icon4 from "../../../../../public/assets/img/defence/icon4.png";
import icon5 from "../../../../../public/assets/img/defence/icon5.png";
import icon6 from "../../../../../public/assets/img/defence/icon6.png";
import shapeBtn from '../../../../../public/assets/img/Defence2/Subtract.png'
import leftFlap from '../../../../../public/assets/img/Defence2/leftWing.png'
import DefenceDataSection from "../../DefenceDataSection/page";

const AndhkarSection = () => {

  const [showMore, setShowMore] = useState(false)

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
    //   bg-center bg-repeat-y bg-cover bg-blend-luminosity   style={{ backgroundImage: `url(${PatternBg.src})` }}
    <div  className='relative pt-8 pb-0 bg-black bg-center bg-repeat-y mix-blend-luminosity bg-blend-luminosity bg-size-[100%]' style={{ backgroundImage: `url(${PatternBg.src})` }}>
      {/* <div className="absolute top-0 left-0 w-full h-full">
        <Image src={PatternBg} alt='bg' className="opacity-60 bg-blend-luminosity mix-blend-luminosity" />
      </div> */}
      <div className='relative'>
        <Image src={leftFlap} alt='left wing' className='absolute left-0 hidden object-contain md:block md:w-9 lg:w-16 top-20' />
      </div>
      <div className="pt-10 mx-auto pb-18 max-w-7xl px-4 lg:px-8 relative z-[1]">
        {/* Main Content Grid */}
        <div className="grid items-start grid-cols-1 gap-2 mb-8 lg:grid-cols-5 md:mb-8">
          {/* Left Column - Drone Image */}
          <div className="order-1 col-span-2 mt-8 lg:order-1 sm:mt-12 md:mt-16 lg:mt-36 xl:mt-40">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={droneImage}
                alt="DV Andhkaar Drone"
                className="object-contain w-full h-auto aspect-video"
                priority
              />
            </div>
          </div>

          {/* Right Column - Header, Description and Features */}
          <div className="order-2 col-span-3 space-y-6 lg:order-2">
            {/* Header */}
            <div className="mt-6 mb-6 text-left sm:mb-8 md:mb-10 lg:mb-12">
              <p className="text-[16px] md:text-[16px] text-[#F4F4F4] uppercase tracking-wider mb-2">
                ANTI DRONE CLOAK
              </p>
              <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl lg:text-6xl md:mb-6">
                DV ANDHKAAR
              </h1>
            </div>

            {/* Description */}
            <div className="text-left">
              <p className="text-white text-sm md:text-[18px] lg:text-[18px] leading-relaxed mb-6 md:mb-8">
                DroneVerse's cutting-edge FPV (First Person View) drones deliver
                real-time situational awareness, empowering troops in asymmetric
                warfare. From tactical surveillance to high-speed ops, they
                redefine control, clarity, and command on the battlefield.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 md:space-x-4 w-full max-w-full ${index === 4 ? "sm:col-span-2" : ""
                    }`}
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 md:w-12 md:h-12">
                    <Image
                      src={feature.icon}
                      alt={feature.label}
                      height={48}
                      width={48}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white md:text-base lg:text-lg">
                      {feature.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {showMore && (
          <DefenceDataSection
            showKeyFeatures={true}
            showSpecifications={true}
            showNumeric={false}
            showIcons={false}
            showIcons2={true}
            showOperatingModes={false}
            showGunViolence={false}
            myTitleColor="text-white"
            myTablebg="bg-[#1A1A1A]"
            myTableHeader="bg-[#5F5F5F]"
            myTableHeaderTitle='text-white'
            myTableBodyTitle='text-white'
            myTableBB='border-[#5F5F5F66]'
            featureBg="bg-[#303030]"
            featureBorder="border-[#303030]"
            featureText="text-white"
          />
        )}

        {/* Contact Button */}
        <div className="mt-8 space-x-6">
          <button className="border border-[#FFB801] hover:border-[#FFB801] bg-[#FFB801] hover:bg-black text-black hover:text-white font-medium px-6 md:px-8 py-2 md:py-2.5 rounded-lg transition-colors duration-200 shadow-sm text-sm md:text-base cursor-pointer">
            Contact Us
          </button>
          <button
            onClick={() => setShowMore(!showMore)}
            className="border border-[#FFB801] hover:bg-[#FFB801] text-white hover:text-black font-medium px-6 md:px-8 py-2 md:py-2.5 rounded-lg transition-colors duration-200 shadow-sm text-sm md:text-base cursor-pointer"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>

        {/* Contact Button - Centered
        <div className="mt-16 mb-0 space-x-6 md:mb-0">
          <button className="bg-[#FFB801] text-black font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-lg transition-colors duration-200 shadow-sm text-sm md:text-base">
            Contact Us
          </button>
          <button className="bg-black border border-[#FFB801] text-[#FFB801] hover:bg-[#FFB801] hover:text-black font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-lg transition-colors duration-200 shadow-sm text-sm md:text-base">
            Show More
          </button>
        </div> */}

        {/* Navigation Tabs - Horizontal Scrollable */}
        <div className="relative mt-6">
          {/* All screen sizes: Scrollable container */}
          <div className="flex gap-3 pb-2 overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 min-w-max">
              {navigationTabs.map((tab, index) => (
                <button
                  key={index}
                  className={`
                   group w-60 lg:w-64 xl:w-72 bg-white hover:bg-[#E6E6E6] active:hover:bg-[#E6E6E6] duration-300 border-2 border-black hover:border-[#E6E6E6] text-base md:text-lg lg:text-xl xl:text-2xl rounded-tr-4xl xl:rounded-tr-[40px] px-3 py-4 md:py-5 xl:py-6 relative snap-start cursor-pointer tracking-widest poppins-medium
                    ${tab.active
                      ? "bg-gray-300 border-gray-300 text-black cursor-not-allowed"
                      : "border-white text-black hover:bg-[#E6E6E6] hover:text-black"
                    }
                  `}
                  disabled={tab.active}
                >
                  <img
                    src={shapeBtn.src}
                    alt="icon"
                    className="absolute w-6 h-6 transition-opacity duration-300 opacity-0 left-px bottom-px group-hover:opacity-100"
                  />
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
