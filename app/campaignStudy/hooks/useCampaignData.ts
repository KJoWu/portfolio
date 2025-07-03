import { useState } from 'react';
import { Campaign } from '../types/campaign';

const mockCampaignData: Campaign = {
  id: '1',
  name: 'Summer Campaign',
  advertiser: 'Fashion Brand Inc.',
  owner: 'Alex Smith',
  type: 'seasonal',
  budget: 50000,
  targetAudience: 'Young Adults (18-35)',
  priority: 'standard',
  notes: '',
  status: 'ready',
  startDate: '2025-07-01',
  endDate: '2025-08-31',
  totalCost: 20921.60,
  savings: 5000,
  flights: [
    {
      id: 'flight-1',
      name: 'Beachwear Collection',
      startDate: '2025-07-01',
      endDate: '2025-07-31',
      fullScreen: false,
      adLength: 5,
      discount: 5000,
      status: 'active',
      ads: [
        {
          id: 'ad-1',
          name: 'Trendy Swimwear Sale',
          type: 'image',
          duration: 5,
          status: 'active',
          mediaUrl: 'https://plus.unsplash.com/premium_photo-1683147684969-2e48d5ad43c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          targeting: {
            gender: ['male'],
            ageGroups: ['young-adults'],
            weatherConditions: ['sunny', 'cloudy'],
            timeOfDay: ['morning', 'afternoon'],
          },
          properties: ['101', '102', '103'],
          screens: 18,
        },
        {
          id: 'ad-2',
          name: 'Beach Bags Flash Sale',
          type: 'video',
          duration: 10,
          status: 'draft',
          mediaUrl: 'https://images.unsplash.com/photo-1624281043172-16ff234c2a14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          targeting: {
            gender: ['male', 'female'],
            ageGroups: ['adults'],
            weatherConditions: ['sunny'],
            timeOfDay: ['afternoon'],
          },
          properties: ['101', '102'],
          screens: 12,
        },
        {
          id: 'ad-3',
          name: 'Sunglasses Promo',
          type: 'image',
          duration: 5,
          status: 'active',
          mediaUrl: 'https://images.unsplash.com/photo-1654370488609-02aa42d7a639?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          targeting: {
            gender: ['female'],
            ageGroups: ['adults'],
            weatherConditions: ['sunny'],
            timeOfDay: ['evening'],
          },
          properties: ['103'],
          screens: 8,
        },
      ],
      selectedProperties: ['101', '102', '103'],
      cost: 2921.60,
      stats: {
        properties: 3,
        screens: 18,
        impressions: 56500,
        circulation: 56500,
        cpm: 12.08,
        rateCard: 2921.60,
        cost: 2921.60,
        savings: 0,
      },
    },
    {
      id: 'flight-2',
      name: 'Summer Dresses Collection',
      startDate: '2025-08-01',
      endDate: '2025-08-31',
      fullScreen: false,
      adLength: 8,
      discount: 0,
      status: 'draft',
      ads: [],
      selectedProperties: [],
      cost: 0,
      stats: {
        properties: 0,
        screens: 0,
        impressions: 0,
        circulation: 0,
        cpm: 0,
        rateCard: 0,
        cost: 0,
        savings: 0,
      },
    },
    {
      id: 'flight-3',
      name: 'Summer Footwear Flash Sale',
      startDate: '2025-08-15',
      endDate: '2025-08-31',
      fullScreen: true,
      adLength: 10,
      discount: 0,
      status: 'draft',
      ads: [],
      selectedProperties: [],
      cost: 0,
      stats: {
        properties: 0,
        screens: 0,
        impressions: 0,
        circulation: 0,
        cpm: 0,
        rateCard: 0,
        cost: 0,
        savings: 0,
      },
    },
  ],
  properties: [
    {
      id: '101',
      name: 'Downtown Mall',
      city: 'Calgary',
      province: 'AB',
      screens: 4,
      dailyCirculation: 12500,
      cpmRate: 8.50,
      status: 'active',
      cost: 425.00,
    },
    {
      id: '102',
      name: 'Transit Hub Center',
      city: 'Calgary',
      province: 'AB',
      screens: 6,
      dailyCirculation: 18200,
      cpmRate: 12.00,
      status: 'active',
      cost: 873.60,
    },
    {
      id: '103',
      name: 'Airport Terminal',
      city: 'Calgary',
      province: 'AB',
      screens: 8,
      dailyCirculation: 25800,
      cpmRate: 15.75,
      status: 'active',
      cost: 1623.00,
    },
    {
      id: '104',
      name: 'University Campus',
      city: 'Edmonton',
      province: 'AB',
      screens: 3,
      dailyCirculation: 8900,
      cpmRate: 6.25,
      status: 'active',
    },
    {
      id: '105',
      name: 'Shopping District',
      city: 'Edmonton',
      province: 'AB',
      screens: 5,
      dailyCirculation: 14300,
      cpmRate: 9.80,
      status: 'maintenance',
    },
    {
      id: '106',
      name: 'Business District',
      city: 'Vancouver',
      province: 'BC',
      screens: 7,
      dailyCirculation: 22100,
      cpmRate: 18.50,
      status: 'active',
    },
    {
      id: '107',
      name: 'Waterfront Plaza',
      city: 'Vancouver',
      province: 'BC',
      screens: 4,
      dailyCirculation: 16700,
      cpmRate: 14.25,
      status: 'active',
    },
    {
      id: '108',
      name: 'Metro Station',
      city: 'Toronto',
      province: 'ON',
      screens: 12,
      dailyCirculation: 35600,
      cpmRate: 22.75,
      status: 'active',
    },
  ],
};

export function useCampaignData() {
  const [campaignData, setCampaignData] = useState<Campaign>(mockCampaignData);

  const updateCampaign = (updates: Partial<Campaign>) => {
    setCampaignData(prev => ({
      ...prev,
      ...updates,
    }));
  };

  const updateFlight = (flightId: string, updates: any) => {
    setCampaignData(prev => ({
      ...prev,
      flights: prev.flights.map(flight =>
        flight.id === flightId ? { ...flight, ...updates } : flight
      ),
    }));
  };

  const addAd = (flightId: string, ad: any) => {
    setCampaignData(prev => ({
      ...prev,
      flights: prev.flights.map(flight =>
        flight.id === flightId
          ? { ...flight, ads: [...flight.ads, ad] }
          : flight
      ),
    }));
  };

  const updateAd = (flightId: string, adId: string, updates: any) => {
    setCampaignData(prev => ({
      ...prev,
      flights: prev.flights.map(flight =>
        flight.id === flightId
          ? {
              ...flight,
              ads: flight.ads.map(ad =>
                ad.id === adId ? { ...ad, ...updates } : ad
              ),
            }
          : flight
      ),
    }));
  };

  const deleteAd = (flightId: string, adId: string) => {
    setCampaignData(prev => ({
      ...prev,
      flights: prev.flights.map(flight =>
        flight.id === flightId
          ? {
              ...flight,
              ads: flight.ads.filter(ad => ad.id !== adId),
            }
          : flight
      ),
    }));
  };

  return {
    campaignData,
    updateCampaign,
    updateFlight,
    addAd,
    updateAd,
    deleteAd,
  };
}
