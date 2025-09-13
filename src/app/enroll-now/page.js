"use client";
import Image from 'next/image';
import HeroImg from "../../../public/assets/img/hero-section/enrollHero.jpg";
import Graduation from "../../../public/assets/img/training/Graduation hat.svg";
import CountUp from 'react-countup';
import counterBg2 from '../../../public/assets/img/training/counterbg2.png';
import gRating from '../../../public/assets/img/training/googleRateings.png';
import review1 from '../../../public/assets/img/instagram-1-600x600.jpg'
import patternBg from '../../../public/assets/img/defence/PatternDark.png'
import { useEffect, useState } from 'react';
import { FaChevronDown, FaStar } from 'react-icons/fa'; // Importing star icon for rating

export default function EnrollNow() {
    const [openIndex, setOpenIndex] = useState(null);
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const [copied, setCopied] = useState(false);

    const testimonials = [
        {
            name: "John Doe",
            position: "Certified Drone Pilot",
            testimonial: "DroneVerse’s training program was top-notch! I learned everything I needed to know and am now flying drones professionally.",
            image: review1,
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
            image: review1,
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

    const RightFaqs = [
        {
            q: "What makes DroneVerse a DGCA-approved drone training institute?",
            a: "DroneVerse meets all DGCA requirements with certified trainers, advanced infrastructure, and government-approved curriculum.",
        },
        {
            q: "Can I enroll in a drone technician course at DroneVerse?",
            a: "Yes, we offer technician-level courses that cover drone assembly, repair, and maintenance.",
        },
        {
            q: "What is the eligibility for drone pilot courses?",
            a: "Candidates must be at least 18 years old and meet DGCA medical fitness standards.",
        },
        {
            q: "How do I enroll for a course?",
            a: "You can easily enroll online through our website or by contacting our support team.",
        },
    ];

    const LeftFaqs = [
        {
            q: "What is the Remote Pilot Certificate, and how do I obtain it?",
            a: "The Remote Pilot Certificate (RPC) is a DGCA-certified credential required for regulatory-compliant drone operations in India. At DroneVerse you can obtain it through their 5-day Remote Pilot training program that combines theory and hands-on flight training.",
        },
        {
            q: "Do you offer training for small and medium drones?",
            a: "Yes, we provide specialized training programs for both small and medium drones based on DGCA guidelines.",
        },
        {
            q: "Why should I choose a DGCA-approved drone training institute?",
            a: "Only DGCA-approved institutes provide legally valid pilot certifications required for professional drone operations in India.",
        },
    ];
    const toggleFAQ = (column, index) => {
        const id = `${column}-${index}`;
        setOpenIndex(openIndex === id ? null : id);
    };

    const renderFaqs = (faqs, column) =>
        faqs.map((faq, index) => (
            <div
                key={index}
                className="p-0 transition bg-white shadow rounded-xl hover:shadow-md"
            >
                <button
                    onClick={() => toggleFAQ(column, index)}
                    className="flex items-center justify-between w-full p-5 text-left  cursor-pointer bg-[#FFFBF2] poppins-medium text-base border border-[#ddd] rounded-xl"
                >
                    <span>{faq.q}</span>
                    <FaChevronDown
                        className={`ml-2 transition-transform duration-300 ${openIndex === `${column}-${index}` ? "rotate-180" : ""
                            }`}
                    />
                </button>

                <div
                    className={`overflow-hidden transition-all duration-300 ${openIndex === `${column}-${index}` ? "max-h-40 mt-0" : "max-h-0"
                        }`}
                >
                    <p className="p-5 text-base text-black poppins-regular">{faq.a}</p>
                </div>
            </div>
        ));

    const ADDRESS = `701A, Delhi - Jaipur Exp, Block A,
Sector 34, Gurugram, Haryana 122001`;
    const encodedQuery = encodeURIComponent(ADDRESS.replace(/\n/g, " "));
    const mapsEmbedUrl = `https://www.google.com/maps?q=${encodedQuery}&output=embed`;
    const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;

    async function copyAddress() {
        try {
            await navigator.clipboard.writeText(ADDRESS);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Copy failed", err);
        }
    }

    return (
        <>
            <div className="relative flex items-center justify-center min-h-screen">
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
                <div className="relative z-10 w-full px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-start grid-cols-1 gap-10 lg:grid-cols-2">
                        {/* Left Content */}
                        <div className="flex flex-col items-center justify-center h-full space-y-6 text-center text-white lg:items-start lg:text-left">
                            <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
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
                        <div className="w-full p-6 bg-white rounded-lg shadow-lg bg-opacity-95 sm:p-8">
                            <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
                                Enroll Now
                            </h2>
                            <form className="space-y-5">
                                {/* Form Fields */}
                                <div>
                                    <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
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
                                    <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
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
                                    <label htmlFor="phone" className="block mb-1 font-medium text-gray-700">
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
                                    <label htmlFor="city" className="block mb-1 font-medium text-gray-700">
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
                                    <label htmlFor="passport" className="block mb-1 font-medium text-gray-700">
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
                <div className="container flex flex-wrap items-center justify-center px-4 text-center sm:px-6">
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4">
                        {traningStats.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center space-y-3">
                                <span className="text-4xl font-semibold text-gray-900 sm:text-5xl">
                                    <CountUp start={0} end={item.value} duration={3} separator="," />
                                </span>
                                <span className="text-base font-semibold text-gray-700 sm:text-lg">
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

                <div className="flex items-center justify-center">
                    <div className="w-full px-4 max-w-7xl sm:px-6">
                        <div className="relative overflow-hidden">
                            {/* Slider Wrapper */}
                            <div
                                className="flex py-12 transition-transform duration-700 ease-in-out"
                                style={{
                                    width: `${totalPages * 100}%`,
                                    transform: `translateX(-${currentTestimonialIndex * (100 / totalPages)}%)`,
                                }}
                            >
                                {[...Array(totalPages)].map((_, pageIdx) => (
                                    <div
                                        key={pageIdx}
                                        className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3"
                                    >
                                        {testimonials
                                            .slice(pageIdx * cardsPerPage, pageIdx * cardsPerPage + cardsPerPage)
                                            .map((testimonial, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex flex-col p-6 text-left transition-all duration-300 bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl"
                                                >
                                                    <div className="flex flex-col items-center gap-4 mb-4 sm:flex-row sm:gap-6">
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
                                                        <div className="flex flex-col items-center justify-center w-full sm:items-start">
                                                            <p className="mb-1 text-base font-semibold text-center text-gray-900 sm:text-left">{testimonial.name}</p>
                                                            <p className="mb-2 text-sm text-center text-gray-500 sm:text-left">{testimonial.position}</p>
                                                            <div className="flex justify-center mb-2 sm:justify-start">
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
                                                    <blockquote className="text-base font-medium text-center text-gray-700 sm:text-left">
                                                        "{testimonial.testimonial}"
                                                    </blockquote>
                                                </div>
                                            ))}
                                    </div>
                                ))}
                            </div>
                            {/* Navigation Dots */}
                            <div className="absolute flex py-12 space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
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

            {/* FAQs */}

            <section className='py-16'>
                <div className="px-3 mx-auto max-w-7xl lg:px-8">
                    <div className="mb-12 text-3xl text-center sm:text-4xl md:text-5xl poppins-bold">Frequently Ask Questions.
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-6">{renderFaqs(LeftFaqs, "left")}</div>
                        <div className="space-y-6">{renderFaqs(RightFaqs, "right")}</div>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="relative flex items-center justify-center min-h-screen p-6 ">
                <Image src={patternBg}  alt="pattern" className="absolute top-0 left-0 object-cover w-full h-full opacity-20" />
                <div className="relative z-10 w-full max-w-6xl overflow-hidden bg-white shadow-lg rounded-2xl">
                    <div className="flex flex-col md:flex-row">
                        {/* Map side */}
                        <div className="md:w-1/2 w-full h-72 md:h-[520px]">
                            <iframe
                                title="Company location map"
                                src={mapsEmbedUrl}
                                className="w-full h-full border-0"
                                loading="lazy"
                                allowFullScreen
                            />
                        </div>

                        {/* Info side */}
                        <div className="flex flex-col justify-between w-full p-6 md:w-1/2 md:p-10">
                            <div>
                                <h1 className="text-2xl font-semibold text-gray-900 md:text-3xl">
                                    Our Office
                                </h1>
                                <p className="mt-3 leading-relaxed text-gray-600 whitespace-pre-line">
                                    {ADDRESS}
                                </p>

                                <div className="grid gap-3 mt-6 sm:flex sm:items-center sm:gap-4">
                                    <button
                                        onClick={copyAddress}
                                        className="inline-flex items-center justify-center px-4 py-2 font-medium text-white transition bg-[#ffc107] border hover:border-[#ffc107] hover:text-black rounded-lg hover:bg-[#FFF1CC] duration-300"
                                    >
                                        {copied ? "Copied ✓" : "Copy address"}
                                    </button>

                                    <a
                                        href={mapsSearchUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-4 py-2 poppins-medium text-[#ffc107] hover:text-black transition border border-[#ffc107] rounded-lg hover:bg-[#FFF1CC] duration-300"
                                    >
                                        Get directions
                                    </a>
                                </div>
                            </div>

                            <div className="pt-6 mt-6 border-t border-gray-200">
                                <h2 className="text-sm text-gray-700 poppins-medium">Contact</h2>
                                <div className="mt-3 text-gray-600">
                                    <p><span className="text-black poppins-medium">Phone:</span> +91-98810-12300</p>
                                    <p className="mt-1"><span className="text-black poppins-medium">Email:</span> info@droneverse.com</p>
                                </div>

                                <div className="mt-4 text-sm text-gray-500">
                                    <p>
                                        Tip: On mobile, tap <span className="text-black poppins-medium">Get directions</span> to open the address in your Maps app.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
