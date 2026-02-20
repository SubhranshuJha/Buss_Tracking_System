import axios from "axios";

// ================= CONFIG =================
const BACKEND_URL = "http://localhost:5000/api/location/update";
const TRIP_ID = "69982e1bddff165d90b301a7";

const intervalMs = 1000;       // 1 sec updates
const stepsBetweenPoints = 20; // smoothness

// ================= ROUTE =================
const path = [
  { lat: 23.2248, lng: 72.6416 },
  { lat: 23.2216, lng: 72.6424 },
  { lat: 23.2185, lng: 72.6432 },
  { lat: 23.2152, lng: 72.6443 },
  { lat: 23.2120, lng: 72.6455 },
  { lat: 23.2085, lng: 72.6468 },
  { lat: 23.2050, lng: 72.6480 },
  { lat: 23.2015, lng: 72.6495 },
  { lat: 23.1980, lng: 72.6510 },
  { lat: 23.1940, lng: 72.6538 },
  { lat: 23.1901, lng: 72.6565 },
  { lat: 23.1855, lng: 72.6557 },
  { lat: 23.1810, lng: 72.6550 },
  { lat: 23.1765, lng: 72.6535 },
  { lat: 23.1720, lng: 72.6520 },
  { lat: 23.1675, lng: 72.6505 },
  { lat: 23.1630, lng: 72.6490 },
  { lat: 23.1565, lng: 72.6460 },
  { lat: 23.1500, lng: 72.6430 },
  { lat: 23.1430, lng: 72.6402 },
  { lat: 23.1360, lng: 72.6375 },
  { lat: 23.1305, lng: 72.6328 },
  { lat: 23.1250, lng: 72.6280 },
  { lat: 23.1200, lng: 72.6215 },
  { lat: 23.1150, lng: 72.6150 },
  { lat: 23.1108, lng: 72.6050 },
  { lat: 23.1065, lng: 72.5951 },
  { lat: 23.1008, lng: 72.5915 },
  { lat: 23.0950, lng: 72.5880 },
  { lat: 23.0900, lng: 72.5850 },
  { lat: 23.0850, lng: 72.5820 },
  { lat: 23.0805, lng: 72.5793 },
  { lat: 23.0760, lng: 72.5765 },
  { lat: 23.0705, lng: 72.5738 },
  { lat: 23.0650, lng: 72.5710 },
  { lat: 23.0600, lng: 72.5755 },
  { lat: 23.0550, lng: 72.5800 },
  { lat: 23.0500, lng: 72.5840 },
  { lat: 23.0450, lng: 72.5880 },
  { lat: 23.0400, lng: 72.5900 },
  { lat: 23.0350, lng: 72.5920 },
  { lat: 23.0300, lng: 72.5925 },
  { lat: 23.0250, lng: 72.5930 },
  { lat: 23.0207, lng: 72.5933 },
  { lat: 23.0165, lng: 72.5935 },
  { lat: 23.0122, lng: 72.5993 },
  { lat: 23.0080, lng: 72.6050 },
  { lat: 23.0030, lng: 72.6115 },
  { lat: 22.9980, lng: 72.6180 },
  { lat: 22.9923, lng: 72.6268 },
  { lat: 22.9865, lng: 72.6355 },

  { lat: 22.9780, lng: 72.6480 },
  { lat: 22.9700, lng: 72.6580 },
  { lat: 22.9645, lng: 72.6655 },
  { lat: 22.9550, lng: 72.6780 },
  { lat: 22.9450, lng: 72.6900 },
  { lat: 22.9350, lng: 72.7020 },
  { lat: 22.9250, lng: 72.7140 },
  { lat: 22.9150, lng: 72.7260 },
  { lat: 22.9050, lng: 72.7380 },
  { lat: 22.8950, lng: 72.7500 },
  { lat: 22.8850, lng: 72.7620 },
  { lat: 22.8750, lng: 72.7740 },
  { lat: 22.8650, lng: 72.7860 },
  { lat: 22.8550, lng: 72.7980 },
  { lat: 22.8450, lng: 72.8100 },
  { lat: 22.8350, lng: 72.8220 },
  { lat: 22.8250, lng: 72.8340 },
  { lat: 22.8150, lng: 72.8460 },
  { lat: 22.8050, lng: 72.8580 },
  { lat: 22.7950, lng: 72.8700 },
  { lat: 22.7850, lng: 72.8820 },
  { lat: 22.7750, lng: 72.8940 },
  { lat: 22.7650, lng: 72.9060 },

  { lat: 22.7550, lng: 72.9180 },
  { lat: 22.7450, lng: 72.9300 },
  { lat: 22.7350, lng: 72.9420 },
  { lat: 22.7235, lng: 72.9535 },
  { lat: 22.7050, lng: 72.9720 },
  { lat: 22.6850, lng: 72.9920 },
  { lat: 22.6650, lng: 73.0120 },
  { lat: 22.6450, lng: 73.0320 },
  { lat: 22.6250, lng: 73.0520 },
  { lat: 22.6050, lng: 73.0720 },
  { lat: 22.5850, lng: 73.0855 },
  { lat: 22.5650, lng: 73.1050 },
  { lat: 22.5450, lng: 73.1250 },
  { lat: 22.5250, lng: 73.1450 },
  { lat: 22.5050, lng: 73.1650 },
  { lat: 22.4850, lng: 73.1750 },
  { lat: 22.4650, lng: 73.1850 },
  { lat: 22.4450, lng: 73.1950 },
  { lat: 22.4250, lng: 73.2050 },
  { lat: 22.4050, lng: 73.2150 },
  { lat: 22.3850, lng: 73.2200 },
  { lat: 22.3650, lng: 73.2050 },
  { lat: 22.3565, lng: 73.1855 },
  { lat: 22.3480, lng: 73.1900 },
  { lat: 22.3400, lng: 73.1950 },
  { lat: 22.3325, lng: 73.1970 },
  { lat: 22.3250, lng: 73.1950 },
  { lat: 22.3205, lng: 73.1915 },
  { lat: 22.3160, lng: 73.1880 },
  { lat: 22.3125, lng: 73.1845 },
  { lat: 22.3105, lng: 73.1810 }
];

