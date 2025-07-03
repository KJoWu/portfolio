"use client";

import { Campaign } from '../types/campaign';

interface SummarySectionProps {
  campaign: Campaign;
}

export default function SummarySection({ campaign }: SummarySectionProps) {
  const stats = [
    { label: 'Campaign Dates', value: 'July 1 - Aug 31' },
    { label: 'Duration', value: '62 Days' },
    { label: 'Active Screens', value: '156' },
    { label: 'Properties', value: campaign.properties.length.toString() },
    { label: 'Avg Ad Length', value: '8.3s' },
    { label: 'Flight Count', value: campaign.flights.length.toString() },
    { label: 'Avg CPM', value: '$12.08' },
  ];

  return (
    <div className="relative bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl border border-white/30 rounded-3xl p-6 mb-6 shadow-xl overflow-hidden">
      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-500 bg-[length:200%_100%] animate-pulse"></div>
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-gray-900">Campaign Overview</h2>
        <div className="relative px-6 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-2xl text-xl font-extrabold shadow-lg shadow-indigo-500/30">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg opacity-80">$</span>
          <span className="ml-4">{campaign.totalCost.toLocaleString()}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div 
            key={stat.label}
            className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white/90 cursor-pointer"
          >
            <div className="text-gray-500 font-semibold text-xs uppercase tracking-wider mb-2">
              {stat.label}
            </div>
            <div className="text-gray-900 font-bold text-base">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Performance Breakdown Table */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
              <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">Properties</th>
              <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">Active Screens</th>
              <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">Impressions</th>
              <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">Circulation</th>
              <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">CPM</th>
              <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">Rate Card</th>
              <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">Total Cost</th>
              <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">Savings</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gradient-to-r from-indigo-50/50 to-cyan-50/50 font-bold">
              <td className="px-3 py-4 text-xs">{campaign.properties.length}</td>
              <td className="px-3 py-4 text-xs">156</td>
              <td className="px-3 py-4 text-xs">3,245,780</td>
              <td className="px-3 py-4 text-xs">1,345,362</td>
              <td className="px-3 py-4 text-xs">$12.08</td>
              <td className="px-3 py-4 text-xs">$2,921.60</td>
              <td className="px-3 py-4 text-xs">${campaign.totalCost.toLocaleString()}</td>
              <td className="px-3 py-4 text-xs">${campaign.savings.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
