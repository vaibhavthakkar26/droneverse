import React from "react";
import Image from "next/image";

import HeroPilot from "../../../../../public/assets/img/training/trainingHero.png";
import fillShape from "../../../../../public/assets/img/training/fillShape.png";
import sectionBg from '../../../../../public/assets/img/training/SectionBg.png'

const HeroSection = () => {
  const traningStats = [
        { value: "25000+", label: "Students Reach" },
        { value: "3000+", label: "Students Trained" },
        { value: "100%", label: "Placement Records" },
        { value: "10+", label: "Training Experience" },
    ];
    return (
        <div>
            <section className="relative flex flex-wrap items-center pt-32 pb-10">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-10" style={{ backgroundImage: `url(${sectionBg.src})` }}></div>

                <div className="z-10 flex flex-wrap px-2 mx-auto relawtive max-w-7xl md:ps-5">
                    <Image
                        src={fillShape}
                        alt="fill shape"
                        className="absolute block object-contain -top-16 -left-[106px] -z-10 size-44"
                    />
                    {/* Left content */}
                    <div className="relative w-full space-y-6 sm:w-2/3 xl:pb-20 md:w-3/5 ">
                        <h2 className="text-4xl leading-tight xl:text-7xl lg:text-6xl md:text-5xl poppins-bold">
                            INDIA’S TOP <br /> DGCA-CERTIFIED INSTITUTE
                        </h2>
                        <p className="relative z-10 w-3/5 mt-4 2xl:text-4xl xl:text-4xl lg:text-3xl poppins-regular-italic leading-full gray-600 md:text-2xl md:w-4/5 xl:w-2/3">
                            Powered by Passion, Backed by DGCA
                            <Image
                                src={fillShape}
                                alt="fill shape"
                                className="absolute block object-contain -bottom-24 -right-10 -z-10 size-40 md:size-32 xl:right-32 xl:-bottom-12" 
                            />
                        </p>
                        <button className="px-6 py-2 rounded-lg relative z-10 bg-[var(--color-primary)] poppins-medium cursor-pointer">
                            Enroll Now
                        </button>
                    </div>

                    {/* Right image */}
                    <div className="relative flex items-end justify-center w-full sm:w-1/3 md:w-2/5">
                        <Image
                            src={fillShape}
                            alt="fill shape"
                            className="absolute left-0 z-0 object-contain -top-5 w-28"
                        />

                        <Image
                            src={HeroPilot}
                            alt="Drone Pilot"
                            className="relative object-contain w-full z-1 "
                        />
                        <Image
                            src={fillShape}
                            alt="fill shape"
                            className="absolute bottom-0 z-0 object-contain size-56 -left-2 md:-left-10 md:-bottom-12 md:size-48 xl:bottom-8 xl:left-8" 
                        />
                    </div>
                    <div className="container">
                        <div className="flex flex-wrap items-start sm:pt-8 ">
                            {traningStats.map((item, idx) => (
                                <div key={idx} className={`relative flex items-center w-1/2 space-x-3 md:w-1/4 ${idx >= 2 ? "mt-4 md:mt-0" : "mt-0"} `}>
                                    <span className="m-0 text-4xl">🎓</span>
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
        </div>
    )
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
