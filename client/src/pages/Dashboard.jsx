import { useLocation } from "react-router-dom";
import NewsCard from "../components/dashboard/NewsCard";
import AIInsightCard from "../components/dashboard/AIInsightCard";
import CompanyCard from "../components/dashboard/CompanyCard";
import PriceCard from "../components/dashboard/PriceCard";
import AIRecommendation from "../components/dashboard/AIRecommendation";
import ConfidenceMeter from "../components/dashboard/ConfidenceMeter";
import RiskBadge from "../components/dashboard/RiskBadge";
import SummaryCard from "../components/dashboard/SummaryCard";
import ProsConsCard from "../components/dashboard/ProsConsCard";
import StatCard from "../components/dashboard/StatCard";
import ChartCard from "../components/dashboard/ChartCard";
import FavoriteButton from "../components/dashboard/FavoriteButton";
import ReportButton from "../components/dashboard/ReportButton";
import PortfolioSimulator from "../components/dashboard/PortfolioSimulator";
import ChatAssistant from "../components/dashboard/ChatAssistant";

function Dashboard() {
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#030712] text-white text-2xl">
        No Company Data Found
      </div>
    );
  }

  const { profile, price, aiAnalysis } = state;

  return (
    <div className="min-h-screen bg-[#030712] text-white p-10">

      {/* Company Information */}
      <CompanyCard profile={profile} />

      {/* Favorite + Report Buttons */}
      <div className="mt-6 flex justify-end gap-4">

        <FavoriteButton
          symbol={profile.ticker}
          company={profile.name}
        />

        <ReportButton
          profile={profile}
          price={price}
          aiAnalysis={aiAnalysis}
        />

      </div>

      {/* AI Cards */}
      <div className="grid lg:grid-cols-4 gap-8 mt-10">

        <PriceCard price={price} />

        <AIRecommendation
          recommendation={aiAnalysis.recommendation}
        />

        <ConfidenceMeter
          confidence={Number(aiAnalysis.confidence)}
        />

        <RiskBadge
          risk={aiAnalysis.risk}
        />

      </div>

      {/* Company Statistics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

        <StatCard
          title="Exchange"
          value={profile.exchange}
        />

        <StatCard
          title="Country"
          value={profile.country}
        />

        <StatCard
          title="Industry"
          value={profile.finnhubIndustry}
        />

        <StatCard
          title="Currency"
          value={profile.currency}
        />

      </div>

      {/* AI Summary */}
      <div className="mt-10">

        <SummaryCard
          summary={aiAnalysis.summary}
        />

      </div>

      {/* Pros & Cons */}
      <div className="mt-10">

        <ProsConsCard
          pros={aiAnalysis.pros}
          cons={aiAnalysis.cons}
        />

      </div>

      {/* Stock Price Chart */}
      <div className="mt-10">

        <ChartCard
          symbol={profile.ticker}
        />
<div className="mt-10">
  <PortfolioSimulator
    price={price}
    aiAnalysis={aiAnalysis}
  />
</div>
      </div>

      {/* AI News & Insights */}
      <div className="grid lg:grid-cols-2 gap-8 mt-10">

        <AIInsightCard
          newsAnalysis={state.newsAnalysis}
        />
        <ChatAssistant company={profile.name} />

        <NewsCard
          news={state.news}
        />

      </div>

    </div>
  );
}

export default Dashboard;