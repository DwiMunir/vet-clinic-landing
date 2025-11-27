import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui/container';
import { CLINIC_INFO } from '@/constants';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('navbar');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t text-gray-600">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🐾</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {siteConfig.name}
              </h3>
            </div>
            <p className="text-sm">{CLINIC_INFO.tagline}</p>
            <div className="flex gap-3">
              {CLINIC_INFO.socialMedia?.facebook && (
                <a
                  href={CLINIC_INFO.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-secondary hover:text-white transition-colors flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              )}
              {CLINIC_INFO.socialMedia?.instagram && (
                <a
                  href={CLINIC_INFO.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-secondary hover:text-white transition-colors flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              )}
              {CLINIC_INFO.socialMedia?.twitter && (
                <a
                  href={CLINIC_INFO.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-secondary hover:text-white transition-colors flex items-center justify-center"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-4">
              {t('services.title')}
            </h3>
            <nav className="space-y-2">
              <Link
                href="/#home"
                className="block text-sm hover:text-secondary transition-colors"
              >
                {tNav('home')}
              </Link>
              <Link
                href="/#services"
                className="block text-sm hover:text-secondary transition-colors"
              >
                {tNav('services')}
              </Link>
              <Link
                href="/shop"
                className="block text-sm hover:text-secondary transition-colors"
              >
                {tNav('shop')}
              </Link>
              <Link
                href="/#about"
                className="block text-sm hover:text-secondary transition-colors"
              >
                {tNav('about')}
              </Link>
              <Link
                href="/blog"
                className="block text-sm hover:text-secondary transition-colors"
              >
                {tNav('blog')}
              </Link>
              <Link
                href="/#contact"
                className="block text-sm hover:text-secondary transition-colors"
              >
                {tNav('contact')}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-4">{t('shop.title')}</h3>
            <div className="space-y-3 text-sm">
              <p>{t('shop.mainShop')}</p>
              <p>{t('shop.ourTeam')}</p>
              <p>{t('shop.aboutUs')}</p>
              <p>{t('shop.cart')}</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-4">{t('contactInfo.title')}</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-secondary">
                  {CLINIC_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-secondary">
                  {CLINIC_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>{CLINIC_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t py-6 text-center text-sm">
          <p>
            {t('copyright', { year: currentYear, name: siteConfig.name })}
          </p>
        </div>
      </Container>
    </footer>
  );
}
