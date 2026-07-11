import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";

function History() {
  const { user } = useAuth();

  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (!user) return;

    const loadHistory = async () => {
      const res = await api.get(`/users/${user.uid}`);
      setHistory(res.data.history || []);
    };

    loadHistory();
  }, [user]);

  return (
    <div className="min-h-screen bg-[#030712] text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Recent Searches
      </h1>

      {history.length === 0 ? (
        <p>No searches yet.</p>
      ) : (
        <div className="space-y-4">
          {history.map((item, index) => (
            <div
              key={index}
              className="glass p-5 rounded-xl"
            >
              <h2 className="text-2xl">
                {item.company}
              </h2>

              <p className="text-gray-400">
                {new Date(item.searchedAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default History;