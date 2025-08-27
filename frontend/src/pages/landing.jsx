import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/landing.module.css";

export default function LandingPage() {
  return (
    <div className={styles.landingPageContainer}>
      <nav>
        <h2>Meetify</h2>
        <div className={styles.navList}>
          <Link to="/videomeet?guest=true" className={styles.navButton}>
            Join as Guest
          </Link>
          <Link to="/auth" className={styles.navButton}>
            Register
          </Link>
          <Link to="/auth" className={styles.navButton}>
            Login
          </Link>
        </div>
      </nav>

      <div className={styles.landingMainContainer}>
        <div className={styles.leftContent}>
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones
          </h1>
          <p>Cover a distance by Meetify</p>
          <Link className={styles.getStartedBtn} to="/auth">
            Get Started
          </Link>
        </div>

        <div className={styles.rightImage}>
          <img src="/mobile.png" alt="Mobile preview" />
        </div>
      </div>
    </div>
  );
}
