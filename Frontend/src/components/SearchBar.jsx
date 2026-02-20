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
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter Bus Number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "70%", padding: "8px" }}
      />
      <button onClick={handleSearch}>
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );
};

export default SearchBar;