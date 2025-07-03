import { z } from 'zod';

// Campaign Configuration Schema
export const campaignConfigSchema = z.object({
  name: z.string().min(1, 'Campaign name is required').max(100, 'Campaign name must be less than 100 characters'),
  advertiser: z.string().min(1, 'Advertiser is required'),
  owner: z.string().min(1, 'Campaign owner is required'),
  type: z.enum(['branding', 'sales', 'seasonal'], {
    required_error: 'Campaign type is required',
  }),
  budget: z.number().min(0, 'Budget must be a positive number'),
  targetAudience: z.string().min(1, 'Target audience is required'),
  priority: z.enum(['standard', 'high', 'urgent'], {
    required_error: 'Priority level is required',
  }),
  notes: z.string().optional(),
});

export type CampaignConfigFormData = z.infer<typeof campaignConfigSchema>;

// Flight Configuration Schema
export const flightConfigSchema = z.object({
  name: z.string().min(1, 'Flight name is required').max(100, 'Flight name must be less than 100 characters'),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().min(1, 'End date is required'),
  fullScreen: z.boolean(),
  adLength: z.number().min(1, 'Ad length must be at least 1 second').max(120, 'Ad length must be less than 120 seconds'),
  discount: z.number().min(0, 'Discount must be a positive number'),
}).refine((data) => {
  const startDate = new Date(data.startDate);
  const endDate = new Date(data.endDate);
  return endDate > startDate;
}, {
  message: 'End date must be after start date',
  path: ['endDate'],
});

export type FlightConfigFormData = z.infer<typeof flightConfigSchema>;

// Ad Creation Schema
export const adCreationSchema = z.object({
  name: z.string().min(1, 'Ad name is required').max(100, 'Ad name must be less than 100 characters'),
  type: z.enum(['image', 'video', 'carousel'], {
    required_error: 'Ad type is required',
  }),
  duration: z.number().min(1, 'Duration must be at least 1 second').max(120, 'Duration must be less than 120 seconds'),
  status: z.enum(['draft', 'active', 'paused'], {
    required_error: 'Status is required',
  }),
  targeting: z.object({
    gender: z.array(z.enum(['male', 'female', 'all'])).min(1, 'At least one gender must be selected'),
    ageGroups: z.array(z.enum(['young-adults', 'adults', 'seniors'])).min(1, 'At least one age group must be selected'),
    weatherConditions: z.array(z.enum(['sunny', 'cloudy', 'rainy', 'snowy'])).min(1, 'At least one weather condition must be selected'),
    timeOfDay: z.array(z.enum(['morning', 'afternoon', 'evening', 'night'])).min(1, 'At least one time of day must be selected'),
  }),
  selectedProperties: z.array(z.string()).min(1, 'At least one property must be selected'),
});

export type AdCreationFormData = z.infer<typeof adCreationSchema>;
