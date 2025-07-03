"use client";

import { useState } from 'react';
import { Campaign, Ad, AdTargeting } from '../../types/campaign';
import PropertiesTable from '../PropertiesTable';

interface AdCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
  campaign: Campaign;
}

export default function AdCreationModal({ isOpen, onClose, campaign }: AdCreationModalProps) {
  const [adData, setAdData] = useState({
    name: '',
    type: 'image' as 'image' | 'video' | 'carousel',
    duration: 5,
    status: 'draft' as 'draft' | 'active' | 'paused',
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [selectedProperties, setSelectedProperties] = useState<string[]>([]);
  
  const [targeting, setTargeting] = useState<AdTargeting>({
    gender: [],
    ageGroups: [],
    weatherConditions: [],
    timeOfDay: [],
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    const fileInput = document.getElementById('mediaUpload') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  const handleTargetingChange = (category: keyof AdTargeting, value: string, checked: boolean) => {
    setTargeting(prev => ({
      ...prev,
      [category]: checked
        ? [...(prev[category] as string[]), value]
        : (prev[category] as string[]).filter(item => item !== value)
    }));
  };

  const updateAdTypeFields = () => {
    const durationOptions = {
      image: [5, 10, 15],
      video: [10, 15, 30, 60],
      carousel: [15, 30, 45]
    };
    return durationOptions[adData.type] || [5, 10, 15];
  };

  const saveAsDraft = () => {
    console.log('Saving ad as draft:', { adData, targeting, selectedProperties, uploadedFile });
    onClose();
  };

  const createAndActivateAd = () => {
    if (!adData.name) {
      alert('Please enter an ad name');
      return;
    }
    if (!uploadedFile) {
      alert('Please upload media for the ad');
      return;
    }
    
    console.log('Creating and activating ad:', { adData, targeting, selectedProperties, uploadedFile });
    onClose();
  };

  const getFilePreview = () => {
    if (!uploadedFile) return null;
    
    const fileSize = (uploadedFile.size / (1024 * 1024)).toFixed(2) + ' MB';
    const fileType = uploadedFile.type.startsWith('image') ? 'IMG' : 
                    uploadedFile.type.startsWith('video') ? 'VID' : 'FILE';
    
    const bgColor = uploadedFile.type.startsWith('image') ? 'from-pink-500 to-red-500' :
                    uploadedFile.type.startsWith('video') ? 'from-blue-500 to-indigo-500' :
                    'from-gray-500 to-gray-600';

    return (
      <div className="mt-4 p-4 bg-white/80 border border-gray-200 rounded-2xl">
        <div className="flex items-center gap-4">
          <div className={`w-15 h-10 bg-gradient-to-r ${bgColor} rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
            {fileType}
          </div>
          <div className="flex-1">
            <div className="font-semibold text-gray-900 text-xs">{uploadedFile.name}</div>
            <div className="text-gray-500 text-xs">{fileSize}</div>
          </div>
          <button 
            onClick={removeFile}
            className="px-4 py-2 bg-red-500 text-white rounded-lg text-xs font-semibold transition-all duration-300 hover:bg-red-600 hover:-translate-y-0.5"
          >
            Remove
          </button>
        </div>
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex justify-between items-center mb-8 pb-4 border-b-2 border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900">Create New Ad</h3>
          <button 
            onClick={onClose}
            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-600 transition-all duration-300 hover:scale-110"
          >
            ×
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
              Ad Name
            </label>
            <input
              type="text"
              value={adData.name}
              onChange={(e) => setAdData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Enter ad name"
              className="px-4 py-3 bg-white/90 border-2 border-gray-300 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
              Ad Type
            </label>
            <select
              value={adData.type}
              onChange={(e) => setAdData(prev => ({ ...prev, type: e.target.value as any }))}
              className="px-4 py-3 bg-white/90 border-2 border-gray-300 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
            >
              <option value="image">Image</option>
              <option value="video">Video</option>
              <option value="carousel">Carousel</option>
            </select>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
              Duration
            </label>
            <select
              value={adData.duration}
              onChange={(e) => setAdData(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
              className="px-4 py-3 bg-white/90 border-2 border-gray-300 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
            >
              {updateAdTypeFields().map(duration => (
                <option key={duration} value={duration}>{duration} seconds</option>
              ))}
            </select>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
              Status
            </label>
            <select
              value={adData.status}
              onChange={(e) => setAdData(prev => ({ ...prev, status: e.target.value as any }))}
              className="px-4 py-3 bg-white/90 border-2 border-gray-300 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
            >
              <option value="draft">Draft</option>
              <option value="active">Active</option>
              <option value="paused">Paused</option>
            </select>
          </div>
        </div>

        {/* Media Upload Section */}
        <div className="mb-8">
          <label className="block font-semibold text-gray-700 text-xs uppercase tracking-wider mb-4">
            Upload Media
          </label>
          <div 
            className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center bg-gray-50 transition-all duration-300 hover:border-indigo-500 hover:bg-indigo-50/50 cursor-pointer"
            onClick={() => document.getElementById('mediaUpload')?.click()}
          >
            <div className="text-4xl text-gray-400 mb-4">📁</div>
            <div className="font-semibold text-gray-700 mb-2">Click to upload or drag and drop</div>
            <div className="text-gray-500 text-sm">PNG, JPG, MP4 up to 50MB</div>
            <input 
              type="file" 
              id="mediaUpload" 
              className="hidden" 
              accept="image/*,video/*" 
              onChange={handleFileUpload}
            />
          </div>
          {getFilePreview()}
        </div>

        {/* Targeting Section */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
          <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-cyan-500 rounded-full"></div>
            Targeting Options
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                Gender Targeting
              </label>
              <div className="flex gap-4 mt-2 flex-wrap">
                {[
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' },
                  { value: 'all', label: 'All' }
                ].map(option => (
                  <label key={option.value} className="flex items-center gap-2 cursor-pointer bg-white/70 px-4 py-2 rounded-xl hover:bg-white transition-all duration-300">
                    <input
                      type="checkbox"
                      checked={targeting.gender.includes(option.value as any)}
                      onChange={(e) => handleTargetingChange('gender', option.value, e.target.checked)}
                      className="w-4 h-4 text-indigo-600 border-2 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <span className="text-xs font-medium">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                Age Groups
              </label>
              <div className="flex gap-4 mt-2 flex-wrap">
                {[
                  { value: 'young-adults', label: 'Young Adults (18-35)' },
                  { value: 'adults', label: 'Adults (36-54)' },
                  { value: 'seniors', label: 'Seniors (55+)' }
                ].map(option => (
                  <label key={option.value} className="flex items-center gap-2 cursor-pointer bg-white/70 px-4 py-2 rounded-xl hover:bg-white transition-all duration-300">
                    <input
                      type="checkbox"
                      checked={targeting.ageGroups.includes(option.value as any)}
                      onChange={(e) => handleTargetingChange('ageGroups', option.value, e.target.checked)}
                      className="w-4 h-4 text-indigo-600 border-2 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <span className="text-xs font-medium">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                Weather Conditions
              </label>
              <div className="flex gap-4 mt-2 flex-wrap">
                {[
                  { value: 'sunny', label: '☀️ Sunny' },
                  { value: 'cloudy', label: '⛅ Cloudy' },
                  { value: 'rainy', label: '🌧️ Rainy' },
                  { value: 'snowy', label: '❄️ Snowy' }
                ].map(option => (
                  <label key={option.value} className="flex items-center gap-2 cursor-pointer bg-white/70 px-4 py-2 rounded-xl hover:bg-white transition-all duration-300">
                    <input
                      type="checkbox"
                      checked={targeting.weatherConditions.includes(option.value as any)}
                      onChange={(e) => handleTargetingChange('weatherConditions', option.value, e.target.checked)}
                      className="w-4 h-4 text-indigo-600 border-2 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <span className="text-xs font-medium">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                Time of Day
              </label>
              <div className="flex gap-4 mt-2 flex-wrap">
                {[
                  { value: 'morning', label: '🌅 Morning' },
                  { value: 'afternoon', label: '☀️ Afternoon' },
                  { value: 'evening', label: '🌆 Evening' },
                  { value: 'night', label: '🌙 Night' }
                ].map(option => (
                  <label key={option.value} className="flex items-center gap-2 cursor-pointer bg-white/70 px-4 py-2 rounded-xl hover:bg-white transition-all duration-300">
                    <input
                      type="checkbox"
                      checked={targeting.timeOfDay.includes(option.value as any)}
                      onChange={(e) => handleTargetingChange('timeOfDay', option.value, e.target.checked)}
                      className="w-4 h-4 text-indigo-600 border-2 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <span className="text-xs font-medium">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Property Selection */}
        <div className="mb-8">
          <label className="block font-semibold text-gray-700 text-xs uppercase tracking-wider mb-4">
            Select Properties for This Ad
          </label>
          <div className="max-h-80 overflow-y-auto border border-gray-200 rounded-2xl">
            <PropertiesTable
              properties={campaign.properties}
              selectedProperties={selectedProperties}
              onSelectionChange={setSelectedProperties}
              showFilters={false}
              showSelection={true}
              showPagination={false}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-end pt-4 border-t border-gray-200">
          <button 
            onClick={onClose}
            className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-2xl font-semibold text-xs transition-all duration-300 hover:bg-gray-50 hover:-translate-y-1 hover:shadow-lg"
          >
            Cancel
          </button>
          <button 
            onClick={saveAsDraft}
            className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-2xl font-semibold text-xs transition-all duration-300 hover:bg-gray-50 hover:-translate-y-1 hover:shadow-lg"
          >
            Save as Draft
          </button>
          <button 
            onClick={createAndActivateAd}
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-2xl font-semibold text-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/40 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
            Create & Activate Ad
          </button>
        </div>
      </div>
    </div>
  );
}
