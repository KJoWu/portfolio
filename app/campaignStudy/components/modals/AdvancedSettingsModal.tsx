"use client";

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { advancedSettingsSchema, AdvancedSettingsFormData } from '../../schemas/validation';

interface AdvancedSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdvancedSettingsModal({ isOpen, onClose }: AdvancedSettingsModalProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset,
  } = useForm<AdvancedSettingsFormData>({
    resolver: zodResolver(advancedSettingsSchema),
    defaultValues: {
      frequencyCap: 3,
      dayparting: 'all-day',
      geoTargeting: 'all',
      deviceTargeting: 'all',
      attributionWindow: '7-day',
      conversionTracking: true,
      weatherTargeting: {
        temperatureRange: { min: undefined, max: undefined },
        conditions: [],
        humidity: 'any',
      },
      analytics: {
        customEvents: [],
        utmParameters: 'utm_source=campaign_studio',
        pixelTracking: 'google',
        abTesting: false,
      },
    },
    mode: 'onChange',
  });

  const onSubmit = (data: AdvancedSettingsFormData) => {
    console.log('Saving advanced settings:', data);
    onClose();
  };

  const handleReset = () => {
    reset();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex justify-between items-center mb-8 pb-4 border-b-2 border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900">Advanced Campaign Settings</h3>
          <button 
            onClick={onClose}
            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-600 transition-all duration-300 hover:scale-110"
          >
            ×
          </button>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                Frequency Cap
              </label>
              <input
                type="number"
                {...register('frequencyCap', { valueAsNumber: true })}
                placeholder="Max impressions per user"
                className={`px-4 py-3 bg-white/90 border-2 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-4 ${
                  errors.frequencyCap 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                    : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20'
                }`}
              />
              {errors.frequencyCap && (
                <span className="text-red-500 text-xs font-medium">{errors.frequencyCap.message}</span>
              )}
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                Dayparting
              </label>
              <select
                {...register('dayparting')}
                className={`px-4 py-3 bg-white/90 border-2 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-4 ${
                  errors.dayparting 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                    : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20'
                }`}
              >
                <option value="all-day">All Day</option>
                <option value="business-hours">Business Hours Only</option>
                <option value="evening">Evening Hours</option>
                <option value="custom">Custom Schedule</option>
              </select>
              {errors.dayparting && (
                <span className="text-red-500 text-xs font-medium">{errors.dayparting.message}</span>
              )}
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                Geo-targeting
              </label>
              <select
                {...register('geoTargeting')}
                className={`px-4 py-3 bg-white/90 border-2 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-4 ${
                  errors.geoTargeting 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                    : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20'
                }`}
              >
                <option value="all">All Locations</option>
                <option value="urban">Urban Areas Only</option>
                <option value="suburban">Suburban Areas</option>
                <option value="custom">Custom Geo-fence</option>
              </select>
              {errors.geoTargeting && (
                <span className="text-red-500 text-xs font-medium">{errors.geoTargeting.message}</span>
              )}
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                Device Targeting
              </label>
              <select
                {...register('deviceTargeting')}
                className={`px-4 py-3 bg-white/90 border-2 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-4 ${
                  errors.deviceTargeting 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                    : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20'
                }`}
              >
                <option value="all">All Devices</option>
                <option value="mobile">Mobile Only</option>
                <option value="desktop">Desktop Only</option>
                <option value="tablet">Tablet Only</option>
              </select>
              {errors.deviceTargeting && (
                <span className="text-red-500 text-xs font-medium">{errors.deviceTargeting.message}</span>
              )}
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                Attribution Window
              </label>
              <select
                {...register('attributionWindow')}
                className={`px-4 py-3 bg-white/90 border-2 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-4 ${
                  errors.attributionWindow 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                    : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20'
                }`}
              >
                <option value="1-day">1 Day</option>
                <option value="7-day">7 Days</option>
                <option value="30-day">30 Days</option>
                <option value="custom">Custom</option>
              </select>
              {errors.attributionWindow && (
                <span className="text-red-500 text-xs font-medium">{errors.attributionWindow.message}</span>
              )}
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                Conversion Tracking
              </label>
              <Controller
                name="conversionTracking"
                control={control}
                render={({ field }) => (
                  <select
                    value={field.value ? 'enabled' : 'disabled'}
                    onChange={(e) => field.onChange(e.target.value === 'enabled')}
                    className={`px-4 py-3 bg-white/90 border-2 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-4 ${
                      errors.conversionTracking 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                        : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20'
                    }`}
                  >
                    <option value="enabled">Enabled</option>
                    <option value="disabled">Disabled</option>
                  </select>
                )}
              />
              {errors.conversionTracking && (
                <span className="text-red-500 text-xs font-medium">{errors.conversionTracking.message}</span>
              )}
            </div>
          </div>

          {/* Weather-based Targeting */}
          <div className="bg-gradient-to-br from-green-50 to-cyan-50 border border-green-200 rounded-2xl p-6 mb-8">
            <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-cyan-500 rounded-full"></div>
              Weather-Based Targeting
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                  Temperature Range
                </label>
                <div className="flex gap-4 items-center">
                  <Controller
                    name="weatherTargeting.temperatureRange.min"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="number"
                        placeholder="Min °C"
                        value={field.value || ''}
                        onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                        className="w-24 px-3 py-2 bg-white border-2 border-gray-300 rounded-xl text-xs font-medium focus:outline-none focus:border-indigo-500"
                      />
                    )}
                  />
                  <span className="text-gray-500 font-medium">to</span>
                  <Controller
                    name="weatherTargeting.temperatureRange.max"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="number"
                        placeholder="Max °C"
                        value={field.value || ''}
                        onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                        className="w-24 px-3 py-2 bg-white border-2 border-gray-300 rounded-xl text-xs font-medium focus:outline-none focus:border-indigo-500"
                      />
                    )}
                  />
                </div>
                {errors.weatherTargeting?.temperatureRange?.max && (
                  <span className="text-red-500 text-xs font-medium">{errors.weatherTargeting.temperatureRange.max.message}</span>
                )}
              </div>
              
              <Controller
                name="weatherTargeting.conditions"
                control={control}
                render={({ field }) => (
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                      Weather Conditions
                    </label>
                    <div className="flex gap-3 mt-2 flex-wrap">
                      {[
                        { value: 'sunny', label: '☀️ Sunny' },
                        { value: 'cloudy', label: '⛅ Cloudy' },
                        { value: 'rainy', label: '🌧️ Rainy' },
                        { value: 'snowy', label: '❄️ Snowy' }
                      ].map(condition => (
                        <label key={condition.value} className="flex items-center gap-2 cursor-pointer bg-white/70 px-3 py-2 rounded-xl hover:bg-white transition-all duration-300">
                          <input
                            type="checkbox"
                            checked={field.value.includes(condition.value as any)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                field.onChange([...field.value, condition.value]);
                              } else {
                                field.onChange(field.value.filter((v: string) => v !== condition.value));
                              }
                            }}
                            className="w-4 h-4 text-indigo-600 border-2 border-gray-300 rounded focus:ring-indigo-500"
                          />
                          <span className="text-xs font-medium">{condition.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              />
              
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                  Humidity Level
                </label>
                <select
                  {...register('weatherTargeting.humidity')}
                  className={`px-4 py-3 bg-white border-2 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-4 ${
                    errors.weatherTargeting?.humidity 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                      : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20'
                  }`}
                >
                  <option value="any">Any Humidity</option>
                  <option value="low">Low (0-40%)</option>
                  <option value="medium">Medium (40-70%)</option>
                  <option value="high">High (70-100%)</option>
                </select>
                {errors.weatherTargeting?.humidity && (
                  <span className="text-red-500 text-xs font-medium">{errors.weatherTargeting.humidity.message}</span>
                )}
              </div>
            </div>
          </div>

          {/* Advanced Analytics */}
          <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 border border-indigo-200 rounded-2xl p-6 mb-8">
            <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-cyan-500 rounded-full"></div>
              Advanced Analytics
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Controller
                name="analytics.customEvents"
                control={control}
                render={({ field }) => (
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                      Custom Events Tracking
                    </label>
                    <input
                      type="text"
                      placeholder="Enter custom event names"
                      value={field.value.join(', ')}
                      onChange={(e) => field.onChange(e.target.value.split(', ').filter(Boolean))}
                      className="px-4 py-3 bg-white border-2 border-gray-300 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
                    />
                  </div>
                )}
              />
              
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                  UTM Parameters
                </label>
                <input
                  type="text"
                  {...register('analytics.utmParameters')}
                  className={`px-4 py-3 bg-white border-2 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-4 ${
                    errors.analytics?.utmParameters 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                      : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20'
                  }`}
                />
                {errors.analytics?.utmParameters && (
                  <span className="text-red-500 text-xs font-medium">{errors.analytics.utmParameters.message}</span>
                )}
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                  Pixel Tracking
                </label>
                <select
                  {...register('analytics.pixelTracking')}
                  className={`px-4 py-3 bg-white border-2 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-4 ${
                    errors.analytics?.pixelTracking 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                      : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20'
                  }`}
                >
                  <option value="facebook">Facebook Pixel</option>
                  <option value="google">Google Analytics</option>
                  <option value="custom">Custom Pixel</option>
                  <option value="none">No Tracking</option>
                </select>
                {errors.analytics?.pixelTracking && (
                  <span className="text-red-500 text-xs font-medium">{errors.analytics.pixelTracking.message}</span>
                )}
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
                  A/B Testing
                </label>
                <Controller
                  name="analytics.abTesting"
                  control={control}
                  render={({ field }) => (
                    <select
                      value={field.value ? 'enabled' : 'disabled'}
                      onChange={(e) => field.onChange(e.target.value === 'enabled')}
                      className={`px-4 py-3 bg-white border-2 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-4 ${
                        errors.analytics?.abTesting 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                          : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20'
                      }`}
                    >
                      <option value="disabled">Disabled</option>
                      <option value="enabled">Enabled</option>
                    </select>
                  )}
                />
                {errors.analytics?.abTesting && (
                  <span className="text-red-500 text-xs font-medium">{errors.analytics.abTesting.message}</span>
                )}
              </div>
            </div>
          </div>

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
              onClick={handleReset}
              className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-2xl font-semibold text-xs transition-all duration-300 hover:bg-gray-50 hover:-translate-y-1 hover:shadow-lg"
            >
              Reset to Defaults
            </button>
            <button 
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-2xl font-semibold text-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/40 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              Save Advanced Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
