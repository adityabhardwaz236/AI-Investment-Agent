function AIInsightCard({ newsAnalysis }) {
  return (
    <div className="glass rounded-3xl p-8">

      <h2 className="text-2xl font-bold mb-6">
        AI News Summary
      </h2>

      <p className="text-gray-300 leading-8">
        {newsAnalysis.summary}
      </p>

      <div className="mt-6">

        <span className="text-cyan-400 font-semibold">
          Sentiment:
        </span>

        <span className="ml-2">
          {newsAnalysis.sentiment}
        </span>

      </div>

    </div>
  );
}

export default AIInsightCard;