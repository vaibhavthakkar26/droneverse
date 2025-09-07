import React, { useState } from 'react'
import PatternBg from '../../../../../public/assets/img/defence/PatternDark.png'
import leftFlap from '../../../../../public/assets/img/Defence2/leftWing.png'
import icon1 from '../../../../../public/assets/img/Defence2/highLight-icon-1.png'
import icon2 from '../../../../../public/assets/img/Defence2/highLight-icon-2.png'
import icon3 from '../../../../../public/assets/img/Defence2/highLight-icon-3.png'
import icon4 from '../../../../../public/assets/img/Defence2/highLight-icon-4.png'
import icon5 from '../../../../../public/assets/img/Defence2/highLight-icon-5.png'
import icon6 from '../../../../../public/assets/img/Defence2/highLight-icon-6.png'
import IrongridTwin from '../../../../../public/assets/img/defence/ironGridTwin.png'
import shapeBtn from '../../../../../public/assets/img/Defence2/Subtract.png'
import Image from 'next/image'
import DefenceDataSection from '../../DefenceDataSection/page'

const IronGridSection = () => {
  const [showMore, setShowMore] = useState(false);
  const IronGridData = {
    subtitle: "ANTIDRONE CUAS ",
    title: "DV IRONGRID",
    description: `DroneVerse’s cutting-edge FPV (First Person View) drones deliver real-time situational awareness, empowering troops in asymmetric warfare. From tactical surveillance to high-speed ops, they redefine control, clarity, and command on the battlefield`,

    highlights: [
      { text: "450+ Models", icon: icon1 },
      { text: "99.99% Identification & Classification with Near 0 false alarms  ", icon: icon3 },
      { text: "Detection Range 35km+", icon: icon2 },
      { text: "0 SIgnal Alarm", icon: icon5 },
      { text: "360° All airspace Detection", icon: icon5 },
      { text: "120+ Drones", icon: icon4 },
    ],

    footerNav: [
      { text: "DV HORUS", link: "#" },
      { text: "DV HUNTSMEN", link: "#" },
      { text: "DV BUG", link: "#" },
    ],
  };

  return (
    <>
      <section className='relative pt-10 bg-black bg-center bg-repeat-y bg-size-[100%] mix-blend-luminosity bg-blend-luminosity' style={{ backgroundImage: `url(${PatternBg.src})` }} >
        {/* <div className="absolute top-0 left-0 w-full h-full">
          <Image src={PatternBg} alt='bg' className="w-full h-full bg-repeat-y opacity-60 bg-blend-luminosity mix-blend-luminosity" />
        </div> */}
        <div className='relative'>
          <Image src={leftFlap} alt='left wing' className='absolute left-0 hidden object-contain md:block md:w-9 lg:w-16 top-20' />
        </div>
        <div className="pt-10 mx-auto pb-16 max-w-7xl px-4 lg:px-8 relative z-[1]">
          <div className='grid grid-cols-12'>

            <div className='relative row-start-1 mb-10 md:col-span-5 lg:col-span-4 lg:row-span-2 col-span-full md:mb-0'>
              <Image src={IrongridTwin} alt='ironGrid twin' className=' lg:w-[415px] lg:h-[437px] w-full mix-blend-multiply ' />
            </div>

            <div className='md:row-start-1 md:col-start-6 md:col-span-6 lg:col-start-5 lg:col-span-8 col-span-full'>
              <h4 className='mb-4 text-sm text-white lg:text-base poppins-medium'>{IronGridData.subtitle}</h4>
              <h2 className='mb-10 text-white  text-4xl md:text-5xl lg:text-[64px] poppins-extrabold tracking-widest'>{IronGridData.title}</h2>
              <p className='text-sm text-white md:text-base poppins-regular'>{IronGridData.description}</p>
            </div>

            <div className='col-span-12 md:row-start-2 lg:col-start-5 lg:col-span-8'>
              <div className="grid grid-cols-1 gap-2 mt-6 md:gap-4 md:grid-cols-2">
                {IronGridData.highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white md:text-base poppins-regular">
                    <img src={item.icon.src} alt={item.text} className="object-contain size-12" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {showMore && (
            <DefenceDataSection
              showKeyFeatures={false}
              showSpecifications={true}
              showNumeric={true}
              showIcons={true}
              showIcons2={false}
              showOperatingModes={false}
              showGunViolence={false}
              myTitleColor="text-white"
              myTablebg="bg-[#1A1A1A]"
              myTableHeader="bg-[#5F5F5F]"
              myTableHeaderTitle='text-white'
              myTableBodyTitle='text-white'
              myTableBB='border-[#5F5F5F66]'
              featureBg="bg-[#303030]"
              featureBorder="border-[#303030]"
              featureText="text-white"
            />
          )}

          {/* Contact Button */}
          <div className="mt-8 space-x-4">
            <button className="border border-[#FFB801] hover:border-[#FFB801] bg-[#FFB801] hover:bg-black text-black hover:text-white font-medium px-6 md:px-8 py-2 md:py-2.5 rounded-lg transition-colors duration-200 shadow-sm text-sm md:text-base cursor-pointer poppins-medium">
              Contact Us
            </button>
            <button
              onClick={() => setShowMore(!showMore)}
              className="border border-[#FFB801] hover:bg-[#FFB801] text-white hover:text-black font-medium px-6 md:px-8 py-2 md:py-2.5 rounded-lg transition-colors duration-200 shadow-sm text-sm md:text-base cursor-pointer"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>

          {/* Foote Btn */}

          <div className="pt-6.5 overflow-x-auto relative sm:overflow-visible snap-x snap-mandatory">
            <div className="flex gap-3 w-max sm:w-full">
              {IronGridData.footerNav.map((footbtns, idx) => (
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
      </section>
    </>
  )
}

export default IronGridSection
