import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Provider/AuthContext';

const JoinedEvents = () => {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://socio-server.vercel.app/joined-events/${user.email}`)
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

  if (loading) return <p className="text-center mt-10 text-lg">Loading joined events...</p>;

  if (!events.length) return <p className="text-center mt-10 text-lg">You have not joined any events yet.</p>;

  return (
    <div className=" mx-auto p-6 mt-10 ">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">Your Joined Events</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map(event => (
          <li key={event._id} className="bg-white border border-gray-200 p-5 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <img
              src={event.thumbnail}
              alt={event.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-700 mb-2">{event.description}</p>
            <p className="text-sm text-gray-500"><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
            <p className="text-sm text-gray-500"><strong>Location:</strong> {event.location}</p>
            <p className="text-sm text-gray-500"><strong>Type:</strong> {event.eventType}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JoinedEvents;
