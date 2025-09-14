'use client'
// import React from 'react'
import React, { useState } from "react";
import DronePilot from "../../../../public/assets/img/training/dron-pilot.png";
import DroneOperation from "../../../../public/assets/img/training/drone-operation.png";
import Maintainance from "../../../../public/assets/img/training/maintainance.png";
import sectionBg from '../../../../public/assets/img/training/SectionBg.png'
import Image from "next/image";
import iconicSHape from '../../../../public/assets/img/training/bgShapeDrone.png'


const CourseAll = () => {
    const [activeTab, setActiveTab] = useState("Defence");

    const courses = {
        Defence: [
            {
                title: "Small Class Drone Pilot Course",
                subtitle: "DGCA approved",
                duration: "5 days | Weight upto",
                highlight: "2KG",
                image: DronePilot,
                label: "SMALL CLASS",
                points: [
                    "Understand the regulatory framework",
                    "Learn flight planning, navigation and safety protocols",
                    "Practical flight training",
                    "Training on a drone simulator and remote pilot certification",
                ],
            },
            {
                title: "Advanced Drone Operations",
                subtitle: "Industry recognized certification",
                duration: "5 days | Weight upto",
                highlight: "2KG",
                image: DroneOperation,
                label: "MEDIUM CLASS",
                points: [
                    "Understand the regulatory framework",
                    "Learn flight planning, navigation and safety protocols",
                    "Practical flight training",
                    "Training on a drone simulator and remote pilot certification",
                ],
            },
            {
                title: "Drone Maintenance & Repair",
                subtitle: "Comprehensive training program",
                duration: "5 days | Weight upto",
                highlight: "2KG",
                image: Maintainance,
                label: "TRAIN THE TRAINER",
                points: [
                    "Learn about drone components",
                    "Learn flight planning, navigation and safety protocols",
                    "Practical flight training",
                    "Training on a drone simulator and remote pilot certification",
                ],
            },
            {
                title: "Small Class Drone Pilot Course",
                subtitle: "DGCA approved",
                duration: "5 days | Weight upto",
                highlight: "2KG",
                image: DronePilot,
                label: "SMALL CLASS",
                points: [
                    "Understand the regulatory framework",
                    "Learn flight planning, navigation and safety protocols",
                    "Practical flight training",
                    "Training on a drone simulator and remote pilot certification",
                ],
            },
            {
                title: "Advanced Drone Operations",
                subtitle: "Industry recognized certification",
                duration: "5 days | Weight upto",
                highlight: "2KG",
                image: DroneOperation,
                label: "MEDIUM CLASS",
                points: [
                    "Understand the regulatory framework",
                    "Learn flight planning, navigation and safety protocols",
                    "Practical flight training",
                    "Training on a drone simulator and remote pilot certification",
                ],
            },
            {
                title: "Drone Maintenance & Repair",
                subtitle: "Comprehensive training program",
                duration: "5 days | Weight upto",
                highlight: "2KG",
                image: Maintainance,
                label: "TRAIN THE TRAINER",
                points: [
                    "Learn about drone components",
                    "Learn flight planning, navigation and safety protocols",
                    "Practical flight training",
                    "Training on a drone simulator and remote pilot certification",
                ],
            },
        ],
        Student: [
            {
                title: "Small Class Drone Pilot Course",
                subtitle: "DGCA approved",
                duration: "5 days | Weight upto",
                highlight: "2KG",
                image: DronePilot,
                label: "SMALL CLASS",
                points: [
                    "Understand the regulatory framework",
                    "Learn flight planning, navigation and safety protocols",
                    "Practical flight training",
                    "Training on a drone simulator and remote pilot certification",
                ],
            },
            {
                title: "Advanced Drone Operations",
                subtitle: "Industry recognized certification",
                duration: "5 days | Weight upto",
                highlight: "2KG",
                image: DroneOperation,
                label: "MEDIUM CLASS",
                points: [
                    "Understand the regulatory framework",
                    "Learn flight planning, navigation and safety protocols",
                    "Practical flight training",
                    "Training on a drone simulator and remote pilot certification",
                ],
            },
            {
                title: "Drone Maintenance & Repair",
                subtitle: "Comprehensive training program",
                duration: "5 days | Weight upto",
                highlight: "2KG",
                image: Maintainance,
                label: "TRAIN THE TRAINER",
                points: [
                    "Learn about drone components",
                    "Learn flight planning, navigation and safety protocols",
                    "Practical flight training",
                    "Training on a drone simulator and remote pilot certification",
                ],
            },
        ],
        Training: [
            {
                title: "Small Class Drone Pilot Course",
                subtitle: "DGCA approved",
                duration: "5 days | Weight upto",
                highlight: "2KG",
                image: DronePilot,
                label: "SMALL CLASS",
                points: [
                    "Understand the regulatory framework",
                    "Learn flight planning, navigation and safety protocols",
                    "Practical flight training",
                    "Training on a drone simulator and remote pilot certification",
                ],
            },
            {
                title: "Advanced Drone Operations",
                subtitle: "Industry recognized certification",
                duration: "5 days | Weight upto",
                highlight: "2KG",
                image: DroneOperation,
                label: "MEDIUM CLASS",
                points: [
                    "Understand the regulatory framework",
                    "Learn flight planning, navigation and safety protocols",
                    "Practical flight training",
                    "Training on a drone simulator and remote pilot certification",
                ],
            },
        ],
    };
    return (
        <div>
            <section className="relative py-8 bg-[#080114]  sm:py-12  lg:py-20 md:py-16" >
                <Image src={sectionBg} alt="bg" className="absolute top-0 left-0 w-full h-full opacity-40" />
                <div>
                    <div className="relative z-10 px-3 mx-auto max-w-7xl lg:px-8">
                        <div className="max-w-5xl mx-auto mb-10 text-center">
                            <Image
                                src={iconicSHape}
                                alt="fill shape"
                                className="absolute size-10 -top-4 md:-top-3 left-6 object-contain sm:size-12  md:size-14.5 opacity-40"
                            />
                            <div className="mb-4 text-2xl text-white md:mb-6 lg:text-5xl md:text-4xl poppins-semibold">Turning passion into professions</div>
                            <p className="text-[#E6E6E6]">Welcome to DroneVerse, where we redefine India's drone industry. Driven by a vision to create world-class drone pilots, we go above & beyond in everything we do. Recognized in the esteemed World Book of Records.</p>
                        </div>
                        {/* Category Tabs */}
                        <div className="relative flex justify-center mb-6 sm:mb-10">
                            <Image
                                src={iconicSHape}
                                alt="fill shape"
                                className="absolute -top-4 sm:top-0 size-10 right-2 lg:-right-3 object-contain sm:size-12 md:size-14.5 opacity-40"
                            />
                            <div className="relative z-10 flex w-full max-w-md p-1 bg-[#1D1D1D] rounded-lg shadow-md sm:p-2 md:max-w-lg">
                                {["Defence", "Student", "Training"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`text-sm sm:text-base px-3  md:px-6 py-2 rounded-md font-medium flex-1 transition-colors ${activeTab === tab
                                            ? "bg-[#FFB801] text-black"
                                            : "bg-transparent text-white"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Course Cards */}
                        <div className="grid justify-center grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 lg::gap-8">
                            {courses[activeTab].map((course, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#FFFBF2] rounded-lg overflow-hidden border border-[#DADADA] px-3 sm:px-4 lg:px-1 py-4 max-w-sm mx-auto w-full"
                                >
                                    <div className="relative px-2 pb-1 overflow-hidden sm:px-0 lg:px-6">
                                        <Image
                                            src={course.image}
                                            alt={course.title}
                                            width={368}
                                            height={207}
                                            className="w-full h-40 sm:h-44 lg:h-48 object-cover bg-[#FFF1CC] rounded-t-lg"
                                        />
                                        <Image src={course.image} alt={course.title} className="absolute left-0 right-0 mx-auto size-full -top-24 opacity-5" />
                                        <div className="relative rounded-b-lg  bg-[#FFDB7F] text-black text-center py-2 poppins-bold text-sm sm:text-base">
                                            {course.label}
                                        </div>
                                    </div>
                                    <p className="text-sm sm:text-[16px] text-[#00A32C] mb-2 mx-2 sm:me-4 sm:ms-0 lg:mx-6 mt-4 sm:mt-6">
                                        {course.subtitle}
                                    </p>
                                    <div className="px-2 sm:px-0 lg:px-6">
                                        <h3 className="text-lg sm:text-xl lg:text-[20px] font-bold text-black mb-3 sm:mb-4 leading-tight">
                                            {course.title}
                                        </h3>
                                        <div className="flex items-center mb-3 text-black sm:mb-4">
                                            <span className="flex gap-1 text-sm sm:text-[16px] text-[#5F5F5F] items-center">
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 22 22"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="sm:w-[22px] sm:h-[22px] flex-shrink-0"
                                                >
                                                    <path
                                                        d="M20.75 0.240723H0.75C0.551088 0.240723 0.360322 0.31974 0.21967 0.460393C0.0790177 0.601045 0 0.79181 0 0.990723C0 1.18964 0.0790177 1.3804 0.21967 1.52105C0.360322 1.66171 0.551088 1.74072 0.75 1.74072H1V11.4727C1 13.5497 2.332 14.7407 4.655 14.7407H9.939L4.22 20.4607C4.14631 20.5294 4.08721 20.6122 4.04622 20.7042C4.00523 20.7962 3.98319 20.8955 3.98141 20.9962C3.97963 21.0969 3.99816 21.1969 4.03588 21.2903C4.0736 21.3837 4.12974 21.4685 4.20096 21.5398C4.27218 21.611 4.35701 21.6671 4.4504 21.7048C4.54379 21.7426 4.64382 21.7611 4.74452 21.7593C4.84523 21.7575 4.94454 21.7355 5.03654 21.6945C5.12854 21.6535 5.21134 21.5944 5.28 21.5207L10 16.8017V20.9907C10 21.1896 10.079 21.3804 10.2197 21.5211C10.3603 21.6617 10.5511 21.7407 10.75 21.7407C10.9489 21.7407 11.1397 21.6617 11.2803 21.5211C11.421 21.3804 11.5 21.1896 11.5 20.9907V16.8017L16.22 21.5207C16.3622 21.6532 16.5502 21.7253 16.7445 21.7219C16.9388 21.7185 17.1242 21.6398 17.2616 21.5023C17.399 21.3649 17.4777 21.1795 17.4812 20.9852C17.4846 20.7909 17.4125 20.6029 17.28 20.4607L11.561 14.7407H16.85C19.173 14.7407 20.505 13.5497 20.505 11.4727V1.74072H20.75C20.9489 1.74072 21.1397 1.66171 21.2803 1.52105C21.421 1.3804 21.5 1.18964 21.5 0.990723C21.5 0.79181 21.421 0.601045 21.2803 0.460393C21.1397 0.31974 20.9489 0.240723 20.75 0.240723ZM19 11.4727C19 12.2957 18.755 13.2407 16.845 13.2407H4.655C2.745 13.2407 2.5 12.2957 2.5 11.4727V1.74072H19V11.4727ZM4 4.99072C4 4.79181 4.07902 4.60104 4.21967 4.46039C4.36032 4.31974 4.55109 4.24072 4.75 4.24072H12.75C12.9489 4.24072 13.1397 4.31974 13.2803 4.46039C13.421 4.60104 13.5 4.79181 13.5 4.99072C13.5 5.18963 13.421 5.3804 13.2803 5.52105C13.1397 5.66171 12.9489 5.74072 12.75 5.74072H4.75C4.55109 5.74072 4.36032 5.66171 4.21967 5.52105C4.07902 5.3804 4 5.18963 4 4.99072ZM4 8.99072C4 8.79181 4.07902 8.60105 4.21967 8.46039C4.36032 8.31974 4.55109 8.24072 4.75 8.24072H10.75C10.9489 8.24072 11.1397 8.31974 11.2803 8.46039C11.421 8.60105 11.5 8.79181 11.5 8.99072C11.5 9.18964 11.421 9.3804 11.2803 9.52105C11.1397 9.66171 10.9489 9.74072 10.75 9.74072H4.75C4.55109 9.74072 4.36032 9.66171 4.21967 9.52105C4.07902 9.3804 4 9.18964 4 8.99072Z"
                                                        fill="black"
                                                    />
                                                </svg>
                                                <span className="ml-1">{course.duration}</span>
                                                <span className="text-[#00A32C] font-medium ml-1">
                                                    {course.highlight}
                                                </span>
                                            </span>
                                        </div>
                                        <ul className="mb-4 space-y-2 sm:mb-6 lg:h-48 xl:h-auto">
                                            {course.points.map((point, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start text-xs text-black sm:text-sm"
                                                >
                                                    <span className="mr-2 text-black flex-shrink-0 mt-0.5">
                                                        <svg
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="sm:w-6 sm:h-6"
                                                        >
                                                            <path
                                                                d="M4 13L9 18L20 7"
                                                                stroke="#510AC9"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span className="leading-relaxed">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex gap-2 sm:flex-row">
                                            <button className="flex-1 border border-[#FFB801] text-black text-sm sm:text-[16px] py-2 px-4 rounded-md cursor-pointer hover:bg-[#FFB801] hover:bg-opacity-10 transition-colors">
                                                Details
                                            </button>
                                            <button className="flex-1 bg-[#FFB801] text-black text-sm sm:text-[16px] py-2 px-4 rounded-md cursor-pointer hover:bg-[#FFB801] hover:bg-opacity-90 transition-colors">
                                                Enroll now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CourseAll
