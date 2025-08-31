"use client";
import React, { useState } from "react";
import Image from "next/image";
import IndiaMap from "../../../../../public/assets/img/training/Vector.png";

const OurPresenceSection = () => {
  const [activeTab, setActiveTab] = useState("Office");

  return (
    <div className="relative max-w-7xl mx-auto py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-[36px] font-bold text-black mb-4 font-[poppins]">
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
      <div className="flex justify-center mb-12">
        <div className="bg-white rounded-lg p-2 shadow-md border border-black flex">
          {["Office", "Institute", "R&D Center"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[16px] px-6 py-2 rounded-md font-medium w-[179px] ${
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

      {/* Map Image */}
      <div className="flex justify-center">
        <Image
          src={IndiaMap}
          alt="India Map"
          className="w-full max-w-7xl h-auto object-contain opacity-80"
          priority
        />
      </div>
    </div>
  );
};

export default OurPresenceSection;
