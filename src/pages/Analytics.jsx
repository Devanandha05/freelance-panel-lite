import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", projects: 2 },
  { month: "Feb", projects: 4 },
  { month: "Mar", projects: 3 },
  { month: "Apr", projects: 5 },
  { month: "May", projects: 6 },
  { month: "Jun", projects: 4 },
];

const totalProjects = data.reduce((acc, curr) => acc + curr.projects, 0);
const bestMonth = data.reduce((max, curr) =>
  curr.projects > max.projects ? curr : max
);
const avgProjects = (totalProjects / data.length).toFixed(1);

const Analytics = () => {
  return (
    <div className="space-y-8 section">
      {/* Page Heading */}
      <div>
        <h2 className="text-3xl font-semibold text-primary dark:text-primaryD">
          Analytics
        </h2>
        <p className="text-muted dark:text-mutedD mt-1">
          Track project performance month by month
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card dark:bg-cardblueD p-5 rounded-xl shadow text-center">
          <p className="text-primary dark:text-primaryD text-sm">Total Projects</p>
          <h3 className="text-xl font-bold text-primary dark:text-primaryD">{totalProjects}</h3>
        </div>
        <div className="bg-warning dark:bg-[#9F8A53] p-5 rounded-xl shadow text-center">
          <p className="text-primary dark:text-primaryD text-sm">Best Month</p>
          <h3 className="text-xl font-bold text-primary dark:text-primaryD">{bestMonth.month}</h3>
        </div>
        <div className="bg-cardblue dark:bg-[#A66458] p-5 rounded-xl shadow text-center">
          <p className="text-primary dark:text-primaryD text-sm">Average / Month</p>
          <h3 className="text-xl font-bold text-primary dark:text-primaryD">{avgProjects}</h3>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white dark:bg-cardD dark:text-primaryD rounded-2xl p-6 shadow border border-muted/30 dark:border-mutedD/30">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-primary dark:text-primaryD">
            Monthly Projects Overview
          </h3>
          <p className="text-sm text-muted dark:text-mutedD">
            Visualize how your projects are growing over time.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#ddd"
              className="dark:stroke-[#444]"
            />
            <XAxis
              dataKey="month"
              stroke="#666"
              tick={{ fill: '#666' }}
              axisLine={{ stroke: "#999" }}
              className="dark:text-mutedD"
            />
            <YAxis
              stroke="#666"
              tick={{ fill: '#666' }}
              axisLine={{ stroke: "#999" }}
              className="dark:text-mutedD"
            />
            <Tooltip
              wrapperStyle={{ borderRadius: "8px" }}
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                color: "#333"
              }}
              labelStyle={{ color: "#333" }}
              cursor={{ fill: "rgba(219,138,116,0.1)" }}
            />
            <Bar
              dataKey="projects"
              fill="#db8a74" // light mode
              radius={[6, 6, 0, 0]}
              barSize={32}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
