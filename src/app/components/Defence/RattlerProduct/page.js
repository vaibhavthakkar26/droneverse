import React from 'react';
import droneImage from '../../../../../public/assets/img/defence/rattler-drone.png'; 
import technicalDrawing from '../../../../../public/assets/img/defence/rattler-drawing.png'; 
import Image from 'next/image';

const RattlerProduct = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">FPV DRONES</p>
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">DV RATTLER</h1>
          <p className="text-gray-600 text-base md:text-lg max-w-md leading-relaxed">
            Rattler is our 5 inch FPV Drone, built around the intrepid minds FPV parts 
            ecosystem to allow the platform to configured with the ideal system based 
            on the use case requirements.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          {/* Left Column - Technical Drawing */}
          <div className="order-2 lg:order-1">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <Image 
                src={technicalDrawing} 
                alt="DV Rattler Technical Drawing" 
                className="w-full h-auto max-h-80 object-contain"
              />
            </div>
          </div>

          {/* Right Column - Drone Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <Image
                src={droneImage} 
                alt="DV Rattler Drone" 
                className="w-full h-auto max-h-96 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <div className="mb-12">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-sm">
            Contact Us
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <button className="border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors duration-200">
            DV COBRA
          </button>
          <button className="bg-gray-300 text-black px-8 py-3 rounded-lg font-semibold cursor-not-allowed">
            DV RATTLER
          </button>
          <button className="border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors duration-200">
            DV VIPER
          </button>
        </div>
      </div>
    </div>
  );
};

export default RattlerProduct;