'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Truck, Car, Package, CheckCircle2, ChevronRight, ChevronLeft, Send } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const formSchema = z.object({
  vehicleType: z.enum(['lkw', 'transporter', 'pkw']),
  brand: z.string().min(1, 'Marke ist erforderlich'),
  vin: z.string().optional(),
  description: z.string().min(10, 'Bitte beschreiben Sie das gesuchte Teil genauer (min. 10 Zeichen)'),
  company: z.string().optional(),
  name: z.string().min(2, 'Name ist erforderlich'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  phone: z.string().min(5, 'Telefonnummer ist erforderlich'),
  consent: z.boolean().refine(val => val === true, { message: 'Zustimmung erforderlich / Consent required' })
});

type FormData = z.infer<typeof formSchema>;

export function MultiStepWizard() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { t } = useLanguage();

  const { register, handleSubmit, formState: { errors }, trigger, watch, setValue } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: { vehicleType: 'lkw' }
  });

  const watchVehicleType = watch('vehicleType');

  const handleNext = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];
    if (step === 1) fieldsToValidate = ['vehicleType'];
    else if (step === 2) fieldsToValidate = ['brand', 'vin'];
    else if (step === 3) fieldsToValidate = ['description'];

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) setStep(s => s + 1);
  };

  const handleBack = () => {
    setStep(s => Math.max(1, s - 1));
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Es gab ein Problem. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20 px-4 sm:px-8 bg-white law-border shadow-xl"
      >
        <div className="w-24 h-24 bg-green-50 rounded-full border border-green-100 flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-12 h-12 text-green-600" />
        </div>
        <h3 className="text-3xl sm:text-4xl font-display text-prexo-blue mb-4">{t('wiz.success.title')}</h3>
        <p className="text-slate-600 text-sm sm:text-lg max-w-md mx-auto leading-relaxed font-light">
          {t('wiz.success.desc')}
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-8 md:p-14 law-border shadow-2xl relative">
      <div className="flex items-center justify-between mb-12 sm:mb-16 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-slate-100 -z-10">
          <motion.div 
            className="h-full bg-prexo-gold"
            initial={{ width: '25%' }}
            animate={{ width: `${(step / 4) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
        {[1, 2, 3, 4].map((i) => (
          <div 
            key={i} 
            className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-[10px] sm:text-xs font-semibold bg-white transition-all duration-300 rounded-full border-2 ${step >= i ? 'border-prexo-gold text-prexo-gold' : 'border-slate-200 text-slate-400'}`}
          >
            0{i}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6 sm:space-y-8">
              <h3 className="text-2xl sm:text-3xl font-display text-prexo-blue mb-2">{t('wiz.step1.title')}</h3>
              <p className="text-sm sm:text-base text-slate-500 font-light mb-8">{t('wiz.step1.desc')}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { id: 'lkw', label: t('cat.1.title'), icon: Truck },
                  { id: 'transporter', label: t('cat.2.title'), icon: Package },
                  { id: 'pkw', label: t('cat.3.title'), icon: Car }
                ].map((type) => {
                  const isSelected = watchVehicleType === type.id;
                  const Icon = type.icon;
                  return (
                    <div 
                      key={type.id}
                      onClick={() => setValue('vehicleType', type.id as any, { shouldValidate: true })}
                      className={`relative p-6 sm:p-8 cursor-pointer transition-all border ${isSelected ? 'border-prexo-gold bg-prexo-gold/5 shadow-md' : 'border-slate-200 bg-white hover:border-slate-300'}`}
                    >
                      <Icon className={`w-8 h-8 sm:w-10 sm:h-10 mb-4 sm:mb-6 ${isSelected ? 'text-prexo-gold' : 'text-slate-400'}`} />
                      <div className={`font-semibold text-xs sm:text-sm uppercase tracking-widest ${isSelected ? 'text-prexo-blue' : 'text-slate-500'}`}>{type.label}</div>
                      {isSelected && (
                        <div className="absolute top-4 right-4 text-prexo-gold">
                          <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6 sm:space-y-8">
              <h3 className="text-2xl sm:text-3xl font-display text-prexo-blue mb-2">{t('wiz.step2.title')}</h3>
              <p className="text-sm sm:text-base text-slate-500 font-light mb-8">{t('wiz.step2.desc')}</p>
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">{t('wiz.brand')}</label>
                  <input type="text" {...register('brand')} className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-slate-200 focus:border-prexo-gold focus:ring-1 focus:ring-prexo-gold focus:outline-none transition-all text-slate-800 text-sm sm:text-base" placeholder={t('wiz.brand.ph')} />
                  {errors.brand && <p className="text-red-500 text-xs mt-2">{errors.brand.message}</p>}
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">{t('wiz.vin')} <span className="font-normal text-slate-400">{t('wiz.optional')}</span></label>
                  <input type="text" {...register('vin')} className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-slate-200 bg-slate-50 font-mono focus:bg-white focus:border-prexo-gold focus:ring-1 focus:ring-prexo-gold focus:outline-none transition-all text-slate-800 uppercase text-sm sm:text-base" placeholder="WMA123..." />
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6 sm:space-y-8">
              <h3 className="text-2xl sm:text-3xl font-display text-prexo-blue mb-2">{t('wiz.step3.title')}</h3>
              <p className="text-sm sm:text-base text-slate-500 font-light mb-8">{t('wiz.step3.desc')}</p>
              <div>
                <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">{t('wiz.part.desc')}</label>
                <textarea 
                  {...register('description')} 
                  rows={6} 
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-slate-200 focus:border-prexo-gold focus:ring-1 focus:ring-prexo-gold focus:outline-none transition-all text-slate-800 resize-none text-sm sm:text-base" 
                  placeholder={t('wiz.part.ph')}
                />
                {errors.description && <p className="text-red-500 text-xs mt-2">{errors.description.message}</p>}
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6 sm:space-y-8">
              <h3 className="text-2xl sm:text-3xl font-display text-prexo-blue mb-2">{t('wiz.step4.title')}</h3>
              <p className="text-sm sm:text-base text-slate-500 font-light mb-8">{t('wiz.step4.desc')}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="sm:col-span-2">
                  <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">{t('wiz.company')} <span className="font-normal text-slate-400">{t('wiz.optional')}</span></label>
                  <input type="text" {...register('company')} className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-slate-200 focus:border-prexo-gold focus:ring-1 focus:ring-prexo-gold focus:outline-none transition-all text-slate-800 text-sm sm:text-base" />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">{t('wiz.name')}</label>
                  <input type="text" {...register('name')} className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-slate-200 focus:border-prexo-gold focus:ring-1 focus:ring-prexo-gold focus:outline-none transition-all text-slate-800 text-sm sm:text-base" />
                  {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">{t('wiz.phone')}</label>
                  <input type="tel" {...register('phone')} className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-slate-200 focus:border-prexo-gold focus:ring-1 focus:ring-prexo-gold focus:outline-none transition-all text-slate-800 text-sm sm:text-base" />
                  {errors.phone && <p className="text-red-500 text-xs mt-2">{errors.phone.message}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">{t('wiz.email')}</label>
                  <input type="email" {...register('email')} className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-slate-200 focus:border-prexo-gold focus:ring-1 focus:ring-prexo-gold focus:outline-none transition-all text-slate-800 text-sm sm:text-base" />
                  {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>}
                </div>
                <div className="sm:col-span-2 mt-4 flex items-start gap-3">
                  <div className="flex items-center h-5">
                    <input 
                      id="consent" 
                      type="checkbox" 
                      {...register('consent')} 
                      className="w-4 h-4 text-prexo-gold border-slate-300 rounded focus:ring-prexo-gold"
                    />
                  </div>
                  <div className="text-sm">
                    <label htmlFor="consent" className="font-light text-slate-600 cursor-pointer" dangerouslySetInnerHTML={{ __html: t('wiz.consent') }} />
                    {errors.consent && <p className="text-red-500 text-xs mt-1">{errors.consent.message}</p>}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 sm:pt-10 border-t border-slate-100 mt-8 sm:mt-10">
          <button
            type="button"
            onClick={handleBack}
            className={`flex items-center w-full sm:w-auto justify-center text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-prexo-blue transition-colors px-4 py-4 sm:p-0 ${step === 1 ? 'hidden' : ''}`}
          >
            <ChevronLeft className="w-4 h-4 mr-2" /> {t('wiz.btn.back')}
          </button>

          {step < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="w-full sm:w-auto justify-center px-8 sm:px-8 py-4 bg-prexo-blue text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-prexo-blue-dark transition-all flex items-center shadow-lg"
            >
              {t('wiz.btn.next')} <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto justify-center px-6 sm:px-10 py-4 bg-prexo-gold text-prexo-blue-dark text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-prexo-gold-light transition-all flex items-center shadow-lg disabled:opacity-50"
            >
              {isSubmitting ? t('wiz.btn.sending') : (
                <>{t('wiz.btn.send')} <Send className="w-4 h-4 ml-2" /></>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
