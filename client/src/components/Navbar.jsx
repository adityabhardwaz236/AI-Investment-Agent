import Logo from "./Logo";
import { useAuth } from "../context/AuthContext";
import LoginButton from "./auth/LoginButton";
import LogoutButton from "./auth/LogoutButton";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}
        <div
          className="cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Logo />
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">

          <li
            onClick={() => navigate("/")}
            className="hover:text-cyan-400 cursor-pointer transition"
          >
            Home
          </li>
          <li
  className="hover:text-cyan-400 cursor-pointer transition"
  onClick={() => navigate("/compare")}
>
  Compare
</li>

          <li
            onClick={() => navigate("/dashboard")}
            className="hover:text-cyan-400 cursor-pointer transition"
          >
            Dashboard
          </li>

          <li
            onClick={() => navigate("/favorites")}
            className="hover:text-cyan-400 cursor-pointer transition"
          >
            Favorites
          </li>

        </ul>

        {/* Authentication */}
        <div className="flex items-center gap-4">

          {user ? (
            <>
         <img
  src={user.photoURL}
  alt={user.displayName}
  className="w-10 h-10 rounded-full border-2 border-cyan-400 cursor-pointer"
  onClick={() => navigate("/profile")}
/>

              <span className="hidden lg:block text-white font-medium">
                {user.displayName}
              </span>

              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;