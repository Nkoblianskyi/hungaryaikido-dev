import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import HeroSection from '@/components/sections/hero-section'
import HistoryPreview from '@/components/sections/history-preview'
import EquipmentSection from '@/components/sections/equipment-section'
import BlogPreview from '@/components/sections/blog-preview'
import RulesPreview from '@/components/sections/rules-preview'
import TechniquePreview from '@/components/sections/technique-preview'
import AchievementsSection from '@/components/sections/achievements-section'
import FactsSection from '@/components/sections/facts-section'

export const metadata: Metadata = {
  title: 'Hungary Aikido — A mozgás harmóniája',
  description:
    'Az aikido ismeretterjesztő oldala Magyarországon. Technikák, történet, szabályok, felszerelés és a magyarországi aikido közösség világa egy helyen.',
  alternates: { canonical: 'https://hungaryaikido.com' },
  openGraph: {
    title: 'Hungary Aikido — A mozgás harmóniája',
    description:
      'Az aikido ismeretterjesztő oldala Magyarországon. Technikák, történet, szabályok, felszerelés és a magyarországi aikido közösség világa egy helyen.',
    url: 'https://hungaryaikido.com',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HistoryPreview />
        <EquipmentSection />
        <TechniquePreview />
        <BlogPreview />
        <RulesPreview />
        <AchievementsSection />
        <FactsSection />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
