import { Truck } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';

export function Footer() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <footer className="bg-prexo-blue-dark pt-16 md:pt-24 pb-12 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 gap-y-16 mb-16">
          <div className="lg:col-span-4 xl:col-span-5">
             <div className="mb-8">
              <Link href="/" className="inline-block">
                <Image src="/logo.svg" alt="PREXO Truck Parts" width={240} height={96} className="h-16 md:h-20 w-auto object-contain" />
              </Link>
            </div>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md mb-8 font-light">
              {t('footer.desc')}
            </p>
            <div className="flex gap-4">
              <div className="px-5 py-3 border border-prexo-gold text-prexo-gold uppercase tracking-[0.15em] text-[10px] md:text-xs font-bold flex items-center gap-2">
                <Truck className="w-5 h-5" /> {t('footer.express')}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 xl:col-span-5 flex-grow">
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-6">{t('footer.contact')}</h4>
            <div className="space-y-6 text-base text-slate-300 font-light w-full">
              <div className="relative w-full h-48 sm:h-64 rounded-lg overflow-hidden border border-white/10 opacity-90 hover:opacity-100 transition-all duration-300 shadow-xl">
                <a 
                  href="https://maps.google.com/?q=Ernst-Sachs-Straße+20,+90441+Nürnberg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 block"
                  aria-label="Auf Google Maps ansehen"
                />
                <iframe 
                  src="https://maps.google.com/maps?q=Ernst-Sachs-Stra%C3%9Fe%2020,%2090441%20N%C3%BCrnberg&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <ul className="space-y-3 pt-4 sm:text-lg">
                <li className="font-medium text-white">PREXO TRUCK PARTS GmbH</li>
                <li>Ernst-Sachs-Straße 20, 90441 Nürnberg</li>
                <li className="pt-2 text-prexo-gold hover:text-white transition-colors">
                  <a href="mailto:kontakt@prexo-truckparts.de">kontakt@prexo-truckparts.de</a>
                </li>
                <li className="font-medium tracking-wide">+49 151 0000000</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-6">{t('footer.legal')}</h4>
            <ul className="space-y-4 text-base text-slate-400 font-light">
              <li><a href="#" className="hover:text-prexo-gold transition-colors">{t('footer.imprint')}</a></li>
              <li><a href="#" className="hover:text-prexo-gold transition-colors">{t('footer.privacy')}</a></li>
              <li><a href="#" className="hover:text-prexo-gold transition-colors">{t('footer.terms')}</a></li>
              <li><a href="#" className="hover:text-prexo-gold transition-colors">{t('footer.revocation')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-[11px] uppercase tracking-widest">
            &copy; {new Date().getFullYear()} PREXO TRUCK PARTS GmbH. {t('footer.rights')}
          </p>
          <div className="mt-6 md:mt-0 text-slate-500 text-[11px] uppercase tracking-widest flex gap-6">
            <span 
              className={`cursor-pointer transition-colors ${language === 'DE' ? 'text-prexo-gold font-semibold' : 'hover:text-white'}`}
              onClick={() => setLanguage('DE')}
            >DE</span>
            <span 
              className={`cursor-pointer transition-colors ${language === 'EN' ? 'text-prexo-gold font-semibold' : 'hover:text-white'}`}
              onClick={() => setLanguage('EN')}
            >EN</span>
            <span 
              className={`cursor-pointer transition-colors ${language === 'PL' ? 'text-prexo-gold font-semibold' : 'hover:text-white'}`}
              onClick={() => setLanguage('PL')}
            >PL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
