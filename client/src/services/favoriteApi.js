import api from "./api";

// Add Favorite
export const addFavorite = (data) => {
  return api.post("/favorites/add", data);
};

// Get Favorites
export const getFavorites = (uid) => {
  return api.get(`/favorites/${uid}`);
};

// Remove Favorite
export const removeFavorite = (data) => {
  return api.delete("/favorites/remove", {
    data,
  });
};