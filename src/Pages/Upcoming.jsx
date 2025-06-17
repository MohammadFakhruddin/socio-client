import { FaMapMarkerAlt, FaCalendarAlt, FaTag } from "react-icons/fa";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

const UpcomingEvents = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [eventType, setEventType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch events from backend with filters
  const fetchEvents = async () => {
    setLoading(true);
    try {
      const params = {};
      if (eventType !== "all") params.eventType = eventType;
      if (searchTerm.trim()) params.search = searchTerm.trim();

      const res = await axios.get("https://socio-server.vercel.app/events", { params });
      setAllEvents(res.data);
    } catch (error) {
  
    }
    setLoading(false);
  };

  // Fetch initially and whenever filters change
  useEffect(() => {
    fetchEvents();
  }, [eventType, searchTerm]);

  return (
    <section className="bg-gray-50 py-12 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Upcoming Events
        </h1>

        {/* Filter and Search Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="all">All Events</option>
            <option value="cleanup">Clean Up</option>
            <option value="plantation">Plantation</option>
            <option value="donation">Donation</option>
            <option value="food">Food Distribution</option>
            <option value="awareness">Awareness Campaign</option>
            {/* Add other event types here as needed */}
          </select>

          <input
            type="text"
            placeholder="Search by event name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded w-full sm:w-64"
          />
        </div>

        {/* Events List */}
        {loading ? (
          <p className="text-center">Loading events...</p>
        ) : allEvents.length === 0 ? (
          <p className="text-center">No events found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {allEvents.map((event) => (
              <div
                key={event._id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition hover:shadow-xl duration-300"
              >
                <img
                  src={event.thumbnail}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {event.title}
                  </h3>

                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <FaMapMarkerAlt className="mr-2 text-primary" />
                    <span>{event.location}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <FaTag className="mr-2 text-primary" />
                    <span>{event.eventType}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <FaCalendarAlt className="mr-2 text-primary" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>

                  <div className="mt-auto">
                    <Link to={`/details/${event._id}`} className="btn btn-primary w-full">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingEvents;
