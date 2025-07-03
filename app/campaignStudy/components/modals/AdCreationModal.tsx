"use client";

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Campaign } from '../../types/campaign';
import { adCreationSchema, AdCreationFormData } from '../../schemas/validation';
import PropertiesTable from '../PropertiesTable';

interface AdCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
  campaign: Campaign;
}

export default function AdCreationModal({ isOpen, onClose, campaign }: AdCreationModalProps) {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid },
    setValue,
    reset,
  } = useForm<AdCreationFormData>({
    resolver: zodResolver(adCreationSchema),
    defaultValues: {
      name: '',
      type: 'image',
      duration: 5,
      status: 'draft',
      targeting: {
        gender: [],
        ageGroups: [],
        weatherConditions: [],
        timeOfDay: [],
      },
      selectedProperties: [],
    },
    mode: 'onChange',
  });

  const watchedType = watch('type');

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

  const updateAdTypeFields = () => {
    const durationOptions = {
      image: [5, 10, 15],
      video: [10, 15, 30, 60],
      carousel: [15, 30, 45]
    };
    return durationOptions[watchedType] || [5, 10, 15];
  };

  const onSubmit = (data: AdCreationFormData) => {
    if (!uploadedFile) {
      alert('Please upload media for the ad');
      return;
    }
    
    console.log('Creating ad:', { ...data, uploadedFile });
    reset();
    setUploadedFile(null);
    onClose();
  };

  const saveAsDraft = handleSubmit((data) => {
    console.log('Saving ad as draft:', { ...data, uploadedFile });
    reset();
    setUploadedFile(null);
    onClose();
  });

  const handleClose = () => {
    reset();
    setUploadedFile(null);
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
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                Ad Name
              </label>
              <input
                {...register('name')}
                placeholder="Enter ad name"
                className={`px-4 py-3 bg-white/90 border-2 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-4 ${
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
                Ad Type
              </label>
              <select
                {...register('type', {
                  onChange: () => {
                    // Reset duration when type changes
                    const newDurations = updateAdTypeFields();
                    setValue('duration', newDurations[0]);
                  }
                })}
                className={`px-4 py-3 bg-white/90 border-2 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-4 ${
                  errors.type 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                    : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20'
                }`}
              >
                <option value="image">Image</option>
                <option value="video">Video</option>
                <option value="carousel">Carousel</option>
              </select>
              {errors.type && (
                <span className="text-red-500 text-xs font-medium">{errors.type.message}</span>
              )}
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                Duration
              </label>
              <select
                {...register('duration', { valueAsNumber: true })}
                className={`px-4 py-3 bg-white/90 border-2 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-4 ${
                  errors.duration 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                    : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20'
                }`}
              >
                {updateAdTypeFields().map((duration) => (
                  <option key={duration} value={duration}>{duration} seconds</option>
                ))}
              </select>
              {errors.duration && (
                <span className="text-red-500 text-xs font-medium">{errors.duration.message}</span>
              )}
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                Status
              </label>
              <select
                {...register('status')}
                className={`px-4 py-3 bg-white/90 border-2 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-4 ${
                  errors.status 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                    : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20'
                }`}
              >
                <option value="draft">Draft</option>
                <option value="active">Active</option>
                <option value="paused">Paused</option>
              </select>
              {errors.status && (
                <span className="text-red-500 text-xs font-medium">{errors.status.message}</span>
              )}
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
              <Controller
                name="targeting.gender"
                control={control}
                render={({ field }) => (
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
                            checked={field.value.includes(option.value as any)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                field.onChange([...field.value, option.value]);
                              } else {
                                field.onChange(field.value.filter((v: string) => v !== option.value));
                              }
                            }}
                            className="w-4 h-4 text-indigo-600 border-2 border-gray-300 rounded focus:ring-indigo-500"
                          />
                          <span className="text-xs font-medium">{option.label}</span>
                        </label>
                      ))}
                    </div>
                    {errors.targeting?.gender && (
                      <span className="text-red-500 text-xs font-medium">{errors.targeting.gender.message}</span>
                    )}
                  </div>
                )}
              />
              
              <Controller
                name="targeting.ageGroups"
                control={control}
                render={({ field }) => (
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
                            checked={field.value.includes(option.value as any)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                field.onChange([...field.value, option.value]);
                              } else {
                                field.onChange(field.value.filter((v: string) => v !== option.value));
                              }
                            }}
                            className="w-4 h-4 text-indigo-600 border-2 border-gray-300 rounded focus:ring-indigo-500"
                          />
                          <span className="text-xs font-medium">{option.label}</span>
                        </label>
                      ))}
                    </div>
                    {errors.targeting?.ageGroups && (
                      <span className="text-red-500 text-xs font-medium">{errors.targeting.ageGroups.message}</span>
                    )}
                  </div>
                )}
              />
              
              <Controller
                name="targeting.weatherConditions"
                control={control}
                render={({ field }) => (
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
                            checked={field.value.includes(option.value as any)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                field.onChange([...field.value, option.value]);
                              } else {
                                field.onChange(field.value.filter((v: string) => v !== option.value));
                              }
                            }}
                            className="w-4 h-4 text-indigo-600 border-2 border-gray-300 rounded focus:ring-indigo-500"
                          />
                          <span className="text-xs font-medium">{option.label}</span>
                        </label>
                      ))}
                    </div>
                    {errors.targeting?.weatherConditions && (
                      <span className="text-red-500 text-xs font-medium">{errors.targeting.weatherConditions.message}</span>
                    )}
                  </div>
                )}
              />
              
              <Controller
                name="targeting.timeOfDay"
                control={control}
                render={({ field }) => (
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
                            checked={field.value.includes(option.value as any)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                field.onChange([...field.value, option.value]);
                              } else {
                                field.onChange(field.value.filter((v: string) => v !== option.value));
                              }
                            }}
                            className="w-4 h-4 text-indigo-600 border-2 border-gray-300 rounded focus:ring-indigo-500"
                          />
                          <span className="text-xs font-medium">{option.label}</span>
                        </label>
                      ))}
                    </div>
                    {errors.targeting?.timeOfDay && (
                      <span className="text-red-500 text-xs font-medium">{errors.targeting.timeOfDay.message}</span>
                    )}
                  </div>
                )}
              />
            </div>
          </div>

          {/* Property Selection */}
          <Controller
            name="selectedProperties"
            control={control}
            render={({ field }) => (
              <div className="mb-8">
                <label className="block font-semibold text-gray-700 text-xs uppercase tracking-wider mb-4">
                  Select Properties for This Ad
                </label>
                <div className="max-h-80 overflow-y-auto border border-gray-200 rounded-2xl">
                  <PropertiesTable
                    properties={campaign.properties}
                    selectedProperties={field.value}
                    onSelectionChange={field.onChange}
                    showFilters={false}
                    showSelection={true}
                    showPagination={false}
                  />
                </div>
                {errors.selectedProperties && (
                  <span className="text-red-500 text-xs font-medium mt-2 block">{errors.selectedProperties.message}</span>
                )}
              </div>
            )}
          />

          {/* Action Buttons */}
          <div className="flex gap-4 justify-end pt-4 border-t border-gray-200">
            <button 
              type="button"
              onClick={handleClose}
              className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-2xl font-semibold text-xs transition-all duration-300 hover:bg-gray-50 hover:-translate-y-1 hover:shadow-lg"
            >
              Cancel
            </button>
            <button 
              type="button"
              onClick={saveAsDraft}
              className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-2xl font-semibold text-xs transition-all duration-300 hover:bg-gray-50 hover:-translate-y-1 hover:shadow-lg"
            >
              Save as Draft
            </button>
            <button 
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-2xl font-semibold text-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/40 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              Create & Activate Ad
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
