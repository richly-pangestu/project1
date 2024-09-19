import React from 'react';
import styles from '@/styles/landing.module.css';

const CallToAction: React.FC = () => {
  return (
    <section className={styles.callToAction}>
      <h2>Ready to Create Your Event?</h2>
      <p>Join thousands of event organizers using our platform to create, manage, and host amazing events.</p>
      <button className={styles.ctaButton}>Get Started Now</button>
    </section>
  );
};

export default CallToAction;
