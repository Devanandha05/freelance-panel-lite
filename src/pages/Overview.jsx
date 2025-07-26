import React from "react"; 
import SummaryCard from "../components/SummaryCard";
import { summaryData } from "../data/summaryData";
import RevenueChart from "../components/RevenueChart";

const Overview = () => {
  return (
    <div className="space-y-10 section bg-grad">
      {/* Welcome Banner */}
      <div className="bg-primary text-white p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Welcome back, John Doe 👋</h2>
          <p className="text-[#ccc] mt-1">Here’s a quick look at your freelance progress.</p>
        </div>
        <img
          src="https://api.dicebear.com/7.x/lorelei/svg?seed=freelancer"
          alt="Avatar"
          className="w-16 h-16 rounded-full border-2 border-white"
        />
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-[#f8f8f8]">
        {summaryData.map((item, i) => (
          <SummaryCard key={i} {...item} />
        ))}
      </div>

      {/* Revenue Chart */}
      <div className="bg-white rounded-2xl shadow-sm p-6 text-black">
        <h3 className="text-lg font-semibold">Monthly Revenue</h3>
        <RevenueChart />
      </div>
    </div>
  );
};

export default Overview;
