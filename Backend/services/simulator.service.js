import Trip from "../models/Trip.model.js";
import Bus from "../models/Bus.model.js";
import LocationLog from "../models/LocationLogs.model.js";

export const startTripSimulation = async (tripId, io) => {
  const trip = await Trip.findById(tripId).populate("routeId");
  if (!trip) {
    console.log("Trip not found");
    return;
  }

  const path = trip.routeId.path;
  const busId = trip.busId;

  let index = 0;

  const interval = setInterval(async () => {
    if (index >= path.length) {
      clearInterval(interval);
      console.log("Simulation finished");
      return;
    }

    const { lat, lng } = path[index];

    // update bus
    await Bus.findByIdAndUpdate(busId, {
      currentLocation: { lat, lng },
      status: "running",
      lastUpdated: new Date()
    });

    // log
    await LocationLog.create({
      busId,
      lat,
      lng
    });

    // socket emit
    io.emit("busLocationUpdate", {
      busId,
      lat,
      lng
    });

    index++;

  }, 3000); // move every 3 sec
};