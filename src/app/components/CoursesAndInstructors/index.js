import styles from './CoursesAndInstructors.module.scss';
import Image from 'next/image';
// import assets from '../../../public/assets/img/course&instruction/'

const courses = [
  {
    id: 1,
    img: '/assets/img/course&instruction/img1.png',
    tag: 'DGCA approved',
    tagColor: 'green',
    title: 'Small Class Drone Pilot Course',
    subtitle: '5 days | Weight upto ',
    weight: '2KG',
    desc: [
      'Understand the regulatory framework',
      'Learn flight planning, navigation and safety protocols',
      'Practical flight training',
      'Training on a drone simulator and remote pilot certification',
    ],
  },
  {
    id: 2,
    img: '/assets/img/course&instruction/img2.png',
    tag: 'Industry recognized certification',
    tagColor: 'green',
    title: 'Advanced Drone Operations',
    subtitle: '5 days | Weight upto ',
    weight: '2KG',
    desc: [
      'Understand the regulatory framework',
      'Learn flight planning, navigation and safety protocols',
      'Practical flight training',
      'Training on a drone simulator and remote pilot certification',
    ],
  },
  {
    id: 3,
    img: '/assets/img/course&instruction/img3.png',
    tag: 'Comprehensive training module',
    tagColor: 'green',
    title: 'Drone Maintenance & Repair',
    subtitle: '5 days | Weight upto ',
    weight: '2KG',
    desc: [
      'Learn about drone components',
      'Learn flight planning, navigation and safety protocols',
      'Practical flight training',
      'Training on a drone simulator and remote pilot certification',
    ],
  },
];

const instructors = [
  {
    name: 'Ambuj Verma',
    desc: 'A seasoned veteran with extensive experience in both civilian and military drone...',
    img: '/assets/img/course&instruction/1.png',
  },
  {
    name: 'Harsh Goel',
    desc: 'An innovative thinker, pioneering cutting-edge techniques and methodologies in ...',
    img: '/assets/img/course&instruction/2.png',
  },
];

export default function CoursesAndInstructors() {
  return (
    <div className={styles.container}>
      {/* Section: Passion into professions */}
      <section>
        <h2 className={styles.sectionTitle}>Turning passion into professions</h2>
        <p className={styles.sectionDesc}>
          Welcome to DroneVerse, where we redefine India’s drone industry. Driven by a vision to create world-class drone pilots,
          we go above & beyond in everything we do. Recognized in the esteemed World Book of Records.
        </p>

        <div className={styles.filter}>
          <button className={`${styles.filterBtn} ${styles.active}`}>Defence</button>
          <button className={styles.filterBtn}>Student</button>
          <button className={styles.filterBtn}>Training</button>
        </div>

        <div className={styles.cardGrid}>
          {courses.map(({ id, img, tag, tagColor, title, subtitle, weight, desc }) => (
            <div key={id} className={styles.card}>
              <Image
                src={img}
                alt={title}
                className={styles.cardImg}
                width={300}
                height={200}
              />

              <p className={`${styles.tag} ${tagColor === 'green' ? styles.tagGreen : ''}`}>{tag}</p>

              <h3 className={styles.cardTitle}>{title}</h3>

              <p className={styles.cardSubtitle}>
                <span role="img" aria-label="calendar">📅</span> {subtitle} <strong>{weight}</strong>
              </p>

              <ul className={styles.bulletList}>
                {desc.map((item, i) => (
                  <li key={i} className={styles.bulletItem}>
                    <span className={styles.checkmark}>✓</span> {item}
                  </li>
                ))}
              </ul>

              <div className={styles.buttons}>
                <button className={styles.outlinedBtn}>Details</button>
                <button className={styles.filledBtn}>Enroll now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Top instructor */}
      <section>
        <h2 className={styles.sectionTitle}>Top instructor</h2>
        <p className={styles.sectionDesc}>
          Welcome to DroneVerse, where we redefine India’s drone industry. Driven by a vision to create world-class drone pilots,
          we go above & beyond in everything we do. Recognized in the esteemed World Book of Records.
        </p>

        <div className={styles.instructors}>
          {instructors.map(({ name, desc, img }) => (
            <div key={name} className={styles.instructorCard}>
              <div>
                <strong>{name}</strong>
                <p>{desc}</p>
              </div>
              <Image
                src={img}
                alt={name}
                className={styles.instructorImg}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
