'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n';

export function VehicleCategoryCards() {
  const { t } = useLanguage();

  const CATEGORIES = [
    {
      id: 'lkw',
      title: t('cat.1.title'),
      description: t('cat.1.desc'),
      image: 'https://picsum.photos/seed/truck/800/600',
      tags: ['MAN', 'Mercedes-Benz', 'Scania', 'Volvo', 'DAF']
    },
    {
      id: 'transporter',
      title: t('cat.2.title'),
      description: t('cat.2.desc'),
      image: 'https://picsum.photos/seed/van/800/600',
      tags: ['Sprinter', 'Crafter', 'Transit', 'Daily', 'Ducato']
    },
    {
      id: 'pkw',
      title: t('cat.3.title'),
      description: t('cat.3.desc'),
      image: 'https://picsum.photos/seed/car/800/600',
      tags: ['Bremssysteme', 'Filter', 'Fahrwerk', 'Elektronik']
    }
  ];

  return (
    <section id="sortiment" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-prexo-blue mb-4">{t('cat.title')}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            {t('cat.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES.map((category) => (
            <motion.div 
              key={category.id}
              layout
              className="group bg-white border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-prexo-blue/20 group-hover:bg-transparent transition-all z-10"></div>
                <Image 
                  src={category.image} 
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-3xl font-display text-prexo-blue mb-4">
                  {category.title}
                </h3>
                <p className="text-slate-600 font-light leading-relaxed mb-6 flex-grow">
                  {category.description}
                </p>
                
                <div className="pt-6 border-t border-slate-100 flex flex-col gap-6">
                  <div>
                    <p className="text-xs text-slate-400 mb-3 font-semibold uppercase tracking-widest">{t('cat.focus')}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] sm:text-xs border border-slate-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={`/assortment/${category.id}`}
                    className="flex w-full items-center justify-center py-3 px-4 bg-prexo-blue text-white text-xs font-bold uppercase tracking-widest hover:bg-prexo-gold transition-colors"
                  >
                    <span>{t('cat.more')}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
