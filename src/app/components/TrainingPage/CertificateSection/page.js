import React from "react";

import Image from "next/image";
import dgca1 from '../../../../../public/assets/img/training/dgca1.png'
import dgca2 from '../../../../../public/assets/img/training/dgca2.png'
import dgca3 from '../../../../../public/assets/img/training/dgca3.png'
import dgcaAppr from '../../../../../public/assets/img/training/dgcaApprove.png'
import fillShape from '../../../../../public/assets/img/training/fillShape.png'
import transShape from '../../../../../public/assets/img/training/transShape.png'

const CertificateSection = () => {
  return (
    <div>
      <section className="container relative flex flex-col gap-10 px-6 py-12 mx-auto lg:flex-row">
        {/* Left Content */}
        <div className="space-y-6 lg:w-1/2 relative bg-gradient-to-b rounded-[10px] p-10 from-[#D9D9D91A] from-[20%] to-[#73737300] to-[100%] ">
          <Image
            src={transShape}
            alt="fill shape"
            className="absolute z-0 object-contain m-0 size-16 top-18 right-16"
          />
          <Image
            src={dgcaAppr}
            width={118}
            height={30}
            alt="Government Approve"
          />
          <h2 className="relative w-4/5 text-3xl font-bold md:text-4xl">
            DGCA Drone Pilot Certification Training?
          </h2>
          <p className="leading-relaxed text-gray-600">
            Join Droneverse’s DGCA Certified Drone Pilot Training Course and get
            your government-approved Remote Pilot Certificate (RPC) in just 5
            days.
            <br />
            <br />
            This course is ideal for students, job seekers, farmers,
            professionals and anyone interested in the drone industry in India.
            You’ll learn how to fly drones legally, gain hands-on flying
            experience, and get 100% job support after completion. With training
            available across major cities, this course opens doors to job in
            agriculture, surveying, cinematography, mapping, inspections and
            more.
          </p>

          <button className="relative px-6 py-3 font-semibold text-black transition bg-yellow-400 rounded-md shadow-md hover:bg-yellow-500">
            Download brochure
          </button>
          <Image
            src={transShape}
            alt="fill shape"
            className="absolute z-0 object-contain bottom-28 size-14 right-28"
          />
        </div>

        {/* Right Images */}
        <div className="relative grid w-1/2 grid-cols-2">
          <div className="relative flex justify-end col-span-2 row-start-1 ">
            <Image
              src={fillShape}
              alt="fill shape"
              className="absolute block object-contain lg:-left-1/3 -top-10 -z-10 size-24"
            />
            <Image
              src={dgca1}
              alt="Mission Control Center"
              className="relative object-contain w-full rounded-lg"
            />
          </div>
          <div className="relative flex justify-start col-start-1 row-start-1">
            <Image
              src={dgca2}
              alt="Drone Training Group"
              className="relative z-10 object-contain w-full xl:left-20 lg:left-14 top-20"
            />
          </div>
          <div className="relative flex justify-end col-span-2 col-start-2 row-start-2">
            <Image
              src={dgca3}
              alt="Drone Practice"
              className="relative z-0 object-contain w-full -top-9 -left-1/6"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificateSection;
