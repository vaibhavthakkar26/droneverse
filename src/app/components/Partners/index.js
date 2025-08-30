import styles from './Partners.module.scss'
import { getImageFallback } from '@/utils/imageFallbacks';
import Image from 'next/image';

const partners = [
  { name: 'IndianOil', img: '/assets/img/partners/img1.png' },
  { name: 'IFFCO', img: '/assets/img/partners/img2.png' },
  { name: 'Sanshtha Sevak', img: '/assets/img/partners/img3.png' },
  { name: 'Tata Power', img: '/assets/img/partners/img4.png' },
  { name: 'Garuda Aerospace', img: '/assets/img/partners/img5.png' },
  { name: 'Defense Org', img: '/assets/img/partners/img6.png' },
  { name: 'Air Force', img: '/assets/img/partners/img7.png' },
  { name: 'CRPF', img: '/assets/img/partners/img8.png' },
  { name: 'General Aeronautics', img: '/assets/img/partners/img9.png' },
  { name: 'Go Green', img: '/assets/img/partners/img10.png' },
  { name: 'SB Jain', img: '/assets/img/partners/img11.png' },
  { name: 'Agri Wings', img: '/assets/img/partners/img12.png' },
];

export default function Partners() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Our partners</h2>
      <p className={styles.subtitle}>
        Welcome to DroneVerse, where we redefine India&apos;s drone industry. Driven by a vision to create world-class drone pilots,<br />
        we go above & beyond in everything we do. Recognized in the esteemed World Book of Records.
      </p>

      <div className={styles.grid}>
        {partners.map((partner, index) => (
          <div className={styles.card} key={index}>
            <Image
              src={getImageFallback(partner.img, 'partners', 'images', index)}
              alt={partner.name}
              width={150}
              height={100}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
