'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';

export function PromoSection() {
  const t = useTranslations('shop');

  return (
    <Section className="bg-linear-to-r from-orange-500 to-secondary text-white">
      <Container>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('promo.title')}
          </h2>
          <p className="text-white/90 mb-8 text-lg">{t('promo.description')}</p>
          <Button
            size="lg"
            className="bg-white text-secondary hover:bg-white/90 rounded-full px-8"
          >
            {t('promo.cta')}
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
