'use client';

import { domAnimation, LazyMotion, m } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { plans } from '../db';
import { cardVariants, containerVariants } from '../types';

export function PricingSection() {
  return (
    <LazyMotion features={domAnimation}>
      <section id='pricing' className='py-24 bg-gray-200 dark:bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <m.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className='text-center mb-20'
          >
            <m.h2
              variants={cardVariants}
              className='text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'
            >
              Choose Your{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
                Perfect Plan
              </span>
            </m.h2>
            <m.p
              variants={cardVariants}
              className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'
            >
              Start with a free trial, then choose a plan that scales with your
              business needs. <br />
              No hidden fees.
            </m.p>
          </m.div>

          <m.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'
          >
            {plans.map((plan, index) => (
              <m.div
                key={plan.name ?? index}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.01 }}
                className={`relative flex flex-col justify-between p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-blue-100 to-purple-200 dark:from-blue-800/30 dark:to-purple-900/30 border-2 border-blue-500'
                    : 'bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                    <Badge className='relative bg-blue-600 text-white pr-4 pl-6 py-1 font-semibold'>
                      <Star className='absolute bottom-0 left-1 h-4 w-4 mr-1 fill-yellow-200 text-yellow-500 animate-bounce' />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className='text-center mb-8'>
                  <h3
                    className={`text-2xl font-bold text-gray-900 dark:text-white ${
                      plan.popular ? 'text-3xl' : ''
                    } mb-2`}
                  >
                    {plan.name}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300 mb-6'>
                    {plan.description}
                  </p>
                  <div className='flex items-baseline justify-center'>
                    <span className='text-5xl font-bold text-gray-950 dark:text-white'>
                      ${plan.price}
                    </span>
                    <span className='text-xl text-gray-500 dark:text-gray-400 ml-2'>
                      /month
                    </span>
                  </div>
                </div>

                <ul className='space-y-3 mb-8 flex-1'>
                  {plan.features.map((feature) => (
                    <li key={feature} className='flex items-center'>
                      <Check className='h-5 w-5 text-green-500 mr-3 flex-shrink-0' />
                      <span className='text-gray-700 dark:text-gray-300'>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-3 text-lg font-semibold rounded-md transition-all duration-300 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white'
                  }`}
                  aria-label={`Choose ${plan.name} plan for $${plan.price} per month`}
                >
                  Get Started
                </Button>
              </m.div>
            ))}
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-center mt-16'
          >
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              All plans include a 14-day free trial. No credit card required.
            </p>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              Need a custom enterprise solution?{' '}
              <button className='text-blue-600 dark:text-blue-400 hover:underline font-semibold'>
                Contact our sales team
              </button>
            </p>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
