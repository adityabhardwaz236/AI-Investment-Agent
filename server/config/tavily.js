import { tavily } from "@tavily/core";
import dotenv from "dotenv";

dotenv.config();

export const tavilyClient = tavily({
  apiKey: process.env.TAVILY_API_KEY,
});