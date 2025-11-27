'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/layout/language-switcher';
import { CLINIC_INFO } from '@/constants';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { useCart } from '@/contexts/cart-context';
import { CartDrawer } from '@/components/cart/cart-drawer';

export function Header() {
  const t = useTranslations('navbar');
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const NAV_LINKS = [
    { href: '/#home', label: t('home') },
    { href: '/#services', label: t('services') },
    { href: '/shop', label: t('shop') },
    { href: '/#about', label: t('about') },
    { href: '/blog', label: t('blog') },
    { href: '/#testimonials', label: t('testimonials') },
    { href: '/#contact', label: t('contact') },
  ];

  return (
    <>
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

              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Sign In Link */}
              <Link
                href="/signin"
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-secondary"
              >
                <User className="w-4 h-4" />
                {t('signIn')}
              </Link>

              <Button asChild className="bg-secondary hover:bg-secondary/90 rounded-full">
                <Link href="/#contact">{t('scheduleVisit')}</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <LanguageSwitcher />

              {/* Mobile Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                    {totalItems}
                  </span>
                )}
              </button>

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
                <Link
                  href="/signin"
                  className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-secondary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="w-4 h-4" />
                  {t('signIn')}
                </Link>
                <Button asChild className="w-full bg-secondary hover:bg-secondary/90 rounded-full">
                  <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
                    {t('scheduleVisit')}
                  </Link>
                </Button>
              </nav>
            </div>
          )}
        </Container>
      </header>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
