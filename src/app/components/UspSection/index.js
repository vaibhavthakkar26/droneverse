"use client";
import React, { useState } from 'react';
import styles from './UspSection.module.scss';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';

const accordionData = [
    {
        title: 'Smart irrigation',
        content:
            'Signs to look out for, such as unusually high water bills, water stains, or the sound of running water when no fixtures are in use.',
    },
    {
        title: 'Crop monitoring',
        content: '',
    },
    {
        title: 'Predictive analytics',
        content: '',
    },
    {
        title: 'Mobile accessibility',
        content: '',
    },
];

const DefenceSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };

    return (
        <section className={styles.wrapper}>
            <div className={styles.headerRow}>
                <h2 className={styles.heading}>
                    Benefit gained from using our defence solutions
                </h2>
                <button className={styles.ctaButton}>
                    See all products
                </button>
            </div>

            <div className={styles.contentGrid}>
                {/* Left: Accordion */}
                <div className={styles.accordionBox}>
                    {accordionData.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.accordion} ${activeIndex === index ? styles.active : ''
                                }`}
                            onClick={() => handleClick(index)}
                        >
                            <div className={styles.accordionTitle}>
                                {item.title}
                                {activeIndex === index ? (
                                    <ChevronDown size={20} />
                                ) : (
                                    <ChevronUp size={20} />
                                )}
                            </div>
                            {activeIndex === index && item.content && (
                                <div className={styles.accordionContent}>{item.content}</div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right: Image */}
                <div className={styles.imageBox}>
                    <Image
                        src="/assets/img/defence-solution-usp.png"
                        alt="Defence"
                        width={800}
                        height={480}
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
};

export default DefenceSection;
