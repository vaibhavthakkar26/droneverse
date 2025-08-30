import styles from './FPVSection.module.scss';
import Image from 'next/image';
import { getImageFallback } from '@/utils/imageFallbacks';

export default function FPVSection() {
    const features = [
        {
            number: '1',
            title: 'Search and rescue operations',
            description:
                'Locating missing persons with real-time visuals. Rapid response in natural disaster scenarios. Efficient delivery of medical supplies to remote areas.',
        },
        {
            number: '2',
            title: 'Kamikaze Missions',
            description:
                'Precision strikes with real-time targeting. Tactical reconnaissance for strategic advantage. Quick response missions for immediate threat neutralization.',
        },
        {
            number: '3',
            title: 'Surveillance',
            description:
                'Extended surveillance missions for comprehensive coverage. Border monitoring to enhance national security. Crowd monitoring.',
        },
    ];

    // Use image fallback for missing drone image
    const droneImage = getImageFallback('/assets/img/defence/drone.svg', 'defence', 'droneImage');

    return (
        <section className={styles.wrapper}>
            <div className={styles.left}>
                <h2 className={styles.heading}>Elevate Defence. Empower Strategy.</h2>
                <p className={styles.subtext}>
                    DroneVerse&apos;s cutting-edge FPV (First Person View) drones deliver real-time situational awareness, empowering troops in asymmetric warfare. From tactical surveillance to high-speed ops, they redefine control, clarity, and command on the battlefield
                </p>
            </div>
            <div className={styles.right}>
                <Image
                    src={droneImage}
                    alt="Drone"
                    width={350}
                    height={180}
                    className={styles.droneImage}
                />
            </div>

            <div className={styles.droneCards}>
                <div className={styles.features}>
                    {features.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.badge}>{item.number}</div>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
