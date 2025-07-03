"use client";

import { useState } from 'react';
import { Property } from '../types/campaign';

interface PropertiesTableProps {
  properties: Property[];
  selectedProperties?: string[];
  onSelectionChange?: (selectedIds: string[]) => void;
  showFilters?: boolean;
  showSelection?: boolean;
  showPagination?: boolean;
}

export default function PropertiesTable({ 
  properties, 
  selectedProperties = [], 
  onSelectionChange,
  showFilters = true,
  showSelection = true,
  showPagination = true 
}: PropertiesTableProps) {
  const [filters, setFilters] = useState({
    id: '',
    name: '',
    city: '',
    province: '',
    screens: '',
    circulation: '',
    cpm: '',
    status: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredProperties = properties.filter(property => {
    return (
      property.id.toLowerCase().includes(filters.id.toLowerCase()) &&
      property.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      property.city.toLowerCase().includes(filters.city.toLowerCase()) &&
      property.province.toLowerCase().includes(filters.province.toLowerCase()) &&
      property.screens.toString().includes(filters.screens) &&
      property.dailyCirculation.toString().includes(filters.circulation) &&
      property.cpmRate.toString().includes(filters.cpm) &&
      (filters.status === '' || property.status === filters.status)
    );
  });

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProperties = filteredProperties.slice(startIndex, startIndex + itemsPerPage);

  const handleSelectAll = (checked: boolean) => {
    if (onSelectionChange) {
      if (checked) {
        const allIds = filteredProperties.map(p => p.id);
        onSelectionChange(Array.from(new Set([...selectedProperties, ...allIds])));
      } else {
        const filteredIds = filteredProperties.map(p => p.id);
        onSelectionChange(selectedProperties.filter(id => !filteredIds.includes(id)));
      }
    }
  };

  const handleSelectProperty = (propertyId: string, checked: boolean) => {
    if (onSelectionChange) {
      if (checked) {
        onSelectionChange([...selectedProperties, propertyId]);
      } else {
        onSelectionChange(selectedProperties.filter(id => id !== propertyId));
      }
    }
  };

  const isAllSelected = filteredProperties.length > 0 && 
    filteredProperties.every(p => selectedProperties.includes(p.id));

  const StatusBadge = ({ status }: { status: 'active' | 'maintenance' }) => (
    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
      status === 'active' 
        ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' 
        : 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white'
    }`}>
      {status}
    </span>
  );

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <table className="w-full">
        <thead>
          <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
            {showSelection && (
              <th className="px-3 py-4 text-left">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="w-5 h-5 text-indigo-600 border-2 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2"
                />
              </th>
            )}
            <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">
              Property ID
              {showFilters && (
                <input
                  type="text"
                  placeholder="Filter by ID"
                  value={filters.id}
                  onChange={(e) => setFilters(prev => ({ ...prev, id: e.target.value }))}
                  className="w-full mt-2 px-2 py-1 bg-white/90 border border-gray-300 rounded-md text-xs font-medium text-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              )}
            </th>
            <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">
              Property Name
              {showFilters && (
                <input
                  type="text"
                  placeholder="Filter by name"
                  value={filters.name}
                  onChange={(e) => setFilters(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full mt-2 px-2 py-1 bg-white/90 border border-gray-300 rounded-md text-xs font-medium text-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              )}
            </th>
            <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">
              City
              {showFilters && (
                <input
                  type="text"
                  placeholder="Filter by city"
                  value={filters.city}
                  onChange={(e) => setFilters(prev => ({ ...prev, city: e.target.value }))}
                  className="w-full mt-2 px-2 py-1 bg-white/90 border border-gray-300 rounded-md text-xs font-medium text-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              )}
            </th>
            <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">
              Province
              {showFilters && (
                <input
                  type="text"
                  placeholder="Filter by province"
                  value={filters.province}
                  onChange={(e) => setFilters(prev => ({ ...prev, province: e.target.value }))}
                  className="w-full mt-2 px-2 py-1 bg-white/90 border border-gray-300 rounded-md text-xs font-medium text-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              )}
            </th>
            <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">
              Screens
              {showFilters && (
                <input
                  type="text"
                  placeholder="Filter by screens"
                  value={filters.screens}
                  onChange={(e) => setFilters(prev => ({ ...prev, screens: e.target.value }))}
                  className="w-full mt-2 px-2 py-1 bg-white/90 border border-gray-300 rounded-md text-xs font-medium text-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              )}
            </th>
            <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">
              Daily Circulation
              {showFilters && (
                <input
                  type="text"
                  placeholder="Filter by circulation"
                  value={filters.circulation}
                  onChange={(e) => setFilters(prev => ({ ...prev, circulation: e.target.value }))}
                  className="w-full mt-2 px-2 py-1 bg-white/90 border border-gray-300 rounded-md text-xs font-medium text-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              )}
            </th>
            <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">
              CPM Rate
              {showFilters && (
                <input
                  type="text"
                  placeholder="Filter by CPM"
                  value={filters.cpm}
                  onChange={(e) => setFilters(prev => ({ ...prev, cpm: e.target.value }))}
                  className="w-full mt-2 px-2 py-1 bg-white/90 border border-gray-300 rounded-md text-xs font-medium text-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              )}
            </th>
            <th className="px-3 py-4 text-left font-bold text-gray-700 text-xs uppercase tracking-wider">
              Status
              {showFilters && (
                <select
                  value={filters.status}
                  onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
                  className="w-full mt-2 px-2 py-1 bg-white/90 border border-gray-300 rounded-md text-xs font-medium text-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                >
                  <option value="">All Status</option>
                  <option value="active">Active</option>
                  <option value="maintenance">Maintenance</option>
                </select>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedProperties.map((property) => (
            <tr 
              key={property.id} 
              className="hover:bg-gradient-to-r hover:from-indigo-50/20 hover:to-cyan-50/20 transition-all duration-200"
            >
              {showSelection && (
                <td className="px-3 py-4">
                  <input
                    type="checkbox"
                    checked={selectedProperties.includes(property.id)}
                    onChange={(e) => handleSelectProperty(property.id, e.target.checked)}
                    className="w-5 h-5 text-indigo-600 border-2 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2"
                  />
                </td>
              )}
              <td className="px-3 py-4 text-xs font-medium text-gray-600">{property.id}</td>
              <td className="px-3 py-4 text-xs font-medium text-gray-600">{property.name}</td>
              <td className="px-3 py-4 text-xs font-medium text-gray-600">{property.city}</td>
              <td className="px-3 py-4 text-xs font-medium text-gray-600">{property.province}</td>
              <td className="px-3 py-4 text-xs font-medium text-gray-600">{property.screens}</td>
              <td className="px-3 py-4 text-xs font-medium text-gray-600">{property.dailyCirculation.toLocaleString()}</td>
              <td className="px-3 py-4 text-xs font-medium text-gray-600">${property.cpmRate.toFixed(2)}</td>
              <td className="px-3 py-4">
                <StatusBadge status={property.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {showPagination && totalPages > 1 && (
        <div className="flex justify-between items-center px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="text-gray-500 font-medium text-xs">
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredProperties.length)} of {filteredProperties.length} properties
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg font-semibold text-xs transition-all duration-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg font-semibold text-xs transition-all duration-300 ${
                    page === currentPage
                      ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-indigo-500 hover:text-indigo-500 hover:-translate-y-0.5'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg font-semibold text-xs transition-all duration-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
