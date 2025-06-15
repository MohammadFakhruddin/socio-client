import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Provider/AuthContext';

const JoinedEvents = () => {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:5000/joined-events/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch joined events:', err);
        setLoading(false);
      });
  }, [user?.email]);

  if (loading) return <p>Loading joined events...</p>;

  if (!events.length) return <p>You have not joined any events yet.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h2 className="text-3xl font-bold mb-6">Your Joined Events</h2>
      <ul>
        {events.map(event => (
          <li key={event._id} className="mb-8 border p-4 rounded shadow">
            <img src={event.thumbnail} alt={event.title} className="w-full max-w-md h-48 object-cover rounded mb-3" />
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p>{event.description}</p>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Type:</strong> {event.eventType}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JoinedEvents;
