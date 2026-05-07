'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-prexo-blue border-b border-white/10 min-h-[90px] flex items-center justify-between px-4 md:px-12 w-full text-white"
    >
      <div className="flex-shrink-0 mr-4">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="PREXO Truck Parts" width={200} height={80} className="h-12 sm:h-16 w-auto object-contain" />
        </Link>
      </div>
        
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex items-center gap-6 md:gap-10 font-sans text-xs sm:text-sm tracking-widest text-slate-300 uppercase">
          <Link href="/#sortiment" className="hover:text-prexo-gold transition-colors">{t('nav.sortiment')}</Link>
          <Link href="/#vorteile" className="hover:text-prexo-gold transition-colors">{t('nav.service')}</Link>
          <Link href="/about" className="hover:text-prexo-gold transition-colors">{t('nav.about')}</Link>
          <Link href="/#anfrage" className="hidden lg:inline-block px-4 py-2 border border-prexo-gold text-prexo-gold hover:bg-prexo-gold hover:text-prexo-blue transition-all font-semibold">{t('nav.inquire')}</Link>
        </nav>

        <div className="flex gap-3 sm:gap-4 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-slate-300">
          <span 
            className={`cursor-pointer transition-colors ${language === 'DE' ? 'text-prexo-gold' : 'hover:text-white'}`}
            onClick={() => setLanguage('DE')}
          >DE</span>
          <span 
            className={`cursor-pointer transition-colors ${language === 'EN' ? 'text-prexo-gold' : 'hover:text-white'}`}
            onClick={() => setLanguage('EN')}
          >EN</span>
          <span 
            className={`cursor-pointer transition-colors ${language === 'PL' ? 'text-prexo-gold' : 'hover:text-white'}`}
            onClick={() => setLanguage('PL')}
          >PL</span>
        </div>
      </div>
    </motion.header>
  );
}
