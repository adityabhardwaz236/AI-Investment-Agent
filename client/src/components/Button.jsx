import { motion } from "framer-motion";

function Button({
  children,
  onClick,
  disabled = false,
  className = "",
}) {
  return (
    <motion.button
      type="button"
      whileHover={!disabled ? { scale: 1.05 } : undefined}
      whileTap={!disabled ? { scale: 0.95 } : undefined}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-linear-to-r
        from-cyan-500
        to-blue-600
        hover:from-cyan-400
        hover:to-blue-500
        text-white
        font-semibold
        px-8
        py-4
        rounded-2xl
        shadow-lg
        shadow-cyan-500/20
        transition-all
        duration-300
        ${
          disabled
            ? "opacity-60 cursor-not-allowed"
            : "cursor-pointer"
        }
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}

export default Button;