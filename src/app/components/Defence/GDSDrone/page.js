import React from 'react';
import Image from 'next/image';

// Import your images here - update these paths according to your project structure
import droneCase from '/images/drone-case.jpg'; // Update path
import tabletInterface from '/images/tablet-interface.jpg'; // Update path
import phoneInterface from '/images/phone-interface.jpg'; // Update path
import networkDiagram from '/images/network-diagram.jpg'; // Update path
import droneIcon from '/images/drone-icon.svg'; // Update path

const GDSDrones = () => {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden relative">
      {/* Decorative diagonal elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gray-300 transform rotate-45 -translate-x-16 -translate-y-16"></div>
      <div className="absolute top-20 right-10 w-24 h-2 bg-gray-300 transform rotate-45"></div>
      <div className="absolute bottom-20 right-0 w-40 h-40 bg-gray-200 transform rotate-45 translate-x-20 translate-y-20"></div>
      <div className="absolute bottom-10 left-10 w-16 h-2 bg-gray-300 transform -rotate-45"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-left mb-8">
          <p className="text-gray-600 text-sm uppercase tracking-wide mb-2">
            GUNSHOT DETECTION SYSTEM
          </p>
          <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-6">
            GDS DRONES
          </h1>
          <p className="text-gray-600 max-w-md leading-relaxed">
            Rattler is our 5 inch FPV Drone, built around the intrepid minds FPV parts 
            ecosystem to allow the platform to configured with the ideal system based 
            on the use case requirements.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Features and Network Diagram */}
          <div className="space-y-8">
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Flight Time */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 6.26L18 4L16.74 9.09L22 10L17.74 12L22 14L16.74 14.91L18 20L13.09 17.74L12 22L10.91 17.74L6 20L7.26 14.91L2 14L6.26 12L2 10L7.26 9.09L6 4L10.91 6.26L12 2Z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Flight Time 30-45 mins</p>
                </div>
              </div>

              {/* Speed */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">flying at speeds up to 120 kph</p>
                </div>
              </div>

              {/* Range */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Range 7km+</p>
                </div>
              </div>

              {/* Wind Speed */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 10a1 1 0 0 1-1-1 1 1 0 0 1 1-1h8a2 2 0 0 0 2-2 2 2 0 0 0-2-2c-.55 0-1.05.22-1.41.59a.996.996 0 0 1-1.41 0c-.39-.39-.39-1.02 0-1.41C10.09 2.26 11 2 12 2a4 4 0 0 1 4 4 4 4 0 0 1-4 4H4zm15 4a1 1 0 0 1 1 1 1 1 0 0 1-1 1H5a1 1 0 0 1-1-1 1 1 0 0 1 1-1h14zm-2 4a1 1 0 0 1 1 1 1 1 0 0 1-1 1H3a1 1 0 0 1-1-1 1 1 0 0 1 1-1h14z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">flying in wind speeds 35 knots</p>
                </div>
              </div>

              {/* Temperature */}
              <div className="flex items-center space-x-3 col-span-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-2V5c0-.55.45-1 1-1s1 .45 1 1v6h-2z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Operating in temperatures -20C to +50C</p>
                </div>
              </div>
            </div>

            {/* Network Diagram */}
            <div className="bg-orange-500 rounded-lg p-8 relative overflow-hidden">
              {/* Background network image */}
              <div className="absolute inset-0 opacity-30">
                <Image
                  src={networkDiagram}
                  alt="Network connectivity diagram"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              
              <div className="relative z-10">
                {/* Network nodes and connections */}
                <div className="grid grid-cols-4 gap-4 items-center">
                  {/* Mobile devices */}
                  <div className="space-y-4">
                    <div className="bg-white bg-opacity-20 rounded p-2 relative">
                      <div className="w-8 h-12 bg-white rounded-sm mx-auto flex items-center justify-center">
                        <Image
                          src={droneIcon}
                          alt="Mobile device"
                          width={16}
                          height={20}
                          className="w-4 h-5 opacity-70"
                        />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4">
                        <div className="w-full h-full bg-white rounded-full opacity-60"></div>
                        <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-40"></div>
                      </div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded p-2 relative">
                      <div className="w-8 h-12 bg-white rounded-sm mx-auto flex items-center justify-center">
                        <Image
                          src={droneIcon}
                          alt="Mobile device"
                          width={16}
                          height={20}
                          className="w-4 h-5 opacity-70"
                        />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4">
                        <div className="w-full h-full bg-white rounded-full opacity-60"></div>
                        <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-40"></div>
                      </div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded p-2 relative">
                      <div className="w-8 h-12 bg-white rounded-sm mx-auto flex items-center justify-center">
                        <Image
                          src={droneIcon}
                          alt="Mobile device"
                          width={16}
                          height={20}
                          className="w-4 h-5 opacity-70"
                        />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4">
                        <div className="w-full h-full bg-white rounded-full opacity-60"></div>
                        <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-40"></div>
                      </div>
                    </div>
                  </div>

                  {/* Connection lines */}
                  <div className="flex items-center justify-center">
                    <div className="space-y-2">
                      <div className="h-px w-8 bg-white"></div>
                      <div className="h-px w-8 bg-white"></div>
                      <div className="h-px w-8 bg-white"></div>
                    </div>
                    <div className="w-2 h-px bg-white"></div>
                  </div>

                  {/* Central hub */}
                  <div className="flex justify-center">
                    <div className="bg-white bg-opacity-20 rounded p-3">
                      <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                        <Image
                          src={droneIcon}
                          alt="Central hub"
                          width={24}
                          height={16}
                          className="w-6 h-4 opacity-70"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Laptop */}
                  <div className="flex justify-center">
                    <div className="bg-white bg-opacity-20 rounded p-2">
                      <div className="w-12 h-8 bg-white rounded-t flex items-center justify-center">
                        <Image
                          src={droneIcon}
                          alt="Laptop computer"
                          width={20}
                          height={16}
                          className="w-5 h-4 opacity-70"
                        />
                      </div>
                      <div className="w-16 h-1 bg-white rounded-b mx-auto -mt-px"></div>
                    </div>
                  </div>
                </div>

                {/* Central connection point */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
            </div>

            {/* Contact Button */}
            <div className="flex justify-start">
              <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="space-y-8">
            {/* Drone Case */}
            <div className="flex justify-center">
              <div className="bg-white rounded-lg p-6 shadow-lg max-w-md relative">
                <Image
                  src={droneCase}
                  alt="GDS Drone Case - Professional drone storage and control system"
                  width={320}
                  height={240}
                  className="w-80 h-60 object-cover rounded-lg mx-auto"
                  priority
                />
              </div>
            </div>

            {/* Mobile Interfaces */}
            <div className="flex justify-center space-x-8">
              {/* Tablet */}
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <Image
                  src={tabletInterface}
                  alt="Tablet interface showing drone control map"
                  width={160}
                  height={208}
                  className="w-40 h-52 object-cover rounded-lg"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-2 shadow-lg">
                  <Image
                    src={phoneInterface}
                    alt="Mobile app interface for drone control"
                    width={128}
                    height={224}
                    className="w-32 h-56 object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-200 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GDSDrones;