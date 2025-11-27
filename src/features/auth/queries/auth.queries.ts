import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { authService } from '../services/auth.service';
import type { SignInFormData, SignUpFormData } from '../types/auth.types';

// Query keys
export const authKeys = {
  all: ['auth'] as const,
  me: () => [...authKeys.all, 'me'] as const,
} as const;

// Sign in mutation
export function useSignInMutation() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: SignInFormData) => authService.signIn(data),
    onSuccess: (response) => {
      // Store token in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('auth_token', response.token as string);
      }
      // Invalidate and refetch user data
      queryClient.invalidateQueries({ queryKey: authKeys.me() });
      // Redirect to home or dashboard
      router.push('/');
    },
    onError: (error) => {
      console.error('Sign in error:', error);
    },
  });
}

// Sign up mutation
export function useSignUpMutation() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: SignUpFormData) => authService.signUp(data),
    onSuccess: (response) => {
      // Store token in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('auth_token', response.token as string);
      }
      // Invalidate and refetch user data
      queryClient.invalidateQueries({ queryKey: authKeys.me() });
      // Redirect to home or dashboard
      router.push('/');
    },
    onError: (error) => {
      console.error('Sign up error:', error);
    },
  });
}

// Sign out mutation
export function useSignOutMutation() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => authService.signOut(),
    onSuccess: () => {
      // Remove token from localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth_token');
      }
      // Clear all queries
      queryClient.clear();
      // Redirect to sign in
      router.push('/signin');
    },
  });
}

// Get current user query
export function useGetMeQuery(enabled = true) {
  return useQuery({
    queryKey: authKeys.me(),
    queryFn: () => authService.getMe(),
    enabled: enabled && typeof window !== 'undefined' && !!localStorage.getItem('auth_token'),
  });
}
