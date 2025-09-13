import React from "react";
import Image from "next/image";

import HeroPilot from "../../../../../public/assets/img/training/trainingHero.png";
import fillShape from "../../../../../public/assets/img/training/fillShape.png";
import sectionBg from "../../../../../public/assets/img/training/SectionBg.png";
import Graduation from "../../../../../public/assets/img/training/Graduation hat.svg";
import HeroDrone from '../../../../../public/assets/img/training/NewHeroDrone.png'
import iconicSHape from '../../../../../public/assets/img/training/bgShapeDrone.png'
import counterBg2 from '../../../../../public/assets/img/training/counterbg2.png'
import counterBg from '../../../../../public/assets/img/training/counterBg.png'

const HeroSection = () => {
  const traningStats = [
    { value: "25k+", label: "Students Reach" },
    { value: "30k+", label: "Students Trained" },
    { value: "100%", label: "Placement Records" },
    { value: "10+", label: "Training Experience" },
  ];
  return (
    <div>
      <section className="relative flex flex-wrap items-center pt-24" >
        {/* Background pattern */}
        <div
          className="absolute inset-0 bg-center bg-repeat-y bg-cover opacity-10"
          style={{ backgroundImage: `url(${sectionBg.src})` }}
        ></div>

        <div className="relative flex flex-wrap px-3 mx-auto max-w-7xl lg:px-8">
          <Image
            src={iconicSHape}
            alt="fill shape"
            className="absolute block object-contain bottom-[95%] lg:bottom-20 lg:left-96 -z-10 size-12 lg:size-14 md:bottom-16 md:left-72 left-18 sm:bottom-12 sm:left-64"
          />
          <Image src={HeroDrone} alt="new drone" className="absolute lg:-top-14 sm:-translate-x-1/2 xl:-top-2 xl:w-60 lg:left-1/2 md:w-48 left-1/2 z-[1] -top-14 sm:w-44 sm:-top-14 w-40" />
          {/* Left content */}
          <div className="relative flex flex-col w-full pt-10 space-y-6 sm:w-2/3 xl:pt-12 xl:pb-28 md:w-3/5 lg:pb-24 lg:pt-10 sm:pt-0 sm:pb-16">
            <h2 className="z-10 mb-3 text-4xl leading-tight xl:text-7xl lg:text-6xl poppins-bold md:text-5xl">
              INDIA’S TOP <br /> DGCA-CERTIFIED INSTITUTE
            </h2>
            <p className="relative z-10 mt-0 text-xl poppins-medium-italic leading-full gray-600  lg:text-[32px] ">
              Powered by Passion, Backed by DGCA
              
            </p>
            <button className="px-6 py-2 rounded-lg relative z-10 bg-[var(--color-primary)] poppins-medium cursor-pointer w-fit xl:mt-8 lg:mt-6 md:mt-4 ">
              Enroll Now
            </button>
          </div>

          {/* Right image */}
          <div className="relative flex items-end justify-center w-full sm:w-1/3 md:w-2/5">
            <Image
              src={iconicSHape}
              alt="fill shape"
              className="absolute -z-[1] object-contain top-5 lg:top-5 md:top-3 left-32 sm:left-10 sm:-top-5 lg:size-14 size-12 md:left-20 "
            />

            <Image
                src={iconicSHape}
                alt="fill shape"
                className="absolute object-contain lg:left-0 md:bottom-8 lg:bottom-16 lg:size-14 size-12 bottom-10 left-6 sm:left-0"
              />

            <Image
              src={HeroPilot}
              alt="Drone Pilot"
              className="relative object-contain w-64 sm:w-full z-1 lg:-mb-3.5 -mb-2"
            />
            <Image
              src={iconicSHape}
              alt="fill shape"
              className="absolute top-0 right-0 z-0 object-contain lg:top-24 lg:size-14 md:top-14 md:size-12 size-12"
            />
          </div>
          <div className="container hidden">
            <div className="flex flex-wrap items-start sm:pt-8 ">
              {traningStats.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-center w-1/2 space-x-3 md:w-1/4 ${idx >= 2 ? "mt-4 md:mt-0" : "mt-0"
                    } `}
                >
                  <span className="m-0 text-4xl">
                    <Image
                      src={Graduation}
                      alt="Graduation Icon"
                      width={57}
                      height={53}
                    />
                  </span>
                  <span className="w-[2px] h-12 bg-[#5F5F5F] my-0 mx-2"></span>
                  <div className="text-left">
                    <h3 className="font-bold text-black xl:text-4xl lg:text-3xl font-montserrat">
                      {item.value}
                    </h3>
                    <p className="text-sm font-normal xl:text-xl lg:text-lg gray-700 font-poppins">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className='relative bg-bottom bg-[#FFB801]'>
        <Image src={counterBg2} alt="bg" className="absolute top-0 left-0 w-full h-full" />
        <div className="relative px-3 mx-auto max-w-7xl lg:px-8 ">
          <div className="flex flex-wrap items-start pt-[53px] pb-[47px] md:py-11 py-8">
            {traningStats.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex items-center w-1/2 space-x-3 sm:w-1/4 ${idx >= 2 ? "mt-0 md:mt-0" : "mt-0"
                  } `}
              >
                <span className="m-0 text-4xl">
                  <Image
                    src={Graduation}
                    alt="Graduation Icon"
                    width={40}
                    height={40}
                  />
                </span>
                <span className="w-[1px] h-12 bg-black my-0 mx-3 md:mx-2 lg:mx-4"></span>
                <div className="text-left">
                  <h3 className="mb-1 text-2xl text-black xl:text-4xl md:text-3xl poppins-bold">
                    {item.value}
                  </h3>
                  <p className="text-sm lg:text-base  gray-700 poppins-regular text-[#5F5F5F]">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

{
  /* <section className="container flex flex-wrap px-6 pt-32 pb-20 mx-auto bg-no-repeat bg-cover max-w-7xl">
                <div className='w-2/3 pb-14'>
                    <h2 className="font-bold leading-tight text-7xl ">
                        INDIA’S TOP <br /> DGCA-CERTIFIED INSTITUTE
                    </h2>
                    <p className="w-3/5 mt-4 text-4xl italic font-normal leading-[100%] lea gray-600">
                        Powered by Passion, Backed by DGCA
                    </p>
                    <button className="px-6 py-2 mt-6 rounded-lg bg-[var(--color-primary)] poppins-medium ">
                        Enroll Now
                    </button>
                </div>
                <div className="relative flex items-end w-1/3 ">
                    <Image src={heroImg} alt="Drone Pilot" className="object-contain w-full rounded-lg" />
                </div>

                <div className='w-full '>
                    <div className="container grid grid-cols-2 gap-6 mx-auto text-center md:grid-cols-4">
                        {traningStats.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-center space-x-3">
                                <span className="text-4xl">🎓</span>
                                <div className="w-[1px] h-12 bg-black md:block"></div>
                                <div className="text-left">
                                    <h3 className="text-2xl font-bold text-black font-montserrat">
                                        {item.value}
                                    </h3>
                                    <p className="text-sm text-gray-700 font-poppins">
                                        {item.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */
}
