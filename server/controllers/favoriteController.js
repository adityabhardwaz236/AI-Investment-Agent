import User from "../models/User.js";

// Add Favorite
export const addFavorite = async (req, res) => {
  try {
    const { uid, symbol, company } = req.body;

    const user = await User.findOne({ uid });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const exists = user.favorites.find(
      (item) => item.symbol === symbol
    );

    if (!exists) {
      user.favorites.push({
        symbol,
        company,
      });

      await user.save();
    }

    res.json({
      success: true,
      favorites: user.favorites,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get Favorites
export const getFavorites = async (req, res) => {
  try {
    const { uid } = req.params;

    const user = await User.findOne({ uid });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      favorites: user.favorites,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Remove Favorite
export const removeFavorite = async (req, res) => {
  try {
    const { uid, symbol } = req.body;

    const user = await User.findOne({ uid });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.favorites = user.favorites.filter(
      (item) => item.symbol !== symbol
    );

    await user.save();

    res.json({
      success: true,
      favorites: user.favorites,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};