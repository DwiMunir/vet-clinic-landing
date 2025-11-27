'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { CheckCircle, Stethoscope, Heart, Clock } from 'lucide-react';

export function AboutSection() {
  const t = useTranslations('about');

  const features = [
    t('feature1'),
    t('feature2'),
  ];
  return (
    <Section id="about" className="bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden bg-gray-200"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80"
              alt="Dog in carrier"
              fill
              className="object-cover"
            />
            {/* Decorative orange circle */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary rounded-full opacity-50" />
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 leading-tight">
              {t('title')}
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              {t('description')}
            </p>

            <div className="space-y-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <CheckCircle size={16} className="text-green-600" />
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <motion.div
                className="bg-orange-500 text-white rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Stethoscope size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-lg mb-1">{t('experiencedProfessionals.title')}</h3>
                <p className="text-sm text-white/90">{t('experiencedProfessionals.subtitle')}</p>
              </motion.div>

              <motion.div
                className="bg-purple-100 text-purple-900 rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Heart size={24} className="text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-1">{t('comprehensiveCare.title')}</h3>
                <p className="text-sm text-purple-700">{t('comprehensiveCare.subtitle')}</p>
              </motion.div>

              <motion.div
                className="bg-blue-100 text-blue-900 rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Clock size={24} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-1">{t('support247.title')}</h3>
                <p className="text-sm text-blue-700">{t('support247.subtitle')}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
