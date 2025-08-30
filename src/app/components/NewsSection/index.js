'use client'
import styles from './News.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { getImageFallback } from '@/utils/imageFallbacks';
import Image from 'next/image';

const bannerImages = [
  '/assets/img/news/1.png',
  '/assets/img/news/2.png',
  '/assets/img/news/3.png',
  '/assets/img/news/4.png',
  '/assets/img/news/3.png',
  '/assets/img/news/2.png',
];

const newsItems = [
  {
    title: 'Defence department',
    image: '/assets/img/news/news1.png',
    description:
      "Welcome to DroneVerse, where we redefine India's drone industry. Driven by a vision to create world-class drone pilots, we go above & beyond in everything we do. Recognized in the esteemed World Book of Records.",
    link: 'https://www.linkedin.com',
  },
  {
    title: 'Defence department',
    image: '/assets/img/news/news1.png',
    description:
      "Welcome to DroneVerse, where we redefine India's drone industry. Driven by a vision to create world-class drone pilots, we go above & beyond in everything we do. Recognized in the esteemed World Book of Records.",
    link: 'https://www.linkedin.com',
  },
  {
    title: 'Defence department',
    image: '/assets/img/news/news1.png',
    description:
      "Welcome to DroneVerse, where we redefine India's drone industry. Driven by a vision to create world-class drone pilots, we go above & beyond in everything we do. Recognized in the esteemed World Book of Records.",
    link: 'https://www.linkedin.com',
  },
  {
    title: 'Defence department',
    image: '/assets/img/news/news1.png',
    description:
      "Welcome to DroneVerse, where we redefine India's drone industry. Driven by a vision to create world-class drone pilots, we go above & beyond in everything we do. Recognized in the esteemed World Book of Records.",
    link: 'https://www.linkedin.com',
  },
];

export default function NewsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mobileSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    centerMode: false,
    variableWidth: false,
  };

  const desktopSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
          adaptiveHeight: true,
        },
      },
    ],
  };

  const settings = isMobile ? mobileSettings : desktopSettings;

  return (
    <section className={styles.wrapper}>
      {/* Banner Carousel */}
      <div className={styles.carousel}>
        <Slider key={isMobile ? 'mobile' : 'desktop'} {...settings}>
          {bannerImages.map((src, index) => (
            <div
              key={index}
              className={`${styles.bannerImageWrapper} ${index % 2 !== 0 ? styles.shifted : ''}`}
            >
              <div className={styles.bannerImage}>
                <Image
                  src={getImageFallback(src, 'news', 'bannerImages', index)}
                  alt={`Banner ${index + 1}`}
                  width={400}
                  height={300}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* Header + Arrows Row */}
      <div className={styles.newsHeaderWrapper}>
        <div className={styles.newsHeader}>
          <h2>Our latest news</h2>
          <p>
            Welcome to DroneVerse, where we redefine India&apos;s drone industry. Driven by a vision to create world-class drone pilots,
            we go above & beyond in everything we do. Recognized in the esteemed World Book of Records.
          </p>
        </div>

        <div className={styles.arrows}>
          <button className={styles.arrowBtn}>◀</button>
          <button className={styles.arrowBtn}>▶</button>
        </div>
      </div>



      {/* News Cards */}
      <div className={styles.newsGrid}>
        {newsItems.map((item, index) => (
          <div key={index} className={styles.card}>
            <h4 className={styles.newcardTitle}>{item.title} <a href={item.link} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={styles.icon} />
            </a></h4>
            <Image
              src={getImageFallback(item.image, 'news', 'articleImages', index)}
              alt={item.title}
              className={styles.cardImage}
              width={300}
              height={200}
            />
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>


              </div>
              <p className={styles.newsDesc}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
