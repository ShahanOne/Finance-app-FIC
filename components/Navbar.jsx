import Link from 'next/link';
import styles from '../styles/NavbarStyles.module.css';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className={` navbar sticky-top navbar-expand-lg ${styles.nav} `}>
      <div className="container-fluid">
        <Link className="navbar-brand" href={'/'}>
          <Image
            src={'/financeLogoYellow2.png'}
            alt="brand"
            width={50}
            height={50}
          />
        </Link>
        <button
          className={`navbar-toggler  ${styles.toggler} `}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse`} id="navbarToggler">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href={'/'}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#aboutDiv">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#needDiv">
                Purpose
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#eventsDiv">
                Events
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
