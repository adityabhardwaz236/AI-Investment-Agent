import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Button from "./Button";
import api from "../services/api";

function SearchBox() {
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { user } = useAuth();

  const analyzeCompany = async () => {
    // User must be logged in
    if (!user) {
      alert("Please sign in with Google first.");
      return;
    }

    // Company name validation
    if (!company.trim()) {
      alert("Please enter a company name.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/investment/analyze", {
        company: company.trim(),
      });

if (user) {
  await api.post("/users/history", {
    uid: user.uid,
    company: company.trim(),
  });
}
      console.log("API Response:", response.data);

      navigate("/dashboard", {
        state: response.data.data,
      });
    } catch (error) {
      console.error("Analysis Error:", error);

      alert(
        error.response?.data?.message ||
          "Unable to analyze the company. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mt-10 w-full justify-center items-center">
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            analyzeCompany();
          }
        }}
        placeholder="Search Apple, Tesla, NVIDIA..."
        className="
          glass
          w-full
          md:w-130
          rounded-2xl
          px-6
          py-5
          text-lg
          text-white
          placeholder:text-gray-500
          outline-none
          border
          border-white/10
          focus:border-cyan-400
          focus:ring-2
          focus:ring-cyan-500/30
          transition-all
          duration-300
        "
      />

      <Button
        onClick={analyzeCompany}
        disabled={loading}
        className="min-w-42.5"
      >
        {loading ? "Analyzing..." : "Analyze"}
      </Button>
    </div>
  );
}

export default SearchBox;