import { useState } from "react";

function PortfolioSimulator({ price, aiAnalysis }) {
  const [investment, setInvestment] = useState("");

  const currentPrice = Number(price.price);

  const shares =
    investment && currentPrice
      ? (investment / currentPrice).toFixed(2)
      : 0;

  // Simple expected return based on AI recommendation
  let expectedReturn = 0;

  if (aiAnalysis.recommendation === "BUY")
    expectedReturn = 12;

  else if (aiAnalysis.recommendation === "HOLD")
    expectedReturn = 6;

  else
    expectedReturn = -5;

  const futureValue =
    investment
      ? (
          Number(investment) *
          (1 + expectedReturn / 100)
        ).toFixed(2)
      : 0;

  const profit =
    investment
      ? (
          futureValue -
          Number(investment)
        ).toFixed(2)
      : 0;

  return (
    <div className="glass rounded-3xl p-8 mt-10">

      <h2 className="text-3xl font-bold mb-8">
        Portfolio Simulator
      </h2>

      <input
        type="number"
        placeholder="Enter Investment Amount ($)"
        value={investment}
        onChange={(e) => setInvestment(e.target.value)}
        className="
          w-full
          rounded-xl
          p-4
          bg-black/20
          border
          border-white/10
          text-white
        "
      />

      <div className="grid md:grid-cols-2 gap-6 mt-8">

        <div>
          <p className="text-gray-400">Current Price</p>
          <h2 className="text-2xl font-bold">
            ${currentPrice}
          </h2>
        </div>

        <div>
          <p className="text-gray-400">Shares</p>
          <h2 className="text-2xl font-bold">
            {shares}
          </h2>
        </div>

        <div>
          <p className="text-gray-400">
            Expected Return
          </p>

          <h2 className="text-2xl font-bold text-green-400">
            {expectedReturn}%
          </h2>
        </div>

        <div>
          <p className="text-gray-400">
            Future Value
          </p>

          <h2 className="text-2xl font-bold">
            ${futureValue}
          </h2>
        </div>

        <div>
          <p className="text-gray-400">
            Estimated Profit
          </p>

          <h2 className="text-2xl font-bold text-cyan-400">
            ${profit}
          </h2>
        </div>

        <div>
          <p className="text-gray-400">
            Risk Level
          </p>

          <h2 className="text-2xl font-bold text-red-400">
            {aiAnalysis.risk}
          </h2>
        </div>

      </div>

    </div>
  );
}

export default PortfolioSimulator;