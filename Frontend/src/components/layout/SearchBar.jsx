import { useState } from "react";
import { useBuses } from "../../context/BustContext";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const { searchBus } = useBuses();

  const handleSearch = () => {
    if (!value) return;
    searchBus(value.toUpperCase().replace(/\s|-/g, "")); 
  };

  return (
    <div style={{ padding: '15px 20px', background: '#f1f5f9', borderBottom: '1px solid #e2e8f0' }}>
      <div style={{ display: 'flex', maxWidth: '1200px', margin: '0 auto', gap: '10px' }}>
        <input 
          placeholder="Search Bus Number (e.g. GJ18-1234)" 
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
        />
        <button onClick={handleSearch} style={{ padding: '10px 20px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;