import React from "react";
import Image from "next/image";
import paternsbg from "../../../../../public/assets/img/defence/paterns.png";
import dvHourspic from "../../../../../public/assets/img/defence/dvHours.png";
// Add your DV IRONGRID image import here
import dvIrongridPic from "../../../../../public/assets/img/defence/black-mic.png";
import dvIrongridPicTwo from "../../../../../public/assets/img/defence/gold-mic.png";
import btnShape from "../../../../../public/assets/img/defence/Subtract.png";

const DefenceProducts = () => {
  const products = [
    {
      id: "dv-horus",
      title: "DV HORUS",
      category: "SURVEILLENCE DRONES",
      description:
        "DroneVerse's cutting-edge FPV (First Person View) drones deliver real-time situational awareness, empowering troops in asymmetric warfare. From tactical surveillance to high-speed ops, they redefine control, clarity, and command on the battlefield",
      features: [
        "Flight Time 30-45 mins",
        "Range 7km+",
        "Flying in wind speeds 35 knots",
        "MTOW",
        "Flying at speeds up to 120 kph",
        "Payload Capacity",
      ],
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
        "RF Jamming",
        "Maximum Range 2Km+",
        "Multi-band interference",
        "GPS & GLONASS",
        "5.8G Transmission & Classification",
        "EMP Damage",
      ],
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
          className={`relative pt-[75px] pb-[116px] ${
            product.theme === "black" ? "bg-black text-white" : ""
          }`}
        >
          <div
            className="absolute inset-0 bg-center bg-cover -z-10 opacity-10"
            style={{ backgroundImage: `url(${paternsbg.src})` }}
          ></div>
          <div className="px-4 mx-auto max-w-7xl">
            <div className={`flex flex-col gap-8 md:flex-row ${
              product.imagePosition === 'left' ? 'md:flex-row-reverse' : ''
            }`}>
              {/* Left Side - Content */}
              <div className="w-full space-y-6 md:w-3/4">
                <h3
                  className={`text-sm font-semibold uppercase ${
                    product.theme === "black"
                      ? "text-gray-300"
                      : "text-gray-500"
                  }`}
                >
                  {product.category}
                </h3>
                <h2 className="text-3xl font-bold">{product.title}</h2>
                <p
                  className={
                    product.theme === "black"
                      ? "text-gray-300"
                      : "text-gray-700"
                  }
                >
                  {product.description}
                </p>

                {/* Features */}
                <ul
                  className={`grid grid-cols-1 gap-2 list-disc list-inside sm:grid-cols-2 ${
                    product.theme === "black"
                      ? "text-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="grid grid-cols-3 gap-3 pt-4">
                  {product.buttons.map((btn, index) => (
                    <button
                      key={index}
                      className={`relative px-4 py-5 transition border rounded-tr-[15px] text-2xl poppins-medium w-full overflow-hidden ${
                        product.theme === "black"
                          ? "text-white bg-transparent border-white hover:bg-gray-800"
                          : "text-black bg-transparent border-black hover:bg-gray-400"
                      }`}
                    >
                      {btn}

                      {/* Shape image */}
                      <div className="absolute bottom-0 left-0 w-6 h-6 transition-opacity duration-300 opacity-0 hover:opacity-100">
                        <Image
                          src={btnShape}
                          alt="Shape"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Side - Image Space */}
              <div className="md:w-2/5">
                {/* Image space reserved for manual addition */}
              </div>

              {/* DV HORUS Image - Right positioned */}
              {product.id === "dv-horus" && product.image && (
                <Image
                  src={product.image}
                  alt={product.title}
                  className="absolute right-0 object-contain w-1/2 -top-1/6"
                />
              )}

              {/* DV IRONGRID Images - Left positioned and stacked */}
              {product.id === "dv-irongrid" && (
                <>
                  {/* Black microphone - positioned behind */}
                  <Image
                    src={dvIrongridPic}
                    alt={`${product.title} black`}
                    className="absolute left-0 object-contain w-1/3 z-10"
                  />
                  {/* Gold microphone - positioned in front and slightly offset */}
                  <Image
                    src={dvIrongridPicTwo}
                    alt={`${product.title} gold`}
                    className="absolute left-20 object-contain w-1/3 z-20"
                  />
                </>
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default DefenceProducts;