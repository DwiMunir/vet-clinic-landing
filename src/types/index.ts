// Core Types untuk Vet Clinic Landing Page
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
  petName?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  specializations?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  petName?: string;
  message: string;
  serviceInterest?: string;
}

export interface ClinicInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface FormSubmissionResponse {
  success: boolean;
  message: string;
  timestamp: string;
}
