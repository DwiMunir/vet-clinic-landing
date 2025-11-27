// Environment Configuration dengan type safety
export const env = {
  // Site
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',

  // API
  apiUrl: process.env.NEXT_PUBLIC_API_URL || '/api',

  // Features
  features: {
    enableContactForm: process.env.NEXT_PUBLIC_ENABLE_CONTACT_FORM !== 'false',
    enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
    enableChat: process.env.NEXT_PUBLIC_ENABLE_CHAT === 'true',
  },

  // Third Party
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,

  // Mode
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
} as const;

// Validate required environment variables
export function validateEnv() {
  const requiredEnvVars: (keyof typeof process.env)[] = [
    // Add required env vars here
  ];

  const missingEnvVars = requiredEnvVars.filter(
    (envVar) => !process.env[envVar]
  );

  if (missingEnvVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingEnvVars.join(', ')}`
    );
  }
}
