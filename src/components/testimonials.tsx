// src/components/Testimonials.tsx
import React from 'react';
import styles from '@/styles/landing.module.css';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2>What Our Users Say</h2>
      <div className={styles.testimonialList}>
        <div className={styles.testimonialCard}>
          <p>"This platform has revolutionized the way I manage my events!"</p>
          <h4>- User A</h4>
        </div>
        <div className={styles.testimonialCard}>
          <p>"The best experience I've ever had organizing a concert."</p>
          <h4>- User B</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
