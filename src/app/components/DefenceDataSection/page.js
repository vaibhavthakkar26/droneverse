import React from "react";
import featureIcon from '../../../../public/assets/img/defence/feature-icon.png'
import Image from "next/image";

const numeric_values = [
  {
    value: "35",
    unit: "KM",
    subtitle: "Very long Detection range",
  },
  {
    value: "450+",
    unit: "MODEL",
    subtitle: "Most extensive luxury coverage in the industry",
  },
  {
    value: "99.9%",
    unit: "",
    subtitle: "Identification & Classification with near 0 false alarms",
  },
  {
    value: "0",
    unit: "Signal",
    subtitle: "Very long Detection range",
  },
  {
    value: "360",
    unit: "Degrees",
    subtitle: "All Airspace Detection",
  },
  {
    value: "120+",
    unit: "Drones",
    subtitle: "Simultaneous detection load",
  },
];

const icon_values = [
  {
    icon: "🤖",
    title: "AI at Work",
    description: "True AI fingerprinting of unknown drones",
  },
  {
    icon: "🎯",
    title: "All Platforms Access",
    description: "Remote and Mobile access smartphone, tablet, and computer",
  },
  {
    icon: "💻",
    title: "Drone Swarm Detection",
    description: "Detect and alarm drone swarm attack",
  },
  {
    icon: "🔍",
    title: "Direction & Location Findings",
    description: "Detect the direction and location of drones",
  },
];

const key_features = [
  {
    title: "Freestyle FPV PNP drone.",
    icon: featureIcon, // Icon placeholder
    description:
      "",
  },
  {
    title: "Size: 5″ class.",
    icon: featureIcon,
    description: "",
  },
  {
    title: "Agile and robust built using a custom carbon fibre frame.",
    icon: featureIcon,
    description: "",
  },
  {
    title: "Modular and customizable.",
    icon: featureIcon,
    description: "",
  },
  {
    title: "Freestyle and racing capabilities.",
    icon: featureIcon,
    description:
      "",
  },
  {
    title: "Easy learning curve from beginner to pro.",
    icon: featureIcon,
    description:
      "",
  },
  {
    title: "Flight modes: Stabilized, Horizon (stabilized with flips), Acro.",
    icon: featureIcon,
    description: "",
  },
  {
    title: "Analog or digital FPV video feed transmission (based on requirement)",
    icon: featureIcon,
    description:
      "",
  },
   {
    title: "Onboard and offboard recording with livestream at 4k 60FPS max (Digital version).",
    icon: featureIcon,
    description:
      "",
  },
   {
    title: "Hassle-free battery installation: 4S to 6S LiPo battery",
    icon: featureIcon,
    description:
      "",
  },
];

const technical_specifications = [
  { spec: "Fire Resistance", detail: "ISO 6941" },
  { spec: "Resistance to Petroleum Oil", detail: "No deformation" },
  { spec: "Washing fastness", detail: "≥4/5 (ISO 105 C01)" },
  { spec: "Water Fastness", detail: "≤ 4/5 (ISO 105 E01)" },
  { spec: "Rubbing Fastness (Dry)", detail: "≤ 3 (ISO 105-X12)" },
  {
    spec: "Tear Resistance",
    detail: "Warp: 24N, Weft: 23N (DIN EN ISO 13937-2)",
  },
  {
    spec: "Breaking Resistance",
    detail: "Warp: ≥298 N, Weft: ≥282 N (DIN EN ISO 13934-1)",
  },
  { spec: "Air Permeability", detail: "2398.5mm/s (EN ISO 9237)" },
];

const operating_modes = [
  {
    title: "Fixed Sensors",
    icon: "🔒", // Icon placeholder
    description:
      "Fixed installations for permanent surveillance of high-risk objects or critical areas. Sensors are mounted in discrete housings & connected to external powers.",
  },
  {
    title: "Deployed Sensors",
    icon: "🎯", // Icon placeholder
    description:
      "Temporary surveillance under an operation. The sensors are deployed in the environment running on own battery power.",
  },
  {
    title: "Roaming Sensors",
    icon: "🚶", // Icon placeholder
    description:
      "Mobile surveillance under an operation or as an expansion of a fixed installation. Roaming sensors on personnel provides continuous gunshot positioned around a team.",
  },
];

const DefenceDataSection = ({
  showNumeric = true,
  showIcons = true,
  showKeyFeatures = true,
  showSpecifications = true,
  showOperatingModes = true,
}) => {
  return (
    <div>
      {showNumeric && numeric_values && (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-900">
          <div className="w-full max-w-7xl">
            <div className="p-8 bg-black/20 rounded-2xl">
              <div className="grid max-w-6xl grid-cols-2 gap-8 mx-auto lg:grid-cols-3">
                {numeric_values.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-2 text-center text-white"
                  >
                    {/* Number and Unit Container */}
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                        {item.value}
                      </span>
                      {item.unit && (
                        <span className="ml-1 text-lg font-medium text-white uppercase md:text-xl lg:text-2xl">
                          {item.unit}
                        </span>
                      )}
                    </div>

                    {/* Subtitle */}
                    <div className="text-sm leading-relaxed text-gray-300 md:text-base max-w-48">
                      {item.subtitle}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {showIcons && icon_values && (
        <>
          {/* Features Section */}
          <div className="flex flex-col items-center justify-center py-4 space-y-0 ">
            <div className="w-full">
              <div className="p-8 bg-[#1A1A1A] rounded-2xl">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {icon_values.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center space-y-4 text-center"
                    >
                      {/* Icon */}
                      <div className="mb-2 text-5xl md:text-6xl">
                        {item.icon}
                      </div>

                      {/* Title */}
                      <div className="text-lg font-semibold text-white">
                        {item.title}
                      </div>

                      {/* Description */}
                      <div className="text-sm leading-relaxed text-gray-400 max-w-48">
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {showKeyFeatures && key_features && (
        <section className="py-12 ">
          <div className="py-0 mx-auto">
            <h2 className="justify-start mb-10 text-2xl font-bold text-gray-900 sm:text-3xl text-start">
              Key Features
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {key_features.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center overflow-hidden  border shadow-md border-[#F4F4F4] rounded-xl"
                >
                  <div className="relative z-10 flex flex-col items-center w-full p-6 pt-10 pb-18">
                    <div className="mb-6 text-5xl text-yellow-500">
                      {typeof item.icon === "string" ? (
                        <span className="text-5xl">{item.icon}</span>  // if emoji
                      ) : (
                        <Image src={item.icon} alt={item.title} width={50} height={50} />
                      )}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-center text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-center text-gray-600">
                      {item.description}
                    </p>
                  </div>
                  <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-[#ffffff00] from-0% to-[#E6E6E6] to-100%'" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {showSpecifications && technical_specifications && (
        <section className="py-0 ">
          <div className="mx-auto">
            <div className="overflow-x-auto rounded-lg shadow">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="text-gray-800 bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold text-left border-b border-gray-200 sm:text-base">
                      Technical Specifications
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-left border-b border-gray-200 sm:text-base">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {technical_specifications.map((item, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                        {item.spec}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                        {item.detail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {showOperatingModes && operating_modes && (
        <section className="py-12 ">
          <div className="mx-auto">
            <h2 className="mb-10 text-2xl font-bold text-left text-gray-900">
              Operating Modes:
            </h2>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
              {operating_modes.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center px-4 text-center"
                >
                  <div className="mb-4 text-4xl">{item.icon}</div>
                  <div className="mb-2 text-lg font-semibold text-black">
                    {item.title}
                  </div>
                  <p className="max-w-xs text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default DefenceDataSection;
