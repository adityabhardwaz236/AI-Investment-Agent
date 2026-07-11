import express from "express";
import { analyzeCompany } from "../controllers/investmentController.js";

const router = express.Router();

router.post("/analyze", analyzeCompany);

export default router;