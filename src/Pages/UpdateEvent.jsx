import { useLoaderData, useNavigate } from "react-router";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";

const UpdateEvent = () => {
  const event = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    title: event.title || "",
    description: event.description || "",
    eventType: event.eventType || "",
    thumbnail: event.thumbnail || "",
    location: event.location || "",
    date: event.date || "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const { title, description, eventType, thumbnail, location, date } = formData;

      if (!title || !description || !eventType || !thumbnail || !location || !date) {
        toast.error("All fields are required");
        return;
      }

      const res = await axios.put(`http://localhost:5000/events/${event._id}`, {
        ...formData,
        creatorEmail: user?.email,
      });

      if (res.data.modifiedCount > 0) {
        toast.success("Event updated successfully!");
        navigate("/manage");
      } else {
        toast("No changes were made.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update event");
    }
  };

  if (event.creatorEmail !== user?.email) {
  return <p className="text-red-600 text-center mt-10">You are not authorized to update this event.</p>;
}


  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6">Update Event</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="eventType"
          placeholder="Event Type"
          value={formData.eventType}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="thumbnail"
          placeholder="Thumbnail URL"
          value={formData.thumbnail}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Update Event
        </button>
      </form>
    </div>
  );
};

export default UpdateEvent;
