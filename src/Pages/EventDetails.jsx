import { useParams } from "react-router";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://socio-server.vercel.app/events/${id}`)
      .then(res => {
        setEvent(res.data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load event");
        setLoading(false);
      });
  }, [id]);

  const handleJoinEvent = () => {
    if (!user?.email) {
      return toast.error("You must be logged in to join an event.");
    }

    const joinedEvent = {
      eventId: event._id,
      userEmail: user.email,
    };

    axios.post("https://socio-server.vercel.app/joined-events", joinedEvent)
      .then(res => {
        if (res.status === 201) {
          toast.success("Successfully joined the event!");
        } else if (res.status === 409) {
          toast.info("You already joined this event.");
        }
      })
      .catch(() => toast.error("Something went wrong."));
  };

  if (loading) {
    return <p className="text-center text-lg font-semibold mt-10">Loading event details...</p>;
  }

  if (!event) {
    return <p className="text-center text-red-500 mt-10">Event not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg mt-10">
      <img src={event.thumbnail} alt={event.title} className="w-full h-64 object-cover rounded" />
      <h2 className="text-2xl font-bold mt-4">{event.title}</h2>
      <p className="mt-2 text-gray-700">{event.description}</p>
      <p className="mt-2"><strong>Type:</strong> {event.eventType}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>

      <button
        onClick={handleJoinEvent}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Join Event
      </button>
    </div>
  );
};

export default EventDetails;
