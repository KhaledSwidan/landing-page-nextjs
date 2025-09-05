import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'InnovateTech - Transform Your Business with AI-Powered Solutions',
  description:
    'Leading provider of AI-powered business solutions. Increase efficiency by 300% with our cutting-edge technology. Trusted by 10,000+ companies worldwide.',
  keywords: [
    'AI solutions',
    'business automation',
    'digital transformation',
    'enterprise software',
    'productivity tools',
  ],
  authors: [{ name: 'InnovateTech' }],
  creator: 'InnovateTech',
  publisher: 'InnovateTech',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://nxlandingpage.netlify.app/',
  },
  openGraph: {
    title: 'InnovateTech - Transform Your Business with AI-Powered Solutions',
    description:
      'Leading provider of AI-powered business solutions. Increase efficiency by 300% with our cutting-edge technology.',
    url: 'https://nxlandingpage.netlify.app/',
    siteName: 'InnovateTech',
    images: [
      {
        url: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'InnovateTech AI Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InnovateTech - Transform Your Business with AI-Powered Solutions',
    description:
      'Leading provider of AI-powered business solutions. Increase efficiency by 300% with our cutting-edge technology.',
    images: [
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f23' },
  ],
};
