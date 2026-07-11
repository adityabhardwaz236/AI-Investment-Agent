import { getHistoricalData } from "../services/marketService.js";

export const getChartData = async (req, res) => {
  try {
    const { symbol } = req.params;

    const data = await getHistoricalData(symbol);

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