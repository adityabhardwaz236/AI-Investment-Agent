import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function ProsConsCard({ pros, cons }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">

      {/* Pros */}

      <div className="glass rounded-3xl p-8">

        <h2 className="text-2xl font-bold text-green-400 mb-5">
          Pros
        </h2>

        <ul className="space-y-4">

          {pros.map((item, index) => (

            <li
              key={index}
              className="flex items-start gap-3"
            >

              <FaCheckCircle className="text-green-400 mt-1" />

              {item}

            </li>

          ))}

        </ul>

      </div>

      {/* Cons */}

      <div className="glass rounded-3xl p-8">

        <h2 className="text-2xl font-bold text-red-400 mb-5">
          Cons
        </h2>

        <ul className="space-y-4">

          {cons.map((item, index) => (

            <li
              key={index}
              className="flex items-start gap-3"
            >

              <FaTimesCircle className="text-red-400 mt-1" />

              {item}

            </li>

          ))}

        </ul>

      </div>

    </div>
  );
}

export default ProsConsCard;