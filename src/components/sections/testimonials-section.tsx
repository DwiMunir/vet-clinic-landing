'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Section, SectionHeader } from '@/components/ui/section';
import { Star } from 'lucide-react';

const testimonialIds = ['1', '2', '3'];

export function TestimonialsSection() {
  const t = useTranslations('testimonials');

  return (
    <Section id="testimonials" className="bg-white">
      <Container>
        <SectionHeader
          title={t('title')}
          description={t('description')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialIds.map((id, index) => (
            <motion.div
              key={id}
              className="bg-gray-50 rounded-3xl p-8 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-6xl text-secondary opacity-20">
                "
              </div>

              {/* Avatar & Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-100 to-orange-100 flex items-center justify-center shrink-0">
                  <span className="text-xl font-semibold text-gray-700">
                    {t(`items.${id}.name`).charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">{t(`items.${id}.name`)}</p>
                  <p className="text-sm text-gray-600">{t(`items.${id}.role`)}</p>
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-4 relative z-10 leading-relaxed">
                {t(`items.${id}.content`)}
              </p>

              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={'fill-yellow-400 text-yellow-400'}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
