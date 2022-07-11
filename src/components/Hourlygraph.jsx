import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    Tooltip,
  } from "recharts";
  
  const Hourly = ({ items }) => {
    const chartData = items.map((el) => {
      return el;
    });
  
    return (
      <div style={{ textAlign: "left" }}>
        <p>Hourly Chart</p>
        <hr />
        <div
          style={{ overflowX: "auto", overflowY: "hidden", textAlign: "left" }}
        >
          <ResponsiveContainer width="150%" aspect={3}>
            <LineChart
              data={chartData}
              width={500}
              height={300}
              margin={{ top: 10, right: 30, left: 5, bottom: 5 }}
            >
              <XAxis dataKey="title" />
              <YAxis dataKey="temp" tickFormatter={(value) => value + "°C"} />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="4 4" />
              <Line
                type="monotone"
                dataKey="temp"
                stroke="blue"
                activeDot={{ r: 20 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default Hourly;