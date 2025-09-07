"use client"
import React, { useState } from 'react'
import PatternBg from '../../../../../public/assets/img/Defence2/patternBg.png'
import icon1 from '../../../../../public/assets/img/Defence2/highLight-icon-1.png'
import icon2 from '../../../../../public/assets/img/Defence2/highLight-icon-2.png'
import icon3 from '../../../../../public/assets/img/Defence2/highLight-icon-3.png'
import icon4 from '../../../../../public/assets/img/Defence2/highLight-icon-4.png'
import icon5 from '../../../../../public/assets/img/Defence2/highLight-icon-5.png'
import icon6 from '../../../../../public/assets/img/Defence2/highLight-icon-6.png'
import featureIcon from '../../../../../public/assets/img/Defence2/feature-icon.png'
import shapeBtn from '../../../../../public/assets/img/Defence2/Subtract.png'
import dvhoursDrone from '../../../../../public/assets/img/Defence2/DroneHours.png'
import leftFlap from '../../../../../public/assets/img/Defence2/leftWing.png'
import rightFlap from '../../../../../public/assets/img/Defence2/RightWing.png'
import Link from 'next/link'
import Image from 'next/image'
import DefenceDataSection from '../../DefenceDataSection/page'

const HoursSection = () => {

  const [showMore, setShowMore] = useState(false);

  const dvHorusData = {
    subtitle: "SURVELLIENCE  DRONES",
    title: "DV HORUS",
    description: `DV HORUS is a high-performance tactical UAV system designed for rapid deployment from both static and mobile platforms. It delivers exceptional real-time visual surveillance and situational awareness during both day and night operations. With low visual and acoustic signatures, Horus is ideal for covert surveillance and reconnaissance missions in sensitive environments.`,

    highlights: [
      { text: "Flight Time 30–45 mins", icon: icon1 },
      { text: "Flying in wind speeds 35 knots", icon: icon3 },
      { text: "Range 7km+", icon: icon2 },
      { text: "Flying at speeds up to 120 kph", icon: icon5 },
      { text: "Flying at speeds up to 120 kph", icon: icon5 },
      { text: "Payload Capacity", icon: icon4 },
      { text: "MTOW", icon: icon6 },
    ],

    keyFeaturesHeading: "Key Features :",

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
      <section className='relative bg-center bg-repeat-y bg-contain' style={{ backgroundImage: `url(${PatternBg.src})` }}>
        <div className="absolute -z-10 inset-0 bg-gradient-to-b 
    from-black/100 from-[10%]  
    to-white to-[100%]  h-20">
        </div>

        <div className='relative'>
          <Image src={leftFlap} alt='left wing' className='absolute left-0 hidden object-contain md:block md:w-9 lg:w-16 top-20' />
        </div>

        <div className='relative'>
          <Image src={rightFlap} alt="right flap" className='absolute hidden right-0 bottom-auto md:block object-contain md:w-12   lg:w-16 lg:top-[520px] md:top-[620px] ' />
        </div>
        <div className='relative'>
          <Image src={dvhoursDrone} alt="dv Hours Drone" className="absolute right-0 object-contain w-2/5 lg:top-12 top-20" />
        </div>

        <div className='relative px-4 pt-32 mx-auto pb-36 max-w-7xl md:px-6 lg:px-8 z-[1]'>
          <div className='w-full mb-5 md:w-3/4 lg:w-2/3 lg:mb-8 md:mb-6'>
            <h4 className='mb-4 text-sm text-black/70 lg:text-base poppins-medium'>{dvHorusData.subtitle}</h4>
            <h2 className='mb-10  text-4xl md:text-5xl lg:text-[64px] poppins-extrabold tracking-widest'>{dvHorusData.title}</h2>
            <p className='text-sm text-black/70 md:text-base poppins-regular'>{dvHorusData.description}</p>
          </div>

          {/* highlight data */}

          <div className='w-full lg:w-2/3 '>
            <div className="grid grid-cols-1 gap-2 mt-6 md:gap-4 md:grid-cols-2">
              {dvHorusData.highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm md:text-base poppins-regular">
                  <img src={item.icon.src} alt={item.text} className="object-contain size-12" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ket feature Manual */}
          {/* <div className='w-full mt-8'>
            <h3 className='mb-4 text-2xl uppercase poppins-semibold'>{dvHorusData.keyFeaturesHeading}</h3>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {dvHorusData.keyFeatures.map((keyEle, keyIdx) => (
                <div key={keyIdx} className='flex flex-col items-center gap-4 px-4 pt-6 pb-12 border border-black/5 lg:pt-10 rounded-2xl bg-gradient-to-b from-[#fff] from-0% to-[#E6E6E6] to-100%'>
                  <img src={keyEle.keyIcon.src} alt={keyEle.title} className="object-contain mx-auto mb-6 size-16" />
                  <div className='text-center'>
                    <h4 className='mb-4 text-sm font-medium md:text-base lg:text-xl'>{keyEle.title}</h4>
                    <p className='text-sm lg:text-base poppins-regular'>{keyEle.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* <p className='pt-10 pb-12 text-sm lg:text-base poppins-regular'>Whether used for ISR (Intelligence, Surveillance, Reconnaissance), tactical overwatch, or payload delivery, Horus ensures mission readiness in minutes — wherever the mission takes you.</p> */}

          {showMore && (
            <DefenceDataSection
              showKeyFeatures={true}
              showSpecifications={true}
              showNumeric={false}
              showIcons={false}
              showIcons2={false}
              showOperatingModes={false}
              showGunViolence={false}
            />
          )}

          {/* Contact Button */}
          <div className="mt-8 space-x-4">
            <button className="border border-[#FFB801] hover:border-black bg-[#FFB801] hover:bg-black text-black hover:text-white font-medium px-6 md:px-8 py-2 md:py-2.5 rounded-lg transition-colors duration-200 shadow-sm text-sm md:text-base cursor-pointer poppins-medium">
              Contact Us
            </button>
            <button
              onClick={() => setShowMore(!showMore)}
              className="border border-[#FFB801] hover:bg-[#FFB801] hover:text-black font-medium px-6 md:px-8 py-2 md:py-2.5 rounded-lg transition-colors duration-200 shadow-sm text-sm md:text-base cursor-pointer  poppins-medium"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>


          {/* Foote Btn */}

          <div className="pt-6.5 overflow-x-auto relative sm:overflow-visible snap-x snap-mandatory">
            <div className="flex gap-3 w-max sm:w-full">
              {dvHorusData.footerNav.map((footbtns, idx) => (
                <button key={idx} className='group w-60 lg:w-64 xl:w-72 bg-white hover:bg-[#E6E6E6] active:hover:bg-[#E6E6E6] duration-300 border-2 border-black hover:border-[#E6E6E6] text-base md:text-lg lg:text-xl xl:text-2xl rounded-tr-4xl xl:rounded-tr-[40px] px-3 py-4 md:py-5 xl:py-6 relative snap-start cursor-pointer tracking-widest poppins-medium'>
                  <img
                    src={shapeBtn.src}
                    alt="icon"
                    className="absolute w-6 h-6 transition-opacity duration-300 opacity-0 left-px bottom-px group-hover:opacity-100"
                  />
                  {footbtns.text}
                </button>
              ))}
            </div>
          </div>

        </div>
        <div className='relative'>
          <div className="absolute bottom-0  w-full  bg-gradient-to-t 
    from-black/100 from-[10%]  
    to-white to-[100%]  h-20">
          </div>
        </div>
      </section>
    </>
  )
}

export default HoursSection
