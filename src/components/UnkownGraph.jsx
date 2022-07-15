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
import { formatToLocalTime } from "./weatherApi";

const UnkownGraph = ({ weather:{sunrise,sunset,timezone}}) => {
  const sunrisex= formatToLocalTime(sunrise, timezone, "hh:mm a")
  const sunsetx=formatToLocalTime(sunset, timezone, "hh:mm a")
  //console.log("weather",weather)

  const chartData = [{data:" ",val:-20}, {data:" ",val:-10},{data:sunrisex,val:0},{data:"7:00am",val:10},{data:"8:00am",val:20},{data:"9:00am",val:30},
  {data:"10:00am",val:40},{data:"11:00am",val:50},{data:"12:00am",val:60},
   {data:"1:00pm",val:70},
   {data:"2:00pm",val:60},
  {data:"3:00pm",val:50},
  {data:"4:00pm",val:40}, {data:"5:00pm",val:30},{data:"6:00pm",val:20},{data:"7:00pm",val:10},{data:sunsetx,val:0},{data:" ",val:-10},{data:" ",val:-20}]
  

  return (
    <div style={{ textAlign: "left" }}>
      <div
        style={{ overflowX: "auto", overflowY: "hidden", textAlign: "left",height:'300px' }}
      >
        <ResponsiveContainer width="100%" aspect="auto">
          <AreaChart
            data={chartData}
            width={500}
            height={300}
            margin={{ top: 10, right: 30, left: 5, bottom: 30 }}
          > 
            <CartesianGrid strokeDasharray="2" />
            <XAxis dataKey="data" interval={"preserveStartEnd"} /> 
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="val"
              stroke="yellow"
              activeDot={{ r: 8 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UnkownGraph;