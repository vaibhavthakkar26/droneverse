"use client";
import styles from "./FPVSection.module.scss";
import Image from "next/image";
import { useState } from "react";
import { getImageFallback } from "@/utils/imageFallbacks";
import AnimatedWrapper from "../AnimatedWrapper";

export default function DefenseSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sections = [
    {
      id: "fpv",
      heading: "Elevate Defence. Empower Strategy.",
      subtext:
        "DroneVerse's cutting-edge FPV (First Person View) drones deliver real-time situational awareness, empowering troops in asymmetric warfare. From tactical surveillance to high-speed ops, they redefine control, clarity, and command on the battlefield",
      image: getImageFallback(
        "/assets/img/defence/drone.svg",
        "defence",
        "droneImage"
      ),
      imageAlt: "Drone",
      features: [
        {
          number: "1",
          title: "Search and rescue operations",
          description:
            "Locating missing persons with real-time visuals. Rapid response in natural disaster scenarios. Efficient delivery of medical supplies to remote areas.",
        },
        {
          number: "2",
          title: "Kamikaze Missions",
          description:
            "Precision strikes with real-time targeting. Tactical reconnaissance for strategic advantage. Quick response missions for immediate threat neutralization.",
        },
        {
          number: "3",
          title: "Surveillance",
          description:
            "Extended surveillance missions for comprehensive coverage. Border monitoring to enhance national security. Crowd monitoring.",
        },
      ],
    },
    {
      id: "surveillance",
      heading: "Surveillance",
      subtext:
        "Our rugged UAVs are built to deliver stellar performance in defence, security and battlefield management for intelligence, surveillance and reconnaissance missions. Our drones are designed with military-grade specifications, ensuring reliable performance in anti-terror and all-terrain operations.",
      image: getImageFallback(
        "/assets/img/defence/surveillance.png",
        "defence",
        "surveillanceImage"
      ),
      imageAlt: "Surveillance Drone",
      features: [
        { number: "1", title: "Persistent Surveillance", description: "" },
        { number: "2", title: "Actionable Intelligence", description: "" },
        { number: "3", title: "Day / Night Coverage", description: "" },
        { number: "4", title: "Rapid Deployment", description: "" },
        { number: "5", title: "Automated Flight", description: "" },
        {
          number: "6",
          title: "Electronic Warfare Resistance",
          description: "",
        },
        {
          number: "7",
          title: "Proprietary DVTEK radio",
          description: "with AES 256 encryption",
        },
      ],
    },

    {
      id: "gunshot",
      heading: "Gunshot Detection System",
      subtext:
        "AI-powered, Mobile-enabled, Mission-ready. DroneVerse offers an advanced gunshot detection solution using regular mobile phones as sensors. By installing the app on just three or more devices, the system can instantly detect and accurately locate fire arm shots within seconds.",
      image: getImageFallback(
        "/assets/img/defence/gunshot-system.png",
        "defence",
        "gunshotImage"
      ),
      imageAlt: "Gunshot Detection System",
      features: [
        {
          number: "1",
          title: "Accurate Location",
          description: "Detects within 10 meters at 800m range",
        },
        {
          number: "2",
          title: "Long Range",
          description: "Up to 2.5 km in good conditions",
        },
        {
          number: "3",
          title: "Real-Time Info",
          description: "Displays shot details within 4 seconds",
        },
        {
          number: "4",
          title: "Burst Detection",
          description: "Identifies up to 1200 shots/min",
        },
        {
          number: "5",
          title: "Ammunition Type",
          description: "Works with subsonic, supersonic and blank rounds",
        },
        {
          number: "6",
          title: "Top Defence, Low Cost",
          description: "World's most advanced & cost-effective solution",
        },
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sections.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sections.length) % sections.length);
  };

  const currentSection = sections[currentSlide];

  return (
    <section className={styles.wrapper}>
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className={styles.navButtonLeft}
        aria-label="Previous section"
      >
        &#8249;
      </button>

      {/* Content Section */}
      <div className={styles.contentWrapper}>
        <AnimatedWrapper>
          <div className={styles.left}>
            <h2 className={styles.heading}>{currentSection.heading}</h2>
            <p className={styles.subtext}>{currentSection.subtext}</p>
          </div>
        </AnimatedWrapper>
        <div className={styles.right}>
          <Image
            src={currentSection.image}
            alt={currentSection.imageAlt}
            width={350}
            height={238}
            className={styles.droneImage}
          />
        </div>
      </div>

      {/* Features Grid */}
      {/* Features Section - Conditional Rendering */}
      {currentSection.id === "surveillance" ? (
        <div className={styles.surveillanceFeatures}>
          <div className={styles.featuresList}>
            {currentSection.features.map((item, index) => (
              <div key={index} className={styles.featureItem}>
                <span className={styles.arrow}>➤</span>
                <div className={styles.featureContent}>
                  <span className={styles.featureTitle}>{item.title}</span>
                  {item.description && (
                    <div className={styles.featureDescription}>
                      {item.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.droneCards}>
          <div className={styles.features}>
            {currentSection.features.map((item, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.badge}>{item.number}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className={styles.navButtonRight}
        aria-label="Next section"
      >
        &#8250;
      </button>
    </section>
  );
}
