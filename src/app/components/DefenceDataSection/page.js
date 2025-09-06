import React from "react";

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
    title: "Global Streaming Capability",
    icon: "🌐", // Icon placeholder
    description:
      "Secure live footage streaming with global access via AES-256 encrypted links.",
  },
  {
    title: "Covert Operation",
    icon: "🔇", // Icon placeholder
    description: "Ultra-low sound and visibility profile.",
  },
  {
    title: "Payload Flexibility",
    icon: "🔧", // Icon placeholder
    description: "Modular design to support customer-specific payloads.",
  },
  {
    title: "All-Weather Performance",
    icon: "☔", // Icon placeholder
    description: "Operates in wind gusts up to 45 knots.",
  },
  {
    title: "GNSS-Denied Navigation",
    icon: "🛰️", // Icon placeholder
    description:
      "Functions in denied environments via dead reckoning and autonomous GPS-based navigation.",
  },
  {
    title: "Flexible Control Options",
    icon: "🎮", // Icon placeholder
    description:
      "Compatible with handheld controllers, FPV goggles, or laptop-based command stations.",
  },
  {
    title: "Secure Communications",
    icon: "🔒", // Icon placeholder
    description: "Equipped with proprietary AES-256 encrypted radio systems.",
  },
  {
    title: "Network Versatility",
    icon: "📡", // Icon placeholder
    description:
      "Adapts to cellular networks, MANET radio modules, and satellite links.",
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

const DefenceDataSection = () => {
  return (
    <div>
      {numeric_values && (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
          <div className="max-w-7xl w-full">
            <div className="bg-black/20 rounded-2xl p-8">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {numeric_values.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-white text-center space-y-2"
                  >
                    {/* Number and Unit Container */}
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                        {item.value}
                      </span>
                      {item.unit && (
                        <span className="text-lg md:text-xl lg:text-2xl font-medium text-white ml-1 uppercase">
                          {item.unit}
                        </span>
                      )}
                    </div>

                    {/* Subtitle */}
                    <div className="text-sm md:text-base text-gray-300 max-w-48 leading-relaxed">
                      {item.subtitle}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {icon_values && (
        <>
          {/* Features Section */}
          <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 space-y-16">
            <div className="max-w-6xl w-full">
              <div className="bg-black/20 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {icon_values.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center space-y-4"
                    >
                      {/* Icon */}
                      <div className="text-5xl md:text-6xl mb-2">
                        {item.icon}
                      </div>

                      {/* Title */}
                      <div className="text-white font-semibold text-lg">
                        {item.title}
                      </div>

                      {/* Description */}
                      <div className="text-gray-400 text-sm leading-relaxed max-w-48">
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

      {key_features && (
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-start justify-start mb-10 text-gray-900">
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {key_features.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white rounded-xl overflow-hidden shadow-md border border-gray-200"
                >
                  <div className="w-full flex flex-col items-center p-6">
                    <div className="text-5xl mb-4 text-yellow-500">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 text-center">
                      {item.description}
                    </p>
                  </div>
                  <div className="w-full h-2 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {technical_specifications && (
        <section className="py-10 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto rounded-lg shadow">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100 text-gray-800">
                  <tr>
                    <th className="text-left text-sm sm:text-base font-semibold px-4 py-3 border-b border-gray-200">
                      Technical Specifications
                    </th>
                    <th className="text-left text-sm sm:text-base font-semibold px-4 py-3 border-b border-gray-200">
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
                      <td className="text-sm text-gray-700 px-4 py-3 border-b border-gray-200">
                        {item.spec}
                      </td>
                      <td className="text-sm text-gray-700 px-4 py-3 border-b border-gray-200">
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

      {operating_modes && (
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-10 text-left">
              Operating Modes:
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {operating_modes.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center px-4"
                >
                  <div className="mb-4 text-4xl">{item.icon}</div>
                  <div className="text-lg font-semibold text-black mb-2">
                    {item.title}
                  </div>
                  <p className="text-sm text-gray-600 max-w-xs">
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
