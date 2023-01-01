import Image from 'next/image';
import styles from '../styles/Purpose.module.css';

function Purpose() {
  return (
    <div className={`row ${styles.purposeDiv} `} id="purposeDiv">
      <p className={`${styles.purposeHeading}`}>The Purpose Of FIC</p>
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
          to the underserved community and regularly organises drives to fulfil
          this aim.
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
          From budgeting to personal financial management, financial literacy is
          the ability to understand and apply various financial skills
        </p>
      </div>
    </div>
  );
}

export default Purpose;
