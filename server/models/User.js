import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
      unique: true,
    },

    name: String,

    email: String,

    photo: String,

    favorites: [
      {
        symbol: {
          type: String,
          required: true,
        },

        company: {
          type: String,
          required: true,
        },
      },
    ],

    history: [
      {
        company: String,
        searchedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);