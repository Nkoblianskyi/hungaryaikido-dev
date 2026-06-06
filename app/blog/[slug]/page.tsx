import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles } from '@/lib/articles-data'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

type Props = { params: Promise<{ slug: string }> }

const coverImages: Record<string, string> = {
  'az-aikido-filozofiaja': '/images/blog-1.png',
  'az-ukemi-muveszete': '/images/blog-2.png',
  'a-bokken-es-jo-szerepe': '/images/blog-3.png',
  'a-dan-fokozat-rendszer': '/images/blog-4.png',
  'edzesterv-kezdoknek': '/images/blog-5.png',
  'az-aikido-magyarorszagon': '/images/blog-6.png',
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `https://hungaryaikido.com/blog/${slug}` },
    openGraph: {
      title: `${article.title} | Hungary Aikido`,
      description: article.excerpt,
      url: `https://hungaryaikido.com/blog/${slug}`,
      type: 'article',
    },
  }
}

function renderContent(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let key = 0

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) {
      key++
      continue
    }

    if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
      elements.push(
        <h3
          key={key++}
          className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4"
        >
          {trimmed.slice(2, -2)}
        </h3>
      )
    } else if (trimmed.startsWith('- **')) {
      // List item with bold start
      const match = trimmed.match(/^- \*\*(.+?)\*\*(.*)$/)
      if (match) {
        elements.push(
          <li key={key++} className="text-muted-foreground leading-relaxed mb-2">
            <strong className="text-foreground">{match[1]}</strong>
            {match[2]}
          </li>
        )
      }
    } else if (trimmed.startsWith('- ')) {
      elements.push(
        <li key={key++} className="text-muted-foreground leading-relaxed mb-2">
          {trimmed.slice(2)}
        </li>
      )
    } else {
      elements.push(
        <p key={key++} className="text-muted-foreground leading-relaxed text-lg">
          {trimmed}
        </p>
      )
    }
  }

  // Wrap consecutive <li> elements in <ul>
  const grouped: React.ReactNode[] = []
  let liBuffer: React.ReactNode[] = []
  let bufKey = 0

  for (const el of elements) {
    if ((el as React.ReactElement).type === 'li') {
      liBuffer.push(el)
    } else {
      if (liBuffer.length > 0) {
        grouped.push(
          <ul key={`ul-${bufKey++}`} className="list-disc pl-6 space-y-1 my-4">
            {liBuffer}
          </ul>
        )
        liBuffer = []
      }
      grouped.push(el)
    }
  }
  if (liBuffer.length > 0) {
    grouped.push(
      <ul key={`ul-${bufKey++}`} className="list-disc pl-6 space-y-1 my-4">
        {liBuffer}
      </ul>
    )
  }

  return grouped
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const currentIdx = articles.findIndex((a) => a.slug === slug)
  const prev = articles[currentIdx - 1] ?? null
  const next = articles[currentIdx + 1] ?? null

  return (
    <>
      <Header />
      <main className="pt-16">
      {/* Hero */}
      <div className="relative h-64 md:h-[30rem] overflow-hidden">
        <Image
          src={coverImages[article.slug]}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-12">
          <span className="inline-block text-xs tracking-[0.35em] uppercase text-accent font-medium border border-accent/40 px-3 py-1 w-fit mb-4">
            {article.category}
          </span>
          <h1 className="font-serif text-[clamp(2rem,5vw,4rem)] font-bold text-foreground leading-[1.0] text-balance max-w-3xl">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Article body */}
      <article className="px-6 md:px-12 lg:px-24 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <div className="sticky top-24 space-y-8">
              <div className="space-y-2 border-l-2 border-accent pl-5">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium">
                  Összefoglaló
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
              <Link
                href="/blog"
                className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="w-6 h-px bg-muted-foreground group-hover:w-10 group-hover:bg-foreground transition-all" />
                Vissza a cikkekhez
              </Link>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-9 order-1 lg:order-2 space-y-6">
            {/* Lead paragraph */}
            <p className="font-serif text-2xl md:text-3xl font-light text-foreground leading-relaxed border-b border-border pb-8">
              {article.excerpt}
            </p>

            {/* Body */}
            <div className="space-y-5">
              {renderContent(article.content)}
            </div>
          </div>
        </div>
      </article>

      {/* Navigation between articles */}
      {(prev || next) && (
        <nav
          className="border-t border-border px-6 md:px-12 lg:px-24 py-12"
          aria-label="Cikkek közötti navigáció"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {prev ? (
              <Link href={`/blog/${prev.slug}`} className="group space-y-2">
                <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground flex items-center gap-2">
                  <span className="w-5 h-px bg-muted-foreground" />
                  Előző cikk
                </span>
                <p className="font-serif text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link href={`/blog/${next.slug}`} className="group space-y-2 md:text-right">
                <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground flex items-center gap-2 md:justify-end">
                  Következő cikk
                  <span className="w-5 h-px bg-muted-foreground" />
                </span>
                <p className="font-serif text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {next.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </nav>
      )}
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
