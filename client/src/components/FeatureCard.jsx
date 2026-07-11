import { motion } from "framer-motion";
import { FaBrain } from "react-icons/fa";

function FeatureCard({ title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass rounded-3xl p-8"
    >
      <FaBrain className="text-cyan-400 text-4xl mb-5" />

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-4 text-gray-400">
        {desc}
      </p>
    </motion.div>
  );
}

export default FeatureCard;