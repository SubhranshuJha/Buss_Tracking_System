import { useContext } from "react";
import { BusContext } from "../context/BusContext";
import CrewDetails from "./CrewDetails";

const BusInfoCard = () => {
  const { bus, error } = useContext(BusContext);

  if (error) return <p>{error}</p>;
  if (!bus) return <p>Search a bus number</p>;

  return (
    <div>
      <h2>Bus {bus.busNumber}</h2>

      {bus.nextStop && (
        <>
          <p><b>Next Stop:</b> {bus.nextStop.name}</p>
          <p><b>ETA:</b> {bus.nextStop.eta}</p>
        </>
      )}

      <p><b>Status:</b> {bus.status}</p>
      <p><b>Speed:</b> {bus.speed || 0} km/h</p>

      <CrewDetails />
    </div>
  );
};

export default BusInfoCard;