// ================= DISTANCE =================
function haversineDistance(a, b) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;

  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;

  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.sin(dLng / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);

  return 2 * R * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}

// ================= SIMULATOR =================
let segment = 0;
let step = 0;

console.log("🚍 Bus simulator started");

setInterval(async () => {
  const start = path[segment];
  const end = path[(segment + 1) % path.length];

  // interpolation
  const lat = start.lat + ((end.lat - start.lat) * step) / stepsBetweenPoints;
  const lng = start.lng + ((end.lng - start.lng) * step) / stepsBetweenPoints;

  const current = { lat, lng };

  const nextLat =
    start.lat + ((end.lat - start.lat) * (step + 1)) / stepsBetweenPoints;
  const nextLng =
    start.lng + ((end.lng - start.lng) * (step + 1)) / stepsBetweenPoints;

  const next = { lat: nextLat, lng: nextLng };

  // speed calculation
  const distKm = haversineDistance(current, next);
  let speed = distKm * 3600;

  // simulate stops every ~15 segments
  if (segment % 15 === 0) speed *= 0.4;

  // clamp realistic bus speed
  speed = Math.max(10, Math.min(speed, 80));

  try {
    await axios.post(BACKEND_URL, {
      tripId: TRIP_ID,
      lat,
      lng,
      speed: Math.round(speed)
    });

    console.log(
      `📍 ${lat.toFixed(5)}, ${lng.toFixed(5)} | 🚍 ${Math.round(speed)} km/h`
    );
  } catch (err) {
    console.error("Failed:", err.message);
  }

  step++;

  if (step > stepsBetweenPoints) {
    step = 0;
    segment = (segment + 1) % path.length;
  }
}, intervalMs);