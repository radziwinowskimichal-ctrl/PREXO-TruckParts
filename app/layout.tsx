import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/i18n';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'PREXO TRUCK PARTS | Heute bestellt, morgen da!',
  description: 'Profi-Ersatzteile für LKW, Transporter und PKW. Industrie 4.0 Standard mit sofortiger Lieferung aus Nürnberg.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-slate-800" suppressHydrationWarning>
        <LanguageProvider>
          <div className="w-full relative bg-white">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
