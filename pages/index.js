import Link from 'next/link';
import styles from '../styles/HomePage.module.css';
import { Inter } from '@next/font/google';
import About from '../components/About';
import Purpose from '../components/Purpose';
import Need from '../components/Need';
import Events from '../components/Events';
import Footer from '../components/Footer';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={styles.mainDiv} id="mainDiv">
      <center>
        <div className={styles.welcomeDiv}>
          <p className={styles.welcomeText}>Welcome To Financing App </p>
          <p className={styles.infoText}>
            {' '}
            <i> All about Finances and Investments</i>
          </p>
          <button className={`btn  btn-success ${styles.exploreBtn} `}>
            <Link className={styles.exploreLink} href="#eventsDiv">
              {' '}
              Explore
            </Link>
          </button>
        </div>
      </center>
      <About />
      <Need />
      <Purpose />
      <Events />
      <Footer />
    </div>
  );
}
