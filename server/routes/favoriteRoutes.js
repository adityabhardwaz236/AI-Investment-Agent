import express from "express";

import {
  addFavorite,
  getFavorites,
  removeFavorite,
} from "../controllers/favoriteController.js";

const router = express.Router();

router.post("/add", addFavorite);

router.get("/:uid", getFavorites);

router.delete("/remove", removeFavorite);

export default router;