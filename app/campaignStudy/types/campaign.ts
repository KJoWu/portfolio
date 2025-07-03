export interface Campaign {
  id: string;
  name: string;
  advertiser: string;
  owner: string;
  type: 'branding' | 'sales' | 'seasonal';
  budget: number;
  targetAudience: string;
  priority: 'standard' | 'high' | 'urgent';
  notes?: string;
  status: 'draft' | 'ready' | 'active' | 'paused' | 'completed';
  startDate: string;
  endDate: string;
  totalCost: number;
  savings: number;
  flights: Flight[];
  properties: Property[];
}

export interface Flight {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  fullScreen: boolean;
  adLength: number;
  discount: number;
  status: 'draft' | 'active' | 'paused';
  ads: Ad[];
  selectedProperties: string[];
  cost: number;
  stats: FlightStats;
}

export interface FlightStats {
  properties: number;
  screens: number;
  impressions: number;
  circulation: number;
  cpm: number;
  rateCard: number;
  cost: number;
  savings: number;
}

export interface Property {
  id: string;
  name: string;
  city: string;
  province: string;
  screens: number;
  dailyCirculation: number;
  cpmRate: number;
  status: 'active' | 'maintenance';
  cost?: number;
}

export interface Ad {
  id: string;
  name: string;
  type: 'image' | 'video' | 'carousel';
  duration: number;
  status: 'draft' | 'active' | 'paused';
  mediaUrl?: string;
  targeting: AdTargeting;
  properties: string[];
  screens: number;
}

export interface AdTargeting {
  gender: ('male' | 'female' | 'all')[];
  ageGroups: ('young-adults' | 'adults' | 'seniors')[];
  weatherConditions: ('sunny' | 'cloudy' | 'rainy' | 'snowy')[];
  timeOfDay: ('morning' | 'afternoon' | 'evening' | 'night')[];
  customAgeRange?: {
    min: number;
    max: number;
  };
}

export interface CampaignStats {
  campaignDates: string;
  duration: number;
  activeScreens: number;
  properties: number;
  avgAdLength: number;
  flightCount: number;
  avgCpm: number;
}

export interface AdvancedSettings {
  frequencyCap: number;
  dayparting: 'all-day' | 'business-hours' | 'evening' | 'custom';
  geoTargeting: 'all' | 'urban' | 'suburban' | 'custom';
  deviceTargeting: 'all' | 'mobile' | 'desktop' | 'tablet';
  attributionWindow: '1-day' | '7-day' | '30-day' | 'custom';
  conversionTracking: boolean;
  weatherTargeting: WeatherTargeting;
  analytics: AnalyticsSettings;
}

export interface WeatherTargeting {
  temperatureRange: {
    min?: number;
    max?: number;
  };
  conditions: ('sunny' | 'cloudy' | 'rainy' | 'snowy')[];
  humidity: 'any' | 'low' | 'medium' | 'high';
}

export interface AnalyticsSettings {
  customEvents: string[];
  utmParameters: string;
  pixelTracking: 'facebook' | 'google' | 'custom' | 'none';
  abTesting: boolean;
}

export interface TableFilter {
  column: string;
  value: string;
}

export interface ModalState {
  adCreation: boolean;
}
