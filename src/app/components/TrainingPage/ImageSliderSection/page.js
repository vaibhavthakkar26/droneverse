'use client'
import React, { useEffect, useState } from "react";
import SliderOne from "../../../../../public/assets/img/training/sliderOne.png";
import SliderTwo from "../../../../../public/assets/img/training/sliderTwo.png";
import SliderThree from "../../../../../public/assets/img/training/sliderThree.png";
import Image from "next/image";

const ImageSliderSection = () => {
  const images = [SliderOne, SliderTwo, SliderThree, SliderOne, SliderTwo, SliderThree, SliderOne, SliderTwo, SliderThree];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="max-w-7xl mx-auto py-8 md:py-16 overflow-hidden">
      <div 
        className="flex gap-4 md:gap-6 transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (300 + 24)}px)`, 
        }}
      >
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className={`flex-shrink-0 mx-2 ${index % 2 === 1 ? 'transform translate-y-6 md:translate-y-12' : ''}`}
          >
            <Image
              src={image}   
              alt="image"
              width={300}
              height={454}
              className="rounded-xl object-cover w-[250px] md:w-[300px] h-[340px] md:h-[454px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSliderSection;