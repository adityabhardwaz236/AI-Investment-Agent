import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

function LogoutButton() {
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      onClick={logout}
      className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl text-white font-semibold transition"
    >
      Logout
    </button>
  );
}

export default LogoutButton;