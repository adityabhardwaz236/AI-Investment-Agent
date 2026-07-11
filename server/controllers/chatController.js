import { ai } from "../config/gemini.js";

export const investmentChat = async (req, res) => {
  try {
    const { company, question } = req.body;

    const prompt = `
You are a Senior Wall Street Investment Advisor.

Company:
${company}

User Question:
${question}

Answer in simple English.

Keep your answer under 200 words.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({
      success: true,
      answer: response.text,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};