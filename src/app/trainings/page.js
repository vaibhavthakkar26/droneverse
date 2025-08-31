'use client'
import React from 'react'
import Image from "next/image";

import heroImg from '../../../public/assets/img/hero-section/trainingHero.png'
import dgca1 from '../../../public/assets/img/dgca1.png'
import dgca2 from '../../../public/assets/img/dgca2.png'
import dgca3 from '../../../public/assets/img/dgca3.png'
import dgcaAppr from '../../../public/assets/img/dgcaApprove.png'
import fillShape from '../../../public/assets/img/fillShape.png'
import transShape from '../../../public/assets/img/transShape.png'



const TrainingPage = () => {

    const traningStats = [
        { value: "25000+", label: "Students Reach" },
        { value: "3000+", label: "Students Trained" },
        { value: "100%", label: "Placement Records" },
        { value: "10+", label: "Training Experience" },
    ];

    return (
        <>
            <section className="relative flex items-center min-h-screen pt-32 pb-10">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[url('/pattern.png')] bg-cover bg-center opacity-60"></div>

                <div className="container relative z-10 flex flex-wrap mx-auto ps-6">
                    <Image src={fillShape} alt='fill shape' className='absolute block object-contain -top-16 -left-[106px] -z-10 size-44' />
                    {/* Left content */}
                    <div className="relative w-2/3 space-y-6 xl:pb-20">
                        <h2 className="leading-tight xl:text-7xl lg:text-6xl poppins-bold">
                            INDIA’S TOP <br /> DGCA-CERTIFIED INSTITUTE
                        </h2>
                        <p className="relative z-10 w-3/5 mt-4 2xl:text-4xl xl:text-3xl lg:text-2xl poppins-regular-italic leading-full gray-600">
                            Powered by Passion, Backed by DGCA
                            <Image src={fillShape} alt='fill shape' className='absolute block object-contain -bottom-20 right-10 -z-10 size-40' />
                        </p>
                        <button className="px-6 py-2 rounded-lg relative bg-[var(--color-primary)] poppins-medium ">
                            Enroll Now
                        </button>
                    </div>

                    {/* Right image */}
                    <div className="relative flex items-end justify-center w-1/3 ">
                        <Image src={fillShape} alt='fill shape' className='absolute left-0 z-0 object-contain -top-5 w-28' />

                        <Image src={heroImg} alt="Drone Pilot" className="relative object-contain w-full z-1 " />
                        <Image src={fillShape} alt='fill shape' className='absolute bottom-0 z-0 object-contain size-56 -left-2 ' />
                    </div>
                    <div className='container'>
                        <div className='flex items-start'>
                            {traningStats.map((item, idx) => (
                                <div key={idx} className="flex items-center w-1/4 space-x-3">
                                    <span className="text-4xl">🎓</span>
                                    <div className="w-[2px] h-12 bg-[#5F5F5F] md:block"></div>
                                    <div className="text-left">
                                        <h3 className="font-bold text-black xl:text-4xl lg:text-3xl font-montserrat">
                                            {item.value}
                                        </h3>
                                        <p className="font-normal xl:text-xl lg:text-lg gray-700 font-poppins">
                                            {item.label}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="container flex flex-wrap px-6 pt-32 pb-20 mx-auto bg-no-repeat bg-cover max-w-7xl">
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
            </section> */}

            {/* Section 2 */}
            <section className="container relative flex flex-col gap-10 px-6 py-12 mx-auto lg:flex-row">

                {/* Left Content */}
                <div className="space-y-6 lg:w-1/2 relative bg-gradient-to-b rounded-[10px] p-10 from-[#D9D9D91A] from-[20%] to-[#73737300] to-[100%] ">
                    <Image src={transShape} alt='fill shape' className='absolute z-0 object-contain m-0 size-16 top-18 right-16' />
                    <Image src={dgcaAppr} width={118} height={30} alt='Government Approve' />
                    <h2 className="relative w-4/5 text-3xl font-bold md:text-4xl">
                        DGCA Drone Pilot Certification Training?
                    </h2>
                    <p className="leading-relaxed text-gray-600">
                        Join Droneverse’s DGCA Certified Drone Pilot Training Course and get
                        your government-approved Remote Pilot Certificate (RPC) in just 5 days.
                        <br /><br />
                        This course is ideal for students, job seekers, farmers, professionals
                        and anyone interested in the drone industry in India. You’ll learn how
                        to fly drones legally, gain hands-on flying experience, and get 100% job
                        support after completion. With training available across major cities,
                        this course opens doors to job in agriculture, surveying, cinematography,
                        mapping, inspections and more.
                    </p>

                    <button className="relative px-6 py-3 font-semibold text-black transition bg-yellow-400 rounded-md shadow-md hover:bg-yellow-500">
                        Download brochure
                    </button>
                    <Image src={transShape} alt='fill shape' className='absolute z-0 object-contain bottom-28 size-14 right-28' />
                </div>

                {/* Right Images */}
                <div className="relative grid w-1/2 grid-cols-2">
                    <div className="relative flex justify-end col-span-2 row-start-1 ">
                        <Image src={fillShape} alt='fill shape' className='absolute block object-contain lg:-left-1/3 -top-10 -z-10 size-24' />
                        <Image
                            src={dgca1}
                            alt="Mission Control Center"
                            className="relative object-contain w-full rounded-lg"
                        />
                    </div>
                    <div className="relative flex justify-start col-start-1 row-start-1">
                        <Image
                            src={dgca2}
                            alt="Drone Training Group"
                            className="relative z-10 object-contain w-full xl:left-20 lg:left-14 top-20"
                        />
                    </div>
                    <div className="relative flex justify-end col-span-2 col-start-2 row-start-2">
                        <Image
                            src={dgca3}
                            alt="Drone Practice"
                            className="relative z-0 object-contain w-full -top-9 -left-1/6"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default TrainingPage
