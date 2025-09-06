import React from 'react';
import Image from 'next/image';

// Import your images here - update these paths according to your project structure
import droneCase from '../../../../../public/assets/img/defence/drone-case.png'; // Update path
import tabletInterface from '../../../../../public/assets/img/defence/tablet-interface.png'
import phoneInterface from '../../../../../public/assets/img/defence/phone-interface.png'
import networkDiagram from '../../../../../public/assets/img/defence/network-diagram.png'
import droneIcon from '../../../../../public/assets/img/defence/drone.svg'; // Update path
import icon1 from '../../../../../public/assets/img/defence/icon1.png'
import icon2 from '../../../../../public/assets/img/defence/icon2.png'
import icon3 from '../../../../../public/assets/img/defence/iicon3.png'
import icon4 from '../../../../../public/assets/img/defence/icon4.png'
import icon5 from '../../../../../public/assets/img/defence/icon5.png'
import icon6 from '../../../../../public/assets/img/defence/icon6.png'
import leftWing from '../../../../../public/assets/img/defence/leftWings.png'
import fullWing from '../../../../../public/assets/img/defence/fullWings.png'
import Link from 'next/link';


const GDSDrones = () => {

  const gdsData = {
    title: "GDS DRONES",
    category: "Gunshot Detection System",
    description:
      "Rattler is our 5 inch FPV Drone, built around the intrepid minds FPV parts ecosystem to allow the platform to be configured with the ideal system based on the use case requirements.",

    mainImage: droneCase,

    features: [
      { text: "Flight Time 30-45 mins", icon: icon1 },
      { text: "Flying at speeds up to 120 kph", icon: icon2 },
      { text: "Range 7km+", icon: icon3 },
      { text: "Flying in wind speeds 35 knots", icon: icon5 },
      { text: "Operating in temperatures -20C to +50C", icon: icon6 },
    ],

    bottomSection: [
      { img: networkDiagram, alt: "Network Diagram", maxW: "w-[418px]" },
      { img: tabletInterface, alt: "Tablet Interface", maxW: "w-[233px]" },
      { img: phoneInterface, alt: "Phone Interface", maxW: "w-[337px]" },
    ],

    buttonText: "Contact Us",
    buttonLink: "/",
  };

  return (
    // <div className="relative min-h-screen overflow-hidden bg-gray-50">
    //   {/* Decorative diagonal elements */}
    //   {/* <div className="absolute top-0 left-0 w-32 h-32 transform rotate-45 -translate-x-16 -translate-y-16 bg-gray-300"></div>
    //   <div className="absolute w-24 h-2 transform rotate-45 bg-gray-300 top-20 right-10"></div>
    //   <div className="absolute right-0 w-40 h-40 transform rotate-45 translate-x-20 translate-y-20 bg-gray-200 bottom-20"></div>
    //   <div className="absolute w-16 h-2 transform -rotate-45 bg-gray-300 bottom-10 left-10"></div> */}

    //   <div className="container relative z-10 px-4 py-8 mx-auto">
    //     {/* Header */}
    //     <div className="mb-8 text-left">
    //       <p className="mb-2 text-sm tracking-wide text-gray-600 uppercase">
    //         GUNSHOT DETECTION SYSTEM
    //       </p>
    //       <h1 className="mb-6 text-6xl font-black text-gray-900 md:text-7xl">
    //         GDS DRONES
    //       </h1>
    //       <p className="max-w-md leading-relaxed text-gray-600">
    //         Rattler is our 5 inch FPV Drone, built around the intrepid minds FPV parts 
    //         ecosystem to allow the platform to configured with the ideal system based 
    //         on the use case requirements.
    //       </p>
    //     </div>

    //     {/* Main Content Grid */}
    //     <div className="grid items-start grid-cols-1 gap-8 lg:grid-cols-2">
    //       {/* Left Column - Features and Network Diagram */}
    //       <div className="space-y-8">
    //         {/* Features Grid */}
    //         <div className="grid grid-cols-2 gap-6">
    //           {/* Flight Time */}
    //           <div className="flex items-center space-x-3">
    //             <div className="flex items-center justify-center w-8 h-8">
    //               <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
    //                 <path d="M12 2L13.09 6.26L18 4L16.74 9.09L22 10L17.74 12L22 14L16.74 14.91L18 20L13.09 17.74L12 22L10.91 17.74L6 20L7.26 14.91L2 14L6.26 12L2 10L7.26 9.09L6 4L10.91 6.26L12 2Z"/>
    //               </svg>
    //             </div>
    //             <div>
    //               <p className="font-semibold text-gray-900">Flight Time 30-45 mins</p>
    //             </div>
    //           </div>

    //           {/* Speed */}
    //           <div className="flex items-center space-x-3">
    //             <div className="flex items-center justify-center w-8 h-8">
    //               <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
    //                 <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
    //               </svg>
    //             </div>
    //             <div>
    //               <p className="font-semibold text-gray-900">flying at speeds up to 120 kph</p>
    //             </div>
    //           </div>

    //           {/* Range */}
    //           <div className="flex items-center space-x-3">
    //             <div className="flex items-center justify-center w-8 h-8">
    //               <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
    //                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    //               </svg>
    //             </div>
    //             <div>
    //               <p className="font-semibold text-gray-900">Range 7km+</p>
    //             </div>
    //           </div>

    //           {/* Wind Speed */}
    //           <div className="flex items-center space-x-3">
    //             <div className="flex items-center justify-center w-8 h-8">
    //               <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
    //                 <path d="M4 10a1 1 0 0 1-1-1 1 1 0 0 1 1-1h8a2 2 0 0 0 2-2 2 2 0 0 0-2-2c-.55 0-1.05.22-1.41.59a.996.996 0 0 1-1.41 0c-.39-.39-.39-1.02 0-1.41C10.09 2.26 11 2 12 2a4 4 0 0 1 4 4 4 4 0 0 1-4 4H4zm15 4a1 1 0 0 1 1 1 1 1 0 0 1-1 1H5a1 1 0 0 1-1-1 1 1 0 0 1 1-1h14zm-2 4a1 1 0 0 1 1 1 1 1 0 0 1-1 1H3a1 1 0 0 1-1-1 1 1 0 0 1 1-1h14z"/>
    //               </svg>
    //             </div>
    //             <div>
    //               <p className="font-semibold text-gray-900">flying in wind speeds 35 knots</p>
    //             </div>
    //           </div>

    //           {/* Temperature */}
    //           <div className="flex items-center col-span-2 space-x-3">
    //             <div className="flex items-center justify-center w-8 h-8">
    //               <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
    //                 <path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-2V5c0-.55.45-1 1-1s1 .45 1 1v6h-2z"/>
    //               </svg>
    //             </div>
    //             <div>
    //               <p className="font-semibold text-gray-900">Operating in temperatures -20C to +50C</p>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Network Diagram */}
    //         <div className="relative p-8 overflow-hidden bg-orange-500 rounded-lg">
    //           {/* Background network image */}
    //           <div className="absolute inset-0 opacity-30">
    //             <Image
    //               src={networkDiagram}
    //               alt="Network connectivity diagram"
    //               fill
    //               className="object-cover rounded-lg"
    //             />
    //           </div>

    //           <div className="relative z-10">
    //             {/* Network nodes and connections */}
    //             <div className="grid items-center grid-cols-4 gap-4">
    //               {/* Mobile devices */}
    //               <div className="space-y-4">
    //                 <div className="relative p-2 bg-white rounded bg-opacity-20">
    //                   <div className="flex items-center justify-center w-8 h-12 mx-auto bg-white rounded-sm">
    //                     <Image
    //                       src={droneIcon}
    //                       alt="Mobile device"
    //                       width={16}
    //                       height={20}
    //                       className="w-4 h-5 opacity-70"
    //                     />
    //                   </div>
    //                   <div className="absolute w-4 h-4 -top-1 -right-1">
    //                     <div className="w-full h-full bg-white rounded-full opacity-60"></div>
    //                     <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-40"></div>
    //                   </div>
    //                 </div>
    //                 <div className="relative p-2 bg-white rounded bg-opacity-20">
    //                   <div className="flex items-center justify-center w-8 h-12 mx-auto bg-white rounded-sm">
    //                     <Image
    //                       src={droneIcon}
    //                       alt="Mobile device"
    //                       width={16}
    //                       height={20}
    //                       className="w-4 h-5 opacity-70"
    //                     />
    //                   </div>
    //                   <div className="absolute w-4 h-4 -top-1 -right-1">
    //                     <div className="w-full h-full bg-white rounded-full opacity-60"></div>
    //                     <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-40"></div>
    //                   </div>
    //                 </div>
    //                 <div className="relative p-2 bg-white rounded bg-opacity-20">
    //                   <div className="flex items-center justify-center w-8 h-12 mx-auto bg-white rounded-sm">
    //                     <Image
    //                       src={droneIcon}
    //                       alt="Mobile device"
    //                       width={16}
    //                       height={20}
    //                       className="w-4 h-5 opacity-70"
    //                     />
    //                   </div>
    //                   <div className="absolute w-4 h-4 -top-1 -right-1">
    //                     <div className="w-full h-full bg-white rounded-full opacity-60"></div>
    //                     <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-40"></div>
    //                   </div>
    //                 </div>
    //               </div>

    //               {/* Connection lines */}
    //               <div className="flex items-center justify-center">
    //                 <div className="space-y-2">
    //                   <div className="w-8 h-px bg-white"></div>
    //                   <div className="w-8 h-px bg-white"></div>
    //                   <div className="w-8 h-px bg-white"></div>
    //                 </div>
    //                 <div className="w-2 h-px bg-white"></div>
    //               </div>

    //               {/* Central hub */}
    //               <div className="flex justify-center">
    //                 <div className="p-3 bg-white rounded bg-opacity-20">
    //                   <div className="flex items-center justify-center w-12 h-8 bg-white rounded">
    //                     <Image
    //                       src={droneIcon}
    //                       alt="Central hub"
    //                       width={24}
    //                       height={16}
    //                       className="w-6 h-4 opacity-70"
    //                     />
    //                   </div>
    //                 </div>
    //               </div>

    //               {/* Laptop */}
    //               <div className="flex justify-center">
    //                 <div className="p-2 bg-white rounded bg-opacity-20">
    //                   <div className="flex items-center justify-center w-12 h-8 bg-white rounded-t">
    //                     <Image
    //                       src={droneIcon}
    //                       alt="Laptop computer"
    //                       width={20}
    //                       height={16}
    //                       className="w-5 h-4 opacity-70"
    //                     />
    //                   </div>
    //                   <div className="w-16 h-1 mx-auto -mt-px bg-white rounded-b"></div>
    //                 </div>
    //               </div>
    //             </div>

    //             {/* Central connection point */}
    //             <div className="absolute w-3 h-3 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full top-1/2 left-1/2"></div>
    //           </div>
    //         </div>

    //         {/* Contact Button */}
    //         <div className="flex justify-start">
    //           <button className="px-6 py-3 font-semibold text-black transition-colors bg-yellow-400 rounded-lg hover:bg-yellow-500">
    //             Contact Us
    //           </button>
    //         </div>
    //       </div>

    //       {/* Right Column - Images */}
    //       <div className="space-y-8">
    //         {/* Drone Case */}
    //         <div className="flex justify-center">
    //           <div className="relative max-w-md p-6 rounded-lg">
    //             <Image
    //               src={droneCase}
    //               alt="GDS Drone Case - Professional drone storage and control system"
    //               width={320}
    //               height={240}
    //               className="object-cover mx-auto rounded-lg w-80 h-60"
    //               priority
    //             />
    //           </div>
    //         </div>

    //         {/* Mobile Interfaces */}
    //         <div className="flex justify-center space-x-8">
    //           {/* Tablet */}
    //           <div className="p-4 rounded-lg ">
    //             <Image
    //               src={tabletInterface}
    //               alt="Tablet interface showing drone control map"
    //               width={160}
    //               height={208}
    //               className="object-cover w-40 rounded-lg h-52"
    //             />
    //           </div>

    //           {/* Phone */}
    //           <div className="relative">
    //             <div className="p-2 rounded-2xl">
    //               <Image
    //                 src={phoneInterface}
    //                 alt="Mobile app interface for drone control"
    //                 width={128}
    //                 height={224}
    //                 className="object-cover w-32 h-56 rounded-xl"
    //               />
    //             </div>
    //             {/* <div className="absolute w-16 h-16 bg-yellow-200 rounded-full -top-4 -right-4 opacity-60"></div> */}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <section className="relative pt-[75px] pb-[116px] overflow-hidden">

        <div className="px-4 mx-auto max-w-7xl">
          <div className="relative">
            <Image
              src={leftWing}
              alt="leftWing"
              className="absolute hidden object-contain lg:w-28 md:w-20 -top-16 lg:-left-32 -z-10 md-left-0 lg:block"
            />
          </div>

          {/* Flex Layout */}
          <div className="flex flex-col gap-4 md:flex-row">
            {/* Left - Content */}
            <div className="relative z-0 w-full space-y-6 lg:w-4/6 md:w-full">
              <h3 className="text-base uppercase poppins-medium text-[#5F5F5F] mb-4">
                {gdsData.category}
              </h3>
              <h2 className="text-5xl lg:text-6xl lg:pb-12 md:pb-8 md:mb-0 poppins-extrabold">
                {gdsData.title}
              </h2>
              <p className="w-full text-lg  xl:mb-[72px] lg:mb-12 mb-12  text-[#5F5F5F] md:w-full lg:w-4/5">
                {gdsData.description}
              </p>

              {/* Features */}
              <ul className="grid grid-cols-1 gap-3 mt-6 text-black sm:grid-cols-2">
                {gdsData.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-sm md:text-base"
                  >
                    {feature.icon && (
                      <Image
                        src={feature.icon}
                        alt={`feature-icon-${index}`}
                        className="flex-shrink-0 object-contain w-12"
                      />
                    )}
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>

            </div>

            {/* Right - Main Image */}
            <div className="relative flex items-start justify-center lg:w-2/5 sm:hidden lg:block">
              <Image
                src={gdsData.mainImage}
                alt={gdsData.title}
                className="relative object-contain w-[406px] lg:-translate-x-12 md:hidden lg:block lg:w-[406px]"
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="relative z-10 flex flex-wrap items-center w-full gap-8 mt-16 sm:gap-5 md:mt-12">
            <Image
                src={gdsData.mainImage}
                alt={gdsData.title}
                className="relative hidden object-contain lg:-translate-x-12 lg:hidden md:block md:w-2/4"
              />
            <Image src={networkDiagram} alt='network map' className='object-contain w-[418px] md:w-2/5 lg:w-96 sm:w-96' />
            <Image src={tabletInterface} alt='tablet interface' className='object-contain lg:w-[233px] xl:ms-16  sm:w-64 lg:ms-10 w-32 md:w-[40%]' />
            <Image src={phoneInterface} alt='phone interface' className='object-contain xl:w-[337px] lg:ms-4  lg:-mt-72 w-1/2 sm:w-44 lg:w-64 md:w-1/3' />

            {/* {gdsData.bottomSection.map((item, index) => (
              <div key={index} className={`${item.maxW, item.revTop} relative`}>
                <Image
                  src={item.img}
                  alt={item.alt}
                  className="object-contain w-full h-auto"
                />
              </div> 
            ))}*/}
          </div>

          {/* Button */}
          <Link
            href={gdsData.buttonLink}
            className="inline-block px-7 py-2 md:mt-5 mt-10 text-dark transition bg-[var(--color-primary)] rounded-lg shadow"
          >
            {gdsData.buttonText}
          </Link>

          {/* Full Wing */}
          <div className="relative">
            <Image
              src={fullWing}
              alt="fullWing"
              className="absolute object-contain lg:-bottom-24 lg:w-80 md:w-72 lg:-right-52 md:-bottom-20 -z-10 md:-right-48 w-60 -bottom-20 xl:-right-64 -right-40"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default GDSDrones;