'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Mail, Lock } from 'lucide-react';
import { useSignInForm } from '../hooks/use-signin-form';
import { AuthFormHeader } from './auth-form-header';
import { TextInput } from './text-input';
import { PasswordInput } from './password-input';
import { FormDivider } from './form-divider';
import { SocialButton } from './social-button';

export function SignInForm() {
  const t = useTranslations('auth');
  const {
    formData,
    showPassword,
    isLoading,
    handleChange,
    togglePasswordVisibility,
    handleSubmit,
  } = useSignInForm();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <TextInput
          id="email"
          label={t('signIn.email')}
          type="email"
          placeholder={t('signIn.emailPlaceholder')}
          value={formData.email}
          onChange={(value) => handleChange('email', value)}
          icon={Mail}
        />

        {/* Password Field */}
        <PasswordInput
          id="password"
          label={t('signIn.password')}
          placeholder={t('signIn.passwordPlaceholder')}
          value={formData.password}
          showPassword={showPassword}
          onChange={(value) => handleChange('password', value)}
          onToggleVisibility={togglePasswordVisibility}
          icon={Lock}
        />

        {/* Remember & Forgot */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.rememberMe}
              onChange={(e) => handleChange('rememberMe', e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-secondary focus:ring-secondary"
            />
            <span className="text-sm text-gray-600">{t('signIn.rememberMe')}</span>
          </label>
          <Link href="/forgot-password" className="text-sm text-secondary hover:underline">
            {t('signIn.forgotPassword')}
          </Link>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg"
        >
          {isLoading ? 'Loading...' : t('signIn.submit')}
        </Button>

        {/* Divider */}
        <FormDivider text={t('signIn.or')} />

        {/* Social Sign In */}
        <div className="grid grid-cols-2 gap-4">
          <SocialButton provider="google">Google</SocialButton>
          <SocialButton provider="facebook">Facebook</SocialButton>
        </div>
      </form>

      {/* Sign Up Link */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          {t('signIn.noAccount')}{' '}
          <Link href="/signup" className="text-secondary font-semibold hover:underline">
            {t('signIn.signUpLink')}
          </Link>
        </p>
      </div>
    </div>
  );
}
