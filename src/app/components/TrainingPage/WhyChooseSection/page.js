import React from "react";
import icon from "../../../../../public/assets/img/training/rpto-cards.png";
import Image from "next/image";
import classroom from "../../../../../public/assets/img/training/classroom.png";
import flight from "../../../../../public/assets/img/training/flight.png";
import flightMode from "../../../../../public/assets/img/training/flight mode.png";
import drone from "../../../../../public/assets/img/training/drone.png";
import SectionBg from "../../../../../public/assets/img/training/why-choose-bg.png"

const WhyChoose = () => {
  const whyChooseData = [
    {
      icon: icon,
      title: "Certified Expertise",
      description:
        "Recognized by regulatory authorities for compliance and quality. Courses designed to meet global standards",
    },
    {
      icon: icon,
      title: "Experienced Faculty",
      description:
        "Industry veterans with hands-on experience in diverse drone applications. Certified instructor dedicated to providing personalized guidance",
    },
    {
      icon: icon,
      title: "State-of-the-Art Infrastructure",
      description:
        "Advanced flight simulators for risk-free training. Access to various drone models for practical, real-world experience",
    },
    {
      icon: icon,
      title: "Comprehensive Curriculum",
      description:
        "Focused on both theoretical knowledge and hands-on skills. Emphasis on safety, legal compliance, and operational efficiency",
    },
    {
      icon: icon,
      title: "Career Support",
      description:
        "Networking opportunities with industry leaders and companies. Guidance on certifications, licenses, and career pathways",
    },
    {
      icon: icon,
      title: "Certified Expertise",
      description:
        "Recognized by regulatory authorities for compliance and quality. Courses designed to meet global standards",
    },
  ];

  const trainingFacilities = [
    {
      title: "Flight Zones",
      image: flight,
      description:
        "Welcome to DroneVerse, where we redefine India's drone industry. Driven by a vision to create world-class drone pilots.",
    },
    {
      title: "Dedicated Flight-modes",
      image: flightMode,
      description:
        "Welcome to DroneVerse, where we redefine India's drone industry. Driven by a vision to create world-class drone pilots.",
    },
    {
      title: "Classrooms & labs",
      image: classroom,
      description:
        "Welcome to DroneVerse, where we redefine India's drone industry. Driven by a vision to create world-class drone pilots.",
    },
    {
      title: "Drone Maintenance Workshop",
      image: drone,
      description:
        "Welcome to DroneVerse, where we redefine India's drone industry. Driven by a vision to create world-class drone pilots.",
    },
  ];

  return (
    <div 
      className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${SectionBg.src || SectionBg})`,
      }}
    >
      {/* Optional overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-white/90"></div> */}
      
      {/* Content wrapper with relative positioning */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-12 sm:mb-16 w-full max-w-[675px] mx-auto px-4">
            <div className="inline-block text-2xl sm:text-3xl lg:text-[36px] bg-[#FFC634] text-white text-center justify-center px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold mb-6 sm:mb-8">
              Why choose Droneverse RPTO?
            </div>
          </div>

          {/* Why Choose Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {whyChooseData.map((item, index) => (
              <div key={index} className="p-4 sm:p-6 w-full max-w-[430px] mx-auto lg:mx-0">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-3xl mb-2 flex-shrink-0">
                    <Image src={item.icon} alt="icon" width={86} height={76} className="w-16 sm:w-20 lg:w-[86px] h-auto" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
                      {item.title}
                    </h3>
                    <p className="text-black text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Training Facilities
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
              Welcome to DroneVerse, where we redefine India's drone industry.
              Driven by a vision to create world-class drone pilots, we go above &
              beyond in everything we do. Recognized in the esteemed World Book of
              Records.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
            {trainingFacilities.map((facility, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-[#E6E6E6] shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-[302px] mx-auto lg:mx-0"
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 py-4 sm:py-5 px-4">
                  {facility.title}
                </h3>
                <div className="relative w-full h-[140px] sm:h-[162px] overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    fill
                  />
                </div>

                <div className="p-4 sm:p-6">
                  <p className="text-black text-sm sm:text-base lg:text-[18px] leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;