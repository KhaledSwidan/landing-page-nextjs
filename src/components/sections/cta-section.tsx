'use client';

import { domAnimation, LazyMotion, m } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';

export function CTASection() {
  return (
    <LazyMotion features={domAnimation}>
      <section className='py-24 bg-gradient-to-br from-blue-600 to-purple-700 text-white relative overflow-hidden'>
        <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <m.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <m.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white/90 text-sm font-medium mb-8'
            >
              <Sparkles className='h-4 w-4 text-yellow-200' />
              <span>
                Join 10,000+ companies already transforming their business
              </span>
            </m.div>

            <h2 className='text-4xl md:text-6xl font-bold mb-6 leading-tight'>
              Ready to Transform
              <br />
              Your Business?
            </h2>

            <p className='text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed'>
              Start your free trial today and experience the power of AI-driven
              automation. No credit card required, cancel anytime.
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size='lg'
                  className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group'
                >
                  Start Free Trial
                  <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
                </Button>
              </m.div>

              <Button
                variant='outline'
                size='lg'
                className='text-slate-400 dark:text-slate-300 hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-lg backdrop-blur-sm transition-all duration-300 bg-gray-800'
              >
                Schedule Demo
              </Button>
            </div>

            <m.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='text-white/60 text-sm mt-8'
            >
              14-day free trial • No setup fees • Cancel anytime
            </m.p>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
