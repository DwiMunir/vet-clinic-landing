'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function NewsletterSection() {
  const t = useTranslations('blog');

  return (
    <Section className="bg-linear-to-r from-blue-600 to-secondary text-white">
      <Container>
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('newsletter.title')}
          </h2>
          <p className="text-white/90 mb-8">{t('newsletter.description')}</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto sm:items-center">
            <Input
              type="email"
              placeholder={t('newsletter.placeholder')}
              className="flex-1 bg-white text-gray-900 border-0 h-12 rounded-full"
            />
            <Button
              size="lg"
              className="bg-white text-secondary hover:bg-white/90 rounded-full shrink-0 h-12"
            >
              {t('newsletter.submit')}
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
