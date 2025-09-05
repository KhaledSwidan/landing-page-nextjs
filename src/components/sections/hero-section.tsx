'use client';

import React from 'react';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { stats } from '../db';
import Image from 'next/image';

export function HeroSection() {
  return (
    <LazyMotion features={domAnimation}>
      {' '}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-slate-50 to-purple-100 dark:from-gray-900 dark:to-purple-900/20'>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16'>
          <div className='text-center'>
            {/* Announcement Banner */}
            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-200 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-8'
            >
              <CheckCircle
                className='h-5 w-5 text-green-600'
                aria-hidden='true'
              />
              <span>Now trusted by 10,000+ companies worldwide</span>
            </m.div>

            {/* Main Headline */}
            <m.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className='text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight'
            >
              Transform Your Business with <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
                AI-Powered
              </span>{' '}
              Solutions
            </m.h1>

            {/* Subtitle */}
            <m.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed'
            >
              Unlock unprecedented efficiency and growth with our cutting-edge
              AI platform. Automate workflows, enhance decision-making, and
              scale your business with confidence
            </m.p>

            {/* CTA Buttons */}
            <m.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-16'
            >
              <Button
                size='lg'
                className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group'
              >
                Start Free Trial
                <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='px-8 py-4 text-lg rounded-lg border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 group'
              >
                <Play className='mr-2 h-5 w-5 group-hover:scale-110 transition-transform text-red-500 fill-red-900' />
                Watch Demo
              </Button>
            </m.div>

            {/* Stats */}
            <m.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'
            >
              {stats.map((stat) => (
                <div key={stat.label} className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2'>
                    {stat.value}
                  </div>
                  <div className='text-gray-600 dark:text-gray-400 font-medium'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </m.div>
          </div>

          {/* Hero Image/Video Placeholder */}
          <m.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='mt-20'
          >
            <div className='relative mx-auto max-w-5xl'>
              <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
                <Image
                  width={1200}
                  height={800}
                  sizes='100vw'
                  src='https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200'
                  alt='AI-powered business dashboard showing analytics and automation tools'
                  className='w-full h-auto'
                  loading='eager'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
              </div>

              {/* Floating Elements */}
              <m.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className='absolute -top-4 -left-4 bg-green-700 text-white px-4 py-2 rounded-lg font-semibold shadow-lg'
              >
                ✨ Live Analytics
              </m.div>
              <m.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className='absolute -bottom-4 -right-4 bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold shadow-lg'
              >
                🚀 AI Powered
              </m.div>
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
