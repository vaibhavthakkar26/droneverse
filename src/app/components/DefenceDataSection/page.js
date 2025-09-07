import React from "react";
import featureIcon from '../../../../public/assets/img/defence/feature-icon.png'
import modeIcon1 from '../../../../public/assets/img/defence/modesIcon-1.png'
import modeIcon2 from '../../../../public/assets/img/defence/modesIcon-2.png'
import modeIcon3 from '../../../../public/assets/img/defence/modesIcon-3.png'
import iconVal1 from '../../../../public/assets/img/defence/iconVal-1.png'
import iconVal2 from '../../../../public/assets/img/defence/iconVal-2.png'
import iconVal3 from '../../../../public/assets/img/defence/iconVal-3.png'
import iconVal4 from '../../../../public/assets/img/defence/iconVal-4.png'
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
    icon: iconVal1,
    title: "AI at Work",
    description: "True AI fingerprinting of unknown dronesv",
  },
  {
    icon: iconVal2,
    title: "All Platforms Access",
    description: "Remote and Mobile access: smartphone, tablet, and computer",
  },
  {
    icon: iconVal3,
    title: "Drone Swarm Detection",
    description: "Detect and alarm drone swarm attack",
  },
  {
    icon: iconVal4,
    title: "Direction & Location Findings",
    description: "Detect the direction and location of drones",
  },
];

const key_features = [
  {
    title: "Global Streaming Capability",
    icon: featureIcon, // Icon placeholder
    description:
      "Secure live footage streaming with global access via AES-256 encrypted links.",
  },
  {
    title: "Covert Operation",
    icon: featureIcon,
    description: " Ultra-low sound and visibility profile.",
  },
  {
    title: "Payload Flexibility",
    icon: featureIcon,
    description: "Modular design to support customer-specific payloads.",
  },
  {
    title: "All-Weather Performance",
    icon: featureIcon,
    description: "Operates in wind gusts up to 45 knots.",
  },
  {
    title: "GNSS-Denied Navigation",
    icon: featureIcon,
    description:
      "Functions in denied environments via dead reckoning and autonomous GPS-based navigation.",
  },
  {
    title: "Flexible Control Options",
    icon: featureIcon,
    description:
      "Compatible with handheld controllers, FPV goggles, or laptop-based command stations",
  },
  {
    title: "Secure Communications ",
    icon: featureIcon,
    description: "Equipped with UAVTEK’s proprietary AES-256 encrypted radio system.",
  },
  {
    title: "Network Versatility",
    icon: featureIcon,
    description:
      "Adaptable to cellular networks, MANET radio modules, and satellite links for reliable urban and remote operations.",
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
    icon: modeIcon1,
    description:
      "Fixed installations for permanent surveillance of high-risk objects or critical areas. Sensors are mounted in discrete housings & connected to external powers.",
  },
  {
    title: "Deployed Sensors",
    icon: modeIcon2,
    description:
      "Temporary surveillance under an operation. The sensors are deployed in the environment running on own battery power.",
  },
  {
    title: "Roaming Sensors",
    icon: modeIcon3,
    description:
      "Mobile survelliance under an operation or as an expansion of a fixed installation. Roaming sensors on personnel provides continuous gunshot positoned around a team.",
  },
];

