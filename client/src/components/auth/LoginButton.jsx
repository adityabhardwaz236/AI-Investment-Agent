import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../../firebase/firebase";
import api from "../../services/api";

function LoginButton() {
  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      await api.post("/users/save", {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={login}
      className="
      flex items-center gap-3
      px-6 py-3
      rounded-2xl
      bg-white/10
      backdrop-blur-xl
      border border-white/20
      hover:border-cyan-400
      hover:bg-white/15
      text-white
      font-semibold
      transition-all
      duration-300
      shadow-lg
      hover:shadow-cyan-500/20
      hover:-translate-y-0.5
      "
    >
      <FcGoogle size={24} />
      Continue with Google
    </button>
  );
}

export default LoginButton;