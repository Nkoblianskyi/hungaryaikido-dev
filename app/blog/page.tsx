import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { articles } from '@/lib/articles-data'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Cikkek — Aikido tudástár',
  description:
    'Hat mélyreható cikk az aikido technikáiról, elveiről, fegyverhasználatáról, fokozatrendszeréről és a magyarországi közösségről.',
  alternates: { canonical: 'https://hungaryaikido.com/blog' },
  openGraph: {
    title: 'Cikkek — Aikido tudástár | Hungary Aikido',
    description:
      'Hat mélyreható cikk az aikido technikáiról, elveiről, fegyverhasználatáról, fokozatrendszeréről és a magyarországi közösségről.',
    url: 'https://hungaryaikido.com/blog',
    type: 'website',
  },
}

const coverImages: Record<string, string> = {
  'az-aikido-filozofiaja': '/images/blog-1.png',
  'az-ukemi-muveszete': '/images/blog-2.png',
  'a-bokken-es-jo-szerepe': '/images/blog-3.png',
  'a-dan-fokozat-rendszer': '/images/blog-4.png',
  'edzesterv-kezdoknek': '/images/blog-5.png',
  'az-aikido-magyarorszagon': '/images/blog-6.png',
}

export default function BlogPage() {
  const [featured, ...rest] = articles

  return (
    <>
      <Header />
      <main className="pt-16">
      {/* Page header */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-b border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-6">
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-accent font-medium block mb-3">
              Tudástár
            </span>
            <h1 className="font-serif text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.9] text-foreground text-balance">
              Cikkek
            </h1>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-sm md:text-right">
            Hat mélyreható írás az aikido technikáiról, elveiről, felszereléséről és a magyarországi közösségről.
          </p>
        </div>
      </section>

      {/* Featured article */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-medium block mb-8">
            Kiemelt cikk
          </span>
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-72 md:h-96 overflow-hidden">
                <Image
                  src={coverImages[featured.slug]}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/20" />
              </div>
              <div className="space-y-5">
                <span className="inline-block text-xs tracking-[0.3em] uppercase text-accent font-medium border border-accent/40 px-3 py-1">
                  {featured.category}
                </span>
                <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-bold text-foreground leading-[1.05] text-balance group-hover:text-accent transition-colors duration-300">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-sm font-medium tracking-widest uppercase text-foreground group-hover:text-accent transition-colors">
                    Elolvasom
                  </span>
                  <span className="w-8 h-px bg-foreground group-hover:w-16 transition-all duration-300 group-hover:bg-accent" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Article grid */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-medium block mb-8">
            Összes cikk
          </span>
          <div className="divide-y divide-border">
            {rest.map((article, idx) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group flex flex-col md:flex-row items-start gap-6 py-10"
              >
                {/* Index number */}
                <span className="font-serif text-[3rem] font-bold text-border leading-none select-none w-16 flex-shrink-0 hidden md:block">
                  {String(idx + 2).padStart(2, '0')}
                </span>

                {/* Thumbnail */}
                <div className="relative w-full md:w-48 h-36 overflow-hidden flex-shrink-0">
                  <Image
                    src={coverImages[article.slug]}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <span className="inline-block text-xs tracking-[0.3em] uppercase text-accent font-medium">
                    {article.category}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground leading-tight group-hover:text-accent transition-colors duration-300">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 self-center hidden md:block">
                  <span className="w-10 h-px bg-border block group-hover:w-16 group-hover:bg-accent transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
