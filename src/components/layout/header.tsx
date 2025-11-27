'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/layout/language-switcher';
import { CLINIC_INFO } from '@/constants';
import { Menu, X } from 'lucide-react';

export function Header() {
  const t = useTranslations('navbar');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const NAV_LINKS = [
    { href: '#home', label: t('home') },
    { href: '#services', label: t('services') },
    { href: '#about', label: t('about') },
    { href: '#testimonials', label: t('testimonials') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">🐾</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              {CLINIC_INFO.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-secondary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <LanguageSwitcher />
            <Button asChild className="bg-secondary hover:bg-secondary/90 rounded-full">
              <Link href="#contact">{t('scheduleVisit')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium transition-colors hover:text-secondary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full bg-secondary hover:bg-secondary/90 rounded-full">
                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                  {t('scheduleVisit')}
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
