import React from "react";
import Title from "../GlobalstyledComponents/Title";
import styles from "../../css/about.module.css";
import img from "../../images/defaultBcg.jpeg";

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="About" subtitle="Us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Explore the difference</h4>
          <p>
            Lorem ispsum Lorem ispsum Lorem ispsum Lorem ispsum Lorem ispsum
            Lorem ispsum Lorem ispsum Lorem ispsum Lorem ispsum Lorem ispsum
            Lorem ispsum Lorem ispsum
          </p>
          <p>
            Lorem ispsum Lorem ispsum Lorem ispsum Lorem ispsum Lorem ispsum
            Lorem ispsum Lorem ispsum Lorem ispsum Lorem ispsum Lorem ispsum
            Lorem ispsum Lorem ispsum
          </p>
          <button type="button" className="btn-primary">
            Let`s go!
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;
