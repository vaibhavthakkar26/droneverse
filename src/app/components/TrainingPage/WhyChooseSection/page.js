import React from "react";
import icon from "../../../../../public/assets/img/training/rpto-cards.png";
import Image from "next/image";
import classroom from "../../../../../public/assets/img/training/classroom.png";
import flight from "../../../../../public/assets/img/training/flight.png";
import flightMode from "../../../../../public/assets/img/training/flight mode.png";
import drone from "../../../../../public/assets/img/training/drone.png";
import SectionBg from "../../../../../public/assets/img/training/why-choose-bg.png";
import LeftFrame from "../../../../../public/assets/img/training/left-frame.png";
import newPattern from "../../../../../public/assets/img/training/bgPattern.png";
import counterBg2 from '../../../../../public/assets/img/training/counterbg2.png'
import counterBg from '../../../../../public/assets/img/training/counterBg.png'
import whoApply1 from '../../../../../public/assets/img/training/whoApply-1.png'
import whoApply2 from '../../../../../public/assets/img/training/whoApply-2.png'
import whoApply3 from '../../../../../public/assets/img/training/whoApply-3.png'
import WhoApplyBg2 from "../../../../../public/assets/img/training/whocanBg.png";
import sectionBg from '../../../../../public/assets/img/training/SectionBg.png'

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

  const whoApply = [{
    icon: whoApply1,
    title: "Age Limit ",
    description:
      "18-65 Years",
  }, {
    icon: whoApply2,
    title: "Education",
    description:
      "10th Pass",
  }, {
    icon: whoApply3,
    title: "Valid Govt. Id ",
    description:
      "Adhaar,Pan,Voter Id, Passport",
  },]

  return (
    <div>
      <div
        className="relative py-8 bg-[#080114] bg-center sm:py-12 px-3 lg:px-8  lg:py-20 md:py-16"
        // style={{
        //   backgroundImage: `url(${sectionBg.src || newPattern.src})`,
        // }}
      >
        
        <Image src={sectionBg} alt="bg" className="absolute top-0 left-0 object-cover w-full h-full opacity-40" />
        {/* Optional overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-white/90"></div> */}

        {/* Content wrapper with relative positioning */}
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl ">
            <div className="text-center mb-10 w-full max-w-[675px] mx-auto px-4">
              <div
                className="inline-block text-2xl md:text-3xl poppins-semibold lg:text-[36px]  text-white text-center"
              >
                Why choose Droneverse RPTO?
              </div>
            </div>

            {/* Why Choose Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
              {whyChooseData.map((item, index) => (
                <div
                  key={index}
                  className="p-3 sm:p-4 w-full pt-8 pb-8 px-4 md:px-7 lg:px-[43px] lg:pt-[50px] lg:pb-[60px] rounded-[20px] max-w-full  mx-auto lg:mx-0 bg-[#161616]"
                >
                  <div className="flex flex-col items-center space-x-3 text-center sm:space-x-4">
                    <div className="flex-shrink-0 mb-4 text-3xl lg:mb-5">
                      <Image
                        src={item.icon}
                        alt="icon"
                        width={86}
                        height={76}
                        className="w-16 sm:w-20 lg:w-[86px] h-auto"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="mb-2 text-base text-white sm:text-lg lg:text-xl poppins-semibold">
                        {item.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-white sm:text-sm lg:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-[50%] left-0 z-20 transform -translate-y-1/2 hidden lg:block">
            <Image
              src={LeftFrame}
              alt="Left Frame"
              width={350}
              height={350}
              className="hidden h-auto -translate-x-6 lg:w-16 lg:translate-y-24 xl:w-20"
            />
          </div>
          {/* <div className="hidden mx-auto max-w-7xl">
          <div className="px-4 mb-8 text-center sm:mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl sm:mb-6">
              Training Facilities
            </h2>
            <p className="max-w-4xl mx-auto text-base leading-relaxed text-gray-600 sm:text-lg">
              Welcome to DroneVerse, where we redefine India's drone industry.
              Driven by a vision to create world-class drone pilots, we go above
              & beyond in everything we do. Recognized in the esteemed World
              Book of Records.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:px-0">
            {trainingFacilities.map((facility, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-[#E6E6E6] shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-[302px] mx-auto lg:mx-0"
              >
                <h3 className="px-4 py-4 text-base font-semibold text-gray-900 sm:text-lg sm:py-5">
                  {facility.title}
                </h3>
                <div className="relative w-full h-[140px] sm:h-[162px] overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
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
        </div> */}
        </div>
      </div>

      {/* <section className='relative py-8 bg-[#FFB801] bg-bottom lg:py-20 md:py-16 bg-size-[auto_1600px]' style={{ backgroundImage: `url(${counterBg.src})` }}></section> */}
      <section className='relative py-8 bg-[#FFB801] bg-bottom lg:py-20 md:py-16 '>
        <Image src={WhoApplyBg2} alt="bg" className="absolute top-0 left-0 w-full h-full bg-cover" />
        <div className="relative z-10 px-3 mx-auto max-w-7xl lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-4 text-2xl text-black lg:text-5xl md:text-4xl poppins-semibold">Who can apply?</div>
            <p className="text-[#5F5F5F]">Basic Requirements to join the Drone Pilot Training Course</p>
          </div>

          <div className="grid gap-4 lg:gap-6 grid-col-1 sm:grid-cols-3 ">
            {whoApply.map((item, index) => (
              <div className="py-10 sm:py-7 text-center bg-white  md:px-6 lg:px-14 rounded-[10px]" key={index}> 
                <div className="mb-6 text-center sm:mb-4 md:mb-5 lg:mb-6">
                  <Image src={item.icon} alt={item.title} className="mx-auto size-20 sm:size-14 lg:size-20 md:size-18" />
                </div>
                <div className="w-full">
                  <div className="mb-2 text-lg md:text-xl poppins-semibold">{item.title}</div>
                  <p className="text-sm text-[#5F5F5F] poppins-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </section>

    </div>
  );
};

export default WhyChoose;
