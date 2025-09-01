"use client";
import React, { useState } from "react";
import Image from "next/image";
import IndiaMap2 from "../../../../../public/assets/img/training/PresenceMap.png";
import MapPin from "../../../../../public/assets/img/training/locations.png";

const LOCATIONS = {
  Office: [
    { name: "Bhopal", top: "240px", left: "44%", address: "Bopal" },
    { name: "Delhi", top: "30px", left: "34%", address: "Delhi" },
    {
      name: "Gurugram",
      top: "130px",
      left: "44%",
      address:
        "70A, Delhi - Jaipur Expy, Block A, Sector 34, Gurugram, Haryana 122101",
    },
    { name: "Bihar", top: "120px", left: "60%", address: "Bihar" },
    { name: "Bangalore", bottom: "130px", left: "33%", address: "Banglore" },
    { name: "Tamil Nadu", bottom: "15px", left: "42%", address: "Tamil Nadu" },
  ],
  Institute: [
    { name: "IIT Delhi", top: "30%", left: "48%", address: "IIT Delhi" },
    { name: "IIT Bombay", top: "55%", left: "30%", address: "IIT Bombay" },
  ],
  "R&D Center": [
    { name: "Bangalore R&D", top: "70%", left: "45%", address: "Banglore R&D" },
    { name: "Hyderabad R&D", top: "65%", left: "50%", address: "Hydrabad R&D" },
  ],
};

const OurPresenceSection = () => {
  const [activeTab, setActiveTab] = useState("Office");

  return (
    <div className="relative px-4 py-16 mx-auto bg-no-repeat bg-cover max-w-7xl">
      {/* Header */}
      <div className="mb-12 text-center bg-white/80">
        <h2 className="text-[36px] font-bold text-black mb-4 font-[poppins] poppins-bold">
          Our presence
        </h2>
        <p className="text-black text-[16px] poppins-medium max-w-3xl mx-auto">
          Welcome to DroneVerse, where we redefine India’s drone industry.
          Driven by a vision to create world-class drone pilots, we go above &
          beyond in everything we do. Recognized in the esteemed World Book of
          Records.
        </p>
      </div>

      {/* Tabs */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="relative z-10 flex w-full max-w-md p-1 bg-white border border-black rounded-lg shadow-md sm:p-2 sm:max-w-lg">
            {["Office", "Institute", "R&D Center"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm sm:text-[16px] px-3 sm:px-6 py-2 rounded-md font-medium flex-1 transition-colors ${
                  activeTab === tab
                    ? "bg-[#FFB801] text-black"
                    : "bg-transparent text-gray-600"
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
          className="object-contain w-full h-[800px] max-w-7xl opacity-20  -mt-52"
          priority
        />

        {/* Pins */}
        {LOCATIONS[activeTab]?.map((loc, idx) => (
          <div
            key={idx}
            className="absolute text-center transition duration-300 group"
            style={{
              top: loc.top,
              left: loc.left,
              bottom: loc.bottom,
              left: loc.left,
            }}
          >
            <Image src={MapPin} alt="Location Pin" className="w-12 mx-auto" />
            <p className="text-sm font-semibold text-black">{loc.name}</p>
            <div className="absolute left-16 top-[-10px] hidden group-hover:block bg-black text-white border border-gray-300 rounded-lg shadow-lg p-2 w-[200px] z-10 transition duration-300 before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-2 before:border-y-[6px] before:border-r-[8px] before:border-y-transparent before:border-r-black">
              {loc.address && (
                <p className="text-xs text-left ">{loc.address}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPresenceSection;
