import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ConfidenceMeter({ confidence }) {
  return (
    <div className="glass rounded-3xl p-6">

      <h2 className="mb-6 text-gray-400">
        Confidence
      </h2>

      <CircularProgressbar
        value={confidence}
        text={`${confidence}%`}
      />

    </div>
  );
}

export default ConfidenceMeter;