'use client';

import { motion } from 'motion/react';
import { useLanguage } from '@/lib/i18n';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-prexo-blue text-white overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 md:py-32 lg:py-48 flex items-center min-h-[75vh] md:min-h-[85vh]">
      {/* Background overlay / subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-prexo-blue-dark via-prexo-blue to-slate-900 z-0"></div>
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://picsum.photos/seed/legal/1920/1080')] bg-cover bg-center mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full mt-4 sm:mt-0">
        <div className="max-w-3xl pt-8 md:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6 md:mb-8"
          >
            <div className="h-[1px] w-8 md:w-12 bg-prexo-gold"></div>
            <span className="text-prexo-gold text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
              {t('hero.precision')}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display text-white leading-tight sm:leading-tight mb-6 md:mb-8 mt-2"
          >
            {t('hero.title1')}<br />
            <span className="text-prexo-gold italic">{t('hero.title2')}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-10 md:mb-12"
          >
            {t('hero.description')}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <a href="#anfrage" className="bg-prexo-gold text-prexo-blue-dark px-8 md:px-10 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-prexo-gold-light transition-all text-center inline-block shadow-xl shadow-prexo-gold/10">
              {t('hero.btn.inquire')}
            </a>
            <a href="#sortiment" className="border border-white/30 text-white px-8 md:px-10 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all text-center inline-block">
              {t('hero.btn.assortment')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
