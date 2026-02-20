import MapView from "../components/MapView";
import SearchBar from "../components/SearchBar";
import BusInfoCard from "../components/BusInfoCard";

const Dashboard = () => {
  return (
    <div className="min-h-auto bg-[#181C14] overflow-hidden">

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-5.5">

        {/* Search Bar */}
        <div className="mb-6 bg-[#3C3D37] border border-[#697565] rounded-xl p-4 shadow-md">
          <SearchBar />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Map Section */}
          <div className="lg:col-span-2 bg-[#3C3D37] border border-[#697565] rounded-2xl shadow-md overflow-hidden">

            <div className="h-[350px] sm:h-[450px] lg:h-[550px] w-full">
              <MapView />
            </div>

          </div>

          {/* Bus Info Section */}
          <div className="bg-[#3C3D37] border border-[#697565] rounded-2xl shadow-md p-4 flex flex-col">

            <h2 className="text-lg font-semibold text-[#ECDFCC] mb-4 border-b border-[#697565] pb-2">
              Bus Information
            </h2>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto pr-2">
              <BusInfoCard />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;