'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { AuthFormHeader, SignInForm } from '@/features/auth';

export default function SignInPage() {
  const t = useTranslations('auth');

  return (
    <>
      <Header />
      <main className="min-h-screen bg-linear-to-br from-blue-50 via-white to-orange-50">
        <Section className="py-20">
          <Container>
            <div className="max-w-md mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <AuthFormHeader
                  title={t('signIn.title')}
                  subtitle={t('signIn.subtitle')}
                />
                <SignInForm />
              </motion.div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
