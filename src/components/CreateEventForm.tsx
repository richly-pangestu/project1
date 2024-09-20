import React, { useState } from 'react';
import axios from 'axios';

const CreateEventForm: React.FC = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [userId] = useState(1); // Assuming a logged-in user for simplicity

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('/api/events/create', { name, description, date, userId });
            // Reset form
            setName('');
            setDescription('');
            setDate('');
        } catch (error) {
          if (axios.isAxiosError(error)) {
              // Now TypeScript knows this is an AxiosError
              alert(`Failed to create event: ${error.response?.data.error || 'Unknown error'}`);
          } else {
              // Handle other types of errors (e.g., network errors)
              alert('An unexpected error occurred');
          }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Event Name" />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Event Description" />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <button type="submit">Create Event</button>
        </form>
    );
};

export default CreateEventForm;
