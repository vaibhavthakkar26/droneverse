"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import IndiaMap2 from "../../../../../public/assets/img/training/PresenceMap.png";
import MapPin from "../../../../../public/assets/img/training/locations.png";

const LOCATIONS = {
  Office: [
    {
      name: "Bhopal",
      position: {
        default: { top: "45%", left: "27%" },
        sm: { top: "38%", left: "70px" },
        md: { top: "53%", left: "44%" },
        lg: { top: "38%", left: "22%" },
        xl: { top: "39%", left: "26%" },
      },
      address: "Bhopal",
    },
    {
      name: "Delhi",
      position: {
        default: { top: "57%", left: "31%" },
        sm: { top: "54%", left: "90px" },
        md: { top: "30%", left: "180px" },
        lg: { top: "57%", left: "25%" },
        xl: { top: "57%", left: "28%" },
      },
      address: "Delhi",
    },
    {
      name: "Gurugram",
      position: {
        default: { top: "42%", left: "45%" },
        sm: { top: "40%", left: "40%" },
        md: { top: "32%", left: "46%" },
        lg: { top: "42%", left: "46%" },
        xl: { top: "43%", left: "46%" },
      },
      address:
        "70A, Delhi - Jaipur Expy, Block A, Sector 34, Gurugram, Haryana 122101",
    },
    {
      name: "Bihar",
      position: {
        default: { top: "60%", left: "50%" },
        sm: { top: "57%", left: "48%" },
        md: { top: "40%", left: "60%" },
        lg: { top: "60%", left: "50%" },
        xl: { bottom: "30%", left: "52%" },
      },
      address: "Bihar",
    },
    {
      name: "Bangalore",
      position: {
        default: { bottom: "15%", left: "33%" },
        sm: { bottom: "12%", left: "23%" },
        md: { bottom: "13%", left: "33%" },
        lg: { bottom: "13%", left: "26%" },
        xl: { bottom: "15%", left: "29%" },
      },
      address: "Bangalore",
    },
    {
      name: "Tamil Nadu",
      position: {
        default: { bottom: "8%", left: "48%" },
        sm: { bottom: "4%", left: "41%" },
        md: { bottom: "5%", left: "42%" },
        lg: { bottom: "5%", left: "42%" },
        xl: { bottom: "5%", left: "42%" },
      },
      address: "Tamil Nadu",
    },
  ],
  Institute: [
    {
      name: "IIT Delhi",
      position: {
        default: { top: "50%", left: "48%" },
        sm: { top: "49%", left: "47%" },
        md: { top: "50%", left: "48%" },
        lg: { top: "50%", left: "48%" },
        xl: { top: "50%", left: "48%" },
      },
      address: "IIT Delhi",
    },
    {
      name: "IIT Bombay",
      position: {
        default: { top: "68%", left: "30%" },
        sm: { top: "67%", left: "29%" },
        md: { top: "68%", left: "30%" },
        lg: { top: "68%", left: "30%" },
        xl: { top: "68%", left: "30%" },
      },
      address: "IIT Bombay",
    },
  ],
  "R&D Center": [
    {
      name: "Bangalore R&D",
      position: {
        default: { bottom: "20%", left: "40%" },
        sm: { bottom: "19%", left: "39%" },
        md: { bottom: "20%", left: "40%" },
        lg: { bottom: "20%", left: "40%" },
        xl: { bottom: "20%", left: "40%" },
      },
      address: "Bangalore R&D",
    },
    {
      name: "Hyderabad R&D",
      position: {
        default: { bottom: "25%", left: "50%" },
        sm: { bottom: "24%", left: "49%" },
        md: { bottom: "25%", left: "50%" },
        lg: { bottom: "25%", left: "50%" },
        xl: { bottom: "25%", left: "50%" },
      },
      address: "Hyderabad R&D",
    },
  ],
};

// Utility function to get current screen size
const getBreakpoint = () => {
  const width = window.innerWidth;
  if (width < 640) return "sm";
  if (width < 768) return "md";
  if (width < 1024) return "lg";
  if (width < 1280) return "xl";
  return "default";
};

const OurPresenceSection = () => {
  const [activeTab, setActiveTab] = useState("Office");
  const [breakpoint, setBreakpoint] = useState("default");

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint());
    };

    handleResize(); // Set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative px-3 py-16 pb-0 mx-auto bg-no-repeat bg-cover max-w-7xl">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: 'linear-gradient(191.62deg, #ffffff 17.82%, rgba(255, 255, 255, 0.8) 43.66%, rgba(255, 255, 255, 0.95) 75.54%)'
        }}
      ></div>

      {/* Header */}
      <div className="relative z-10 mb-12 text-center bg-white/80">
        <h2 className="text-[36px] font-bold text-black mb-4 font-[poppins] poppins-bold">
          Our presence
        </h2>
        <p className="text-black text-[16px] poppins-medium max-w-3xl mx-auto">
          Welcome to DroneVerse, where we redefine India’s drone industry.
          Driven by a vision to create world-class drone pilots, we go above &amp;
          beyond in everything we do. Recognized in the esteemed World Book of
          Records.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-6 sm:mb-8">
        <div className="relative z-10 flex w-full max-w-md p-1 bg-white border border-[#FFBF1B] rounded-lg shadow-md sm:p-2 sm:max-w-lg lg:max-w-xl">
          {["Office", "Institute", "R&D Center"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm sm:text-base px-3 sm:px-6 py-3 rounded-md poppins-regular flex-1 transition-colors ${activeTab === tab
                ? "bg-[#FFB801] text-black"
                : "bg-transparent text-black"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="relative flex justify-center h-full">
        <Image
          src={IndiaMap2}
          alt="India Map"
          className="object-contain w-full h-full lg:h-[800px] max-w-7xl opacity-20"
          priority
        />

        {/* Pins */}
        {LOCATIONS[activeTab]?.map((loc, idx) => {
          const position = loc.position[breakpoint] || loc.position.default;

          return (
            <div
              key={idx}
              className="absolute text-center transition duration-300 group"
              style={{
                top: position.top,
                left: position.left,
                bottom: position.bottom,
              }}
            >
              <Image
                src={MapPin}
                alt="Location Pin"
                className="w-5 mx-auto sm:w-8 md:w-10 lg:w-12"
              />
              <p className="text-[8px] font-semibold text-black sm:text-xs md:text-sm">{loc.name}</p>
              <div className="absolute left-16 top-[-10px] hidden group-hover:block bg-black text-white border border-gray-300 rounded-lg shadow-lg p-2 w-[200px] z-10 transition duration-300 before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-2 before:border-y-[6px] before:border-r-[8px] before:border-y-transparent before:border-r-black">
                {loc.address && (
                  <p className="text-[10px] text-left md:text-xs">
                    {loc.address}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurPresenceSection;
