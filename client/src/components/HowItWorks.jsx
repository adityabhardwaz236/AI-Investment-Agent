import SectionTitle from "./SectionTitle";

function HowItWorks() {
  const steps = [
    "Enter Company Name",
    "AI Collects Financial Data",
    "Reads Latest News",
    "Analyzes Risk",
    "Generates Investment Decision",
  ];

  return (
    <section className="py-24 max-w-6xl mx-auto">

      <SectionTitle
        title="How It Works"
        subtitle="AI completes investment research in seconds."
      />

      <div className="grid md:grid-cols-5 gap-6">

        {steps.map((step, index) => (

          <div
            key={index}
            className="glass rounded-2xl p-6 text-center">

            <div className="text-4xl font-bold gradientText">
              {index + 1}
            </div>

            <p className="mt-4 text-gray-300">
              {step}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default HowItWorks;