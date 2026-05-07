'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'motion/react';
import { useLanguage } from '@/lib/i18n';
import { Target, Star, BookOpen, Heart, Users, CheckCircle, Shield } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen relative bg-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-prexo-blue text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-prexo-blue-dark via-prexo-blue to-slate-900 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-display mb-6">{t('about.hero.title')}</h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">{t('about.hero.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-24 max-w-7xl mx-auto px-6 space-y-32">
        
        {/* Mission & Vision */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-8 h-8 text-prexo-gold" />
              <h2 className="text-3xl font-display text-prexo-blue">{t('about.mission.title')}</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              {t('about.mission.desc')}
            </p>
          </div>
          <div className="h-64 bg-slate-200 rounded-xl overflow-hidden relative shadow-2xl">
            <Image src="https://picsum.photos/seed/truck-mission/800/600" alt="Mission" fill className="object-cover" />
          </div>
        </motion.div>

        {/* UVP */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1 h-64 bg-slate-200 rounded-xl overflow-hidden relative shadow-2xl">
            <Image src="https://picsum.photos/seed/truck-uvp/800/600" alt="UVP" fill className="object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-4 mb-6">
              <Star className="w-8 h-8 text-prexo-gold" />
              <h2 className="text-3xl font-display text-prexo-blue">{t('about.uvp.title')}</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              {t('about.uvp.desc')}
            </p>
          </div>
        </motion.div>

        {/* Story */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-white p-12 rounded-2xl shadow-xl law-border text-center max-w-4xl mx-auto"
        >
          <BookOpen className="w-12 h-12 text-prexo-gold mx-auto mb-6" />
          <h2 className="text-3xl font-display text-prexo-blue mb-6">{t('about.story.title')}</h2>
          <p className="text-lg text-slate-600 leading-relaxed font-light italic">
            &quot;{t('about.story.desc')}&quot;
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="py-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display text-prexo-blue">{t('about.values.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, titleKey: 'about.values.1.title', descKey: 'about.values.1.desc' },
              { icon: CheckCircle, titleKey: 'about.values.2.title', descKey: 'about.values.2.desc' },
              { icon: Heart, titleKey: 'about.values.3.title', descKey: 'about.values.3.desc' },
            ].map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 text-center"
              >
                <v.icon className="w-12 h-12 text-prexo-gold mx-auto mb-6" />
                <h3 className="text-xl font-bold font-display text-prexo-blue mb-4">{t(v.titleKey)}</h3>
                <p className="text-slate-600 font-light">{t(v.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Proof of Numbers */}
        <div className="bg-prexo-blue rounded-3xl py-16 px-8 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-prexo-blue-dark to-slate-900 opacity-90 z-0"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-display mb-12">{t('about.proof.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { valKey: 'about.proof.1.val', labelKey: 'about.proof.1.label' },
                { valKey: 'about.proof.2.val', labelKey: 'about.proof.2.label' },
                { valKey: 'about.proof.3.val', labelKey: 'about.proof.3.label' }
              ].map((p, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="p-6"
                >
                  <div className="text-5xl md:text-6xl font-display font-bold text-prexo-gold mb-4">{t(p.valKey)}</div>
                  <div className="text-sm font-semibold uppercase tracking-widest text-slate-300">{t(p.labelKey)}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto pb-24"
        >
          <Users className="w-16 h-16 text-slate-300 mx-auto mb-6" />
          <h2 className="text-4xl font-display text-prexo-blue mb-6">{t('about.team.title')}</h2>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            {t('about.team.desc')}
          </p>
        </motion.div>

      </section>
      
      <Footer />
    </main>
  );
}
