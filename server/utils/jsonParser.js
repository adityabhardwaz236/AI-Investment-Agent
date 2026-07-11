export const parseJson = (text) => {
  try {
    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(text);
  } catch (error) {
    console.error("JSON Parse Error:", error);

    return {
      error: true,
      message: "Failed to parse AI response.",
    };
  }
};