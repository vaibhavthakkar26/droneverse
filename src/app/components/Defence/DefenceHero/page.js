"use client";
import React from "react";
import Image from "next/image";
import defenceHerobg from "../../../../../public/assets/img/defence/defenceHerobg.png";
import radarImg1 from "../../../../../public/assets/img/defence/raddar1.png";
import radarImg2 from "../../../../../public/assets/img/defence/radaar2.png";
import jammerImg from "../../../../../public/assets/img/defence/jammer.png";

import jammerImg1 from "../../../../../public/assets/img/defence/jammar-1.png";

const DefenceHero = () => {
    return (
        <section className="relative w-full">
            {/* Background */}
            <div
                className="absolute inset-0 bg-center bg-cover -z-10"
                style={{ backgroundImage: `url(${defenceHerobg.src})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 to-transparent"></div>

            {/* Content */}
            <div className="flex flex-col items-center justify-between gap-10 px-4 py-20 mx-auto max-w-7xl lg:pt-36 lg:pb-48 xl:px-0 lg:flex-row sm:px-6 lg:px-6">
                {/* Left Section */}
                <div className="flex-1 text-left">
                    <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl">
                        VEHICLE MOUNTED <br />
                        <span className="text-[var(--color-primary)] w-3/4 block">
                            COUNTER DRONE PROTECTION
                        </span>
                    </h1>

                    <button className="mt-8 lg:mt-12 inline-block px-3  sm:px-4 py-2 rounded-lg bg-[var(--color-primary)] font-medium shadow-lg hover:opacity-90 transition text-xs sm:text-sm md:text-base">
                        Learn more
                    </button>
                </div>

                {/* Right Section (Images) */}
                <div className="absolute bottom-0 flex justify-end sm:justify-start w-full md:w-4/5 lg:w-[65%] gap-2 lg:-translate-x-1/2 -z-10 lg:left-1/2 right-0 md:left-1/2 md:-translate-x-1/2 left-0 xl:justify-center">
                        <Image
                            src={radarImg2}
                            alt="Radar"
                            className="object-contain w-14 translate-x-14 sm:block md:w-20 lg:w-40 lg:-me-10 lg:-mb-10 md:translate-x-16 lg:translate-x-2"
                        />
                        <Image
                            src={radarImg1}
                            alt="Radar"
                            className="object-contain w-28 sm:w-28 md:w-36 lg:w-72 lg:-mb-10 lg:-me-4 translate-x-9"
                        />
                    <Image
                        src={jammerImg1}
                        alt="Jammer"
                        className="object-contain w-40 sm:w-40 md:w-52 lg:w-sm"
                    />
                </div>
            </div>
        </section>
    );
};

export default DefenceHero;
