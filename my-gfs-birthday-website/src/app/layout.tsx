// src/app/layout.tsx
import { Quicksand } from 'next/font/google';
import './globals.css';
import Navigation from '../components/navigation';
import MusicPlayer from '../components/MusicPlayer'; 

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: "Happy Birthday!",
  description: 'A special site for a special person',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Navigation />
        <main>{children}</main>
        <MusicPlayer /> 
      </body>
    </html>
  );
}