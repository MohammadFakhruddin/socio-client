import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Lottie from "lottie-react";
import animationData from "../../Lottie/events.json";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const CreateEvents = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreateEvents = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const eventData = Object.fromEntries(formData.entries());

    // Convert description to trimmed string
    const description = eventData.description?.trim();

    // Validate future date
    if (!selectedDate || selectedDate < new Date()) {
      return toast.error("Please select a valid future date.");
    }

    // Validate description length
    if (!description || description.length < 30) {
      return toast.error("Description must be at least 30 characters.");
    }

    eventData.date = selectedDate;
    eventData.creatorEmail = user?.email;

    fetch("https://socio-server.vercel.app/events", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Event Added Successfully");
          navigate("/upcoming");
        } else {
          toast.error("Failed to add event");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong");
      });
  };


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

          <form onSubmit={handleCreateEvents} className="space-y-4">
            {/* Title */}
            <div>
              <label className="block mb-0.5 font-medium">Event Title</label>
              <input
                type="text"
                name="title"
                required
                placeholder="Enter event title"
                className="input input-bordered w-full py-2"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block mb-0.5 font-medium">Description</label>
              <textarea
                name="description"
                required
                minLength={30}
                rows="3"
                placeholder="Write event details (minimum 30 characters)"
                className="textarea textarea-bordered w-full py-2"
              ></textarea>
            </div>

            {/* Event Type */}
            <div>
              <label className="block mb-0.5 font-medium">Event Type</label>
              <select
                name="eventType"
                required
                className="select select-bordered w-full py-2"
                defaultValue=""
              >
                <option disabled value="">
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
              <label className="block mb-0.5 font-medium">
                Thumbnail Image URL
              </label>
              <input
                type="text"
                name="thumbnail"
                required
                placeholder="Enter image URL"
                className="input input-bordered w-full py-2"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block mb-0.5 font-medium">Location</label>
              <input
                type="text"
                name="location"
                required
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
                required
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
