import React, { useState } from "react";
import { addRoute } from "../services/adminApi";

const AddRoute = () => {
  const [form, setForm] = useState({
    source: "",
    destination: "",
    distance: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addRoute(form);
      alert("Route added successfully");
    } catch (err) {
      alert("Error adding route");
    }
  };

  return (
    <div>
      <h2>Add Route</h2>
      <form onSubmit={handleSubmit}>
        <input name="source" placeholder="Source" onChange={handleChange} />
        <input name="destination" placeholder="Destination" onChange={handleChange} />
        <input name="distance" placeholder="Distance (km)" onChange={handleChange} />
        <button type="submit">Add Route</button>
      </form>
    </div>
  );
};

export default AddRoute;