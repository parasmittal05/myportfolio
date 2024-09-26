import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Paras Mittal"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                I am Paras Mittal, a recent B.Tech graduate in Computer Science and Information Technology from the Meerut Institute of Engineering and Technology. Driven by a strong passion for software development, I have developed expertise in both frontend and backend technologies. My technical skill set includes modern web technologies such as ReactJS, NodeJS, MongoDB, Express, and SQL, as well as proficiency in programming languages like C/C++, Python, and JavaScript. This diverse skill set, combined with a solid understanding of object-oriented programming, data structures, algorithms, and database management systems, equips me to deliver efficient and scalable solutions..
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
