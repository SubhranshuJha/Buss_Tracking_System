import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { getBuses, getBusByNumber } from "../services/busSevice";

const BusContext = createContext();
const socket = io("http://localhost:5173");

export const BusProvider = ({ children }) => {
  const [buses, setBuses] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null);

  useEffect(() => {
    loadBuses();

    socket.on("busLocation", (data) => {
      // update buses list silently
      setBuses((prev) =>
        prev.map((b) =>
          b._id === data.busId
            ? { ...b, currentLocation: { lat: data.lat, lng: data.lng } }
            : b
        )
      );

      // update ONLY if this is the selected bus
      setSelectedBus((prev) => {
        if (!prev) return null;
        if (prev._id !== data.busId) return prev;

        return {
          ...prev,
          currentLocation: { lat: data.lat, lng: data.lng }
        };
      });
    });

    return () => {
      socket.off("busLocation");
    };
  }, []);

  const loadBuses = async () => {
    try {
      const data = await getBuses();
      setBuses(data);
    } catch (err) {
      console.error("Failed to load buses");
    }
  };

  const searchBus = async (number) => {
    try {
      const bus = await getBusByNumber(number);
      setSelectedBus(bus);
    } catch (err) {
      alert("Bus not found");
      setSelectedBus(null);
    }
  };

  const clearSelectedBus = () => {
    setSelectedBus(null);
  };

  return (
    <BusContext.Provider
      value={{
        buses,
        selectedBus,
        searchBus,
        clearSelectedBus
      }}
    >
      {children}
    </BusContext.Provider>
  );
};

export const useBuses = () => useContext(BusContext);
