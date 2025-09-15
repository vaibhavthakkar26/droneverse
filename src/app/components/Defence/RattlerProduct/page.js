// import React from "react";
// import Image from "next/image";
// import droneImage from "../../../../../public/assets/img/defence/rattler-drone.png";
// import technicalDrawing from "../../../../../public/assets/img/defence/rattler-drawing.png";

// const RattlerProduct = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <div className="relative px-4 py-12 mx-auto max-w-7xl md:px-8">
//         {/* Header + Drone Image */}
//         <div className="grid items-start grid-cols-1 gap-8 mb-12 lg:grid-cols-2 lg:gap-12">
//           {/* Left Content */}
//           <div>
//             <p className="text-[16px] text-[#5F5F5F] uppercase tracking-wider mb-2">
//               FPV DRONES
//             </p>
//             <h1 className="text-[64px] font-bold text-black mb-6">
//               DV RATTLER
//             </h1>
//             <p className="text-[#5F5F5F] md:text-[18px] leading-relaxed mb-6">
//               Rattler is our 5 inch FPV Drone, built around the intrepid minds
//               FPV parts ecosystem to allow the platform to configured with the
//               ideal system based on the use case requirements.
//             </p>

//             {/* Technical Drawing */}
//             <div className="inline-block bg-white shadow-sm">
//               <Image
//                 src={technicalDrawing}
//                 alt="DV Rattler Technical Drawing"
//                 // className="object-contain w-full h-auto max-h-80"
//                 width={418}
//                 height={272}
//               />
//             </div>
//           </div>

//           {/* Drone Image */}
//           <div className="relative flex justify-center lg:justify-end">
//             <Image
//               src={droneImage}
//               alt="DV Rattler Drone"
//               // className="object-contain w-full h-auto max-w-md lg:max-w-lg"
//               width={824}
//               height={503}
//             />
//           </div>
//         </div>

//         {/* Contact Button */}
//         <div className="mb-12">
//           <button className="bg-[#FFB801] text-black text-[16px] font-semibold px-8 py-3 rounded-[8px] transition-colors duration-200 shadow-sm">
//             Contact Us
//           </button>
//         </div>

//         {/* Navigation Tabs */}
//         <div className="flex flex-wrap justify-center gap-6 lg:justify-start">
//           <button className="w-[301px] h-[86px] border border-black text-black px-8 py-3 text-[24px] font-semibold transition-colors duration-200 hover:bg-black hover:text-white rounded-tr-3xl">
//             DV COBRA
//           </button>
//           <div className="">
//             <button className="w-[301px] h-[86px] bg-[#E6E6E6] text-black px-8 py-3 text-[24px] font-semibold cursor-not-allowed rounded-tr-3xl rounded-bl-2xl">
//               DV RATTLER
//             </button>
//           </div>
//           <button className="w-[301px] h-[86px] border border-black border-l text-black px-8 py-3 text-[24px] font-semibold hover:bg-black hover:text-white transition-colors duration-200 rounded-tr-3xl">
//             DV VIPER
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RattlerProduct;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import PatternBg from "../../../../../public/assets/img/Defence2/patternBg.png";
import droneImage from "../../../../../public/assets/img/defence/dvRattlerDrone.png";
import droneImageOld from "../../../../../public/assets/img/defence/rattler-drone.png";
import technicalDrawing from "../../../../../public/assets/img/defence/rattler-drawing.png";
import DefenceDataSection from "../../DefenceDataSection/page";
import shapeBtn from "../../../../../public/assets/img/Defence2/Subtract.png";
import AnimatedWrapper from "../../AnimatedWrapper";

const RattlerProduct = () => {
  const [showMore, setShowMore] = useState(false);

  const RattlersData = {
    footerNav: [
      { text: "DV COBRA", link: "#" },
      { text: "DV  RATTLER", link: "#" },
      { text: "DV VIPER", link: "#" },
    ],
  };

  return (
    <div
      className="relative bg-center bg-repeat-y bg-contain"
      style={{ backgroundImage: `url(${PatternBg.src})` }}
    >
      <div className="relative px-4 py-12 pt-16 pb-40 mx-auto lg:pt-32 xl:pt-40 max-w-7xl md:px-8 lg:px-8 md:pt-24">
        {/* Header + Drone Image */}
        <div className="grid items-start grid-cols-1 gap-8 mb-12 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}

          <div className="">
            <AnimatedWrapper>
              <p className="mb-4 text-sm text-black/70 lg:text-base poppins-medium">
                FPV DRONES
              </p>
              <h1 className="mb-10  text-4xl md:text-5xl xl:text-[64px] poppins-extrabold tracking-widest">
                DV RATTLER
              </h1>
              <p className="mb-3 text-sm md:mb-6 lg:mb-8 text-black/70 md:text-base poppins-regular">
                Rattler is our 5 inch FPV Drone, built around the intrepid minds
                FPV parts ecosystem to allow the platform to configured with the
                ideal system based on the use case requirements.
              </p>
            </AnimatedWrapper>

            {/* Technical Drawing */}
            <div className="inline-block bg-white">
              <Image
                src={technicalDrawing}
                alt="DV Rattler Technical Drawing"
                width={418}
                height={272}
                className="w-full h-auto max-w-[300px] sm:max-w-[350px] md:w-[418px] "
              />
            </div>
          </div>

          {/* Drone Image */}
          <div className="relative flex justify-center lg:justify-end">
            <Image
              src={droneImage}
              alt="DV Rattler Drone"
              className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[824px] h-auto object-contain"
              priority
            />
          </div>
        </div>

        {showMore && (
          <DefenceDataSection
            showKeyFeatures={true}
            showSpecifications={true}
            showNumeric={false}
            showIcons={false}
            showIcons2={false}
            showOperatingModes={false}
            showGunViolence={false}
          />
        )}

        {/* Contact Button */}
        <div className="mt-8 space-x-6">
          <button className="border border-[#FFB801] hover:border-black bg-[#FFB801] hover:bg-black text-black hover:text-white font-medium px-6 md:px-8 py-2 md:py-2.5 rounded-lg transition-colors duration-200 shadow-sm text-sm md:text-base cursor-pointer">
            Contact Us
          </button>
          <button
            onClick={() => setShowMore(!showMore)}
            className="border border-[#FFB801] hover:bg-[#FFB801] hover:text-black font-medium px-6 md:px-8 py-2 md:py-2.5 rounded-lg transition-colors duration-200 shadow-sm text-sm md:text-base cursor-pointer"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>

        {/* Foote Btn */}

        <div className="pt-6.5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory">
          <div className="flex gap-3 w-max sm:w-full">
            {RattlersData.footerNav.map((footbtns, idx) => (
              <button
                key={idx}
                className="group w-60 lg:w-64 xl:w-72 bg-white hover:bg-[#E6E6E6] active:hover:bg-[#E6E6E6] duration-300 border-2 border-black hover:border-[#E6E6E6] text-base md:text-lg lg:text-xl xl:text-2xl rounded-tr-4xl xl:rounded-tr-[40px] px-3 py-4 md:py-5 xl:py-6 relative snap-start cursor-pointer tracking-widest poppins-medium"
              >
                <img
                  src={shapeBtn.src}
                  alt="icon"
                  className="absolute w-6 h-6 transition-opacity duration-300 opacity-0 left-px bottom-px group-hover:opacity-100"
                />
                {footbtns.text}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 z-20 w-full h-20 bg-gradient-to-b from-white 0% to-black 20%"></div>
    </div>
  );
};

export default RattlerProduct;
