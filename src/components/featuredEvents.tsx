import React from 'react';
import styles from '@/styles/landing.module.css';

const FeaturedEventsSection: React.FC = () => {
  return (
    <section id="featured-events" className={styles.featuredEvents}>
      <h2>Featured Events</h2>
      <div className={styles.featuredList}>
        <div className={styles.featuredCard}>
          <h3>Featured Event 1</h3>
          <p>Exclusive details about Featured Event 1.</p>
        </div>
        <div className={styles.featuredCard}>
          <h3>Featured Event 2</h3>
          <p>Exclusive details about Featured Event 2.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEventsSection;
