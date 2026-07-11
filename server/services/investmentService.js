import { getCompanyProfile } from "./financeService.js";
import { getStockPrice } from "./marketService.js";
import {
  generateInvestmentAnalysis,
  summarizeNews,
} from "./aiService.js";
import { getCompanyNews } from "./newsService.js";

export const analyzeInvestment = async (company) => {
  try {
    console.log("==================================");
    console.log("Starting analysis for:", company);

    // 1. Company Profile
    console.log("Getting company profile...");
    const profile = await getCompanyProfile(company);

    // 2. Stock Price
    console.log("Getting stock price...");
    const price = await getStockPrice(profile.ticker);

    // 3. Company News
    console.log("Getting company news...");
    const news = await getCompanyNews(company);

    // 4. AI Investment Analysis
    console.log("Generating AI investment analysis...");
    const aiAnalysis = await generateInvestmentAnalysis(
      profile,
      price
    );

    // 5. AI News Summary
    console.log("Generating AI news summary...");
    const newsAnalysis = await summarizeNews(news);

    console.log("Analysis completed successfully.");
    console.log("==================================");

    return {
      profile,
      price,
      aiAnalysis,
      news,
      newsAnalysis,
    };
  } catch (error) {
    console.error("Investment Service Error:");
    console.error(error.response?.data || error.message);
    throw error;
  }
};