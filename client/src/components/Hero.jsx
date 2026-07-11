import SearchBox from "./SearchBox";

function Hero() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6">

      {/* Heading */}
      <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
        AI
        <span className="gradientText"> Investment</span>
        <br />
        Research Agent
      </h1>

      {/* AI Badge */}
      <div className="glass px-5 py-2 rounded-full mt-8 text-sm text-cyan-300">
        Powered by Gemini • LangGraph • AI
      </div>

      {/* Description */}
      <p className="text-gray-400 mt-6 text-lg max-w-2xl">
        Research companies using AI, analyze financials, read news, compare competitors,
        and receive an intelligent investment recommendation in seconds.
      </p>

      {/* Search Box */}
      <SearchBox />

      {/* Trusted By */}
      <p className="mt-8 text-gray-500 text-sm">
        Trusted by Developers • Students • Recruiters
      </p>

    </section>
  );
}

export default Hero;