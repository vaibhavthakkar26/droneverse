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

export default function InstructorSection() {
  return (
    <section className={styles.wrapper}>
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
              className={`${styles.instructorCard}`}
            >
              <div className={styles.textContent}>
                <h4>{inst.name}</h4>
                <p>{inst.description}</p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src={inst.image}
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
