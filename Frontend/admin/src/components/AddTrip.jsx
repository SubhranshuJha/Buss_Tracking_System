import React, { useState } from "react";
import { addTrip } from "../services/adminApi";

const AddTrip = () => {
  const [form, setForm] = useState({
    busId: "",
    routeId: "",
    departureTime: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTrip(form);
      alert("Trip added successfully");
    } catch (err) {
      alert("Error adding trip");
    }
  };

  return (
    <div>
      <h2>Add Trip</h2>
      <form onSubmit={handleSubmit}>
        <input name="busId" placeholder="Bus ID" onChange={handleChange} />
        <input name="routeId" placeholder="Route ID" onChange={handleChange} />
        <input type="datetime-local" name="departureTime" onChange={handleChange} />
        <button type="submit">Add Trip</button>
      </form>
    </div>
  );
};

export default AddTrip;