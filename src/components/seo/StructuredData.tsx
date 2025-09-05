'use client';

import Script from 'next/script';

export function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'InnovateTech',
    url: 'https://innovatetech.com',
    logo: 'https://innovatetech.com/logo.png',
    description: 'Leading provider of AI-powered business solutions',
    foundingDate: '2025',
    founder: {
      '@type': 'Person',
      name: 'Khaled Swidan',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Innovation Drive',
      addressLocality: 'Alexandria',
      addressRegion: 'Alex',
      postalCode: '94105',
      addressCountry: 'Egypt',
    },
    sameAs: [
      'https://twitter.com',
      'https://linkedin.com',
      'https://github.com',
    ],
  };

  return (
    <Script
      id='ld-json-org'
      type='application/ld+json'
      strategy='afterInteractive'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
