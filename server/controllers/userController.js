import User from "../models/User.js";

/*
=====================================
SAVE USER
=====================================
*/
export const saveUser = async (req, res) => {
  try {
    console.log("\n========== SAVE USER API CALLED ==========");
    console.log("Request Body:");
    console.log(req.body);

    const { uid, name, email, photo } = req.body;

    if (!uid || !email) {
      return res.status(400).json({
        success: false,
        message: "UID and Email are required.",
      });
    }

    let user = await User.findOne({ uid });

    if (user) {
      console.log("✅ Existing user found.");
    } else {
      console.log("🆕 Creating new user...");

      user = await User.create({
        uid,
        name,
        email,
        photo,
        favorites: [],
        history: [],
      });

      console.log("✅ User created successfully.");
    }

    console.log("========== END SAVE USER ==========\n");

    res.status(200).json({
      success: true,
      message: "User saved successfully.",
      user,
    });

  } catch (err) {
    console.error("❌ SAVE USER ERROR:");
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/*
=====================================
GET USER
=====================================
*/
export const getUser = async (req, res) => {
  try {
    const { uid } = req.params;

    const user = await User.findOne({ uid });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    res.status(200).json({
      success: true,
      user,
      history: user.history,
      favorites: user.favorites,
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/*
=====================================
ADD SEARCH HISTORY
=====================================
*/
export const addHistory = async (req, res) => {
  try {
    const { uid, company } = req.body;

    const user = await User.findOne({ uid });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    // Remove duplicate if company already exists
    user.history = user.history.filter(
      (item) => item.company !== company
    );

    // Add latest search to the top
    user.history.unshift({
      company,
      searchedAt: new Date(),
    });

    // Keep only latest 10 searches
    if (user.history.length > 10) {
      user.history = user.history.slice(0, 10);
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "History updated successfully.",
      history: user.history,
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};