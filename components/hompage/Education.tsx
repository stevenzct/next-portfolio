import Image from "next/image";
import { AcademicCapIcon, MapPinIcon } from "@heroicons/react/24/outline";

import universitySeal from "../../public/images/education/university-of-rizal-system.png";
import styles from "./Education.module.css";

const Education = () => (
  <section
    id="education"
    aria-labelledby="homepage-education-heading"
    data-home-layout
    data-nav-theme="light"
    data-home-motion-section
    className="bg-white pb-[calc(80*var(--home-unit,1px))] md:pb-24 lg:pb-[calc(120*var(--home-unit,1px))]"
  >
    <div className="container-wrapper h-auto w-full">
      <div className="app-container mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[90%] xl:w-[88%] 2xl:w-[75%]">
        <div data-home-motion-card className={styles.card}>
          <div aria-hidden="true" className={styles.orbit} />

          <div className={styles.sealPanel}>
            <Image
              src={universitySeal}
              alt="University of Rizal System seal"
              sizes="(min-width: 1280px) 10vw, (min-width: 768px) 120px, 80px"
              className={styles.seal}
            />
          </div>

          <div className={styles.details}>
            <p className={styles.eyebrow}>Education</p>
            <h2 id="homepage-education-heading" className={styles.degree}>
              <span className={styles.degreeType}>Bachelor of Science in</span>
              Computer Engineering
            </h2>
            <div className={styles.institution}>
              <p className={styles.university}>University of Rizal System</p>
              <p className={styles.location}>
                <MapPinIcon aria-hidden="true" />
                Antipolo, Rizal Philippines
              </p>
            </div>
          </div>

          <div className={styles.batch}>
            <AcademicCapIcon aria-hidden="true" className={styles.cap} />
            <dl>
              <dt className={styles.batchLabel}>Batch of</dt>
              <dd className={styles.year}>2024</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
