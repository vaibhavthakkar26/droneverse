import React from 'react'
import heroBg from '../../../../../public/assets/img/Defence2/DefeenceHeroBg.png'
import IronGrid from '../../../../../public/assets/img/Defence2/iron-grid-1.png'
import LeftRaddar from '../../../../../public/assets/img/Defence2/raddar-left.png'
import RigthRaddar from '../../../../../public/assets/img/Defence2/raddar-right.png'
import GradeBg from '../../../../../public/assets/img/Defence2/heroSectionGradient.png'
import Link from 'next/link'
import Image from 'next/image'

const HeroDefenceSection = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${heroBg.src})` }}>

        {/* <div className="absolute inset-0 bg-gradient-to-b from-white/100 via-transparent to-black/100"></div> */}
        <div className="absolute top-0 left-0 w-full h-full">
          <Image src={GradeBg} alt='video bg' className='object-contain w-full' />
        </div>

        <div className='relative px-4 pt-24 mx-auto max-w-7xl md:px-6 lg:px-8'>
          <div className='flex flex-col gap-4'>
            <div className='lg:w-3/4'>
              <h2 className='w-full text-4xl leading-tight text-white poppins-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>Vehicle Mounted
                <span className='block text-[var(--color-primary)]'>
                  Counter Drone Protection
                </span>
              </h2>

              <Link href="/" className='inline-block mt-8 lg:mt-12 text-xs md:text-sm lg:text-base rounded-lg py-2 px-3 lg:px-6 md:px-5 sm:px-4 bg-[var(--color-primary)] border border-transparent hover:border-[var(--color-primary)] hover:bg-transparent hover:text-[var(--color-primary)] duration-300 poppins-medium'>Learn More</Link>
            </div>

            <div className='flex items-center justify-center'>
              <div className='w-1/4 -me-32'>
                <Image src={LeftRaddar} alt="left Raddar" className='object-center w-full' />
              </div>
              <div className='w-1/2'>
                <Image src={IronGrid} alt="Iron Grid" className="object-contain w-full" />
              </div>
              <div className='w-1/4 -ms-32'>
                <Image src={RigthRaddar} alt="right Raddar" className='object-center w-full' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroDefenceSection
