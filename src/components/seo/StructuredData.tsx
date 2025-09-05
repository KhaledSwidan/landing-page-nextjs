'use client';

import Script from 'next/script';

export function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'InnovateTech',
    url: 'https://nxlandingpage.netlify.app/',
    logo: 'https://nxlandingpage.netlify.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3861969%2Fpexels-photo-3861969.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D1200&w=1920&q=75',
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
