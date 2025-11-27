'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, MessageCircle } from 'lucide-react';

export function CTASection() {
  const t = useTranslations('cta');
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setEmail('');
    setIsSubmitting(false);
    alert('Thank you! We\'ll get back to you soon.');
  };

  return (
    <Section id="cta" className="bg-white pb-16">
      <Container>
        <motion.div
          className="bg-secondary rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Form Side */}
            <div className="p-10 lg:p-16 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                {t('title')}
              </h2>
              <p className="text-white/90 mb-8">
                {t('description')}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-3 items-center">
                  <Input
                    type="email"
                    placeholder={t('emailPlaceholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white text-secondary hover:bg-white/90 px-6 rounded-full"
                  >
                    <Send size={18} />
                  </Button>
                </div>
              </form>

              {/* Decorative circles */}
              <div className="relative mt-12">
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full" />
                <div className="absolute -bottom-4 left-16 w-16 h-16 bg-white/10 rounded-full" />
              </div>
            </div>

            {/* Image Side */}
            <div className="relative h-[300px] lg:h-auto bg-linear-to-br from-orange-400 to-orange-500 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80"
                alt="Veterinarian caring for cat"
                fill
                className="object-cover"
              />
              {/* Decorative element */}
              <div className="absolute top-8 left-8 bg-white rounded-2xl shadow-lg p-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MessageCircle size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{t('chatSupport')}</p>
                    <p className="font-bold text-sm">{t('available247')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
