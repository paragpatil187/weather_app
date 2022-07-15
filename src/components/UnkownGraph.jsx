import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  Area,
} from "recharts";

const UnkownGraph = ({ weather}) => {
  console.log("weather",weather)
  const chartData = [{}]

  return (
    <div style={{ textAlign: "left" }}>
      <div
        style={{ overflowX: "auto", overflowY: "hidden", textAlign: "left",height:'350px' }}
      >
        <ResponsiveContainer width="100%" aspect="auto">
          <AreaChart
            data={chartData}
            width={500}
            height={300}
            margin={{ top: 10, right: 30, left: 5, bottom: 30 }}
          > 
            <CartesianGrid strokeDasharray="2" />
            <XAxis dataKey="title" interval={"preserveStartEnd"} /> 
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="time"
              stroke="blue"
              activeDot={{ r: 8 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UnkownGraph;