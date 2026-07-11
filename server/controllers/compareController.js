import { analyzeInvestment } from "../services/investmentService.js";

export const compareCompanies = async (req, res) => {
  try {
    const { company1, company2 } = req.body;

    if (!company1 || !company2) {
      return res.status(400).json({
        success: false,
        message: "Please provide two company names.",
      });
    }

    // Analyze both companies in parallel
    const [result1, result2] = await Promise.all([
      analyzeInvestment(company1),
      analyzeInvestment(company2),
    ]);

    res.status(200).json({
      success: true,
      data: {
        company1: result1,
        company2: result2,
      },
    });
  } catch (err) {
    console.error("COMPARE ERROR:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};