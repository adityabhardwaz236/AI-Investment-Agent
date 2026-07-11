import { useLocation } from "react-router-dom";

function CompareResult() {
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#030712] text-white">
        No Comparison Found
      </div>
    );
  }

  const { company1, company2 } = state;

  return (
    <div className="min-h-screen bg-[#030712] text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Company Comparison
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Company 1 */}
        <div className="glass rounded-2xl p-8">

          <h2 className="text-3xl font-bold">
            {company1.profile.name}
          </h2>

          <p className="mt-4">
            Price: ${company1.price.price}
          </p>

          <p>
            Industry: {company1.profile.finnhubIndustry}
          </p>

          <p>
            Country: {company1.profile.country}
          </p>

          <p>
            Recommendation:
            {" "}
            {company1.aiAnalysis.recommendation}
          </p>

          <p>
            Confidence:
            {" "}
            {company1.aiAnalysis.confidence}%
          </p>

          <p>
            Risk:
            {" "}
            {company1.aiAnalysis.risk}
          </p>

        </div>

        {/* Company 2 */}
        <div className="glass rounded-2xl p-8">

          <h2 className="text-3xl font-bold">
            {company2.profile.name}
          </h2>

          <p className="mt-4">
            Price: ${company2.price.price}
          </p>

          <p>
            Industry: {company2.profile.finnhubIndustry}
          </p>

          <p>
            Country: {company2.profile.country}
          </p>

          <p>
            Recommendation:
            {" "}
            {company2.aiAnalysis.recommendation}
          </p>

          <p>
            Confidence:
            {" "}
            {company2.aiAnalysis.confidence}%
          </p>

          <p>
            Risk:
            {" "}
            {company2.aiAnalysis.risk}
          </p>

        </div>

      </div>

    </div>
  );
}

export default CompareResult;