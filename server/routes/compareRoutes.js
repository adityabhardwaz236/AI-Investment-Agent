import express from "express";
import { compareCompanies } from "../controllers/compareController.js";

const router = express.Router();

router.post("/", compareCompanies);

export default router;