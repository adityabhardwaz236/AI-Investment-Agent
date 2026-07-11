import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  addFavorite,
  removeFavorite,
} from "../../services/favoriteApi";

function FavoriteButton({ symbol, company }) {
  const { user } = useAuth();

  const [saved, setSaved] = useState(false);

  const handleClick = async () => {
    if (!user) {
      alert("Please login first.");
      return;
    }

    try {
      if (!saved) {
        await addFavorite({
          uid: user.uid,
          symbol,
          company,
        });

        setSaved(true);
      } else {
        await removeFavorite({
          uid: user.uid,
          symbol,
        });

        setSaved(false);
      }
    } catch (err) {
      console.error(err);
      alert("Unable to update favorites.");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`mt-6 px-6 py-3 rounded-xl font-semibold transition ${
        saved
          ? "bg-yellow-500 text-black"
          : "bg-cyan-500 hover:bg-cyan-600 text-white"
      }`}
    >
      {saved ? "★ Saved" : "☆ Add to Favorites"}
    </button>
  );
}

export default FavoriteButton;