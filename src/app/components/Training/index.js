"use client";
import styles from "./Training.module.scss";
import { useState } from "react";
import { getImageFallback } from "@/utils/imageFallbacks";
import Image from "next/image";

const tabs = ["Defence", "Student", "Training"];

const courses = [
  {
    tab: "Defence",
    title: "Small Class Drone Pilot Course",
    type: "DGCA approved",
    duration: "5 days | Weight upto",
    weight: "2KG",
    features: [
      "Understand the regulatory framework",
      "Learn flight planning, navigation and safety protocols",
      "Practical flight training",
      "Training on a drone simulator and remote pilot certification",
    ],
    image: "/assets/img/course&instruction/dron-pilot.png",
  },
  {
    tab: "Defence",
    title: "Advanced Drone Operations",
    type: "Industry recognized certification",
    duration: "5 days | Weight upto",
    weight: "2KG",
    features: [
      "Understand the regulatory framework",
      "Learn flight planning, navigation and safety protocols",
      "Practical flight training",
      "Training on a drone simulator and remote pilot certification",
    ],
    image: "/assets/img/course&instruction/drone-operation.png",
  },
  {
    tab: "Defence",
    title: "Drone Maintenance & Repair",
    type: "Comprehensive training module",
    duration: "5 days | Weight upto",
    weight: "2KG",
    features: [
      "Learn about drone components",
      "Learn flight planning, navigation and safety protocols",
      "Practical flight training",
      "Training on a drone simulator and remote pilot certification",
    ],
    image: "/assets/img/course&instruction/maintainance.png",
  },
];

const instructors = [
  {
    name: "Ambuj Verma",
    description:
      "A seasoned veteran with extensive experience in both civilian and military drone...",
    image: "/assets/img/course&instruction/1.png",
  },
  {
    name: "Harsh Goel",
    description:
      "An innovative thinker, pioneering cutting-edge techniques and methodologies in ...",
    image: "/assets/img/course&instruction/2.png",
  },
];

