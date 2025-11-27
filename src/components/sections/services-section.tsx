'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Section, SectionHeader } from '@/components/ui/section';
import { SERVICES } from '@/constants';
import * as Icons from 'lucide-react';

export function ServicesSection() {
  const t = useTranslations('services');

  return (
    <Section id="services" className="bg-white">
      <Container>
        <SectionHeader
          title={t('title')}
          description={t('description')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ size?: number; className?: string }>;
            const isOrange = index === 1;

            return (
              <motion.div
                key={service.id}
                className={`rounded-3xl p-8 text-center transition-all hover:shadow-lg ${isOrange ? 'bg-secondary text-white' : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className={`w-16 h-16 rounded-2xl ${isOrange ? 'bg-white/20' : 'bg-white'} flex items-center justify-center mx-auto mb-4`}>
                  {IconComponent && <IconComponent size={32} className={isOrange ? 'text-white' : 'text-secondary'} />}
                </div>
                <h3 className={`text-lg font-bold mb-3 ${isOrange ? 'text-white' : 'text-gray-900'}`}>
                  {t(`${service.id.replace('-', '')}.title`)}
                </h3>
                <p className={`text-sm leading-relaxed ${isOrange ? 'text-white/90' : 'text-gray-600'}`}>
                  {t(`${service.id.replace('-', '')}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
