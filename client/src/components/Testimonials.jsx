import SectionTitle from "./SectionTitle";

function Testimonials() {
  return (
    <section className="py-24">

      <SectionTitle
        title="Why Recruiters Love It"
        subtitle="Exactly the type of AI application companies expect."
      />

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {[
          "Professional UI",
          "Real AI Agent",
          "Production Backend",
        ].map((text) => (

          <div
            key={text}
            className="glass rounded-3xl p-8">

            ⭐⭐⭐⭐⭐

            <p className="mt-5 text-gray-300">

              {text}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;