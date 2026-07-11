import axios from "axios";
import dotenv from "dotenv";
import { TWELVE_BASE_URL } from "../config/twelveData.js";

dotenv.config();

const API_KEY = process.env.TWELVE_DATA_API_KEY;

/**
 * Get Current Stock Price
 */
export const getStockPrice = async (symbol) => {
  try {
    const response = await axios.get(`${TWELVE_BASE_URL}/price`, {
      params: {
        symbol,
        apikey: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Market Service Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

/**
 * Get Historical Stock Data (Last 30 Days)
 */
export const getHistoricalData = async (symbol) => {
  try {
    const response = await axios.get(
      `${TWELVE_BASE_URL}/time_series`,
      {
        params: {
          symbol,
          interval: "1day",
          outputsize: 30,
          apikey: API_KEY,
        },
      }
    );

    // Check if API returned valid data
    if (!response.data.values) {
      throw new Error(
        response.data.message || "Unable to fetch historical data."
      );
    }

    // Return oldest → newest for charts
    return response.data.values.reverse();
  } catch (error) {
    console.error(
      "Historical Data Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

/**
 * Get Intraday Data (Optional - Useful Later)
 */
export const getIntradayData = async (symbol) => {
  try {
    const response = await axios.get(
      `${TWELVE_BASE_URL}/time_series`,
      {
        params: {
          symbol,
          interval: "5min",
          outputsize: 100,
          apikey: API_KEY,
        },
      }
    );

    if (!response.data.values) {
      throw new Error(
        response.data.message || "Unable to fetch intraday data."
      );
    }

    return response.data.values.reverse();
  } catch (error) {
    console.error(
      "Intraday Data Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};