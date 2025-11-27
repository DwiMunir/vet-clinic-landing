import type { SignInFormData, SignUpFormData, AuthResponse } from '../types/auth.types';

export const authService = {
  async signIn(data: SignInFormData): Promise<AuthResponse> {
    // TODO: Implement actual API call
    // const response = await fetch('/api/auth/signin', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });
    // return response.json();

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
        });
      }, 1000);
    });
  },

  async signUp(data: SignUpFormData): Promise<AuthResponse> {
    // TODO: Implement actual API call
    // const response = await fetch('/api/auth/signup', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });
    // return response.json();

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Sign up successful',
          user: {
            id: '1',
            name: data.name,
            email: data.email,
          },
        });
      }, 1000);
    });
  },

  async signOut(): Promise<void> {
    // TODO: Implement actual API call
    // await fetch('/api/auth/signout', { method: 'POST' });
  },
};
