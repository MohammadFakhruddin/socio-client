import { FaMapMarkerAlt, FaCalendarAlt, FaTag } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const UpcomingEvents = () => {
  const allEvents = useLoaderData();

  return (
    <section className="bg-gray-50 py-12 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Upcoming Events
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {allEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition hover:shadow-xl duration-300"
            >
              {/* Thumbnail Image */}
              <img
                src={event.thumbnail}
                alt={event.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {event.title}
                </h3>

                {/* Location */}
                <div className="flex items-center text-sm text-gray-600 mb-1">
                  <FaMapMarkerAlt className="mr-2 text-primary" />
                  <span>{event.location}</span>
                </div>

                {/* Event Type */}
                <div className="flex items-center text-sm text-gray-600 mb-1">
                  <FaTag className="mr-2 text-primary" />
                  <span>{event.eventType}</span>
                </div>

                {/* Date */}
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <FaCalendarAlt className="mr-2 text-primary" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>

                {/* Button */}
                <div className="mt-auto">
                  <Link to={`/details/${event._id}`} className="btn btn-primary w-full">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
