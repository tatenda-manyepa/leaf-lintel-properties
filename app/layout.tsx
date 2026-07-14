import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Leaf & Lintel Properties',
  description:
    'Premium property development, HMO transformation and professional accommodation across the Midlands.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
