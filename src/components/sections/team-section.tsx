'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MessageCircle } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Section, SectionHeader } from '@/components/ui/section';

const teamIds = ['erin', 'sarah', 'mike', 'jessica'];
const teamImages = [
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
  'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
];

export function TeamSection() {
  const t = useTranslations('team');

  return (
    <Section className="bg-gray-50">
      <Container>
        <SectionHeader
          title={t('title')}
          description={t('description')}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamIds.map((memberId, index) => (
            <motion.div
              key={memberId}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Avatar */}
              <motion.div
                className="w-32 h-32 mx-auto mb-4 rounded-full bg-linear-to-br from-blue-100 to-orange-100 overflow-hidden relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={teamImages[index]}
                  alt={t(`members.${memberId}.name`)}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Info */}
              <h3 className="font-bold text-lg text-gray-900 mb-1">
                {t(`members.${memberId}.name`)}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{t(`members.${memberId}.role`)}</p>

              {/* Contact Button */}
              <motion.button
                className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center mx-auto hover:bg-secondary/90 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={20} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
