import React from "react";
import Image from "next/image";
import paternsbg from "../../../../../public/assets/img/defence/paterns.png";
import dvHourspic from "../../../../../public/assets/img/defence/dvHours.png";
// Add your DV IRONGRID image import here
import dvIrongridPic from "../../../../../public/assets/img/defence/black-mic.png";
import dvIrongridPicTwo from "../../../../../public/assets/img/defence/gold-mic.png";
import btnShape from "../../../../../public/assets/img/defence/Subtract.png";
import leftWing from "../../../../../public/assets/img/defence/leftWings.png";
import fullWing from "../../../../../public/assets/img/defence/fullWings.png";

import icon1 from "../../../../../public/assets/img/defence/icon1.png";
import icon2 from "../../../../../public/assets/img/defence/icon2.png";
import icon3 from "../../../../../public/assets/img/defence/iicon3.png";
import icon4 from "../../../../../public/assets/img/defence/icon4.png";
import icon5 from "../../../../../public/assets/img/defence/icon5.png";
import icon6 from "../../../../../public/assets/img/defence/icon6.png";

import Link from "next/link";

const DefenceProducts = () => {
  const products = [
    {
      id: "dv-horus",
      title: "DV HORUS",
      category: "SURVEILLENCE DRONES",
      description:
        "DroneVerse's cutting-edge FPV (First Person View) drones deliver real-time situational awareness, empowering troops in asymmetric warfare. From tactical surveillance to high-speed ops, they redefine control, clarity, and command on the battlefield",
      features: [
        { text: "Flight Time 30-45 mins", icon: icon1 },
        { text: "Range 7km+", icon: icon2 },
        { text: "Flying in wind speeds 35 knots", icon: icon3 },
        { text: "MTOW", icon: icon4 },
        { text: "Flying at speeds up to 120 kph", icon: icon5 },
        { text: "Payload Capacity", icon: icon6 },
      ],
      prodBtns: [{ label: "Contact Us", link: "/" }],
      image: dvHourspic,
      buttons: ["DV HORUS", "DV HUNTSMEN", "DV BUG"],
      theme: "white",
    },
    {
      id: "dv-irongrid",
      title: "DV IRONGRID",
      category: "ANTI-DRONE GUNS",
      description:
        "DroneVerse's cutting-edge Anti-Drone Guns deliver advanced defence against aerial threats, empowering security teams with precise countermeasure capabilities. From tactical neutralization to high-priority protection ops, they redefine security protocols and airspace control.",
      features: [
        { text: "450+ Models", icon: icon1 },
        {
          text: "99.99% Identification & Classification with Near 0 false alarms  ",
          icon: icon2,
        },
        { text: "Detection Range 35km+", icon: icon3 },
        { text: "0 SIgnal Alarm", icon: icon4 },
        { text: "360° All airspace Detection", icon: icon5 },
        { text: "120+ Drones", icon: icon6 },
      ],
      prodBtns: [{ label: "Contact Us", link: "/" }],
      image: dvIrongridPic,
      imageTwo: dvIrongridPicTwo,
      buttons: ["DV IRONGRID", "DV SKYLOAD", "DV SKYGUARD"],
      theme: "black",
      imagePosition: "left", // New prop to control image position
    },
  ];

  return (
    <>
      {products.map((product, productIndex) => (
        <section
          key={product.id}
          className={`relative pt-[75px] pb-[116px] overflow-hidden ${
            product.theme === "black" ? "bg-black text-white" : ""
          }`}
        >
          <div
            className="absolute inset-0 bg-center bg-cover -z-10 opacity-10"
            style={{ backgroundImage: `url(${paternsbg.src})` }}
          ></div>
          <div className="px-4 mx-auto max-w-7xl">
            <div className="relative">
              <Image
                src={leftWing}
                alt="leftWing"
                className="absolute hidden object-contain lg:w-28 md:w-20 -top-16 lg:-left-32 -z-10 md-left-0 lg:block"
              />
            </div>
            <div
              className={`flex flex-col gap-8 md:flex-row ${
                product.imagePosition === "left" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Left Side - Content */}
              <div className="relative z-0 w-full space-y-6 lg:w-4/6 md:w-full ">
                <h3
                  className={`text-base poppins-medium uppercase ${
                    product.theme === "black" ? "text-white" : "text-[#5F5F5F]"
                  }`}
                >
                  {product.category}
                </h3>
                <h2 className="text-5xl lg:text-6xl lg:pb-12 md:pb-8 poppins-extrabold">
                  {product.title}
                </h2>
                <p
                  className={`text-lg w-full md:w-full lg:w-4/5 ${
                    product.theme === "black"
                      ? "text-gray-300"
                      : "text-[#5F5F5F]"
                  }`}
                >
                  {product.description}
                </p>

                {/* Features */}
                <ul
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 ${
                    product.theme === "black"
                      ? "text-gray-300"
                      : "text-[#5F5F5F]"
                  }`}
                >
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-base md:text-lg"
                    >
                      {/* Icon */}
                      {feature.icon && (
                        <Image
                          src={feature.icon}
                          alt={`feature-icon-${index}`}
                          className="flex-shrink-0 object-contain w-12"
                        />
                      )}

                      {/* Text */}
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Contact Us Button */}
                {product.prodBtns?.map((btn, index) => (
                  <Link
                    key={index}
                    href={btn.link}
                    className="inline-block px-5 py-2 mt-3 text-dark transition bg-[var(--color-primary)] rounded-lg shadow "
                  >
                    {btn.label}
                  </Link>
                ))}

                {/* Buttons */}
                <div className="pt-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory">
                  <div className="flex gap-3 w-max sm:w-full">
                    {product.buttons.map((btn, index) => (
                      <button
                        key={index}
                        className={`group flex-shrink-0 w-64 sm:w-1/3 relative px-4 py-5 transition border rounded-tr-[20px] text-2xl poppins-medium overflow-hidden snap-start ${
                          product.theme === "black"
                            ? "text-white bg-transparent border-white hover:bg-gray-800"
                            : "text-black bg-white border-[#26212c] hover:border-[#e6e6e6] hover:bg-[#e6e6e6]"
                        }`}
                      >
                        {btn}

                        {/* Shape image */}
                        <div className="absolute bottom-[1px] w-6 h-6 transition-opacity duration-300 opacity-0 left-[1px] group-hover:opacity-100">
                          <Image
                            src={btnShape}
                            alt="Shape"
                            fill
                            className="object-contain w-full"
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Image Space */}
              <div className="md:min-w-0 sm:min-w-1/12 ">
                {/* Image space reserved for manual addition */}
              </div>

              {/* DV HORUS Image - Right positioned */}
              {product.id === "dv-horus" && product.image && (
                <Image
                  src={product.image}
                  alt={product.title}
                  className="absolute object-contain w-[1281px] -rotate-y-180 -top-20 -z-[1] md:-top-44 -right-2/5"
                />
              )}

              {/* DV IRONGRID Images - Left positioned and stacked */}
              {product.id === "dv-irongrid" && (
                <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
                  {/* Black microphone - Big and in front (higher z-index) */}
                  <Image
                    src={dvIrongridPic}
                    alt={`${product.title} black`}
                    className="
        absolute 
        z-30 
        object-contain 
        w-[50vw] sm:w-[40vw] md:w-[30vw] lg:w-[25vw] xl:w-[450px] 
        left-[2vw] sm:left-[4vw] md:left-[6vw] lg:left-8 
        top-[2vh] sm:top-[4vh] md:top-[6vh] lg:top-8
      "
                  />
                  {/* Gold microphone - Small and behind (lower z-index) */}
                  <Image
                    src={dvIrongridPicTwo}
                    alt={`${product.title} gold`}
                    className="
        absolute 
        z-20 
        object-contain 
        w-[30vw] sm:w-[25vw] md:w-[20vw] lg:w-[15vw] xl:w-[700px] 
        left-[4vw] sm:left-[6vw] md:left-[8vw] lg:left-12 
        top-[10vh] sm:top-[12vh] md:top-[15vh] lg:top-32
      "
                  />
                </div>
              )}
            </div>
            <div className="relative">
              <Image
                src={fullWing}
                alt="fullWing"
                className="absolute object-contain lg:-bottom-24 lg:w-80 md:w-72 lg:-right-52 md:-bottom-20 -z-10 md:-right-48 w-60 -bottom-20 xl:-right-64 -right-32"
              />
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default DefenceProducts;
