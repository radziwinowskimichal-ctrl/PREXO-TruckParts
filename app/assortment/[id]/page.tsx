'use client';

import { useParams } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/lib/i18n';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Drill, Settings, Filter, Droplet, CarFront, LayoutDashboard, Wrench, Zap, Disc } from 'lucide-react';
import Link from 'next/link';

export default function AssortmentCategoryPage() {
  const { id } = useParams(); // 'lkw', 'transporter', 'pkw'
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('filters');

  const categories = [
    { id: 'filters', name: t('assortment.filters'), icon: Filter },
    { id: 'oils', name: t('assortment.oils'), icon: Droplet },
    { id: 'chassis', name: t('assortment.chassis'), icon: LayoutDashboard },
    { id: 'body', name: t('assortment.body'), icon: CarFront },
    { id: 'electrical', name: t('assortment.electrical'), icon: Zap },
    { id: 'brakes', name: t('assortment.brakes'), icon: Disc },
    { id: 'engine', name: t('assortment.engine'), icon: Settings },
    { id: 'transmission', name: t('assortment.transmission'), icon: Settings },
    { id: 'workshop', name: t('assortment.workshop'), icon: Wrench },
  ];

  let titleKey = 'cat.1.title';
  let descKey = 'cat.1.desc';
  let bannerImg = 'https://picsum.photos/seed/truck-banner/1920/1080';
  let renderCategory = 'lkw';

  if (id === 'transporter') {
    titleKey = 'cat.2.title';
    descKey = 'cat.2.desc';
    bannerImg = 'https://picsum.photos/seed/van-banner/1920/1080';
    renderCategory = 'transporter';
  } else if (id === 'pkw') {
    titleKey = 'cat.3.title';
    descKey = 'cat.3.desc';
    bannerImg = 'https://picsum.photos/seed/car-banner/1920/1080';
    renderCategory = 'pkw';
  }

  // Define images for subcategories based on the main category
  const getSubcategoryImage = (subId: string) => {
    return `https://picsum.photos/seed/${renderCategory}-${subId}/800/600`;
  };

  return (
    <main className="min-h-screen bg-slate-50 relative flex flex-col">
      <Navbar />

      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-prexo-blue z-0">
          <Image 
            src={bannerImg} 
            alt="Banner" 
            fill 
            className="object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-prexo-blue-dark to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display text-white mb-4"
          >
            {t(titleKey)}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="w-24 h-1 bg-prexo-gold mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 font-light max-w-2xl mx-auto"
          >
            {t(descKey)}
          </motion.p>
        </div>
      </section>

      <section className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 w-full">
          {/* Sidebar */}
          <aside className="w-full md:w-64 lg:w-72 shrink-0">
            <div className="bg-white border border-slate-200 p-6 sticky top-32 shadow-xl law-border">
              <h3 className="font-display text-xl text-prexo-blue mb-6 border-b border-slate-100 pb-4">
                Kategorie
              </h3>
              <nav className="flex flex-col space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`flex items-center px-4 py-3 text-sm font-semibold uppercase tracking-widest transition-all ${
                      activeTab === cat.id 
                        ? 'bg-prexo-blue text-white shadow-md' 
                        : 'text-slate-500 hover:bg-slate-50 hover:text-prexo-blue'
                    }`}
                  >
                    <cat.icon className="w-4 h-4 mr-3" />
                    {cat.name}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content (Workshop Animation & Products) */}
          <div className="flex-grow w-full">
            <AnimatePresence mode="wait">
              {categories.map((cat) => {
                if (cat.id !== activeTab) return null;
                return (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="w-full"
                  >
                    <div className="bg-white border border-slate-200 law-border p-8 mb-8 relative overflow-hidden shadow-xl group">
                      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-prexo-blue-dark via-transparent to-transparent pointer-events-none transition-opacity group-hover:opacity-20 z-0"></div>
                      
                      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                          <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-prexo-gold/10 text-prexo-gold rounded-full">
                              <cat.icon className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-display text-prexo-blue">{cat.name}</h2>
                          </div>
                          
                          <p className="text-slate-600 font-light leading-relaxed mb-8">
                            Premium components for the {cat.name.toLowerCase()} category. 
                            OEM quality parts available immediately from our logistics center in Nuremberg.
                          </p>

                          <Link href="/#anfrage" className="inline-flex items-center justify-center px-8 py-3 bg-prexo-gold text-prexo-blue-dark font-bold text-xs uppercase tracking-widest hover:bg-prexo-gold-light transition-colors">
                            {t('cat.inquire')} <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </div>

                        {/* Animated Workshop Visual */}
                        <div className="relative h-64 md:h-80 bg-slate-100 rounded-xl overflow-hidden law-border">
                          <Image 
                            src={getSubcategoryImage(cat.id)}
                            alt={cat.name}
                            fill
                            className="object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-prexo-blue/30 flex items-center justify-center">
                            <motion.div 
                              animate={{ 
                                rotate: cat.id === 'workshop' || cat.id === 'engine' ? 360 : 0,
                                scale: [1, 1.05, 1]
                              }}
                              transition={{ 
                                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                              }}
                              className="w-32 h-32 border-4 border-prexo-gold/40 rounded-full flex items-center justify-center backdrop-blur-sm"
                            >
                              <cat.icon className="w-12 h-12 text-prexo-gold drop-shadow-lg" />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Faux Grid of items to make it look populated */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="bg-white border border-slate-200 law-border p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                          <div className="bg-slate-100 h-40 mb-4 flex items-center justify-center relative overflow-hidden">
                             <Image 
                                src={`https://picsum.photos/seed/${renderCategory}-${cat.id}-item-${item}/400/300`}
                                alt="Part Preview"
                                fill
                                className="object-cover"
                                referrerPolicy="no-referrer"
                              />
                          </div>
                          <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2 border-b border-slate-100 pb-2">OE-Nummer: {Math.floor(Math.random() * 9000000) + 1000000}</div>
                          <h4 className="font-semibold text-prexo-blue">Premium {cat.name} Part {item}</h4>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
