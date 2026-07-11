function SummaryCard({ summary }) {
  return (
    <div className="glass p-6 rounded-2xl">
      <h2 className="text-xl font-bold mb-4">
        AI Summary
      </h2>

      <p className="text-gray-300 leading-7">
        {summary}
      </p>
    </div>
  );
}

export default SummaryCard;