import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { AboutSection } from '@/components/sections/about-section';
import { ExpertTipsSection } from '@/components/sections/expert-tips-section';
import { TeamSection } from '@/components/sections/team-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CTASection } from '@/components/sections/cta-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ExpertTipsSection />
        <TeamSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
