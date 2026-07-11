import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-[#030712] text-white flex justify-center p-10">

      <div className="glass w-full max-w-3xl rounded-3xl p-10">

        <div className="flex items-center gap-6">

          <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-24 h-24 rounded-full border-4 border-cyan-400"
          />

          <div>

            <h1 className="text-4xl font-bold">
              {user.displayName}
            </h1>

            <p className="text-gray-400">
              {user.email}
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="glass rounded-2xl p-6 text-center">
            <h2 className="text-4xl font-bold text-cyan-400">0</h2>
            <p>Favorites</p>
          </div>

          <div className="glass rounded-2xl p-6 text-center">
            <h2 className="text-4xl font-bold text-green-400">0</h2>
            <p>Searches</p>
          </div>

          <div className="glass rounded-2xl p-6 text-center">
            <h2 className="text-4xl font-bold text-yellow-400">0</h2>
            <p>Reports</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;