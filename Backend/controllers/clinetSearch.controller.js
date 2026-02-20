import Bus from "../models/Bus.model.js";
import Trip from "../models/Trip.model.js";

// ETA calculator
function calcETA(current, stop, speedKmph = 30) {
  if (!current || !stop) return null;

  const R = 6371;
  const dLat = ((stop.lat - current.lat) * Math.PI) / 180;
  const dLng = ((stop.lng - current.lng) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((current.lat * Math.PI) / 180) *
      Math.cos((stop.lat * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;

  const distanceKm = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const speedKmPerMin = speedKmph / 60;

  return Math.round(distanceKm / speedKmPerMin);
};

const searchBusByNumber = async (req, res) => {
  try {
    const input = req.params.busNumber
      .toUpperCase()
      .replace(/[\s-]/g, "");

    const bus = await Bus.findOne({ busNumber: input });

    if (!bus) {
      return res.status(404).json({
        success: false,
        msg: "Bus not found"
      });
    }

    const trip = await Trip.findOne({
      busId: bus._id,
      status: "running"
    }).populate("routeId");

    let routeStops = trip?.routeId?.stops || [];
    let nextStopData = null;

    if (
      trip &&
      bus.currentLocation &&
      routeStops.length > 0 &&
      trip.nextStopIndex < routeStops.length
    ) {
      const stop = routeStops[trip.nextStopIndex];

      const eta = calcETA(
        bus.currentLocation,
        stop,
        bus.speed || 30
      );

      nextStopData = {
        name: stop.name,
        eta: eta ? `${eta} mins` : null,
        index: trip.nextStopIndex
      };
    }

    const response = {
      busId: bus._id,
      busNumber: bus.busNumber,
      status: bus.status,
      speed: bus.speed,
      currentLocation: bus.currentLocation,
      tripId: trip?._id || null,
      crew: trip?.crew || null,
      route: routeStops,
      nextStop: nextStopData
    };

    res.json({
      success: true,
      data: response
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
};

export { searchBusByNumber };