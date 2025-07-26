import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", revenue: 1000 },
  { month: "Feb", revenue: 1200 },
  { month: "Mar", revenue: 950 },
  { month: "Apr", revenue: 1500 },
  { month: "May", revenue: 1700 },
  { month: "Jun", revenue: 2000 },
];

const RevenueChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="revenue" stroke="#15803d" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;
