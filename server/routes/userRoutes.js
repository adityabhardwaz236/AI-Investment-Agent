import express from "express";

import {
  saveUser,
  addHistory,
  getUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/save", saveUser);
router.get("/:uid", getUser);

router.post("/history", addHistory);

export default router;