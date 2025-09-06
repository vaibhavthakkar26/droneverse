import React from 'react'
import PatternBg from '../../../../../public/assets/img/Defence2/patternBg.png'
import icon1 from '../../../../../public/assets/img/Defence2/highLight-icon-1.png'
import icon2 from '../../../../../public/assets/img/Defence2/highLight-icon-2.png'
import icon3 from '../../../../../public/assets/img/Defence2/highLight-icon-3.png'
import icon4 from '../../../../../public/assets/img/Defence2/highLight-icon-4.png'
import icon5 from '../../../../../public/assets/img/Defence2/highLight-icon-5.png'
import icon6 from '../../../../../public/assets/img/Defence2/highLight-icon-6.png'
import featureIcon from '../../../../../public/assets/img/Defence2/feature-icon.png'
import Link from 'next/link'

const HoursSection = () => {

  const dvHorusData = {
    subtitle: "SURVELLIENCE  DRONES",
    title: "DV HORUS",
    description: `DV HORUS is a high-performance tactical UAV system designed for rapid deployment from both static and mobile platforms. It delivers exceptional real-time visual surveillance and situational awareness during both day and night operations. With low visual and acoustic signatures, Horus is ideal for covert surveillance and reconnaissance missions in sensitive environments.`,

    highlights: [
      { text: "Flight Time 30–45 mins", icon: icon1 },
      { text: "Range 7km+", icon: icon2 },
      { text: "Flying in wind speeds 35 knots", icon: icon3 },
      { text: "MTOW", icon: icon4 },
      { text: "Flying at speeds up to 120 kph", icon: icon5 },
      { text: "Payload Capacity", icon: icon6 },
    ],

    keyFeatures: [
      { keyIcon: featureIcon, title: "Global Streaming Capability", desc: "Secure live footage streaming with global access via AES-256 encrypted links." },
      { keyIcon: featureIcon, title: "Covert Operation", desc: "Ultra-low sound and visibility profile." },
      { keyIcon: featureIcon, title: "Payload Flexibility", desc: "Modular design to support customer-specific payloads." },
      { keyIcon: featureIcon, title: "All-Weather Performance", desc: "Operates in wind gusts up to 45 knots." },
      { keyIcon: featureIcon, title: "GNSS-Denied Navigation", desc: "Functions in denied environments via dead reckoning and autonomous GPS-based navigation." },
      { keyIcon: featureIcon, title: "Flexible Control Options", desc: "Compatible with handheld controllers, FPV goggles, or laptop-based command stations." },
      { keyIcon: featureIcon, title: "Secure Communications", desc: "Equipped with UAVTEK’s proprietary AES-256 encrypted radio system." },
      { keyIcon: featureIcon, title: "Network Versatility", desc: "Adaptable to cellular networks, MANET radio modules, and satellite links for reliable urban and remote operations." },
    ],

    technicalSpecifications: [
      { label: "Product SKU", value: "HORUS-SYS" },
      { label: "Dimensions (Overall Size with 9\" Arms)", value: "531mm (L) x 497mm (W) x 80mm (H)" },
      { label: "Aircraft Weight (with standard batteries)", value: "1.2 kg" },
      { label: "Aircraft Payload (9\" Arms - Max)", value: "1.5 kg (affects flight time)" },
      { label: "Flight Time", value: "Up to 29 mins" },
      { label: "Max Windspeed", value: "35 knots (gusting 45 knots), Beaufort 9" },
      { label: "Operating Temperature Range", value: "-20°C to +50°C" },
      { label: "Launch/Recovery Options", value: "Hand / Ground / Vehicle / Boat" },
      { label: "Frequency (UAVTEK Link)", value: "5.8 GHz" },
      { label: "Autonomous Mission Capability", value: "Yes" },
      { label: "UAVTEK Link Range", value: "16 km (handheld controller) / 55 km (optional antenna)" },
      { label: "GNSS Capability", value: "Operational in denied/spoofed environments" },
      { label: "Electronic Warfare Resistance", value: "Undefeated by C-UAS guns & most C-UAS systems" },
      { label: "Battery Type", value: "Lithium ions" },
      { label: "Airline Carriage", value: "Approved as aircraft hand luggage" },
    ],

    buttons: [
      { text: "Contact Us", link: "#", type: "primary" },
      { text: "Show less", link: "#", type: "secondary" },
    ],

    footerNav: [
      { text: "DV HORUS", link: "#" },
      { text: "DV HUNTSMEN", link: "#" },
      { text: "DV BUG", link: "#" },
    ],
  };

  return (
    <>
      <section className='relative bg-center bg-repeat-y bg-cover border-t-2 border-t-red-500' style={{ backgroundImage: `url(${PatternBg.src})` }}>
        {/* <div className="absolute inset-0 bg-gradient-to-b 
    from-black/80 from-[10%] 
    via-transparent via-[90%] 
    to-black/80 to-[100%]">
        </div> */}
        <div className='relative px-4 pt-24 mx-auto max-w-7xl md:px-6 lg:px-8'>
          <div className='w-3/5 mb-5 lg:mb-8 md:mb-6'>
            <h4 className='mb-4 text-sm text-black/70 lg:text-base poppins-medium'>{dvHorusData.subtitle}</h4>
            <h2 className='mb-10  text-4xl md:text-5xl lg:text-[64px] poppins-extrabold tracking-widest'>{dvHorusData.title}</h2>
            <p className='text-sm text-black/70 md:text-base poppins-regular'>{dvHorusData.description}</p>
          </div>

          {/* highlight data */}

          <div className='w-2/3'>
            <div className="grid grid-cols-2 gap-4 mt-6 md:grid-cols-2">
              {dvHorusData.highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <img src={item.icon.src} alt={item.text} className="object-contain size-12" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            {dvHorusData.buttons.map((btn, index) => (
              <Link
                key={index}
                href={btn.link}
                className={`px-5 py-2 rounded-lg shadow transition ${btn.type === "primary"
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
              >
                {btn.text}
              </Link>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default HoursSection
