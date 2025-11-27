'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Section, SectionHeader } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { CLINIC_INFO, SERVICE_OPTIONS } from '@/constants';
import { validateContactForm } from '@/lib/validations';
import type { ContactFormData } from '@/types';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  const t = useTranslations('contact');
  const [formData, setFormData] = React.useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    petName: '',
    message: '',
    serviceInterest: '',
  });
  const [errors, setErrors] = React.useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In production, replace with actual API call:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        petName: '',
        message: '',
        serviceInterest: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="bg-gray-50">
      <Container>
        <SectionHeader
          title={t('title')}
          description={t('description')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t('info.phone.label')}</h3>
                      <a href={`tel:${CLINIC_INFO.phone}`} className="text-sm text-gray-600 hover:text-blue-600">
                        {CLINIC_INFO.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t('info.email.label')}</h3>
                      <a href={`mailto:${CLINIC_INFO.email}`} className="text-sm text-gray-600 hover:text-blue-600">
                        {CLINIC_INFO.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t('info.address.label')}</h3>
                      <p className="text-sm text-gray-600">{CLINIC_INFO.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">{t('info.hours.label')}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('info.hours.weekdays')}</span>
                      <span className="font-medium">{CLINIC_INFO.hours.weekdays}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('info.hours.weekends')}</span>
                      <span className="font-medium">{CLINIC_INFO.hours.weekends}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        {t('form.name')} *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('form.namePlaceholder')}
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-600 mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        {t('form.email')} *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('form.emailPlaceholder')}
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        {t('form.phone')}
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t('form.phonePlaceholder')}
                        className={errors.phone ? 'border-red-500' : ''}
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="petName" className="block text-sm font-medium mb-2">
                        {t('form.petName')}
                      </label>
                      <Input
                        id="petName"
                        name="petName"
                        value={formData.petName}
                        onChange={handleChange}
                        placeholder={t('form.petNamePlaceholder')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="serviceInterest" className="block text-sm font-medium mb-2">
                      {t('form.serviceInterest')}
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">{t('form.selectService')}</option>
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {t('form.message')} *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('form.messagePlaceholder')}
                      rows={5}
                      className={errors.message ? 'border-red-500' : ''}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-600 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md">
                      {t('form.successMessage')}
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md">
                      {t('form.errorMessage')}
                    </div>
                  )}

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? t('form.sending') : t('form.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
