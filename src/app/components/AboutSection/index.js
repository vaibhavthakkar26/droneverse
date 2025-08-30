import React from 'react';
import styles from './AboutSection.module.scss';
import Image from 'next/image';
import { getFallbackData } from '@/utils/fallbackData';
import { getImageFallback } from '@/utils/imageFallbacks';

const AboutSection = ({ data }) => {
    const aboutData = data || getFallbackData('about');

    // Debug logging
    console.log('AboutSection received data:', aboutData);
    console.log('AboutSection icon from API:', aboutData?.icon);
    console.log('AboutSection backgroundVideo from API:', aboutData?.backgroundVideo);

    // Provide fallbacks for missing data
    const services = aboutData.services || [
        { title: 'Innovation', subtitle: 'Pushing the boundaries of drone technology' },
        { title: 'Excellence', subtitle: 'Delivering world-class training and solutions' },
        { title: 'Integrity', subtitle: 'Building trust through transparent practices' },
        { title: 'Growth', subtitle: 'Fostering continuous learning and development' }
    ];

    const buttons = aboutData.buttons || {
        knowMore: 'Know More',
        getInTouch: 'Get In Touch'
    };

    // Use image fallbacks for missing images
    const icon = getImageFallback(aboutData?.icon, 'about', 'icon');
    const backgroundVideo = getImageFallback(aboutData?.backgroundVideo, 'about', 'backgroundVideo');

    console.log('AboutSection final icon:', icon);
    console.log('AboutSection final backgroundVideo:', backgroundVideo);

    return (
        <>
            <section className={styles.aboutContainer}>
                <div className={styles.icon}>
                    <Image
                        src={icon}
                        alt="decorative icon"
                        width={100}
                        height={100}
                    />
                </div>
                <h2 className={styles.heading}>{aboutData?.heading}</h2>
                <p className={styles.subtext}>
                    {aboutData?.description}
                </p>
            </section>
            <div className={styles.aboutUsBg}>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={styles.videoBackground}
                >
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <section className={styles.aboutContainer}>
                    <div className={styles.overlay}></div>
                    <div className={styles.cardGrid}>
                        {services.map((item, index) => (
                            <div key={index} className={styles.card}>
                                <div className={styles.cardBody}>
                                    <Image
                                        src={getImageFallback('/assets/icons/lock.svg', 'common', 'lockIcon')}
                                        width={34}
                                        height={38}
                                        alt='lock icon'
                                    />
                                    <div className={styles.cardTitle}>{item.title}</div>
                                    <div className={styles.cardSubtitle}>{item.subtitle}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.buttonGroup}>
                        <button className={styles.yellowBtn}>
                            {buttons.knowMore}
                        </button>
                        <button className={styles.whiteBtn}>
                            {buttons.getInTouch}
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutSection;
