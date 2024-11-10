import React from "react";
import Link from "next/link";
import styles from "../Header/Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoText}>
          My Portfolio
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/skills" className={styles.navLink}>
              Skills
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/projects" className={styles.navLink}>
              Projects
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.cta}>
        <Link
          href="https://www.linkedin.com/in/afsheen-imran-b623a42a2/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          LinkedIn
        </Link>
      </div>
    </header>
  );
};

export default Header;
