import express from "express";

import {
  saveUser,
  addHistory,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/save", saveUser);

router.post("/history", addHistory);

export default router;