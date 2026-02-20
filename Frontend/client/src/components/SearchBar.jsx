import { useState, useContext } from "react";
import { BusContext } from "../context/BusContext";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const { searchBus, loading } = useContext(BusContext);

  const handleSearch = () => {
    if (input.trim()) {
      searchBus(input);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="flex w-full max-w-xl shadow-md rounded-xl overflow-hidden border border-gray-200">

        <input
          type="text"
          placeholder="Enter Bus Number..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-3 outline-none text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition duration-200"
        />

        <button
          onClick={handleSearch}
          disabled={loading}
          className="bg-blue-600 text-white px-6 font-medium hover:bg-blue-700 transition duration-200 disabled:opacity-60"
        >
          {loading ? "Searching..." : "Search"}
        </button>

      </div>
    </div>
  );
};

export default SearchBar;