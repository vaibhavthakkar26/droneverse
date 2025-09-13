'use client'
import React, { useEffect, useState } from "react";
import SliderOne from "../../../../../public/assets/img/training/sliderOne.png";
import SliderTwo from "../../../../../public/assets/img/training/sliderTwo.png";
import SliderThree from "../../../../../public/assets/img/training/sliderThree.png";
import gRating from '../../../../../public/assets/img/training/googleRateings.png'
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
    <div className="py-8 mx-auto overflow-hidden max-w-7xl md:py-16">

         <div className="px-4 mb-8 text-center sm:mb-12">
          <Image src={gRating} alt="g rate" className="object-contain w-56 mx-auto mb-4" />
              <h2 className="mb-4 text-2xl font-bold text-black sm:text-3xl md:text-4xl sm:mb-6 poppins-bold">
                See what people are talking
              </h2>
              <p className="w-full max-w-4xl mx-auto text-base leading-relaxed text-[#5F5F5F] sm:text-lg poppins-regular">
               Welcome to DroneVerse, where we redefine India’s drone industry. Driven by a vision to create world-class drone pilots, we go above & beyond in everything we do. Recognized in the esteemed World Book of Records.
              </p>
            </div>
      
      <div 
        className="flex gap-4 transition-transform duration-1000 ease-in-out md:gap-6"
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