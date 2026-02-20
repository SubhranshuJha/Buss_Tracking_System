import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/admin",
});

// Attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("adminToken");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const addBus = (data) => API.post("/buses", data);
export const addRoute = (data) => API.post("/routes", data);
export const addTrip = (data) => API.post("/trips", data);
export const adminLogin = (data) => API.post("/login", data);