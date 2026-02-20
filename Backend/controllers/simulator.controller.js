import { startTripSimulation } from "../services/simulator.service.js";

export const simulateTrip = async (req, res) => {
  const { tripId } = req.body;

  if (!tripId) {
    return res.status(400).json({ msg: "tripId required" });
  }

  const io = req.app.get("io");

  startTripSimulation(tripId, io);

  res.json({ msg: "Simulation started" });
};