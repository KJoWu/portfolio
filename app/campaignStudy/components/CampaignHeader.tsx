"use client";

import { Campaign } from '../types/campaign';

interface CampaignHeaderProps {
  campaign: Campaign;
  onAdvancedSettings: () => void;
}

export default function CampaignHeader({ campaign, onAdvancedSettings }: CampaignHeaderProps) {
  return (
    <div className="flex justify-between items-start mb-6 p-6 bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl">
      <div className="campaign-title">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-gray-900 to-indigo-600 bg-clip-text text-transparent mb-2 tracking-tight">
          {campaign.name}
        </h1>
        <div className="flex items-center gap-2 text-gray-500 font-semibold text-xs uppercase tracking-wider">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          {campaign.status === 'ready' ? 'Ready to Launch' : campaign.status}
        </div>
      </div>
      
      <div className="flex gap-4 flex-wrap">
        <button className="px-6 py-3 bg-white/90 text-gray-700 border border-white/30 backdrop-blur-xl rounded-2xl font-semibold text-xs transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
          Export Data
        </button>
        <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-2xl font-semibold text-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/40 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
          Submit Campaign
        </button>
        <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-2xl font-semibold text-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/40 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
          Save Draft
        </button>
      </div>
    </div>
  );
}
