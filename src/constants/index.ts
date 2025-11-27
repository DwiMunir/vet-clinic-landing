import type { ClinicInfo, Service } from '@/types';

// Site Configuration
export const SITE_CONFIG = {
  name: 'VetCare Clinic',
  description: 'Professional veterinary care for your beloved pets',
  url: 'https://vetcare.com',
  locale: 'id-ID',
} as const;

// Clinic Information - Non-translatable contact details
export const CLINIC_INFO: ClinicInfo = {
  name: 'Pawfec Care',
  tagline: 'Caring for cats with love and EXPURRTise!',
  description: 'Your Ultimate Destination for Expert Care, Training, and Wellness to Keep Your Furry Friends Happy and Healthy!',
  address: '123 Main Street, New York, NY 10001',
  phone: '+1 (212) 555-0123',
  email: 'hello@pawfeccare.com',
  hours: {
    weekdays: '08:00 AM - 08:00 PM',
    weekends: '09:00 AM - 06:00 PM',
  },
  socialMedia: {
    facebook: 'https://facebook.com/pawfeccare',
    instagram: 'https://instagram.com/pawfeccare',
    twitter: 'https://twitter.com/pawfeccare',
  },
};

// Services Data - Only IDs and icons (translations in messages/*.json)
export const SERVICES: Service[] = [
  {
    id: 'general-Checkup',
    title: '',
    description: '',
    icon: 'Stethoscope',
    features: [],
  },
  {
    id: 'vaccination',
    title: '',
    description: '',
    icon: 'Syringe',
    features: [],
  },
  {
    id: 'surgery',
    title: '',
    description: '',
    icon: 'Activity',
    features: [],
  },
  {
    id: 'grooming',
    title: '',
    description: '',
    icon: 'Scissors',
    features: [],
  },
];

// Service options for contact form
export const SERVICE_OPTIONS = SERVICES.map(service => ({
  value: service.id,
  label: service.id,
}));

// Animation Variants
export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
  slideIn: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3 },
  },
} as const;

