import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.TAVILY_API_KEY;

export const getCompanyNews = async (company) => {
  try {
    const response = await axios.post(
      "https://api.tavily.com/search",
      {
        query: `${company} latest stock news`,
        topic: "news",
        max_results: 5,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.results || [];
  } catch (error) {
    console.error(
      "News Service Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};