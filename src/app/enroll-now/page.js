"use client";
import Image from 'next/image';
import HeroImg from "../../../public/assets/img/hero-section/enrollHero.jpg";
import Graduation from "../../../public/assets/img/training/Graduation hat.svg";
import CountUp from 'react-countup';
import counterBg2 from '../../../public/assets/img/training/counterbg2.png';
import gRating from '../../../public/assets/img/training/googleRateings.png';
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa'; // Importing star icon for rating

export default function EnrollNow() {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const testimonials = [
        {
            name: "John Doe",
            position: "Certified Drone Pilot",
            testimonial: "DroneVerse’s training program was top-notch! I learned everything I needed to know and am now flying drones professionally.",
            image: "https://images.unsplash.com/photo-1600375207355-81f6d02d6d44?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg4OXwwfDF8c2VhcmNofDg0fHxwZXJzb258ZW58MHx8fHwxNjY2MTYwODI&ixlib=rb-1.2.1&q=80&w=1080",
            rating: 5 // Added rating for each testimonial
        },
        {
            name: "Sarah Lee",
            position: "Commercial Drone Operator",
            testimonial: "The instructors were highly experienced, and the hands-on training was exactly what I needed to start my drone career.",
            image: "https://images.unsplash.com/photo-1506748686211-090af5f8c5b0?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg4OXwwfDF8c2VhcmNofDI0fHxwZXJzb258ZW58MHx8fHwxNjY2MTYwNzg&ixlib=rb-1.2.1&q=80&w=1080",
            rating: 4
        },
        {
            name: "Mike Johnson",
            position: "Flight Instructor",
            testimonial: "Excellent training! The curriculum was well-structured and up-to-date with the latest in drone technology and regulations.",
            image: "https://images.unsplash.com/photo-1555363750-907050b2781a?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg4OXwwfDF8c2VhcmNofDkwfHxwZXJzb258ZW58MHx8fHwxNjY2MTYwOTg&ixlib=rb-1.2.1&q=80&w=1080",
            rating: 5
        },
        {
            name: "Laura Clark",
            position: "Aerial Photography Expert",
            testimonial: "The best drone school! I gained a lot of practical knowledge and flew some of the latest drones.",
            image: "https://images.unsplash.com/photo-1578581336173-b2c1156c6639?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg4OXwwfDF8c2VhcmNofDY4fHxwZXJzb258ZW58MHx8fHwxNjY2MTYwOTg&ixlib=rb-1.2.1&q=80&w=1080",
            rating: 5
        },
        {
            name: "James Williams",
            position: "Drone Technician",
            testimonial: "Great curriculum, excellent instructors, and hands-on training. The knowledge I gained is invaluable.",
            image: "https://images.unsplash.com/photo-1559045351-e51761f70324?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg4OXwwfDF8c2VhcmNofDQ4fHxwZXJzb258ZW58MHx8fHwxNjY2MTYwOTg&ixlib=rb-1.2.1&q=80&w=1080",
            rating: 4
        }
    ];

    // Number of cards to show at once
    const cardsPerPage = 3;
    const totalPages = Math.ceil(testimonials.length / cardsPerPage);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonialIndex((prevIndex) =>
                prevIndex === totalPages - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
        return () => clearInterval(interval);
    }, [totalPages]);

    const traningStats = [
        { value: 25000, label: "Students Reach" },
        { value: 30000, label: "Students Trained" },
        { value: 100, label: "Placement Records (%)" },
        { value: 10, label: "Training Experience (Years)" },
    ];

    return (
        <>
            <div className="relative min-h-screen flex items-center justify-center">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src={HeroImg}
                        alt="Drone flying"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/70" />
                </div>

                {/* Main Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                        {/* Left Content */}
                        <div className="flex flex-col justify-center items-center lg:items-start text-white text-center lg:text-left space-y-6 h-full">
                            <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
                                DGCA Certified Drone Pilot Training Course
                            </h1>
                            <p className="text-lg text-white/90">
                                Launch your drone piloting career today.
                            </p>
                            <div className="flex justify-center lg:justify-start">
                                <button className="mt-2 bg-[#FFB801] text-black font-semibold px-6 py-3 rounded-md cursor-pointer transition">
                                    Enroll Now &raquo;
                                </button>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-6 sm:p-8 w-full">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                                Enroll Now
                            </h2>
                            <form className="space-y-5">
                                {/* Form Fields */}
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="you@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                                        Contact Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="city" className="block text-gray-700 font-medium mb-1">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="Your city"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="passport" className="block text-gray-700 font-medium mb-1">
                                        Do you have a passport?
                                    </label>
                                    <select
                                        id="passport"
                                        name="passport"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    >
                                        <option value="">Select one</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-[#FFB801] text-black font-semibold rounded-md cursor-pointer transition"
                                >
                                    Submit Application
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Counter Section */}
            <div className="relative bg-[#FFB801] py-12 flex flex-col items-center justify-center">
                <div className="container flex flex-wrap items-center justify-center text-center px-4 sm:px-6">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {traningStats.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center space-y-3">
                                <span className="text-4xl sm:text-5xl font-semibold text-gray-900">
                                    <CountUp start={0} end={item.value} duration={3} separator="," />
                                </span>
                                <span className="text-base sm:text-lg font-semibold text-gray-700">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonial Section */}
            <div className="px-4 py-12 text-center bg-gray-100">
                <div className="px-4 mb-8 text-center sm:mb-12">
                    <Image src={gRating} alt="g rate" className="object-contain w-56 mx-auto mb-4" />
                    <h2 className="mb-4 text-2xl font-bold text-black sm:text-3xl md:text-4xl sm:mb-6 poppins-bold">
                        See what people are talking
                    </h2>
                    <p className="w-full max-w-4xl mx-auto text-base leading-relaxed text-[#5F5F5F] sm:text-lg poppins-regular">
                        Welcome to DroneVerse, where we redefine India’s drone industry. Driven by a vision to create world-class drone pilots, we go above & beyond in everything we do. Recognized in the esteemed World Book of Records.
                    </p>
                </div>

                <div className="flex justify-center items-center">
                    <div className="w-full max-w-7xl px-4 sm:px-6">
                        <div className="relative overflow-hidden">
                            {/* Slider Wrapper */}
                            <div
                                className="flex transition-transform duration-700 ease-in-out py-12"
                                style={{
                                    width: `${totalPages * 100}%`,
                                    transform: `translateX(-${currentTestimonialIndex * (100 / totalPages)}%)`,
                                }}
                            >
                                {[...Array(totalPages)].map((_, pageIdx) => (
                                    <div
                                        key={pageIdx}
                                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full"
                                    >
                                        {testimonials
                                            .slice(pageIdx * cardsPerPage, pageIdx * cardsPerPage + cardsPerPage)
                                            .map((testimonial, idx) => (
                                                <div
                                                    key={idx}
                                                    className="bg-white shadow-lg rounded-lg p-6 text-left flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                                >
                                                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-4">
                                                        {/* Image on left */}
                                                        <div className="flex-shrink-0 mb-2 sm:mb-0">
                                                            <Image
                                                                src={testimonial.image}
                                                                alt={testimonial.name}
                                                                width={80}
                                                                height={80}
                                                                className="rounded-full"
                                                            />
                                                        </div>
                                                        {/* Details on right */}
                                                        <div className="flex flex-col justify-center items-center sm:items-start w-full">
                                                            <p className="text-base text-gray-900 font-semibold mb-1 text-center sm:text-left">{testimonial.name}</p>
                                                            <p className="text-sm text-gray-500 mb-2 text-center sm:text-left">{testimonial.position}</p>
                                                            <div className="flex mb-2 justify-center sm:justify-start">
                                                                {[...Array(5)].map((_, index) => (
                                                                    <FaStar
                                                                        key={index}
                                                                        className={`text-yellow-400 ${index < testimonial.rating ? "fill-current" : ""}`}
                                                                    />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Message below, full width, no partition */}
                                                    <blockquote className="text-base font-medium text-gray-700 text-center sm:text-left">
                                                        "{testimonial.testimonial}"
                                                    </blockquote>
                                                </div>
                                            ))}
                                    </div>
                                ))}
                            </div>
                            {/* Navigation Dots */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 py-12">
                                {[...Array(totalPages)].map((_, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setCurrentTestimonialIndex(idx)}
                                        className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${currentTestimonialIndex === idx ? "bg-gray-900" : "bg-gray-300"}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
