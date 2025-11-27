'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Play, Calendar, Hospital, Cat, PawPrint } from 'lucide-react';

export function HeroSection() {
  const t = useTranslations('hero');
  return (
    <section className="relative bg-linear-to-br from-orange-50 via-white to-blue-50 py-16 sm:py-20 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          {/* Content */}
          <motion.div
            className="space-y-6 lg:pr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('tagline')}
            </motion.h1>

            <motion.p
              className="text-base text-gray-600 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t('description')}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8"
                asChild
              >
                <Link href="#contact">
                  {t('scheduleVisit')}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 px-8"
                asChild
              >
                <Link href="#services" className="flex items-center gap-2">
                  <Play size={18} />
                  {t('ourServices')}
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image with Floating Cards */}
          <div className="relative lg:h-[500px] h-[400px]">
            {/* Main Cat Image */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-64 h-80 bg-linear-to-br from-orange-100 to-blue-100 rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&q=80"
                  alt="Cute cat"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Floating Card - Health */}
            <motion.div
              className="absolute top-8 left-0 bg-white rounded-2xl shadow-lg p-4 w-40"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-12 h-12 bg-orange-100 rounded-xl mb-2 flex items-center justify-center">
                <Hospital size={24} className="text-orange-600" />
              </div>
              <p className="text-xs font-semibold text-gray-900">{t('healthCard.title')}</p>
              <p className="text-xs text-gray-500">{t('healthCard.subtitle')}</p>
            </motion.div>

            {/* Floating Card - Cat Health */}
            <motion.div
              className="absolute top-4 right-0 bg-white rounded-2xl shadow-lg p-4 w-40"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl mb-2 flex items-center justify-center">
                <Cat size={24} className="text-blue-600" />
              </div>
              <p className="text-xs font-semibold text-gray-900">{t('catHealthCard.title')}</p>
              <p className="text-xs text-gray-500">{t('catHealthCard.subtitle')}</p>
            </motion.div>

            {/* Floating Card - Happy Pets */}
            <motion.div
              className="absolute bottom-16 right-4 bg-secondary text-white rounded-2xl shadow-lg p-4 w-36"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Calendar size={16} />
                <p className="text-xs font-semibold">{t('happyPetsCard.title')}</p>
              </div>
              <p className="text-2xl font-bold">12,000+</p>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-12 right-12 w-16 h-16 opacity-20 flex items-center justify-center">
              <PawPrint size={48} className="text-orange-600" />
            </div>
            <div className="absolute bottom-8 left-8 w-12 h-12 opacity-20 flex items-center justify-center">
              <PawPrint size={40} className="text-blue-600" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
