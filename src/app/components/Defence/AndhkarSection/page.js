import React from 'react';
import droneImage from '../../../../../public/assets/img/defence/andhkar-img.png'; 
import Image from 'next/image';

const AndhkarSection = () => {
  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">ANTI DRONE CLOAK</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">DV ANDHKAAR</h1>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            DroneVerse's cutting-edge FPV (First Person View) drones deliver real-time 
            situational awareness, empowering troops in asymmetric warfare. From 
            tactical surveillance to high-speed ops, they redefine control, clarity, and 
            command on the battlefield.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
          {/* Left Column - Drone Image */}
          <div className="order-1">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={droneImage} 
                alt="DV Andhkaar Drone" 
                className="w-full h-auto aspect-video object-contain"
              />
              
            </div>
          </div>

          {/* Right Column - Specifications */}
          <div className="order-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Flight Time */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Flight Time</p>
                  <p className="text-white font-semibold">30-45 mins</p>
                </div>
              </div>

              {/* Speed */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">flying at speeds up to</p>
                  <p className="text-white font-semibold">120 kph</p>
                </div>
              </div>

              {/* Range */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Range</p>
                  <p className="text-white font-semibold">35km+</p>
                </div>
              </div>

              {/* Wind Speed */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a3 3 0 00-3-3V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">flying in wind speeds</p>
                  <p className="text-white font-semibold">35 knots</p>
                </div>
              </div>

              {/* Temperature */}
              <div className="flex items-center space-x-3 md:col-span-2">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v4a6 6 0 1012 0V6a4 4 0 00-4-4zM8 6a2 2 0 114 0v6.5a4 4 0 11-4 0V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Operating in temperatures</p>
                  <p className="text-white font-semibold">-20C to +50C</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <div className="mb-12 text-center lg:text-left">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-sm">
            Contact Us
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <button className="bg-gray-300 text-black px-8 py-3 rounded-lg font-semibold cursor-not-allowed">
            DV ANDHKAAR
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-200">
            STARLOCK
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-200">
            VANRAKSHAK
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-200">
            SURAKHSHA VEIL
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-200">
            KAVACH
          </button>
        </div>
      </div>
    </div>
  );
};

export default AndhkarSection;