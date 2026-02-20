import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { io } from "socket.io-client";

export const BusContext = createContext();

const socket = io("http://localhost:5000");

export const BusProvider = ({ children }) => {
  const [bus, setBus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchBus = async (busNumber) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `http://localhost:5000/api/search/number/${busNumber}`
      );

      const busData = res.data.data;

      console.log("Bus Data:", busData);
      setBus(busData);

      if (busData.tripId) {
        socket.emit("joinTrip", busData.tripId);
      }

    } catch (err) {
      setError("Bus not found");
      setBus(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    socket.on("busLocationUpdate", (data) => {
      setBus((prev) => {
        if (!prev) return prev;
        if (prev.busId !== data.busId) return prev;

        return {
          ...prev,
          currentLocation: {
            lat: data.lat,
            lng: data.lng
          },
          speed: data.speed
        };
      });
    });

    return () => {
      socket.off("busLocationUpdate");
    };
  }, []);

  return (
    <BusContext.Provider
      value={{ bus, searchBus, loading, error }}
    >
      {children}
    </BusContext.Provider>
  );
};