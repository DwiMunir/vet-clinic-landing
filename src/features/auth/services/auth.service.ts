import { apiClient } from '@/lib/api-client';
import type { SignInFormData, SignUpFormData, AuthResponse } from '../types/auth.types';

// Auth API endpoints
const AUTH_ENDPOINTS = {
  signIn: '/auth/signin',
  signUp: '/auth/signup',
  signOut: '/auth/signout',
  me: '/auth/me',
} as const;

export const authService = {
  async signIn(data: SignInFormData): Promise<AuthResponse> {
    // Real API call - uncomment when backend ready
    // return apiClient.post<AuthResponse>(AUTH_ENDPOINTS.signIn, data);

    // Mock implementation for now
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Sign in successful',
          user: {
            id: '1',
            name: 'John Doe',
            email: data.email,
          },
          token: 'mock-jwt-token-12345',
        });
      }, 1000);
    });
  },

  async signUp(data: SignUpFormData): Promise<AuthResponse> {
    // Real API call - uncomment when backend ready
    // return apiClient.post<AuthResponse>(AUTH_ENDPOINTS.signUp, data);

    // Mock implementation for now
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Sign up successful',
          user: {
            id: '2',
            name: data.name,
            email: data.email,
          },
          token: 'mock-jwt-token-67890',
        });
      }, 1000);
    });
  },

  async signOut(): Promise<void> {
    // Real API call - uncomment when backend ready
    // return apiClient.post<void>(AUTH_ENDPOINTS.signOut);

    // Mock implementation for now
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  },

  async getMe(): Promise<AuthResponse['user']> {
    // Real API call - uncomment when backend ready
    // return apiClient.get<AuthResponse['user']>(AUTH_ENDPOINTS.me);

    // Mock implementation for now
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: '1',
          name: 'John Doe',
          email: 'user@example.com',
        });
      }, 800);
    });
  },
};
