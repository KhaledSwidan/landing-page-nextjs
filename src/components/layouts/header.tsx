'use client';

import { useState, useEffect } from 'react';
import { m, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { ThemeToggle } from '../ui/theme-toggle';
import { Button } from '../ui/button';
import { navigation } from '../db';

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: 'linear' }}
      >
        <nav
          className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
          aria-label='Main navigation'
        >
          <div className='flex h-16 items-center justify-between'>
            <m.div
              className='flex items-center space-x-2'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap
                className='h-8 w-8 text-blue-600 dark:text-blue-400'
                aria-hidden='true'
              />
              <span className='text-xl font-bold text-gray-900 dark:text-white'>
                InnovateTech
              </span>
            </m.div>

            {/* Desktop Navigation */}
            <div className='hidden md:block'>
              <div className='flex items-center space-x-2'>
                {navigation.map((item) => (
                  <Button
                    key={item.name}
                    variant='ghost'
                    onClick={() => scrollToSection(item.href)}
                    className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400 rounded-md'
                  >
                    {item.name}
                  </Button>
                ))}
              </div>
            </div>

            <div className='flex items-center space-x-1'>
              <ThemeToggle />
              <div className='hidden md:flex items-center space-x-3'>
                <Button
                  variant='ghost'
                  size='sm'
                  className='text-gray-700 dark:text-gray-300 bg-inheritant hover:bg-gray-100 dark:hover:bg-gray-800'
                >
                  Log in
                </Button>
                <Button
                  size='sm'
                  className='bg-blue-600 hover:bg-blue-700 text-white'
                >
                  Get Started
                </Button>
              </div>

              {/* Mobile menu button */}
              <div className='md:hidden'>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={() => setIsOpen(!isOpen)}
                  aria-expanded={isOpen}
                  aria-label='Toggle navigation menu'
                  className='bg-inheritant hover:bg-gray-100 dark:hover:bg-gray-800'
                >
                  {isOpen ? (
                    <X className='h-6 w-6' />
                  ) : (
                    <Menu className='h-6 w-6' />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <m.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='md:hidden overflow-hidden'
              >
                <div className='px-2 pt-2 pb-3 space-y-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-lg mt-2 border border-gray-300 dark:border-gray-700'>
                  {navigation.map((item) => (
                    <Button
                      key={item.name}
                      variant='ghost'
                      onClick={() => scrollToSection(item.href)}
                      className='block w-full text-left px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md hover:translate-x-2 transition-all duration-200'
                    >
                      {item.name}
                    </Button>
                  ))}
                  <div className='border-t border-gray-400 dark:border-gray-600 pt-3 mt-3'>
                    <div className='flex flex-col space-y-2'>
                      <Button
                        variant='ghost'
                        className='justify-start text-gray-700 font-semibold text-base dark:text-gray-300'
                      >
                        Log in
                      </Button>
                      <Button className='bg-blue-600 hover:bg-blue-700 text-white font-bold text-base'>
                        Get Started
                      </Button>
                    </div>
                  </div>
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </nav>
      </m.header>
    </LazyMotion>
  );
}
