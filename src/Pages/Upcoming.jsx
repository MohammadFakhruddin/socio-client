import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaTag } from "react-icons/fa";

const UpcomingEvents = () => {
  // Just a static placeholder for 3 cards, no data logic
  return (
    <section className="bg-gray-50 py-12 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Upcoming Events
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col animate-pulse"
            >
              {/* Placeholder for image */}
              <div className="w-full h-48 bg-gray-300"></div>

              <div className="p-4 flex flex-col flex-grow">
                {/* Placeholder title */}
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>

                {/* Placeholder info lines */}
                <div className="flex items-center mb-2">
                  <FaMapMarkerAlt className="mr-2 text-gray-400" />
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
                <div className="flex items-center mb-2">
                  <FaTag className="mr-2 text-gray-400" />
                  <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                </div>
                <div className="flex items-center mb-4">
                  <FaCalendarAlt className="mr-2 text-gray-400" />
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>

                {/* Placeholder button */}
                <div className="mt-auto">
                  <div className="bg-primary rounded-md h-10 w-full"></div>
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
