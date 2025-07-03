"use client";

import { useState } from 'react';
import { Campaign, Flight, Ad } from '../types/campaign';
import PropertiesTable from './PropertiesTable';

interface FlightManagementProps {
  campaign: Campaign;
  onCreateAd: () => void;
  onUpdateCampaign: (updates: Partial<Campaign>) => void;
}

export default function FlightManagement({ 
  campaign, 
  onCreateAd, 
  onUpdateCampaign 
}: FlightManagementProps) {
  const [activeFlightIndex, setActiveFlightIndex] = useState(0);
  const activeFlight = campaign.flights[activeFlightIndex];

  const handleFlightUpdate = (flightId: string, updates: Partial<Flight>) => {
    const updatedFlights = campaign.flights.map(flight =>
      flight.id === flightId ? { ...flight, ...updates } : flight
    );
    onUpdateCampaign({ flights: updatedFlights });
  };

  const handleDeleteAd = (adId: string) => {
    const updatedAds = activeFlight.ads.filter(ad => ad.id !== adId);
    handleFlightUpdate(activeFlight.id, { ads: updatedAds });
  };

  const getGenderBadges = (genders: string[]) => {
    return genders.map(gender => (
      <span 
        key={gender}
        className={`px-2 py-1 rounded-xl text-xs font-semibold mr-1 ${
          gender === 'male' ? 'bg-blue-100 text-blue-800' :
          gender === 'female' ? 'bg-pink-100 text-pink-800' :
          'bg-purple-100 text-purple-800'
        }`}
      >
        {gender === 'male' ? 'M' : gender === 'female' ? 'F' : 'All'}
      </span>
    ));
  };

  const getWeatherIcons = (conditions: string[]) => {
    const iconMap: { [key: string]: string } = {
      sunny: '☀️',
      cloudy: '⛅',
      rainy: '🌧️',
      snowy: '❄️'
    };
    return conditions.map(condition => iconMap[condition] || '🌤️').join(' ');
  };

  const StatusBadge = ({ status }: { status: string }) => (
    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
      status === 'active' ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' :
      status === 'draft' ? 'bg-gradient-to-r from-gray-500 to-gray-600 text-white' :
      'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white'
    }`}>
      {status}
    </span>
  );

  return (
    <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl p-6 mb-6 shadow-xl">
      <div className="flex justify-between items-start mb-6 pb-4 border-b-2 border-indigo-100">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-4">
            <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-cyan-500 rounded-full"></div>
            Track Management
          </h2>
          <p className="text-gray-500 font-medium leading-relaxed">
            Configure individual track with specific targeting and scheduling
          </p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-2xl font-semibold text-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/40 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
          Create New Track
        </button>
      </div>

      {/* Flight Tabs */}
      <div className="flex gap-2 mb-6 bg-white/70 p-2 rounded-2xl backdrop-blur-xl">
        {campaign.flights.map((flight, index) => (
          <button
            key={flight.id}
            onClick={() => setActiveFlightIndex(index)}
            className={`px-6 py-3 rounded-xl font-semibold text-xs transition-all duration-300 relative ${
              index === activeFlightIndex
                ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
            }`}
          >
            {flight.name}
          </button>
        ))}
      </div>

      {/* Flight Configuration */}
      <div className="bg-white/90 backdrop-blur-xl border border-white/30 rounded-2xl p-6 mb-6 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-gray-900">
            Track {activeFlightIndex + 1}: {activeFlight.name}
          </h3>
          <div className="flex gap-3">
            <button 
              onClick={onCreateAd}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-2xl font-semibold text-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/40 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              <span className="mr-2">+</span>Create Ad
            </button>
            <button className="px-6 py-3 bg-white/90 text-gray-700 border border-white/30 backdrop-blur-xl rounded-2xl font-semibold text-xs transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg">
              Reset
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-semibold text-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/40">
              Delete
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
              Track Name
            </label>
            <input
              type="text"
              value={activeFlight.name}
              onChange={(e) => handleFlightUpdate(activeFlight.id, { name: e.target.value })}
              className="px-4 py-3 bg-white/90 border-2 border-gray-300 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 backdrop-blur-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 focus:bg-white"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
              Start Date
            </label>
            <input
              type="date"
              value={activeFlight.startDate}
              onChange={(e) => handleFlightUpdate(activeFlight.id, { startDate: e.target.value })}
              className="px-4 py-3 bg-white/90 border-2 border-gray-300 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 backdrop-blur-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 focus:bg-white"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
              End Date
            </label>
            <input
              type="date"
              value={activeFlight.endDate}
              onChange={(e) => handleFlightUpdate(activeFlight.id, { endDate: e.target.value })}
              className="px-4 py-3 bg-white/90 border-2 border-gray-300 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 backdrop-blur-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 focus:bg-white"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
              Full Screen
            </label>
            <select
              value={activeFlight.fullScreen ? 'Yes' : 'No'}
              onChange={(e) => handleFlightUpdate(activeFlight.id, { fullScreen: e.target.value === 'Yes' })}
              className="px-4 py-3 bg-white/90 border-2 border-gray-300 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 backdrop-blur-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 focus:bg-white"
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700 text-xs uppercase tracking-wider">
              Ad Length
            </label>
            <select
              value={`${activeFlight.adLength} seconds`}
              onChange={(e) => handleFlightUpdate(activeFlight.id, { adLength: parseInt(e.target.value) })}
              className="px-4 py-3 bg-white/90 border-2 border-gray-300 rounded-2xl text-gray-900 text-xs font-medium transition-all duration-300 backdrop-blur-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 focus:bg-white"
            >
              <option value="5">5 seconds</option>
              <option value="10">10 seconds</option>
              <option value="15">15 seconds</option>
            </select>
          </div>

        </div>

        {/* Flight Ads Table */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-bold text-gray-900">Track Ads</h4>
            <button 
              onClick={onCreateAd}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-2xl font-semibold text-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/40"
            >
              <span className="mr-2">+</span>Add New Ad
            </button>
          </div>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">Status</th>
                  <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">Ad Name</th>
                  <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">Type</th>
                  <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">Duration</th>
                  <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">Preview</th>
                  <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">Gender Target</th>
                  <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">Age Target</th>
                  <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">Weather</th>
                  <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">Properties</th>
                  <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">Screens</th>
                  <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {activeFlight.ads.map((ad) => (
                  <tr 
                    key={ad.id}
                    className="hover:bg-gradient-to-r hover:from-indigo-50/20 hover:to-cyan-50/20 transition-all duration-200"
                  >
                    <td className="px-3 py-4">
                      <StatusBadge status={ad.status} />
                    </td>
                    <td className="px-3 py-4 text-xs font-medium text-gray-600">{ad.name}</td>
                    <td className="px-3 py-4 text-xs font-medium text-gray-600 capitalize">{ad.type}</td>
                    <td className="px-3 py-4 text-xs font-medium text-gray-600">{ad.duration}s</td>
                    <td className="px-3 py-4">
                      {ad.mediaUrl && (
                        <div className="relative">
                          <img 
                            src={ad.mediaUrl} 
                            alt={ad.name}
                            className="w-15 h-10 rounded-lg object-cover shadow-sm"
                          />
                          {ad.type === 'video' && (
                            <div className="absolute top-1 right-1 bg-black/70 text-white px-1 py-0.5 rounded text-xs font-semibold">
                              ▶
                            </div>
                          )}
                        </div>
                      )}
                    </td>
                    <td className="px-3 py-4">
                      <div className="flex gap-1">
                        {getGenderBadges(ad.targeting.gender)}
                      </div>
                    </td>
                    <td className="px-3 py-4 text-xs font-medium text-gray-600">
                      {ad.targeting.ageGroups.includes('young-adults') ? '18-35' :
                       ad.targeting.ageGroups.includes('adults') ? '25-45' : '28-50'}
                    </td>
                    <td className="px-3 py-4 text-base">
                      {getWeatherIcons(ad.targeting.weatherConditions)}
                    </td>
                    <td className="px-3 py-4 text-xs font-medium text-gray-600">{ad.properties.length}</td>
                    <td className="px-3 py-4 text-xs font-medium text-gray-600">{ad.screens}</td>
                    <td className="px-3 py-4">
                      <div className="flex gap-2">
                        <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs font-semibold transition-all duration-300 hover:bg-gray-200 hover:-translate-y-0.5">
                          Edit
                        </button>
                        <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs font-semibold transition-all duration-300 hover:bg-gray-200 hover:-translate-y-0.5">
                          Copy
                        </button>
                        <button 
                          onClick={() => handleDeleteAd(ad.id)}
                          className="px-3 py-1.5 bg-red-500 text-white rounded-lg text-xs font-semibold transition-all duration-300 hover:bg-red-600 hover:-translate-y-0.5"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selected Properties for Flight */}
        <div className="mt-8">
          <h4 className="text-lg font-bold mb-4 text-gray-900">Selected Properties for This Flight</h4>
          <PropertiesTable
            properties={campaign.properties.filter(p => activeFlight.selectedProperties.includes(p.id))}
            showFilters={true}
            showSelection={false}
            showPagination={false}
          />
        </div>
      </div>

      {/* Flight Summary */}
      <div className="bg-gradient-to-br from-green-50/50 to-cyan-50/50 border border-green-200/50 rounded-2xl p-6 backdrop-blur-xl">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-xl font-bold text-gray-900">Track Performance Summary</h4>
          <div className="px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-500 text-white rounded-2xl text-base font-bold">
            ${activeFlight.cost.toLocaleString()}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-white/70 p-4 rounded-xl text-center">
            <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Properties</div>
            <div className="text-gray-900 text-base font-bold">{activeFlight.stats.properties}</div>
          </div>
          <div className="bg-white/70 p-4 rounded-xl text-center">
            <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Ad Length</div>
            <div className="text-gray-900 text-base font-bold">{activeFlight.adLength}s</div>
          </div>
          <div className="bg-white/70 p-4 rounded-xl text-center">
            <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Rate Card</div>
            <div className="text-gray-900 text-base font-bold">${activeFlight.stats.rateCard.toLocaleString()}</div>
          </div>
          <div className="bg-white/70 p-4 rounded-xl text-center">
            <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Current Rate</div>
            <div className="text-gray-900 text-base font-bold">${activeFlight.stats.cost.toLocaleString()}</div>
          </div>
          <div className="bg-white/70 p-4 rounded-xl text-center">
            <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Full Screen</div>
            <div className="text-gray-900 text-base font-bold">{activeFlight.fullScreen ? 'Yes' : 'No'}</div>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">City</th>
                <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">Properties</th>
                <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">Active Screens</th>
                <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">Impressions</th>
                <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">Circulation</th>
                <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">Rate Card</th>
                <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">Cost</th>
                <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gradient-to-r hover:from-indigo-50/20 hover:to-cyan-50/20">
                <td className="px-3 py-4 text-xs font-medium text-gray-600">Calgary</td>
                <td className="px-3 py-4 text-xs font-medium text-gray-600">{activeFlight.stats.properties}</td>
                <td className="px-3 py-4 text-xs font-medium text-gray-600">{activeFlight.stats.screens}</td>
                <td className="px-3 py-4 text-xs font-medium text-gray-600">{activeFlight.stats.impressions.toLocaleString()}</td>
                <td className="px-3 py-4 text-xs font-medium text-gray-600">{activeFlight.stats.circulation.toLocaleString()}</td>
                <td className="px-3 py-4 text-xs font-medium text-gray-600">${activeFlight.stats.cpm.toFixed(2)}</td>
                <td className="px-3 py-4 text-xs font-medium text-gray-600">${activeFlight.stats.cost.toLocaleString()}</td>
                <td className="px-3 py-4 text-xs font-medium text-gray-600">${activeFlight.stats.savings.toFixed(2)}</td>
              </tr>
              <tr className="bg-gradient-to-r from-indigo-50/50 to-cyan-50/50 font-bold">
                <td className="px-3 py-4 text-xs font-bold text-gray-900">TOTAL</td>
                <td className="px-3 py-4 text-xs font-bold text-gray-900">{activeFlight.stats.properties}</td>
                <td className="px-3 py-4 text-xs font-bold text-gray-900">{activeFlight.stats.screens}</td>
                <td className="px-3 py-4 text-xs font-bold text-gray-900">{activeFlight.stats.impressions.toLocaleString()}</td>
                <td className="px-3 py-4 text-xs font-bold text-gray-900">{activeFlight.stats.circulation.toLocaleString()}</td>
                <td className="px-3 py-4 text-xs font-bold text-gray-900">${activeFlight.stats.cpm.toFixed(2)}</td>
                <td className="px-3 py-4 text-xs font-bold text-gray-900">${activeFlight.stats.cost.toLocaleString()}</td>
                <td className="px-3 py-4 text-xs font-bold text-gray-900">${activeFlight.stats.savings.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
