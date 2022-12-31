import Image from 'next/image';
import styles from '../styles/HomePage.module.css';
import { Inter } from '@next/font/google';

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
      <div className={styles.aboutDiv} id="aboutDiv">
        {' '}
        <Image
          className={styles.logoImg}
          src={'/download.png'}
          alt="logo"
          width={150}
          height={150}
        />
        <p className={styles.aboutHeading}> About Us</p>
        <hr />
        <p className={styles.aboutInfo}>
          A student-driven body that researches and spreads{' '}
          <b>Financial Literacy</b> among students about{' '}
          <b>ecomomics, business and finance</b> around the globe.
        </p>
        <br />
        <p className={styles.aboutInfo}>
          We would aim to build curiosity and knowledge about these field among
          the students and make <b>finance and investment</b> a topic students
          are intent to learn about
        </p>
      </div>
      <div className={styles.needDiv} id="needDiv">
        <p className={styles.needHeading}>The Need For FIC</p>
        <hr />
        <p className={styles.needInfo}>
          <b>financial literacy</b> among students in the present time is
          <b> extremely necessary</b>
        </p>
        <br />
        <p className={styles.needInfo}>
          The cell aims to provide a stimulus to develop financial instincts
          among <b> young minds</b> through{' '}
          <b> events, regular workshops, collaboration</b> with the industry to
          bridge the gap between <b> pedagogy</b> and <b>practice.</b>
        </p>
        <br />
        <p className={styles.needInfo}>
          In an increasingly <b> globalised economy</b>, financial knowledge is
          a need for every individual and a <b> finance & investment cell</b>{' '}
          would <b> bridge the gap</b> through learning, research work &
          interesting discussions.
        </p>
      </div>
      <div className={`row ${styles.purposeDiv} `} id="purposeDiv">
        <p className={styles.purposeHeading}>The Purpose Of FIC</p>
        <div className={`col-lg-10 ${styles.purposeCard}`}>
          <p className={styles.purposeInfo}>
            <b>FIC, JMI </b> would organise <b> workshops</b> and
            <b> collaborate</b> with people from within the industry to connect
            and impart knowledge to the participants.
          </p>
        </div>
        <div className="col-lg-2">
          <Image
            src={'/financeIcon4.png'}
            className={styles.financeIcon}
            alt="finance-logo"
            width={180}
            height={180}
          />
        </div>
        <br />
        <div className="col-lg-2">
          <Image
            src={'/financeIcon2.png'}
            className={styles.financeIcon}
            alt="finance-logo"
            width={180}
            height={180}
          />
        </div>
        <div className={`col-lg-10 ${styles.purposeCard}`}>
          <p className={styles.purposeInfo}>
            It will hold research and informative sessions on Basic{' '}
            <b> financial and investment</b> education.
          </p>
        </div>
        <div className={`col-lg-10 ${styles.purposeCard}`}>
          <p className={styles.purposeInfo}>
            The Cell aims to spread financial literacy in a fun yet holistic way
            to the underserved community and regularly organises drives to
            fulfil this aim.
          </p>
        </div>
        <div className="col-lg-2">
          <Image
            src={'/financeIcon3.png'}
            className={styles.financeIcon}
            alt="finance-logo"
            width={180}
            height={180}
          />
        </div>
        <div className="col-lg-2">
          <Image
            src={'/financeIcon1.png'}
            className={styles.financeIcon}
            alt="finance-logo"
            width={180}
            height={180}
          />
        </div>
        <div className={`col-lg-10 ${styles.purposeCard}`}>
          <p className={styles.purposeInfo}>
            From budgeting to personal financial management, financial literacy
            is the ability to understand and apply various financial skills
          </p>
        </div>
      </div>
      <div className={styles.eventsDiv} id="eventsDiv">
        <p className={styles.eventsHeading}>The Need For FIC</p>
        <p className={styles.eventsInfo}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae earum
          cum deleniti, sunt aliquam ut ipsa fugiat vero. Dolorum consequuntur
          repudiandae eligendi voluptates neque quasi temporibus ad tempora
          voluptatibus accusantium?
        </p>
      </div>
    </div>
  );
}
