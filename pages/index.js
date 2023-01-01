import Image from 'next/image';
import styles from '../styles/HomePage.module.css';
import { Inter } from '@next/font/google';
import About from '../components/About';
import Purpose from '../components/Purpose';
import Need from '../components/Need';
import Events from '../components/Events';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={styles.mainDiv} id="mainDiv">
      <center>
        <div className={styles.welcomeDiv}>
          <p className={styles.welcomeText}>Welcome To FIC </p>
          <p className={styles.infoText}>
            Finance and Investments Cell, Jamia Millia Islamia
          </p>
          <button className={`btn btn-success ${styles.exploreBtn} `}>
            Explore
          </button>
        </div>
      </center>
      <About />
      <Need />
      <Purpose />
      <Events />
    </div>
  );
}
