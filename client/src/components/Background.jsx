import { motion } from "framer-motion";

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#0B1120] to-[#1E1B4B]" />

      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -80, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
        }}
        className="absolute top-20 left-20 w-96 h-96 rounded-full bg-cyan-500 opacity-20 blur-[180px]"
      />

      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -100, 0],
          scale: [1.1, 0.8, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
        }}
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-600 opacity-20 blur-[180px]"
      />

    </div>
  );
}

export default Background;