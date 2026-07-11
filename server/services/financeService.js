import axios from "axios";
import dotenv from "dotenv";
import { FINNHUB_BASE_URL } from "../config/finnhub.js";
import { getSymbol } from "./symbolService.js";

dotenv.config();

const API_KEY = process.env.FINNHUB_API_KEY;

export const getCompanyProfile = async (companyName) => {
  try {
    const symbol = getSymbol(companyName);

    const response = await axios.get(
      `${FINNHUB_BASE_URL}/stock/profile2`,
      {
        params: {
          symbol,
          token: API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Finance Service Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};