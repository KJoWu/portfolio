"use client";

import { useState } from 'react';
import { Campaign } from '../types/campaign';
import PropertiesTable from './PropertiesTable';

interface ConfigurationSectionProps {
  campaign: Campaign;
  onAdvancedSettings: () => void;
  onUpdateCampaign: (updates: Partial<Campaign>) => void;
}

export default function ConfigurationSection({ 
  campaign, 
  onAdvancedSettings, 
  onUpdateCampaign 
}: ConfigurationSectionProps) {
  const [selectedProperties, setSelectedProperties] = useState<string[]>([]);

  const handleFormChange = (field: string, value: any) => {
    onUpdateCampaign({ [field]: value });
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl p-6 mb-6 shadow-xl relative">
      <div className="flex justify-between items-start mb-6 pb-4 border-b-2 border-indigo-100">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-4">
            <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-cyan-500 rounded-full"></div>
            Campaign Configuration
          </h2>
          <p className="text-gray-500 font-medium leading-relaxed">
            Configure the main settings that will apply to all campaign flights
          </p>
        </div>
        <button 
          onClick={onAdvancedSettings}
          className="px-6 py-3 bg-white/90 text-gray-700 border border-white/30 backdrop-blur-xl rounded-2xl font-semibold text-xs transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
          Advanced Settings
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
            Campaign Name
          </label>
          <input
            type="text"
            value={campaign.name}
            onChange={(e) => handleFormChange('name', e.target.value)}
            placeholder="Enter campaign name"
            className="px-4 py-3 bg-white/90 border-2 border-gray-300 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 backdrop-blur-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 focus:bg-white"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
            Advertiser
          </label>
          <select
            value={campaign.advertiser}
            onChange={(e) => handleFormChange('advertiser', e.target.value)}
            className="px-4 py-3 bg-white/90 border-2 border-gray-300 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 backdrop-blur-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 focus:bg-white"
          >
            <option value="">Select advertiser</option>
            <option value="Fashion Brand Inc.">Fashion Brand Inc.</option>
            <option value="Retail Co.">Retail Co.</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
            Campaign Owner
          </label>
          <select
            value={campaign.owner}
            onChange={(e) => handleFormChange('owner', e.target.value)}
            className="px-4 py-3 bg-white/90 border-2 border-gray-300 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 backdrop-blur-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 focus:bg-white"
          >
            <option value="">Select owner</option>
            <option value="Alex Smith">Alex Smith</option>
            <option value="Sarah Johnson">Sarah Johnson</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
            Campaign Type
          </label>
          <select
            value={campaign.type}
            onChange={(e) => handleFormChange('type', e.target.value)}
            className="px-4 py-3 bg-white/90 border-2 border-gray-300 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 backdrop-blur-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 focus:bg-white"
          >
            <option value="branding">Brand Awareness</option>
            <option value="sales">Sales Promotion</option>
            <option value="seasonal">Seasonal Campaign</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
            Budget
          </label>
          <input
            type="number"
            value={campaign.budget}
            onChange={(e) => handleFormChange('budget', parseFloat(e.target.value))}
            placeholder="0.00"
            step="0.01"
            className="px-4 py-3 bg-white/90 border-2 border-gray-300 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 backdrop-blur-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 focus:bg-white"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
            Target Audience
          </label>
          <select
            value={campaign.targetAudience}
            onChange={(e) => handleFormChange('targetAudience', e.target.value)}
            className="px-4 py-3 bg-white/90 border-2 border-gray-300 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 backdrop-blur-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 focus:bg-white"
          >
            <option value="General Audience">General Audience</option>
            <option value="Young Adults (18-35)">Young Adults (18-35)</option>
            <option value="Working Professionals">Working Professionals</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
            Priority Level
          </label>
          <select
            value={campaign.priority}
            onChange={(e) => handleFormChange('priority', e.target.value)}
            className="px-4 py-3 bg-white/90 border-2 border-gray-300 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 backdrop-blur-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 focus:bg-white"
          >
            <option value="standard">Standard</option>
            <option value="high">High Priority</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
            Campaign Notes
          </label>
          <input
            type="text"
            value={campaign.notes || ''}
            onChange={(e) => handleFormChange('notes', e.target.value)}
            placeholder="Optional campaign notes"
            className="px-4 py-3 bg-white/90 border-2 border-gray-300 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 backdrop-blur-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 focus:bg-white"
          />
        </div>
      </div>

      {/* Available Properties Section */}
      <div className="mt-6">
        <h3 className="text-xl font-bold mb-4 text-gray-900">Available Properties</h3>
        <PropertiesTable
          properties={campaign.properties}
          selectedProperties={selectedProperties}
          onSelectionChange={setSelectedProperties}
          showFilters={true}
          showSelection={true}
          showPagination={true}
        />
      </div>
    </div>
  );
}
