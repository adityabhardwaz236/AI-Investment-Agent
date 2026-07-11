import { FaRobot } from "react-icons/fa";

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <FaRobot className="text-cyan-400 text-3xl" />
      <h1 className="text-2xl font-bold gradientText">
        InvestAI
      </h1>
    </div>
  );
}

export default Logo;