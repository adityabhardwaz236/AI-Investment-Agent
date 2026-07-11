import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import FeatureCard from "../components/FeatureCard";
import Background from "../components/Background";
import Stats from "../components/Stats";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Background />

      <Navbar />

      <Hero />

      {/* Statistics Section */}
      <Stats />

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-10 py-20">

        <div className="grid md:grid-cols-3 gap-8">

          <FeatureCard
            title="AI Research"
            desc="Real-time AI investment research powered by Gemini AI."
          />

          <FeatureCard
            title="Financial Analysis"
            desc="Revenue, profit, debt, growth and financial ratio analysis."
          />

          <FeatureCard
            title="Latest News"
            desc="Fetches the latest company news and analyzes market sentiment."
          />

        </div>

      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      <Footer />
    </>
  );
}

export default Home;