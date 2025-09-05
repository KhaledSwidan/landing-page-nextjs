'use client';

import { domAnimation, LazyMotion, m } from 'framer-motion';
import { Zap, Mail, MapPin, Phone } from 'lucide-react';
import { footerLinks, socialLinks } from '../db';
import Link from 'next/link';

export function Footer() {
  return (
    <LazyMotion features={domAnimation}>
      <footer className='bg-gray-900 dark:bg-gray-950 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          {/* Main Footer Content */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12'>
            {/* Company Info */}
            <div className='lg:col-span-2'>
              <m.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className='flex items-center space-x-2 mb-5'
              >
                <Zap className='h-8 w-8 text-blue-400' aria-hidden='true' />
                <span className='text-2xl font-bold'>InnovateTech</span>
              </m.h2>

              <m.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className='text-gray-400 mb-5 leading-relaxed'
              >
                Empowering businesses worldwide with <strong>AI-driven</strong>{' '}
                solutions that transform operations and accelerate growth.
              </m.p>

              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='space-y-2'
              >
                <div className='flex items-center space-x-3 text-gray-400'>
                  <MapPin
                    className='h-4 w-4 text-gray-300'
                    aria-hidden='true'
                  />
                  <span>123 Innovation Drive, Alexandria, VA 22314</span>
                </div>
                <div className='flex items-center space-x-3 text-gray-400'>
                  <Phone className='h-4 w-4 text-gray-300' aria-hidden='true' />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className='flex items-center space-x-3 text-gray-400'>
                  <Mail className='h-4 w-4 text-gray-300' aria-hidden='true' />
                  <span>hello@innovatetech.com</span>
                </div>
              </m.div>
            </div>

            {/* Product Links */}
            <m.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className='text-lg font-semibold mb-5'>Product</h3>
              <ul className='space-y-2'>
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className='text-gray-400 hover:text-gray-200 transform transition-all duration-200 hover:translate-x-2 inline-block'
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </m.div>

            {/* Company Links */}
            <m.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className='text-lg font-semibold mb-5'>Company</h3>
              <ul className='space-y-2'>
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className='text-gray-400 hover:text-gray-200 transform transition-all duration-200 hover:translate-x-2 inline-block'
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </m.div>

            {/* Support Links */}
            <m.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className='text-lg font-semibold mb-5'>Support</h3>
              <ul className='space-y-2'>
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className='text-gray-400 hover:text-gray-200 transform transition-all duration-200 hover:translate-x-2 inline-block'
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </m.div>

            {/* Legal Links */}
            <m.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className='text-lg font-semibold mb-5'>Legal</h3>
              <ul className='space-y-2'>
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className='text-gray-400 hover:text-gray-200 transform transition-all duration-200 hover:translate-x-2 inline-block'
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </m.div>
          </div>

          {/* Bottom Section */}
          <div className='border-t border-gray-800 dark:border-gray-700 pt-8 mt-12'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
              <m.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className='text-gray-400 text-sm mb-4 md:mb-0'
              >
                © 2025 InnovateTech. All rights reserved.
              </m.div>

              <m.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className='flex space-x-5'
              >
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <m.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -1 }}
                      whileTap={{ scale: 0.9 }}
                      className='text-gray-400 hover:text-white transition-colors duration-200'
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <IconComponent className='h-5 w-5' />
                    </m.a>
                  );
                })}
              </m.div>
            </div>
          </div>
        </div>
      </footer>
    </LazyMotion>
  );
}
