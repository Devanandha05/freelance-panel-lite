import React from "react";

const SummaryCard = ({ title, value, icon, bg = "bg-white" }) => {
  return (
    <div className={`rounded-2xl p-4 shadow-lg ${bg} flex items-center gap-4`}>
      <div className="text-3xl">{icon}</div>
      <div>
        <h4 className="text-muted dark:text-[#f8f8f8] text-sm">{title}</h4>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
