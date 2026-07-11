import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  getFavorites,
  removeFavorite,
} from "../services/favoriteApi";

function Favorites() {
  const { user } = useAuth();

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (!user) return;

    loadFavorites();
  }, [user]);

  const loadFavorites = async () => {
    try {
      const res = await getFavorites(user.uid);
      setFavorites(res.data.favorites);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteFavorite = async (symbol) => {
    try {
      await removeFavorite({
        uid: user.uid,
        symbol,
      });

      loadFavorites();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        ⭐ My Favorites
      </h1>

      {favorites.length === 0 ? (
        <div className="text-gray-400 text-xl">
          No favorite companies yet.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {favorites.map((company) => (
            <div
              key={company.symbol}
              className="glass rounded-2xl p-6 border border-white/10"
            >
              <h2 className="text-2xl font-bold">
                {company.company}
              </h2>

              <p className="text-cyan-400 mt-2">
                {company.symbol}
              </p>

              <button
                onClick={() => deleteFavorite(company.symbol)}
                className="mt-6 bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl"
              >
                Remove
              </button>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default Favorites;