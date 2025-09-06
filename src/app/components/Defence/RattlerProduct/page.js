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

import React from "react";
import Image from "next/image";
import droneImage from "../../../../../public/assets/img/defence/rattler-drone.png";
import technicalDrawing from "../../../../../public/assets/img/defence/rattler-drawing.png";

const RattlerProduct = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative px-4 py-12 mx-auto max-w-7xl md:px-8 lg:px-8">
        {/* Header + Drone Image */}
        <div className="grid items-start grid-cols-1 gap-8 mb-12 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <div>
            <p className="text-[14px] md:text-[16px] text-[#5F5F5F] uppercase tracking-wider mb-2">
              FPV DRONES
            </p>
            <h1 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-bold text-black mb-6 leading-tight">
              DV RATTLER
            </h1>
            <p className="text-[#5F5F5F] text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed mb-6 max-w-lg">
              Rattler is our 5 inch FPV Drone, built around the intrepid minds
              FPV parts ecosystem to allow the platform to configured with the
              ideal system based on the use case requirements.
            </p>

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
              className="w-[280px] sm:w-[400px] md:w-[550px] lg:w-[824px] h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Contact Button */}
        <div className="mb-12">
          <button className="w-[180px] sm:w-[220px] md:w-[240px] h-[50px] sm:h-[60px] md:h-[64px] bg-[#FFB800] text-black font-semibold text-[14px] sm:text-[16px] md:text-[18px] rounded-md transition-colors duration-200 hover:bg-black hover:text-white">
            Contact Us
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-col flex-wrap justify-center gap-4 sm:flex-row sm:gap-6 lg:justify-start">
          <button className="w-full sm:w-[240px] md:w-[260px] lg:w-[301px] h-[64px] sm:h-[72px] md:h-[80px] lg:h-[86px] border border-black text-black px-6 sm:px-8 py-3 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-semibold transition-colors duration-200 hover:bg-black hover:text-white rounded-tr-3xl">
            DV COBRA
          </button>

          <div className="bg-black rounded-tr-3xl">
            <button className="w-full sm:w-[240px] md:w-[260px] lg:w-[301px] h-[64px] sm:h-[72px] md:h-[80px] lg:h-[86px] border border-[#E6E6E6] bg-[#E6E6E6] text-black px-6 sm:px-8 py-3 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-semibold cursor-not-allowed rounded-tr-3xl rounded-bl-2xl">
              DV RATTLER
            </button>
          </div>

          <button className="w-full sm:w-[240px] md:w-[260px] lg:w-[301px] h-[64px] sm:h-[72px] md:h-[80px] lg:h-[86px] border border-black text-black px-6 sm:px-8 py-3 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-semibold hover:bg-black hover:text-white transition-colors duration-200 rounded-tr-3xl">
            DV VIPER
          </button>
        </div>
      </div>
    </div>
  );
};

export default RattlerProduct;