const gun_violence = [
  {
    title: "Reporting",
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
]

const DefenceDataSection = ({
  showNumeric = true,
  showIcons = true,
  showKeyFeatures = true,
  showSpecifications = true,
  showOperatingModes = true,
  showGunViolence = true,
  myTitleColor = "text-black",
  myTablebg = "bg-[#FBFCFC]",
  myTableHeader = "bg-[#5F5F5F]",
  myTableHeaderTitle = 'text-white',
  myTableBodyTitle = 'text-black',
  myTableBB = 'border-[#E6E6E6]',
  featureText = "text-black",
  featureBorder = 'border-[#F4F4F4]',
  featureBg = "bg-gradient-to-b from-[#ffffff00] from-30% to-[#E6E6E6a1] to-100%", //bg-[#303030]
}) => {
  return (
    <div>
      {showNumeric && numeric_values && (
        <div className="flex items-center mt-10 mb-8 justify-center p-4 bg-white/10 rounded-[20px]">
          <div className="w-full max-w-7xl">
            <div className="p-8 rounded-2xl">
              <div className="grid max-w-6xl gap-8 mx-auto grid-col-1 sm:grid-cols-2 lg:grid-cols-3">
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
          <div className="flex flex-col items-center justify-center py-0 pb-4 space-y-0">
            <div className="w-full">
              <div className="pt-12.5 pb-7.5 px-7 bg-[#1A1A1A] rounded-2xl">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {icon_values.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center space-y-4 text-center"
                    >
                      {/* Icon */}
                      <div className="mb-4.5 text-5xl md:text-6xl">
                        {/* {item.icon} */}
                        {typeof item.icon === "string" ? (
                          <span className="text-5xl">{item.icon}</span>  // if emoji
                        ) : (
                          <Image src={item.icon} alt={item.title} width={70} height={70} className="object-contain size-[70px]" />
                        )}
                      </div>

                      {/* Title */}
                      <div className="mb-0 text-base font-medium text-white md:text-lg lg:text-xl poppins-medium">
                        {item.title}
                      </div>

                      {/* Description */}
                      <div className="mt-4 text-sm leading-relaxed text-white max-w-48">
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
        <section className="py-0 mt-8">
          <div className="py-0 mx-auto">
            <h2 className={`justify-start mb-4 uppercase text-2xl text-start poppins-semibold ${myTitleColor}`}>
              Key Features
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {key_features.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col items-center overflow-hidden  border shadow-md ${featureBorder} rounded-xl ${featureBg}`}
                >
                  <div className="relative z-10 flex flex-col items-center w-full p-6 pt-10 pb-18">
                    <div className="mb-6 text-5xl text-yellow-500">
                      {typeof item.icon === "string" ? (
                        <span className="text-5xl">{item.icon}</span>  // if emoji
                      ) : (
                        <Image src={item.icon} alt={item.title} width={64} height={64} className="object-contain size-16" />
                      )}
                    </div>
                    <h3 className={`mb-2 text-lg lg:text-xl font-medium text-center poppins-medium ${featureText}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm md:text-base text-center ${featureText}`}>
                      {item.description}
                    </p>
                  </div>
                  <div className={`w-full h-full absolute top-0 left-0 ${featureBg}`} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {showSpecifications && technical_specifications && (
        <section className="py-0 mt-8">
          <div className="mx-auto">
            <div className={`overflow-x-auto rounded-[20px]`}>
              <table className={`min-w-full border rounded-[20px] overflow-hidden border-[#E6E6E6] ${myTablebg}`}>
                <thead className={`text-left ${myTableHeader} rounded-t-[20px]`}>
                  <tr>
                    <th className={`px-7 py-5 text-sm md:text-base  poppins-medium ${myTableHeaderTitle}`}>
                      Technical Specifications
                    </th>
                    <th className={`px-7 py-5 text-sm md:text-base  poppins-medium ${myTableHeaderTitle}`}>
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="space-x-10 space-y-6">
                  {technical_specifications.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b mx-10 pb-6 ${myTableBB}  index % 2 === 0 ? "" : ""`}
                    >
                      <td className={`px-6 mx-10 w-1/2 py-4  text-sm md:text-base poppins-medium ${myTableBodyTitle}`}>
                        {item.spec}
                      </td>
                      <td className={`px-6 py-4  w-1/2 text-sm md:text-base poppins-medium ${myTableBodyTitle}`}>
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
        <section className="py-0 mt-8">
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
                  <div className="mb-4 text-4xl">
                    {typeof item.icon === "string" ? (
                      <span className="text-5xl">{item.icon}</span>  // if emoji
                    ) : (
                      <Image src={item.icon} alt={item.title} width={50} height={50} />
                    )}
                  </div>
                  <div className="mb-2 text-xl text-black poppins-medium">
                    {item.title}
                  </div>
                  <p className="max-w-xs text-base text-[#BABABA] poppins-regular">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {showGunViolence && gun_violence && (
        <section className="py-0 mt-8">
          <div className="py-0 mx-auto">
            <h2 className={`justify-start mb-6 text-2xl font-bold sm:text-3xl text-start ${myTitleColor}`}>
              Impact  Of ShotSpotter on Gun Violence
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gun_violence.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col items-center overflow-hidden  border shadow-md ${featureBorder} rounded-xl ${featureBg}`}
                >
                  <div className="relative z-10 flex flex-col items-center w-full p-6 pt-10 pb-18">
                    <div className="mb-6 text-5xl text-yellow-500">
                      {typeof item.icon === "string" ? (
                        <span className="text-5xl">{item.icon}</span>  // if emoji
                      ) : (
                        <Image src={item.icon} alt={item.title} width={64} height={64} className="object-contain size-16" />
                      )}
                    </div>
                    <h3 className={`mb-2 text-xl font-medium text-center poppins-medium ${featureText}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm text-center ${featureText}`}>
                      {item.description}
                    </p>
                  </div>
                  <div className={`w-full h-full absolute top-0 left-0 ${featureBg}`} />
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
