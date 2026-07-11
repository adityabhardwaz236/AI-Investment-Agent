function AIRecommendation({ recommendation }) {
  const color =
    recommendation === "BUY"
      ? "text-green-400"
      : recommendation === "SELL"
      ? "text-red-400"
      : "text-yellow-400";

  return (
    <div className="glass rounded-3xl p-8">

      <h2 className="text-xl text-gray-400">
        AI Recommendation
      </h2>

      <h1 className={`text-5xl font-bold mt-4 ${color}`}>
        {recommendation}
      </h1>

    </div>
  );
}

export default AIRecommendation;