import React, { useState } from "react";
import { addBus } from "../services/adminApi";

const AddBus = () => {
  const [form, setForm] = useState({
    number: "",
    capacity: "",
    driver: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addBus(form);
      alert("Bus added successfully");
    } catch (err) {
      alert("Error adding bus");
    }
  };

  return (
    <div>
      <h2>Add Bus</h2>
      <form onSubmit={handleSubmit}>
        <input name="number" placeholder="Bus Number" onChange={handleChange} />
        <input name="capacity" placeholder="Capacity" onChange={handleChange} />
        <input name="driver" placeholder="Driver Name" onChange={handleChange} />
        <button type="submit">Add Bus</button>
      </form>
    </div>
  );
};

export default AddBus;