'use client';

import { domAnimation, LazyMotion, m } from 'framer-motion';
import { features } from '../db';
import { containerVariants, itemVariants } from '../types';

export function FeaturesSection() {
  return (
    <LazyMotion features={domAnimation}>
      {' '}
      <section id='features' className='py-24 bg-gray-200 dark:bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <m.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className='text-center mb-20'
          >
            <m.h2
              variants={itemVariants}
              className='text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'
            >
              Powerful Features for{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
                Modern Business
              </span>
            </m.h2>
            <m.p
              variants={itemVariants}
              className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'
            >
              Discover how our AI-powered platform can revolutionize your
              workflow and accelerate your business growth.
            </m.p>
          </m.div>

          <m.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <m.div
                  key={feature.title ?? index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className='group relative p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-300 dark:border-gray-700'
                >
                  <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/25 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  <div className='relative'>
                    <div className='inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg mb-5 group-hover:scale-110 transition-transform duration-300'>
                      <IconComponent className='h-6 w-6' aria-hidden='true' />
                    </div>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>
                      {feature.title}
                    </h3>
                    <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                      {feature.description}
                    </p>
                  </div>
                </m.div>
              );
            })}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
