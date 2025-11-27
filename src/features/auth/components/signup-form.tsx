'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Mail, Lock, User as UserIcon, Phone } from 'lucide-react';
import { useSignUpForm } from '../hooks/use-signup-form';
import { TextInput } from './text-input';
import { PasswordInput } from './password-input';
import { FormDivider } from './form-divider';
import { SocialButton } from './social-button';

export function SignUpForm() {
  const t = useTranslations('auth');
  const {
    formData,
    showPassword,
    showConfirmPassword,
    isLoading,
    handleChange,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
    handleSubmit,
  } = useSignUpForm();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Field */}
        <TextInput
          id="name"
          label={t('signUp.name')}
          placeholder={t('signUp.namePlaceholder')}
          value={formData.name}
          onChange={(value) => handleChange('name', value)}
          icon={UserIcon}
        />

        {/* Email Field */}
        <TextInput
          id="email"
          label={t('signUp.email')}
          type="email"
          placeholder={t('signUp.emailPlaceholder')}
          value={formData.email}
          onChange={(value) => handleChange('email', value)}
          icon={Mail}
        />

        {/* Phone Field */}
        <TextInput
          id="phone"
          label={t('signUp.phone')}
          type="tel"
          placeholder={t('signUp.phonePlaceholder')}
          value={formData.phone}
          onChange={(value) => handleChange('phone', value)}
          icon={Phone}
        />

        {/* Password Field */}
        <PasswordInput
          id="password"
          label={t('signUp.password')}
          placeholder={t('signUp.passwordPlaceholder')}
          value={formData.password}
          showPassword={showPassword}
          onChange={(value) => handleChange('password', value)}
          onToggleVisibility={togglePasswordVisibility}
          icon={Lock}
        />

        {/* Confirm Password Field */}
        <PasswordInput
          id="confirmPassword"
          label={t('signUp.confirmPassword')}
          placeholder={t('signUp.confirmPasswordPlaceholder')}
          value={formData.confirmPassword}
          showPassword={showConfirmPassword}
          onChange={(value) => handleChange('confirmPassword', value)}
          onToggleVisibility={toggleConfirmPasswordVisibility}
          icon={Lock}
        />

        {/* Terms & Conditions */}
        <div>
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 mt-0.5 rounded border-gray-300 text-secondary focus:ring-secondary"
              required
            />
            <span className="text-sm text-gray-600">
              {t('signUp.agreeToTerms')}{' '}
              <Link href="/terms" className="text-secondary hover:underline">
                {t('signUp.termsLink')}
              </Link>{' '}
              {t('signUp.and')}{' '}
              <Link href="/privacy" className="text-secondary hover:underline">
                {t('signUp.privacyLink')}
              </Link>
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg"
        >
          {isLoading ? 'Loading...' : t('signUp.submit')}
        </Button>

        {/* Divider */}
        <FormDivider text={t('signUp.or')} />

        {/* Social Sign Up */}
        <div className="grid grid-cols-2 gap-4">
          <SocialButton provider="google">Google</SocialButton>
          <SocialButton provider="facebook">Facebook</SocialButton>
        </div>
      </form>

      {/* Sign In Link */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          {t('signUp.hasAccount')}{' '}
          <Link href="/signin" className="text-secondary font-semibold hover:underline">
            {t('signUp.signInLink')}
          </Link>
        </p>
      </div>
    </div>
  );
}
