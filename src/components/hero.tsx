// src/components/Hero.tsx
import React from 'react';
import styles from '@/styles/landing.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <h1>Your Ultimate Event Platform</h1>
      <p>Discover, create, and manage events with ease.</p>
      <button className={styles.ctaButton}>Get Started</button>
    </section>
  );
};

export default Hero;
