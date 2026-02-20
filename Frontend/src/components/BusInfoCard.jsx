import { useContext } from "react";
import { BusContext } from "../context/BusContext";
import CrewDetails from "./CrewDetails";

const BusInfoCard = () => {
  const { bus, error } = useContext(BusContext);

  if (error)
    return (
      <div className="text-center mt-6 text-red-600 font-medium">
        {error}
      </div>
    );

  if (!bus)
    return (
      <div className="text-center mt-6 text-gray-500">
        Search a bus number to see details
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white shadow-lg rounded-2xl p-6 border border-gray-100">

      {/* Bus Number */}
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        Bus {bus.busNumber}
      </h2>

      {/* Next Stop Info */}
      {bus.nextStop && (
        <div>

        <div className="mb-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-gray-700">
            <span className="font-semibold">Next Stop:</span> {bus.nextStop.name}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">ETA:</span> {bus.nextStop.eta}
          </p>
        </div>
        <div className="mb-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-gray-700">
            <span className="font-semibold">Driver:</span> {bus.crew.driverName}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Driver No:</span> {bus.crew.driverPhone}
          </p>
        </div>
        <div className="mb-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-gray-700">
            <span className="font-semibold">Conductor:</span> {bus.crew.conductorName}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Conductor No:</span> {bus.crew.conductorPhone}
          </p>
        </div>
        </div>
      )}

      {/* Status + Speed */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        
        <div className="p-4 bg-gray-50 rounded-xl border">
          <p className="text-sm text-gray-500">Status</p>
          <p className="font-semibold text-gray-800">
            {bus.status}
          </p>
        </div>

        <div className="p-4 bg-gray-50 rounded-xl border">
          <p className="text-sm text-gray-500">Speed</p>
          <p className="font-semibold text-gray-800">
            {bus.speed || 0} km/h
          </p>
        </div>

      </div>

      {/* Crew Section */}
      <div className="border-t pt-4">
        <CrewDetails />
      </div>

    </div>
  );
};

export default BusInfoCard;