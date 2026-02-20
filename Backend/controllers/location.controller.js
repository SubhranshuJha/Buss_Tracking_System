import busModel from "../models/Bus.model.js";
import locationLogModel from "../models/LocationLogs.model.js";
import tripModel from "../models/Trip.model.js";

export const updateLocation = async (req, res) => {
  try {
    const { tripId, lat, lng, speed } = req.body;

    if (!tripId || lat === undefined || lng === undefined) {
      return res
        .status(400)
        .json({ success: false, msg: "tripId, lat, lng required" });
    }

    // find trip
    const trip = await tripModel.findById(tripId).populate("routeId");
    if (!trip) {
      return res.status(404).json({ success: false, msg: "Trip not found" });
    }

    const busId = trip.busId;

    // find bus
    const bus = await busModel.findById(busId);
    if (!bus) {
      return res.status(404).json({ success: false, msg: "Bus not found" });
    }

    // update bus live data
    bus.currentLocation = { lat, lng };
    if (speed !== undefined) bus.speed = speed;
    bus.lastUpdated = new Date();
    bus.status = "running";
    await bus.save();

    // log history
    await locationLogModel.create({
      busId,
      lat,
      lng
    });

    // socket emit
    const io = req.app.get("io");
    if (io) {
      io.emit("busLocationUpdate", {
        tripId,
        busId,
        lat,
        lng,
        speed
      });
    }

    res.json({ success: true, msg: "Location updated" , data: trip});

  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};