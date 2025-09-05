import { Footer } from '../components/layouts/footer';
import { Header } from '../components/layouts/header';
import { CTASection } from '../components/sections/cta-section';
import { FAQSection } from '../components/sections/faq-section';
import { PricingSection } from '../components/sections/pricing-section';
import { TestimonialsSection } from '../components/sections/testimonials-section';
import { FeaturesSection } from '../components/sections/features-section';
import { HeroSection } from '../components/sections/hero-section';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
