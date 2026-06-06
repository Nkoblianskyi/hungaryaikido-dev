import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: {
    default: 'Hungary Aikido',
    template: '%s | Hungary Aikido',
  },
  description:
    'Az aikido ismeretterjesztő oldala Magyarországon. Fedezd fel a mozgás, harmónia és önvédelem japán harcművészetét.',
  keywords: [
    'aikido',
    'aikido magyarország',
    'harcművészet',
    'önvédelem',
    'japán harcművészet',
    'aikido technikák',
    'aikido edzés',
    'aikido történet',
    'aikido szabályok',
  ],
  authors: [{ name: 'Hungary Aikido', url: 'https://hungaryaikido.com' }],
  creator: 'Hungary Aikido',
  publisher: 'Hungary Aikido',
  metadataBase: new URL('https://hungaryaikido.com'),
  alternates: {
    canonical: '/',
    languages: { 'hu-HU': '/' },
  },
  openGraph: {
    title: 'Hungary Aikido',
    description:
      'Az aikido ismeretterjesztő oldala Magyarországon. Fedezd fel a mozgás, harmónia és önvédelem japán harcművészetét.',
    url: 'https://hungaryaikido.com',
    siteName: 'Hungary Aikido',
    locale: 'hu_HU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hungary Aikido',
    description:
      'Az aikido ismeretterjesztő oldala Magyarországon. Fedezd fel a mozgás, harmónia és önvédelem japán harcművészetét.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className={`${spaceGrotesk.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
