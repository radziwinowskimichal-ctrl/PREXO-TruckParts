'use client';

import { HeroSection } from '@/components/HeroSection';
import { VehicleCategoryCards } from '@/components/VehicleCategoryCards';
import { MultiStepWizard } from '@/components/MultiStepWizard';
import { WhatsAppFAB } from '@/components/WhatsAppFAB';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { useLanguage } from '@/lib/i18n';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen relative overflow-hidden bg-white">
      <Navbar />
      <HeroSection />
      
      <div className="w-full relative z-10">
        <VehicleCategoryCards />
        
        <section id="anfrage" className="bg-prexo-gray-light py-24 md:py-32 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="mb-12 sm:mb-16 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-[1px] w-8 bg-prexo-gold"></div>
                <div className="text-xs sm:text-sm font-semibold tracking-widest text-prexo-gold uppercase">{t('wiz.pretitle')}</div>
                <div className="h-[1px] w-8 bg-prexo-gold"></div>
              </div>
              <h2 className="text-4xl sm:text-5xl font-display text-prexo-blue mb-4 sm:mb-6">
                {t('wiz.title')}
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-light">
                {t('wiz.desc')}
              </p>
            </div>
            
            <MultiStepWizard />
          </div>
        </section>
      </div>

      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
