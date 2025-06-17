import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import { Link } from "react-router";

const ManageEvents = () => {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = () => {
    if (!user?.email) return;

    axios
      .get(`http://localhost:5000/events?creatorEmail=${user.email}`)
      .then((res) => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Failed to load your events.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchEvents();
  }, [user?.email]);

  const handleDelete = (eventId) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;

    axios
      .delete(`http://localhost:5000/events/${eventId}`, {
        data: { creatorEmail: user.email },
      })
      .then((res) => {
        toast.success("Event deleted successfully.");
        setEvents((prev) => prev.filter((ev) => ev._id !== eventId));
      })
      .catch((err) => {
        toast.error(
          err.response?.data?.message || "Failed to delete the event."
        );
      });
  };

  if (loading) return <p className="text-center mt-10">Loading your events...</p>;

  if (!events.length)
    return <p className="text-center mt-10">You haven't created any events yet.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Manage Your Events</h2>

      {events.map((event) => (
        <div
          key={event._id}
          className="mb-6 p-4 border rounded shadow bg-white"
        >
          <img
            src={event.thumbnail}
            alt={event.title}
            className="w-full max-h-48 object-cover rounded mb-3"
          />
          <h3 className="text-xl font-semibold">{event.title}</h3>
          <p>{event.description}</p>
          <p>
            <strong>Type:</strong> {event.eventType}
          </p>
          <p>
            <strong>Location:</strong> {event.location}
          </p>
          <p>
            <strong>Date:</strong>{" "}
            {new Date(event.date).toLocaleDateString()}
          </p>

          <div className="mt-3 flex gap-3">
            <Link
              to={`/update/${event._id}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Update
            </Link>
            <button
              onClick={() => handleDelete(event._id)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageEvents;
