import './globals.css';
import { Inter } from 'next/font/google';
import { AppThemeProvider } from '@/components/providers/AppThemeProvider';
import { StructuredData } from '@/components/seo/StructuredData';
import { metadata, viewport } from '@/config/metadata';

const inter = Inter({ subsets: ['latin'] });

export { metadata, viewport };

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' dir='ltr' suppressHydrationWarning>
      <body className={inter.className}>
        <StructuredData />
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
