import express from "express";
import 'dotenv/config';
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import connectDB from "./config/db";

import busRoute from "./routes/bus.route.js";
import routeRoute from "./routes/routes.route.js";
import tripRoute from "./routes/trip.route.js";
import locationRoute from "./routes/location.route.js";
import simulationRoute from "./routes/simulation.route.js";



const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// socket.io setup
const server = http.createServer(app);


const io = new Server(server, {
  cors: { origin: "*" }
});

app.set("io", io);  


// connect to database
connectDB();

// routes
app.use("/api/bus", busRoute);
app.use("/api/route", routeRoute);
app.use("/api/trip", tripRoute);
app.use("/api/location", locationRoute);
app.use("/api/simulate", simulationRoute);




const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log("Server running"));

