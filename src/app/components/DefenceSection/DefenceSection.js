import FPVSection from "../FPVSection/FPVSection";
import styles from "./DefenceSection.module.scss";
import Image from "next/image";
import iconicSHape from '../../../../public/assets/img/training/bgShapeDrone.png'
import sectionBg from "../../../../public/assets/img/training/SectionBg.png";
import { getImageFallback } from '@/utils/imageFallbacks';

export default function DefenceSection() {
  // Use image fallbacks for missing images
  const fighterJetImage = getImageFallback('/assets/img/defence/fighter-jet.svg', 'defence', 'fighterJetImage');
  const gridBallsImage = getImageFallback('/assets/img/defence/grid-balls.svg', 'defence', 'gridBallsImage');

  return (
    <section className={styles.defenceSection}>
      <div
        className="absolute inset-0 top-0 left-0 bg-center bg-repeat-y bg-cover opacity-20"
        style={{ backgroundImage: `url(${sectionBg.src})` }}
      ></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>
            Defence Solutions by <br />
            <span>DroneVerse</span>
          </h2>
          <p>
            At DroneVerse, we are redefining modern defence operations with our
            advanced ecosystem of aerial technologies. From AI-powered
            counter-drone systems to DGCA-certified drone training for combat
            forces, we deliver future-ready solutions tailored for tactical
            advantage. Our core expertise spans surveillance and FPV drones,
            built for frontline intelligence and real-time mission execution. We
            also offer full-scale customization labs for defence units and
            agencies, enabling rapid prototyping, specialized payload
            integration, and training module setups—all aligned with national
            security needs and evolving battlefield dynamics.
          </p>
        </div>
        <div className={styles.imageWrapper} >
          <Image
            src={iconicSHape}
            alt="fill shape"
            className="absolute top-0 sm:top-6 left-5 sm:left-14 object-contain size-12 sm:size-14.5 opacity-20"
          />
          <Image
            src={iconicSHape}
            alt="fill shape"
            className="absolute -bottom-6 sm:bottom-0 lg:-bottom-10 xl:-bottom-10  object-contain size-12 sm:size-14.5 opacity-20 -left-0"
          />
          <Image
            src={iconicSHape}
            alt="fill shape"
            className="absolute sm:bottom-16 md:bottom-16 lg:bottom-2 xl:-bottom-2 object-contain sm:size-14.5 size-12 opacity-20 md:right-20 sm:right-16 right-0"
          />
          <Image
            src={fighterJetImage}
            alt="Fighter Jet"
            width={786}
            height={450}
            className={styles.image}
            priority
          />
        </div>
      </div>
      <FPVSection />
    </section>
  );
}
