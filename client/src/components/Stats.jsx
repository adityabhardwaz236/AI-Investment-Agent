import { motion } from "framer-motion";

const stats = [
  {
    number: "1000+",
    title: "Reports Generated",
  },
  {
    number: "95%",
    title: "Prediction Accuracy",
  },
  {
    number: "24/7",
    title: "AI Available",
  },
];

function Stats() {
  return (
    <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto py-20">

      {stats.map((item) => (

        <motion.div

          whileHover={{ scale: 1.05 }}

          className="glass rounded-3xl p-8 text-center"

          key={item.title}
        >

          <h1 className="text-5xl font-bold gradientText">
            {item.number}
          </h1>

          <p className="mt-4 text-gray-400">
            {item.title}
          </p>

        </motion.div>

      ))}

    </section>
  );
}

export default Stats;