'use client'
import React from 'react'
import Image from "next/image";
import sectionBg from '../../../public/assets/img/trainingBg.png'
import heroImg from '../../../public/assets/img/hero-section/trainingHero.png'
import dgca1 from '../../../public/assets/img/dgca1.png'
import dgca2 from '../../../public/assets/img/dgca2.png'
import dgca3 from '../../../public/assets/img/dgca3.png'
import dgcaAppr from '../../../public/assets/img/dgcaApprove.png'



const TrainingPage = () => {

    const traningStats = [
        { value: "25000+", label: "Students Reach" },
        { value: "3000+", label: "Students Trained" },
        { value: "100%", label: "Placement Records" },
        { value: "10+", label: "Training Experience" },
    ];

    return (
        <>
            <section className="container flex flex-wrap px-6 pt-32 pb-20 mx-auto bg-no-repeat bg-cover max-w-7xl">
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
                                {/* Cap Icon (emoji for simplicity) */}
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
            </section>

            {/* Section 2 */}
            <section className="container flex flex-col items-center gap-10 px-6 py-12 mx-auto max-w-7xl lg:flex-row">

                {/* Left Content */}
                <div className="space-y-6 lg:w-1/2 bg-gradient-to-b rounded-[10px] p-10 from-[#D9D9D91A] to-[#73737300] ">
                        <Image src={dgcaAppr} width={118} height={30} alt='Government Approve'/>
                    <h2 className="text-3xl font-bold md:text-4xl">
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

                    <button className="px-6 py-3 font-semibold text-black transition bg-yellow-400 rounded-md shadow-md hover:bg-yellow-500">
                        Download brochure
                    </button>
                </div>

                {/* Right Images */}
                <div className="grid items-end justify-end ">
                    <div className="flex justify-end col-span-2 ">
                        <Image
                            src={dgca1} 
                            alt="Mission Control Center"
                            width={260}
                            height={260}
                            className="rounded-lg "
                        />
                    </div>
                    <Image
                        src={dgca2}
                        alt="Drone Training Group"
                        width={270}
                        height={270}
                        className="relative z-10 -top-3/5 left-5"
                    />
                    <Image
                        src={dgca3}
                        alt="Drone Practice"
                        width={250}
                        height={250}
                        className="relative z-0 -top-14 -left-16"
                    />
                </div>
            </section>
        </>
    )
}

export default TrainingPage
