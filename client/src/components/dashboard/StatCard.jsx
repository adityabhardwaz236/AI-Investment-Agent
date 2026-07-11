import { motion } from "framer-motion";

function StatCard({ title, value }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="glass rounded-3xl p-6"
    >
      <h3 className="text-gray-400">{title}</h3>

      <h2 className="text-3xl font-bold mt-3">
        {value}
      </h2>
    </motion.div>
  );
}

export default StatCard;