import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Button from "../components/Button";

function Compare() {
  const [company1, setCompany1] = useState("");
  const [company2, setCompany2] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const compare = async () => {
    if (!company1 || !company2) {
      return alert("Please enter both company names.");
    }

    try {
      setLoading(true);

      const response = await api.post("/compare", {
        company1,
        company2,
      });

      navigate("/compare/result", {
        state: response.data.data,
      });

    } catch (err) {
      console.error(err);

      alert(
        err.response?.data?.message ||
        "Unable to compare companies."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white flex justify-center items-center">

      <div className="glass p-10 rounded-3xl w-full max-w-2xl">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Compare Companies
        </h1>

        <input
          className="w-full p-4 rounded-xl bg-black/30 border border-gray-700 mb-5"
          placeholder="Company 1 (Apple)"
          value={company1}
          onChange={(e) => setCompany1(e.target.value)}
        />

        <input
          className="w-full p-4 rounded-xl bg-black/30 border border-gray-700 mb-8"
          placeholder="Company 2 (Microsoft)"
          value={company2}
          onChange={(e) => setCompany2(e.target.value)}
        />

        <Button
          onClick={compare}
          disabled={loading}
          className="w-full"
        >
          {loading ? "Comparing..." : "Compare"}
        </Button>

      </div>

    </div>
  );
}

export default Compare;