import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '@/styles/landing.module.css';

interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
  createdBy: { name: string };
}

const EventsSection: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get('/api/events');
      setEvents(response.data);
    };
    fetchEvents();
  }, []);

  return (
    <section id="events" className={styles.events}>
      <h2>Upcoming Events</h2>
      <div className={styles.eventList}>
        {events.map((event) => (
          <div key={event.id} className={styles.eventCard}>
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p>Created by: {event.createdBy.name}</p>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
