import Navbar from "../components/layout/Navbar";
import SearchBar from "../components/layout/SearchBar";
import BusDetails from "../components/layout/Busdetails"; // Matches your 'Busdetails.jsx' lowercase 'd'
import MapView from "../components/layout/MapView";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden" }}>
      <Navbar />
      <SearchBar />
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <div style={{ width: "350px", borderRight: "1px solid #ddd" }}>
          <BusDetails />
        </div>
        <div style={{ flex: 1 }}>
          <MapView />
        </div>
      </div>
    </div>
  );
};

export default Home;