import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "./config/database.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  if (process.env.MONGODB_URI) {
    try {
      await connectDB();
      console.log("MongoDB connected");
    } catch (error) {
      console.error(
        "MongoDB connection failed. Continuing without database:",
        error.message
      );
    }
  } else {
    console.warn(
      "MongoDB is not configured. User, favorites, and history features are disabled."
    );
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();