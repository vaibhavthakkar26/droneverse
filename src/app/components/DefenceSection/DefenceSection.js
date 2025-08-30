import FPVSection from "../FPVSection/FPVSection";
import styles from "./DefenceSection.module.scss";
import Image from "next/image";
import { getImageFallback } from '@/utils/imageFallbacks';

export default function DefenceSection() {
  // Use image fallbacks for missing images
  const fighterJetImage = getImageFallback('/assets/img/defence/fighter-jet.svg', 'defence', 'fighterJetImage');
  const gridBallsImage = getImageFallback('/assets/img/defence/grid-balls.svg', 'defence', 'gridBallsImage');

  return (
    <section className={styles.defenceSection}>
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
        <div className={styles.imageWrapper}>
          <Image
            src={fighterJetImage}
            alt="Fighter Jet"
            width={786}
            height={450}
            className={styles.image}
            priority
          />
          <div className={styles.gridBallsWrapper}>
            <Image
              src={gridBallsImage}
              alt="Drone"
              width={286}
              height={71}
              className={styles.gridBalls}
            />
            <Image
              src={gridBallsImage}
              alt="Drone"
              width={286}
              height={71}
              className={styles.gridBalls}
            />
          </div>
        </div>
      </div>
      <FPVSection />
    </section>
  );
}
