'use client'
import React from 'react'
import HeroSection from '../components/TrainingPage/HeroSection/page';
import CertificateSection from '../components/TrainingPage/CertificateSection/page';
import WhyChoose from '../components/TrainingPage/WhyChooseSection/page';
import WhoApplySection from '../components/TrainingPage/WhoApplySection/page';
import ImageSliderSection from '../components/TrainingPage/ImageSliderSection/page';
import OurPresenceSection from '../components/TrainingPage/OurPresenceSection/page';

const TrainingPage = () => {

    return (
        <div className='pb-0 pt-18'>
            <HeroSection />
            <CertificateSection />
            <WhyChoose />
            <WhoApplySection />
            <ImageSliderSection />
            <OurPresenceSection />
        </div>
    )
}

export default TrainingPage
