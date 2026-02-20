import React, { useState } from "react";
import { addBus } from "../services/adminApi";

const AddBus = () => {
  const [form, setForm] = useState({
    busNumber: "",   // ✅ must match backend
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addBus(form);
      alert("Bus added successfully");
      setForm({ busNumber: "" });
    } catch (err) {
      if (err.response?.data?.error?.includes("duplicate key")) {
        alert("Bus number already exists!");
      } else {
        alert(err.response?.data?.message || "Something went wrong");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add New Bus
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Bus Number
            </label>
            <input
              name="busNumber"
              value={form.busNumber}
              onChange={handleChange}
              placeholder="Enter bus number"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Add Bus
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBus;