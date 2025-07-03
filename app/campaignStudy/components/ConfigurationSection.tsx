"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Campaign } from '../types/campaign';
import { campaignConfigSchema, CampaignConfigFormData } from '../schemas/validation';
import PropertiesTable from './PropertiesTable';

interface ConfigurationSectionProps {
  campaign: Campaign;
  onUpdateCampaign: (updates: Partial<Campaign>) => void;
}

export default function ConfigurationSection({ 
  campaign, 
  onUpdateCampaign 
}: ConfigurationSectionProps) {
  const [selectedProperties, setSelectedProperties] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isDirty },
    setValue,
    trigger,
  } = useForm<CampaignConfigFormData>({
    resolver: zodResolver(campaignConfigSchema),
    defaultValues: {
      name: campaign.name,
      advertiser: campaign.advertiser,
      owner: campaign.owner,
      type: campaign.type,
      budget: campaign.budget,
      targetAudience: campaign.targetAudience,
      priority: campaign.priority,
      notes: campaign.notes || '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: CampaignConfigFormData) => {
    onUpdateCampaign(data);
  };

  // Watch for changes and auto-save
  const watchedValues = watch();
  
  const handleFieldChange = async (field: keyof CampaignConfigFormData, value: any) => {
    setValue(field, value);
    await trigger(field);
    
    // Auto-save valid changes
    if (!errors[field]) {
      onUpdateCampaign({ [field]: value });
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl p-6 mb-6 shadow-xl relative">
      <div className="mb-6 pb-4 border-b-2 border-indigo-100">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-4">
            <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-cyan-500 rounded-full"></div>
            Main Configuration
          </h2>
          <p className="text-gray-500 font-medium leading-relaxed">
            Configure the main settings that will apply to all tracks
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
              Campaign Name
            </label>
            <input
              {...register('name', {
                onChange: (e) => handleFieldChange('name', e.target.value)
              })}
              placeholder="Enter campaign name"
              className={`px-4 py-3 bg-white/90 border-2 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 backdrop-blur-xl focus:outline-none focus:ring-4 focus:bg-white ${
                errors.name 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                  : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20'
              }`}
            />
            {errors.name && (
              <span className="text-red-500 text-xs font-medium">{errors.name.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
              Advertiser
            </label>
            <select
              {...register('advertiser', {
                onChange: (e) => handleFieldChange('advertiser', e.target.value)
              })}
              className={`px-4 py-3 bg-white/90 border-2 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 backdrop-blur-xl focus:outline-none focus:ring-4 focus:bg-white ${
                errors.advertiser 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                  : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20'
              }`}
            >
              <option value="">Select advertiser</option>
              <option value="Fashion Brand Inc.">Fashion Brand Inc.</option>
              <option value="Retail Co.">Retail Co.</option>
            </select>
            {errors.advertiser && (
              <span className="text-red-500 text-xs font-medium">{errors.advertiser.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
              Campaign Owner
            </label>
            <select
              {...register('owner', {
                onChange: (e) => handleFieldChange('owner', e.target.value)
              })}
              className={`px-4 py-3 bg-white/90 border-2 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 backdrop-blur-xl focus:outline-none focus:ring-4 focus:bg-white ${
                errors.owner 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                  : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20'
              }`}
            >
              <option value="">Select owner</option>
              <option value="Alex Smith">Alex Smith</option>
              <option value="Sarah Johnson">Sarah Johnson</option>
            </select>
            {errors.owner && (
              <span className="text-red-500 text-xs font-medium">{errors.owner.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
              Campaign Type
            </label>
            <select
              {...register('type', {
                onChange: (e) => handleFieldChange('type', e.target.value)
              })}
              className={`px-4 py-3 bg-white/90 border-2 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 backdrop-blur-xl focus:outline-none focus:ring-4 focus:bg-white ${
                errors.type 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                  : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20'
              }`}
            >
              <option value="branding">Brand Awareness</option>
              <option value="sales">Sales Promotion</option>
              <option value="seasonal">Seasonal Campaign</option>
            </select>
            {errors.type && (
              <span className="text-red-500 text-xs font-medium">{errors.type.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
              Budget
            </label>
            <input
              type="number"
              step="0.01"
              {...register('budget', {
                valueAsNumber: true,
                onChange: (e) => handleFieldChange('budget', parseFloat(e.target.value) || 0)
              })}
              placeholder="0.00"
              className={`px-4 py-3 bg-white/90 border-2 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 backdrop-blur-xl focus:outline-none focus:ring-4 focus:bg-white ${
                errors.budget 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                  : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20'
              }`}
            />
            {errors.budget && (
              <span className="text-red-500 text-xs font-medium">{errors.budget.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
              Target Audience
            </label>
            <select
              {...register('targetAudience', {
                onChange: (e) => handleFieldChange('targetAudience', e.target.value)
              })}
              className={`px-4 py-3 bg-white/90 border-2 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 backdrop-blur-xl focus:outline-none focus:ring-4 focus:bg-white ${
                errors.targetAudience 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                  : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20'
              }`}
            >
              <option value="General Audience">General Audience</option>
              <option value="Young Adults (18-35)">Young Adults (18-35)</option>
              <option value="Working Professionals">Working Professionals</option>
            </select>
            {errors.targetAudience && (
              <span className="text-red-500 text-xs font-medium">{errors.targetAudience.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
              Priority Level
            </label>
            <select
              {...register('priority', {
                onChange: (e) => handleFieldChange('priority', e.target.value)
              })}
              className={`px-4 py-3 bg-white/90 border-2 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 backdrop-blur-xl focus:outline-none focus:ring-4 focus:bg-white ${
                errors.priority 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                  : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20'
              }`}
            >
              <option value="standard">Standard</option>
              <option value="high">High Priority</option>
              <option value="urgent">Urgent</option>
            </select>
            {errors.priority && (
              <span className="text-red-500 text-xs font-medium">{errors.priority.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
              Campaign Notes
            </label>
            <input
              type="text"
              {...register('notes', {
                onChange: (e) => handleFieldChange('notes', e.target.value)
              })}
              placeholder="Optional campaign notes"
              className={`px-4 py-3 bg-white/90 border-2 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 backdrop-blur-xl focus:outline-none focus:ring-4 focus:bg-white ${
                errors.notes 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                  : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20'
              }`}
            />
            {errors.notes && (
              <span className="text-red-500 text-xs font-medium">{errors.notes.message}</span>
            )}
          </div>
        </div>

        {/* Form Status Indicator */}
        {isDirty && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-700 text-xs font-medium">
                {isValid ? 'Changes saved automatically' : 'Please fix validation errors above'}
              </span>
            </div>
          </div>
        )}
      </form>

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
