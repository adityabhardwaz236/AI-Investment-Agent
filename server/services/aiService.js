import { ai } from "../config/gemini.js";
import { parseJson } from "../utils/jsonParser.js";

/**
 * Generate AI Investment Recommendation
 */
export const generateInvestmentAnalysis = async (
  profile,
  price
) => {
  const prompt = `
You are a Senior Wall Street Investment Analyst.

Analyze the following company.

Company Name: ${profile.name}

Industry: ${profile.finnhubIndustry}

Country: ${profile.country}

Exchange: ${profile.exchange}

Current Price: ${price.price}

Give a balanced investment opinion.

Return ONLY valid JSON.

{
  "recommendation": "BUY | HOLD | SELL",
  "confidence": 90,
  "risk": "Low | Medium | High",
  "summary": "",
  "pros": [
    "",
    "",
    ""
  ],
  "cons": [
    "",
    "",
    ""
  ]
}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response.text;

  return parseJson(text);
};

/**
 * Generate AI News Summary
 */
export const summarizeNews = async (news) => {
  const prompt = `
You are an experienced Financial News Analyst.

Analyze the following latest news articles.

Tasks:

1. Summarize the news in 4-5 sentences.

2. Determine the overall sentiment.

3. Mention the biggest positive factor.

4. Mention the biggest negative factor.

Return ONLY JSON.

{
  "summary":"",
  "sentiment":"Positive | Neutral | Negative",
  "positive":"",
  "negative":""
}

News:

${JSON.stringify(news)}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response.text;

  return parseJson(text);
};