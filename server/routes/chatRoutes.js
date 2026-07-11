import express from "express";
import { investmentChat } from "../controllers/chatController.js";

const router = express.Router();

router.post("/", investmentChat);

export default router;