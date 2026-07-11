import { analyzeInvestment } from "../services/investmentService.js";

export const analyzeCompany = async (req, res) => {
  try {
    const { company } = req.body;

    const data = await analyzeInvestment(company);

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};