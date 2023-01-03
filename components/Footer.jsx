import styles from '../styles/Footer.module.css';
import Link from 'next/link';

function Footer() {
  return (
    <div className={styles.div}>
      <center>
        <p>
          {'</>'} by
          <Link href="https://shahanone.wordpress.com"> Shahan.One</Link>
        </p>
        <p>2023</p>
      </center>
    </div>
  );
}

export default Footer;
