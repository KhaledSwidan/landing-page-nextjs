'use client';

import React from 'react';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../db';
import { cardVariants, containerVariants } from '../types';
import Image from 'next/image';

export function TestimonialsSection() {
  return (
    <LazyMotion features={domAnimation}>
      <section id='testimonials' className='py-24 bg-gray-100 dark:bg-gray-800'>
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
              Trusted by{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
                Industry Leaders
              </span>
            </m.h2>
            <m.p
              variants={cardVariants}
              className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'
            >
              See what our customers have to say about their transformative
              experience with our platform
            </m.p>
          </m.div>

          <m.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className='grid grid-cols-1 lg:grid-cols-3 gap-8'
          >
            {testimonials.map((testimonial, index) => (
              <m.div
                key={testimonial.name ?? index}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className='bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex flex-col justify-between'
              >
                <div className='flex items-center mb-6'>
                  <Quote className='h-8 w-8 text-blue-600 dark:text-blue-400 mr-3' />
                  <div className='flex'>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className='h-5 w-5 text-yellow-400 fill-current'
                        aria-label='Star rating'
                        aria-hidden='true'
                      />
                    ))}
                  </div>
                </div>

                <blockquote className='text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg'>
                  &quot;{testimonial.content}&quot;
                </blockquote>

                <div className='flex items-center'>
                  <Image
                    src={testimonial.avatar}
                    alt={`${testimonial.name}, ${testimonial.role} at ${testimonial.company}`}
                    className='w-12 h-12 rounded-full object-cover mr-4'
                    loading='lazy'
                    sizes='(max-width: 640px) 3rem, 3rem'
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className='font-semibold text-gray-900 dark:text-white'>
                      {testimonial.name}
                    </div>
                    <div className='text-gray-600 dark:text-gray-400 text-sm'>
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
