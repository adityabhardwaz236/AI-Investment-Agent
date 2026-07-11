import { useEffect, useState } from "react";
import { getChart } from "../../services/marketApi";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function ChartCard({ symbol }) {

  const [data, setData] = useState([]);

  useEffect(() => {

    async function loadChart() {

      const chart = await getChart(symbol);

      setData(chart);

    }

    loadChart();

  }, [symbol]);

  return (

    <div className="glass rounded-3xl p-8">

      <h2 className="text-2xl font-bold mb-6">

        Stock Price

      </h2>

      <ResponsiveContainer
        width="100%"
        height={400}
      >

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="datetime" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="close"
            stroke="#22d3ee"
            strokeWidth={3}
            dot={false}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );

}

export default ChartCard;