import React from 'react';
import styles from './HeroBanner.module.scss';
import Image from 'next/image';
import { getImageFallback } from '@/utils/imageFallbacks';
import AnimatedWrapper from '../AnimatedWrapper';

const HeroBanner = ({ data }) => {
    const heroData = data;

    // Debug logging
    console.log('HeroBanner received data:', heroData);
    console.log('HeroBanner droneImage from API:', heroData?.droneImage);
    console.log('HeroBanner globeVideo from API:', heroData?.globeVideo);

    // Use image fallbacks for missing images
    const droneImage = getImageFallback(heroData?.droneImage, 'hero', 'droneImage');
    const globeVideo = getImageFallback(heroData?.globeVideo, 'hero', 'globeVideo');

    console.log('HeroBanner final droneImage:', droneImage);
    console.log('HeroBanner final globeVideo:', globeVideo);

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                {/* Left Content */}
                <div className={styles.content}>
                    <AnimatedWrapper>
                    <div className={styles.badge}>{heroData?.badge}</div>
                    <h1 className={styles.heading}>
                        {heroData?.heading} <br />
                        <span className={styles.highlight}>{heroData?.highlight1}</span><br />
                        <span className={styles.highlight}>{heroData?.highlight2}</span>
                    </h1>
                    </AnimatedWrapper>
                </div>

                {/* Center Drone Image */}
                <div className={styles.droneWrapper}>
                    <Image
                        src={droneImage}
                        alt="Drone"
                        width={246}
                        height={126}
                        className={styles.drone}
                        priority
                    />
                </div>

                {/* Right Globe Video */}
                <div className={styles.globeWrapper}>
                    <video autoPlay loop muted playsInline className={styles.earth}>
                        <source src={globeVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
