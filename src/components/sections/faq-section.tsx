'use client';

import { useState } from 'react';
import { m, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../db';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <LazyMotion features={domAnimation}>
      <section id='faq' className='py-24 bg-gray-100 dark:bg-gray-800'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <m.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
              Frequently Asked{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
                Questions
              </span>
            </h2>
            <p className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed'>
              Find answers to common questions about our platform and services
            </p>
          </m.div>

          <div className='space-y-3'>
            {faqs.map((faq, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden'
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className='w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group'
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200'>
                    {faq.question}
                  </h3>
                  <m.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className='flex-shrink-0 ml-4'
                  >
                    <ChevronDown className='h-5 w-5 text-gray-500 dark:text-gray-400' />
                  </m.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <m.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className='overflow-hidden mt-3'
                    >
                      <div className='px-6 pb-5'>
                        <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                          {faq.answer}
                        </p>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
