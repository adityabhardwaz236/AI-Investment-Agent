import express from "express";
import { getChartData } from "../controllers/marketController.js";

const router = express.Router();

router.get("/chart/:symbol", getChartData);

export default router;