import Image from 'next/image';
import styles from '../styles/About.module.css';

function About() {
  return (
    <div className={styles.aboutDiv} id="aboutDiv">
      {' '}
      <Image
        className={styles.logoImg}
        src={'/financeLogoYellow.png'}
        alt="logo"
        width={150}
        height={150}
      />
      <p className={styles.aboutHeading}> About Us</p>
      <hr />
      <p className={styles.aboutInfo}>
        A passion-driven body that researches and spreads{' '}
        <b>Financial Literacy</b> among people about{' '}
        <b>ecomomics, business and finance</b> around the globe.
      </p>
      <br />
      <p className={styles.aboutInfo}>
        We would aim to build curiosity and knowledge about these field among
        the students and make <b>finance and investment</b> a topic students are
        intent to learn about
      </p>
    </div>
  );
}

export default About;
