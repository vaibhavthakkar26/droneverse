// src/components/Footer/Footer.js
import styles from "./Footer.module.scss";
import { BiHomeAlt } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { getImageFallback } from '@/utils/imageFallbacks';
import Image from 'next/image';

export default function Footer() {
  // Use image fallbacks for missing images
  const backgroundVideo = getImageFallback('../../../assets/img/footer/bg.mp4', 'footer', 'backgroundVideo');
  const logoImage = getImageFallback('/assets/logo/white-logo.svg', 'footer', 'logo');

  return (
    <>
      <div className="w-full h-28 bg-linear-to-b from-black to-white"></div>
      <footer className={styles.footer}>
        {/* Background Video */}
        <video autoPlay loop muted playsInline className={styles.videoBackground}>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Content Overlay */}
        <div className={styles.overlay}>
          <div className={styles.overlayinner}></div>
          <div className={styles.topSection}>
            <div className={styles.logoColumn}>
              <h2 className={styles.logo}>
                <Image
                  className={styles.logo}
                  src={logoImage}
                  alt="Droneverse Logo"
                  width={266}
                  height={52}
                />
              </h2>
              <ul className={styles.contactInfo}>
                <li>
                  <BiHomeAlt /> 701A, Delhi - Jaipur Exp, Block A,
                  <br />
                  Sector 34, Gurugram, Haryana 122001
                </li>
                <li><CiMail /> info@droneverse.com</li>
                <li><FiPhoneCall /> +91-98810-12300</li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>Quick links</h4>
              <ul>
                <li>About us</li>
                <li>Defence</li>
                <li>Contact us</li>
                <li>Career</li>
                <li>Blogs</li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>Defence</h4>
              <ul>
                <li>Small class drone pilot</li>
                <li>Medium class</li>
                <li>Professional agricultural</li>
                <li>Professional FPV drone</li>
                <li>Drone masterclass</li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>Training</h4>
              <ul>
                <li>Precision agricultural</li>
                <li>Land survey</li>
                <li>Creative aerial photography</li>
                <li>Smart city inspection</li>
                <li>Agricultural survey</li>
                <li>Wind infrastructure</li>
                <li>Oil & gas inspection</li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>Products & Services</h4>
              <ul>
                <li>Power line drone</li>
                <li>Fire fighting drone</li>
                <li>Delivery drone</li>
                <li>Defence drone</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <div className="flex flex-wrap justify-between w-full px-3 py-4 mx-auto max-w-7xl lg:px-8">
            <p className="mb-1 text-center md:text-left md:m-0">
              © 2024 Droneverse Pvt Ltd. All rights reserved | Digital Partner |{" "}
              <a href="#">K2 Solutions</a>
            </p>
            <div className={styles.socialIcons}>
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
