// src/components/StatCard.jsx
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function StatCard({ title, value, change, icon, positive }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-5">
      
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <div className="text-gray-500 text-sm">{title}</div>
        <div className="p-2 bg-gray-100 rounded-lg">
          {icon}
        </div>
      </div>

      {/* Value */}
      <div className="mt-4 text-2xl font-semibold text-gray-800">
        {value}
      </div>

      {/* Change */}
      <div className="mt-2 flex items-center gap-1 text-sm">
        {positive ? (
          <ArrowUpRight size={16} className="text-green-500" />
        ) : (
          <ArrowDownRight size={16} className="text-red-500" />
        )}

        <span className={positive ? "text-green-500" : "text-red-500"}>
          {change}
        </span>

        <span className="text-gray-400">vs last month</span>
      </div>

    </div>
  );
}