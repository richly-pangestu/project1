import React from 'react';
import styles from '@/styles/landing.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Eventbrite Clone</div>
        <ul className={styles.navLinks}>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#signup">Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
