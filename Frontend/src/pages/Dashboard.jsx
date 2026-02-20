import MapView from "../components/MapView";
import SearchBar from "../components/SearchBar";
import BusInfoCard from "../components/BusInfoCard";

const Dashboard = () => {
  return (
    <div className="min-h-auto bg-gray-50 overflow-x-hidden">
      <SearchBar />
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        

        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md overflow-hidden border">
          <div className="h-[500px] w-full">
            <MapView />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 border flex flex-col gap-6">
          <BusInfoCard />
        </div>

      </div>

    </div>
  );
};

export default Dashboard;