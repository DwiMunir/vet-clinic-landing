'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { CheckCircle, UserRound, Hospital } from 'lucide-react';

export function ExpertTipsSection() {
  const t = useTranslations('expertTips');

  const tips = [
    t('tip1'),
    t('tip2'),
    t('tip3'),
  ];
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Orange Card with Tips */}
          <motion.div
            className="bg-secondary text-white rounded-3xl p-10 lg:p-12 relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl font-bold leading-tight">
                {t('title')}
              </h2>

              <div className="space-y-4">
                {tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-1">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                    <p className="text-white/95 leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>

              {/* Doctor Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <UserRound size={32} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg">{t('doctorName')}</p>
                  <p className="text-white/80 text-sm">{t('doctorRole')}</p>
                </div>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white/10 rounded-full" />
          </motion.div>

          {/* Doctor Image */}
          <motion.div
            className="relative h-[500px] rounded-3xl overflow-hidden bg-linear-to-br from-blue-100 to-orange-100"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
              alt="Dr. Aletha Conte"
              fill
              className="object-cover"
            />
            {/* Decorative badge */}
            <div className="absolute top-8 left-8 bg-white rounded-2xl shadow-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Hospital size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">{t('vetServices')}</p>
                  <p className="font-bold text-sm">{t('trainingServices')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
