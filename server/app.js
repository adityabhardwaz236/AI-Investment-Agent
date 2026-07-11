import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import investmentRoutes from "./routes/investmentRoutes.js";
import marketRoutes from "./routes/marketRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import favoriteRoutes from "./routes/favoriteRoutes.js";
import compareRoutes from "./routes/compareRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/compare", compareRoutes);
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Investment Research Agent API is Running 🚀",
  });
});

app.use("/api/investment", investmentRoutes);
app.use("/api/market", marketRoutes);
app.use("/api/users", userRoutes);
app.use("/api/favorites", favoriteRoutes);
app.use("/api/chat", chatRoutes);

export default app;