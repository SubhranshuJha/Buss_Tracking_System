import express from "express";
import { searchBusByNumber } from "../controllers/clinetSearch.controller.js";

const clientSearchRouter = express.Router();

// GET /api/search/number/:busNumber
clientSearchRouter.get("/number/:busNumber", searchBusByNumber);

export default clientSearchRouter;