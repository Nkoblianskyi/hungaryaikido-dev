import Link from 'next/link'
import { articles } from '@/lib/articles-data'

export default function BlogPreview() {
  const preview = articles.slice(0, 3)

  return (
    <section className="py-24 md:py-32 border-b border-border" aria-label="Cikkek előnézet">
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16 flex-wrap gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-12 h-px bg-accent" />
              <span className="text-xs tracking-[0.4em] uppercase text-accent font-medium">Cikkek</span>
            </div>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] font-bold text-foreground">
              Tudás és
              <br />
              <span className="italic">tapasztalat</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-4 group self-end"
          >
            <span className="text-sm font-medium tracking-widest uppercase text-foreground border-b border-foreground pb-0.5 group-hover:border-accent group-hover:text-accent transition-all">
              Összes cikk
            </span>
            <span className="text-accent font-bold text-lg group-hover:translate-x-2 transition-transform">/</span>
          </Link>
        </div>

        {/* Articles grid — editorial asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px border border-border bg-border">
          {/* Featured article */}
          <Link
            href={`/blog/${preview[0].slug}`}
            className="lg:col-span-6 bg-card p-8 md:p-10 flex flex-col justify-between min-h-64 hover:bg-secondary transition-colors group"
          >
            <div className="space-y-4">
              <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">
                {preview[0].category}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-foreground group-hover:text-accent transition-colors">
                {preview[0].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{preview[0].excerpt}</p>
            </div>
            <span className="mt-8 text-sm font-medium tracking-widest uppercase text-muted-foreground group-hover:text-accent transition-colors">
              Olvasd el /
            </span>
          </Link>

          {/* Secondary articles */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-border bg-card">
            {preview.slice(1).map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="p-8 flex flex-col gap-3 hover:bg-secondary transition-colors group flex-1"
              >
                <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">
                  {article.category}
                </span>
                <h3 className="font-serif text-2xl font-bold leading-tight text-foreground group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{article.excerpt}</p>
                <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground group-hover:text-accent transition-colors mt-2">
                  Olvasd el /
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
