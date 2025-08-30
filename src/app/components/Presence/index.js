"use client";
import React, { useState } from "react";
import styles from "./Presence.module.scss";
import Image from "next/image";
import { getImageFallback } from '@/utils/imageFallbacks';

const LOCATIONS = {
  Office: [
    { name: "Bhopal", top: "35%", left: "28%", address: "" },
    { name: "Delhi", top: "30%", left: "48%", address: "" },
    { name: "Gurugram", top: "32%", left: "52%", address: "70A, Delhi - Jaipur Expy, Block A, Sector 34, Gurugram, Haryana 122101" },
    { name: "Bihar", top: "45%", left: "65%", address: "" },
    { name: "Bangalore", top: "70%", left: "45%", address: "" },
    { name: "Tamil nadu", top: "85%", left: "48%", address: "" },
  ],
  Institute: [
    { name: "IIT Delhi", top: "30%", left: "48%", address: "" },
    { name: "IIT Bombay", top: "55%", left: "30%", address: "" },
  ],
  "R&D centre": [
    { name: "Bangalore R&D", top: "70%", left: "45%", address: "" },
    { name: "Hyderabad R&D", top: "65%", left: "50%", address: "" },
  ],
};

const PresenceSection = () => {
  const [activeTab, setActiveTab] = useState("Office");
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Use image fallbacks for missing images
  const mapImage = getImageFallback('/assets/img/presence/states.svg', 'presence', 'mapImage');
  const locationIcon = getImageFallback('/assets/img/presence/location.svg', 'presence', 'locationIcon');

  return (
    <section className={styles.presenceSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our presence</h2>
        <p className={styles.subtitle}>
          Welcome to DroneVerse, where we redefine India&apos;s drone industry.
          Driven by a vision to create world-class drone pilots, we go above &
          beyond in everything we do. Recognized in the esteemed World Book of
          Records.
        </p>

        <div className={styles.toggleContainer}>
          {["Office", "Institute", "R&D centre"].map((tab) => (
            <button
              key={tab}
              className={`${styles.toggleButton} ${activeTab === tab ? styles.activeButton : ""}`}
              onClick={() => {
                setActiveTab(tab);
                setSelectedLocation(null);
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className={styles.mapContainer}>
          <Image
            src={mapImage}
            alt="India Map"
            width={800}
            height={500}
            className={styles.mapImage}
            priority
          />

          {LOCATIONS[activeTab].map((location, index) => (
            <div
              key={`${activeTab}-${index}`}
              className={styles.locationPin}
              style={{ top: location.top, left: location.left }}
              onClick={() => setSelectedLocation(selectedLocation?.name === location.name ? null : location)}
            >
              <div className={styles.pinIconWrapper}>
                <Image
                  src={locationIcon}
                  alt="Location Pin"
                  width={40}
                  height={40}
                  className={styles.pinIcon}
                />
              </div>
              <span className={styles.locationLabel}>{location.name}</span>

              {selectedLocation?.name === location.name && location.address && (
                <div className={styles.locationTooltip}>
                  {location.address}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresenceSection;