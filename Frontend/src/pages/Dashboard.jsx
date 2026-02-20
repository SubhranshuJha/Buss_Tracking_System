import MapView from "../components/MapView";
import SearchBar from "../components/SearchBar";
import BusInfoCard from "../components/BusInfoCard";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (

    <div>

      <div>
        {/* <Navbar /> */}
      </div>
      <div style={{ display: "flex", height: "100vh" }}>
      
      <div style={{ width: "70%" }}>
        <MapView />
      </div>
      <div style={{ width: "30%", padding: "15px" }}>
        <SearchBar />
        <BusInfoCard />
      </div>
    </div>

    </div>
    
  );
};

export default Dashboard;