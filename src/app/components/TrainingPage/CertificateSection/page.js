import React from "react";

import Image from "next/image";
import dgca1 from '../../../../../public/assets/img/training/dgca1.png'
import dgca2 from '../../../../../public/assets/img/training/dgca2.png'
import dgca3 from '../../../../../public/assets/img/training/dgca3.png'
import dgcaAppr from '../../../../../public/assets/img/training/dgcaApprove.png'
import fillShape from '../../../../../public/assets/img/training/fillShape.png'
import transShape from '../../../../../public/assets/img/training/transShape.png'
import sectionBg from '../../../../../public/assets/img/training/SectionBg.png'
import iconicSHape from '../../../../../public/assets/img/training/bgShapeDrone.png'

const CertificateSection = () => {
    return (
        <div>
            <section className="relative flex flex-col gap-4 px-3 py-12 mx-auto md:gap-0 lg:gap-10 max-w-7xl lg:flex-row lg:px-8">
                <div className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-10" style={{ backgroundImage: `url(${sectionBg.src})` }}></div>
                {/* Left Content */}
                <div className="relative space-y-6 rounded-[10px] p-4 px-0 sm:py-6  md:py-8  lg:w-1/2">
                    {/* Decorative Shape */}
                    {/* <Image
                        src={iconicSHape}
                        alt="fill shape"
                        className="absolute z-0 object-contain size-16 lg:size-[86px] top-12 xl:top-7 xl:right-24 md:right-16 md:top-16 right-5"
                    /> */}

                    {/* Government Approve Logo */}
                    <Image
                        src={dgcaAppr}
                        width={118}
                        height={30}
                        alt="Government Approve"
                    />

                    {/* Heading */}
                    <h2 className="relative text-2xl font-bold lg:w-4/5 sm:text-3xl md:text-4xl w-[90%]">
                        DGCA Drone Pilot Certification Training?
                    </h2>

                    {/* Description */}
                    <p className="relative z-10 leading-relaxed">
                        Join Droneverse’s DGCA Certified Drone Pilot Training Course and get
                        your government-approved Remote Pilot Certificate (RPC) in just 5 days.
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

                    {/* CTA Button */}
                    <button className="relative px-6 py-2 font-semibold text-black rounded-lg transition bg-[var(--color-primary)] poppins-medium cursor-pointer">
                        Download brochure
                    </button>

                    {/* Decorative Shape Bottom */}
                    <Image
                        src={iconicSHape}
                        alt="fill shape"
                        className="absolute -z-[1] object-contain -bottom-10 md:-bottom-16 size-12 lg:size-14  md:left-16 lg:-right-6 lg:left-auto lg:-bottom-4"
                    />
                    <Image
                        src={iconicSHape}
                        alt="fill shape"
                        className="absolute top-0 block object-contain md:right-8 lg:-right-6 right-8 -z-10 lg:size-14 size-12 "
                    />
                </div>
                {/* Right Images */}
                <div className="relative grid w-full grid-cols-2 gap-4 mx-auto md:w-2/3 lg:w-1/2">
                    {/* Main Image */}
                    <div className="relative flex">

                        <Image
                            src={dgca1}
                            alt="Mission Control Center"
                            className="relative object-contain w-full rounded-lg"
                        />
                    </div>

                    {/* Overlap Image 1 */}
                    <div className="relative flex justify-start col-start-1 row-span-2 row-start-1">
                        <Image
                            src={dgca2}
                            alt="Drone Training Group"
                            className="relative z-10 object-contain w-full "
                        />
                    </div>

                    {/* Overlap Image 2 */}
                    <div className="relative flex col-span-2 col-start-2 row-start-2">
                        <Image
                            src={dgca3}
                            alt="Drone Practice"
                            className="relative z-0 object-contain lg:-mt-2 md:size-60 size-auto"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CertificateSection;
