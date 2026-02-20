import express from "express";
import { simulateTrip } from "../controllers/simulation.controller.js";
import { verifyAdmin } from "../middlewearauth.middlewear.js";

const simulatorRouter = express.Router();

simulatorRouter.post("/trip", verifyAdmin, simulateTrip);

export default simulatorRouter;