import axios from "axios";

// ==== CONFIG ====
const BACKEND_URL = "http://localhost:5000/api/location/update";
const BUS_ID = "buss id aiya avse";

// sample route path (later fetch from backend if you want)
const path = [
  { lat: 23.2156, lng: 72.6369 },
  { lat: 23.2000, lng: 72.6500 },
  { lat: 23.1805, lng: 72.6642 },
  { lat: 23.1600, lng: 72.6755 },
  { lat: 23.1402, lng: 72.6868 },
  { lat: 23.1200, lng: 72.7000 },
  { lat: 23.1005, lng: 72.7108 },
  { lat: 23.0800, lng: 72.7205 },
  { lat: 23.0602, lng: 72.7315 },
  { lat: 23.0400, lng: 72.7422 }
];

// ==== SIMULATION SETTINGS ====
const stepsBetweenPoints = 20; // smoothness
const intervalMs = 1000;       // speed

let segment = 0;
let step = 0;

console.log("🚍 Simulator started");

setInterval(async () => {
  const start = path[segment];
  const end = path[(segment + 1) % path.length];

  const lat =
    start.lat + ((end.lat - start.lat) * step) / stepsBetweenPoints;
  const lng =
    start.lng + ((end.lng - start.lng) * step) / stepsBetweenPoints;

  try {
    await axios.post(BACKEND_URL, {
      busId: BUS_ID,
      lat,
      lng,
      speed: 30
    });

    console.log("Sent location:", lat, lng);
  } catch (err) {
    console.error("Failed to send:", err.message);
  }

  step++;

  if (step > stepsBetweenPoints) {
    step = 0;
    segment = (segment + 1) % path.length;
  }
}, intervalMs);