"use client";
import Image from "next/image";
import HeroImg from "../../../public/assets/img/hero-section/enrollHero.jpg";
import Graduation from "../../../public/assets/img/training/Graduation hat.svg";
import CountUp from "react-countup";
import counterBg2 from "../../../public/assets/img/training/counterbg2.png";
import gRating from "../../../public/assets/img/training/googleRateings.png";
import review1 from "../../../public/assets/img/instagram-1-600x600.jpg";
import patternBg from "../../../public/assets/img/defence/PatternDark.png";
import { FaChevronDown, FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import whatGetFromCourse from "../../../public/assets/img/training/whatGetFromCourse.jpg";
import {
  GraduationCap,
  FileText,
  Stethoscope,
  CheckCircle,
  Users,
  DollarSign,
  Banknote,
  Award,
  Zap,
} from "lucide-react";

export default function EnrollNow() {
  const [openIndex, setOpenIndex] = useState(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Add this helper function
  const formatValue = (value, suffix) => {
    const numValue = parseInt(value.replace(/[^\d]/g, ""));
    if (suffix === "k+") {
      return (numValue / 1000).toFixed(0) + "k+";
    }
    return numValue + suffix;
  };

  const testimonials = [
    {
      name: "John Doe",
      position: "Certified Drone Pilot",
      testimonial:
        "DroneVerse’s training program was top-notch! I learned everything I needed to know and am now flying drones professionally.",
      image: review1,
      rating: 5, // Added rating for each testimonial
    },
    {
      name: "Sarah Lee",
      position: "Commercial Drone Operator",
      testimonial:
        "The instructors were highly experienced, and the hands-on training was exactly what I needed to start my drone career.",
      image:
        "https://images.unsplash.com/photo-1506748686211-090af5f8c5b0?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg4OXwwfDF8c2VhcmNofDI0fHxwZXJzb258ZW58MHx8fHwxNjY2MTYwNzg&ixlib=rb-1.2.1&q=80&w=1080",
      rating: 4,
    },
    {
      name: "Mike Johnson",
      position: "Flight Instructor",
      testimonial:
        "Excellent training! The curriculum was well-structured and up-to-date with the latest in drone technology and regulations.",
      image: review1,
      rating: 5,
    },
    {
      name: "Laura Clark",
      position: "Aerial Photography Expert",
      testimonial:
        "The best drone school! I gained a lot of practical knowledge and flew some of the latest drones.",
      image:
        "https://images.unsplash.com/photo-1578581336173-b2c1156c6639?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg4OXwwfDF8c2VhcmNofDY4fHxwZXJzb258ZW58MHx8fHwxNjY2MTYwOTg&ixlib=rb-1.2.1&q=80&w=1080",
      rating: 5,
    },
    {
      name: "James Williams",
      position: "Drone Technician",
      testimonial:
        "Great curriculum, excellent instructors, and hands-on training. The knowledge I gained is invaluable.",
      image:
        "https://images.unsplash.com/photo-1559045351-e51761f70324?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg4OXwwfDF8c2VhcmNofDQ4fHxwZXJzb258ZW58MHx8fHwxNjY2MTYwOTg&ixlib=rb-1.2.1&q=80&w=1080",
      rating: 4,
    },
  ];

  const eligibilityRequirements = [
    {
      icon: GraduationCap,
      title: "EDUCATION",
      description: "Minimum 10th Pass and 18 years of age",
    },
    {
      icon: FileText,
      title: "DOCUMENTS",
      description: "Must possess valid Passport and Aadhar Card",
    },
    {
      icon: Stethoscope,
      title: "MEDICAL",
      description: "Medical Fitness Certification from a certified MBBS Doctor",
    },
  ];

  const whyDroneverse = [
    {
      icon: CheckCircle,
      text: "100% Placements Assistance",
    },
    {
      icon: Users,
      text: "Hostel Facility",
    },
    {
      icon: DollarSign,
      text: "Finance Assistance",
    },
    {
      icon: Banknote,
      text: "Earn 60k Salary Per Month",
    },
    {
      icon: Award,
      text: "10 Year Valid (DGCA Approved) Drone Flying License",
    },
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
    { value: 5000, suffix: "+", label: "Students Trained" },
    { value: 8, suffix: "+", label: "Years of Experience" },
    { value: 30, suffix: "", label: "Drone Products" },
    { value: 50, suffix: "+", label: "Team Members" },
  ];

  const courseFeatures = [
    "12 Hours of Field Flying",
    "Flight Simulator Sessions",
    "Theory Classes & Live Field Training by experienced Instructors",
    "Flying with up to 25 kg drones",
    "Flight basics, regulations and hands-on piloting",
  ];

  const locations = [
    {
      name: "Gurgaon",
      image:
        "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "Gurgaon city skyline with modern buildings",
    },
    {
      name: "Indore",
      image:
        "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "Indore city view with historical architecture",
    },
    {
      name: "Meerut",
      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "Meerut city landscape with urban development",
    },
    {
      name: "Nagpur",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "Nagpur city with orange trees and urban scenery",
    },
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
            className={`ml-2 transition-transform duration-300 ${
              openIndex === `${column}-${index}` ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            openIndex === `${column}-${index}` ? "max-h-40 mt-0" : "max-h-0"
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
      <div className="relative flex items-center justify-center min-h-screen pt-24 sm:pt-32 lg:pt-40">
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
                  <label
                    htmlFor="name"
                    className="block mb-1 font-medium text-gray-700"
                  >
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
                  <label
                    htmlFor="email"
                    className="block mb-1 font-medium text-gray-700"
                  >
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
                  <label
                    htmlFor="phone"
                    className="block mb-1 font-medium text-gray-700"
                  >
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
                  <label
                    htmlFor="city"
                    className="block mb-1 font-medium text-gray-700"
                  >
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
                  <label
                    htmlFor="passport"
                    className="block mb-1 font-medium text-gray-700"
                  >
                    Select Course
                  </label>
                  <select
                    id="passport"
                    name="passport"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select one</option>
                    <option value="small_class">Small Class</option>
                    <option value="medium_class">Medium Class</option>
                    <option value="train_the_trainer">Train the Trainer</option>
                    <option value="drone_assembly">
                      Drone Assembly Course
                    </option>
                    <option value="advanced_flying">
                      Other Advanced Flying Courses
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#FFB801] text-black font-semibold rounded-md cursor-pointer transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <section className="relative bg-bottom bg-[#FFB801]">
        <Image
          src={counterBg2}
          alt="bg"
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="relative px-3 mx-auto max-w-7xl lg:px-8">
          <div className="flex flex-wrap items-start pt-[53px] pb-[47px] md:py-11 py-8">
            {traningStats.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex items-center w-1/2 space-x-3 sm:w-1/4 ${
                  idx >= 2 ? "mt-0 md:mt-0" : "mt-0"
                }`}
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
                    {isMounted ? (
                      <CountUp
                        start={0}
                        end={item.value}
                        duration={2.5}
                        separator=","
                        suffix={item.suffix}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                      />
                    ) : (
                      item.value + item.suffix
                    )}
                  </h3>
                  <p className="text-sm lg:text-base text-[#5F5F5F] poppins-regular">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <div className="px-4 py-12 text-center">
        <section className="relative py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
                {" "}
                <Image
                  src={whatGetFromCourse}
                  alt="Drone Training"
                  fill
                  className="object-cover"
                />{" "}
              </div>
              <div className="space-y-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                  What will you get from this course?
                </h2>

                <div className="grid place-items-start">
                  <ul className="space-y-4">
                    {courseFeatures.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-700 text-base"
                      >
                        <span className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                          ✓
                        </span>
                        <span className="leading-6">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center lg:justify-start">
                  <button className="mt-2 bg-[#FFB801] text-black font-semibold px-6 py-3 rounded-md cursor-pointer transition">
                    Enroll Now &raquo;
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {locations.map((location, index) => (
                  <div
                    key={location.name}
                    className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {/* City Image */}
                    <div className="relative h-40 w-full">
                      <img
                        src={location.image}
                        alt={location.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />

                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-black/70 group-hover:opacity-90 transition-opacity duration-300"></div>

                      {/* Location Icon and Name */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                          <svg
                            className="w-8 h-8 text-white mx-auto mb-2 drop-shadow-lg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 0C6.14 0 3 3.14 3 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5A2.5 2.5 0 1 1 10 4a2.5 2.5 0 0 1 0 5.5z" />
                          </svg>
                          <h3 className="text-white text-xl font-bold drop-shadow-lg">
                            {location.name}
                          </h3>
                        </div>
                      </div>

                      {/* Subtle border effect on hover */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FFB801]/50 rounded-xl transition-colors duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Eligibility Requirements */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Eligibility Requirements
              </h2>
              <div className="w-24 h-1 bg-[#FFB801] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {eligibilityRequirements.map((req, index) => {
                const IconComponent = req.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-[#FFB801] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-wide">
                        {req.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {req.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Droneverse */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-[#FFB801] rounded-3xl transform rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Drone training team with equipment"
                  className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why Droneverse
              </h2>

              <div className="space-y-6 mb-10">
                {whyDroneverse.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-[#FFB801] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-gray-700 text-lg font-medium leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center lg:justify-start">
                <button className="mt-2 bg-[#FFB801] text-black font-semibold px-6 py-3 rounded-md cursor-pointer transition">
                  Enroll Now &raquo;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="px-3 mx-auto max-w-7xl lg:px-8">
          <div className="mb-12 text-3xl text-center sm:text-4xl md:text-5xl poppins-bold">
            Frequently Ask Questions.
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-6">{renderFaqs(LeftFaqs, "left")}</div>
            <div className="space-y-6">{renderFaqs(RightFaqs, "right")}</div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative flex items-center justify-center min-h-screen p-6 ">
        <Image
          src={patternBg}
          alt="pattern"
          className="absolute top-0 left-0 object-cover w-full h-full opacity-20"
        />
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
                <h2 className="text-sm text-gray-700 poppins-medium">
                  Contact
                </h2>
                <div className="mt-3 text-gray-600">
                  <p>
                    <span className="text-black poppins-medium">Phone:</span>{" "}
                    +91-98810-12300
                  </p>
                  <p className="mt-1">
                    <span className="text-black poppins-medium">Email:</span>{" "}
                    info@droneverse.com
                  </p>
                </div>

                <div className="mt-4 text-sm text-gray-500">
                  <p>
                    Tip: On mobile, tap{" "}
                    <span className="text-black poppins-medium">
                      Get directions
                    </span>{" "}
                    to open the address in your Maps app.
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
