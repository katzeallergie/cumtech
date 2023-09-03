import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import ParticlesBackground from './components/ParticlesBackground';
import { Header } from './components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CumTech',
  description: 'Change the World by Technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ParticlesBackground />
        <Header/>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
