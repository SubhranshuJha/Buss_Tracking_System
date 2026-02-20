import busModel from "../models/Bus.model.js";
import locationLogModel from "../models/LocationLogs.model.js";
import tripModel from "../models/Trip.model.js";

export const updateLocation = async (req, res) => {
  try {
    const { busId, lat, lng, speed } = req.body;

    if (!busId || lat === undefined || lng === undefined) {
      return res.status(400).json({ success:false, msg: "busId, lat, lng required" });
    }

    // find bus
    const bus = await busModel.findById(busId);
    if (!bus) {
      return res.status(404).json({ success:false, msg: "Bus not found" });
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

    // find active trip
    const trip = await tripModel.findOne({
      busId,
      status: "running"
    }).populate("routeId");

    // TODO: nextStopIndex calculation can go here later

    // socket emit
    const io = req.app.get("io");
    if (io) {
      io.emit("busLocationUpdate", {
        busId,
        lat,
        lng,
        speed
      });
    }

    res.json({ success:true, msg: "Location updated" });

  } catch (err) {
    res.status(500).json({ success:false, error: err.message });
  }
};