export default function Courses() {
  const [activeTab, setActiveTab] = useState("Defence");

  const filteredCourses = courses.filter((course) => course.tab === activeTab);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Turning passion into professions</h2>
      <p className={styles.subheading}>
        Welcome to DroneVerse, where we redefine India&apos;s drone industry.
        Driven by a vision to create world-class drone pilots, we go above &
        beyond in everything we do. Recognized in the esteemed World Book of
        Records.
      </p>

      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${styles.tabButton} ${
              activeTab === tab ? styles.active : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.cards}>
        {filteredCourses.map((course, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imageWrapper}>
              <Image
                src={getImageFallback(
                  course.image,
                  "training",
                  "courseImages",
                  index
                )}
                alt={course.title}
                width={300}
                height={200}
              />
            </div>
            <div className={styles.cardContent}>
              <span className={styles.badge}>{course.type}</span>
              <h4 className="font-semibold">{course.title}</h4>
              <div className="flex gap-3">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.75 0.240723H0.75C0.551088 0.240723 0.360322 0.31974 0.21967 0.460393C0.0790177 0.601045 0 0.79181 0 0.990723C0 1.18964 0.0790177 1.3804 0.21967 1.52105C0.360322 1.66171 0.551088 1.74072 0.75 1.74072H1V11.4727C1 13.5497 2.332 14.7407 4.655 14.7407H9.939L4.22 20.4607C4.14631 20.5294 4.08721 20.6122 4.04622 20.7042C4.00523 20.7962 3.98319 20.8955 3.98141 20.9962C3.97963 21.0969 3.99816 21.1969 4.03588 21.2903C4.0736 21.3837 4.12974 21.4685 4.20096 21.5398C4.27218 21.611 4.35701 21.6671 4.4504 21.7048C4.54379 21.7426 4.64382 21.7611 4.74452 21.7593C4.84523 21.7575 4.94454 21.7355 5.03654 21.6945C5.12854 21.6535 5.21134 21.5944 5.28 21.5207L10 16.8017V20.9907C10 21.1896 10.079 21.3804 10.2197 21.5211C10.3603 21.6617 10.5511 21.7407 10.75 21.7407C10.9489 21.7407 11.1397 21.6617 11.2803 21.5211C11.421 21.3804 11.5 21.1896 11.5 20.9907V16.8017L16.22 21.5207C16.3622 21.6532 16.5502 21.7253 16.7445 21.7219C16.9388 21.7185 17.1242 21.6398 17.2616 21.5023C17.399 21.3649 17.4777 21.1795 17.4812 20.9852C17.4846 20.7909 17.4125 20.6029 17.28 20.4607L11.561 14.7407H16.85C19.173 14.7407 20.505 13.5497 20.505 11.4727V1.74072H20.75C20.9489 1.74072 21.1397 1.66171 21.2803 1.52105C21.421 1.3804 21.5 1.18964 21.5 0.990723C21.5 0.79181 21.421 0.601045 21.2803 0.460393C21.1397 0.31974 20.9489 0.240723 20.75 0.240723ZM19 11.4727C19 12.2957 18.755 13.2407 16.845 13.2407H4.655C2.745 13.2407 2.5 12.2957 2.5 11.4727V1.74072H19V11.4727ZM4 4.99072C4 4.79181 4.07902 4.60104 4.21967 4.46039C4.36032 4.31974 4.55109 4.24072 4.75 4.24072H12.75C12.9489 4.24072 13.1397 4.31974 13.2803 4.46039C13.421 4.60104 13.5 4.79181 13.5 4.99072C13.5 5.18963 13.421 5.3804 13.2803 5.52105C13.1397 5.66171 12.9489 5.74072 12.75 5.74072H4.75C4.55109 5.74072 4.36032 5.66171 4.21967 5.52105C4.07902 5.3804 4 5.18963 4 4.99072ZM4 8.99072C4 8.79181 4.07902 8.60105 4.21967 8.46039C4.36032 8.31974 4.55109 8.24072 4.75 8.24072H10.75C10.9489 8.24072 11.1397 8.31974 11.2803 8.46039C11.421 8.60105 11.5 8.79181 11.5 8.99072C11.5 9.18964 11.421 9.3804 11.2803 9.52105C11.1397 9.66171 10.9489 9.74072 10.75 9.74072H4.75C4.55109 9.74072 4.36032 9.66171 4.21967 9.52105C4.07902 9.3804 4 9.18964 4 8.99072Z"
                    fill="black"
                  />
                </svg>

                <p className={styles.duration}>{course.duration}</p>
                <p className={styles.weight}>{course.weight}</p>
              </div>
              <ul>
                {course.features.map((feature, idx) => (
                  <li key={idx}>✔ {feature}</li>
                ))}
              </ul>
              <div className={styles.actions}>
                <button className={styles.detailsBtn}>Details</button>
                <button className={styles.enrollBtn}>Enroll now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Top Instructors Section */}
      <div className={styles.instructors}>
        <h2 className={styles.instructorHeading}>Top instructor</h2>
        <p className={styles.subheading}>
          Welcome to DroneVerse, where we redefine India&apos;s drone industry.
          Driven by a vision to create world-class drone pilots, we go above &
          beyond in everything we do. Recognized in the esteemed World Book of
          Records.
        </p>
        <div className={styles.instructorGrid}>
          {instructors.map((inst, idx) => (
            <div
              key={idx}
              className={`${styles.instructorCard} ${styles[`card${idx % 2}`]}`}
            >
              <div className={styles.textContent}>
                <h4>{inst.name}</h4>
                <p>{inst.description}</p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src={getImageFallback(
                    inst.image,
                    "training",
                    "instructorImages",
                    idx
                  )}
                  alt={inst.name}
                  width={123}
                  height={139}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
