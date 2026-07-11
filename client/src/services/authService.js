import api from "./api";

export const saveUser = async (user) => {
  return api.post("/users/save", {
    uid: user.uid,
    name: user.displayName,
    email: user.email,
    photo: user.photoURL,
  });
};