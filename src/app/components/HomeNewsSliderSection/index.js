'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { getImageFallback } from "@/utils/imageFallbacks";
import styles from "../NewsSection/News.module.scss";

export default function HomeNewsCardSlider({ newsItems }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [newsItems.length]);

  return (
    <div className="w-full px-3 py-8 mx-auto overflow-hidden lg:max-w-7xl lg:px-8">
      <div
        className="flex gap-6 transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (300 + 24)}px)`, // card width + gap
        }}
      >
        {[...newsItems, ...newsItems].map((item, index) => (
          <div key={index} className={`${styles.card} flex-shrink-0 w-[300px]`}>
            <h4 className={styles.newcardTitle}>
              {item.title}{" "}
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className={styles.icon} />
              </a>
            </h4>
            <Image
              src={getImageFallback(item.image, "news", "articleImages", index)}
              alt={item.title}
              className={styles.cardImage}
              width={300}
              height={200}
            />
            <div className={styles.cardContent}>
              <p className={styles.newsDesc}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
