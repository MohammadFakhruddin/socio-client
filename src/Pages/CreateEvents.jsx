import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Lottie from "lottie-react";
import animationData from "../../Lottie/events.json";

const CreateEvents = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <section className="bg-secondary py-12 px-4 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Lottie Animation Section */}
        <div className="flex-1 flex justify-center">
          <Lottie
            animationData={animationData}
            loop
            autoplay
            style={{ maxWidth: 600, width: "100%", height: "auto" }}
          />
        </div>

        {/* Form Section */}
        <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-primary text-center">
            Create a New Event
          </h2>

          <form className="space-y-4">
            {/* Title */}
            <div>
              <label className="block mb-0.5 font-medium">Event Title</label>
              <input
                type="text"
                placeholder="Enter event title"
                className="input input-bordered w-full py-2"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block mb-0.5 font-medium">Description</label>
              <textarea
                rows="3"
                placeholder="Write event details"
                className="textarea textarea-bordered w-full py-2"
              ></textarea>
            </div>

            {/* Event Type */}
            <div>
              <label className="block mb-0.5 font-medium">Event Type</label>
              <select className="select select-bordered w-full py-2">
                <option disabled selected>
                  Select type
                </option>
                <option>Cleanup</option>
                <option>Plantation</option>
                <option>Donation</option>
                <option>Food Distribution</option>
                <option>Awareness Campaign</option>
              </select>
            </div>

            {/* Thumbnail URL */}
            <div>
              <label className="block mb-0.5 font-medium">Thumbnail Image URL</label>
              <input
                type="text"
                placeholder="Enter image URL"
                className="input input-bordered w-full py-2"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block mb-0.5 font-medium">Location</label>
              <input
                type="text"
                placeholder="Enter location"
                className="input input-bordered w-full py-2"
              />
            </div>

            {/* Date Picker */}
            <div>
              <label className="block mb-0.5 font-medium">Event Date</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                minDate={new Date()}
                className="input input-bordered w-full py-2"
                placeholderText="Select a future date"
              />
            </div>

            {/* Submit */}
            <div className="text-center pt-4">
              <button className="btn btn-primary w-full md:w-auto">
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateEvents;
