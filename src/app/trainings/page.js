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
        <>
            <HeroSection />
            <CertificateSection />
            <WhyChoose />
            <WhoApplySection />
            <ImageSliderSection />
            <OurPresenceSection />
        </>
    )
}

export default TrainingPage
