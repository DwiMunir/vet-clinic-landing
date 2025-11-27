import type { ContactFormData } from '@/types';

// Utility untuk validasi form
export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
} {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (data.phone && !isValidPhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-+()]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Utility untuk format
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{3,4})(\d{4})(\d{0,4})$/);
  if (match) {
    return `+${match[1]} ${match[2]}-${match[3]}${match[4] ? `-${match[4]}` : ''}`;
  }
  return phone;
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}
