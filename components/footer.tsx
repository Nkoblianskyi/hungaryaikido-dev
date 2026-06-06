import Link from 'next/link'

const navLinks = [
  { href: '/tortenet', label: 'Történet' },
  { href: '/technika', label: 'Technika' },
  { href: '/szabalyok', label: 'Szabályok' },
  { href: '/blog', label: 'Cikkek' },
  { href: '/rolunk', label: 'Rólunk' },
]

const legalLinks = [
  { href: '/suti-iranyelvek', label: 'Süti irányelvek' },
  { href: '/adatvedelmi-iranyelvek', label: 'Adatvédelmi irányelvek' },
]

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border overflow-hidden">

      {/* ── Giant editorial wordmark ── */}
      <div className="px-6 md:px-14 pt-16 pb-0">
        <div className="relative">
          {/* Thin rule above */}
          <div className="w-full h-px bg-border mb-8" />

          {/* Top row: manifesto left, links right */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-0">

            {/* Left: brand statement */}
            <div className="max-w-sm space-y-5">
              {/* Logomark + wordmark repeated small */}
              <Link href="/" className="flex items-center gap-3 group w-fit" aria-label="Főoldal">
                <svg width="28" height="28" viewBox="0 0 38 38" fill="none" aria-hidden="true">
                  <circle cx="19" cy="19" r="17.5" stroke="oklch(0.55 0.22 26)" strokeWidth="1.2" />
                  <path
                    d="M19 1.5 C10 1.5, 3 9.5, 3 19 C3 28.5, 10 36.5, 19 36.5"
                    fill="oklch(0.55 0.22 26)"
                    opacity="0.9"
                  />
                  <circle cx="19" cy="10" r="3.8" fill="oklch(0.55 0.22 26)" />
                  <circle cx="19" cy="28" r="3.8" fill="oklch(0.08 0 0)" stroke="oklch(0.55 0.22 26)" strokeWidth="1" />
                </svg>
                <span className="flex flex-col leading-none">
                  <span className="font-serif text-[12px] tracking-[0.3em] uppercase text-white">Hungary</span>
                  <span className="font-serif text-[17px] font-semibold italic leading-none text-foreground">Aikido</span>
                </span>
              </Link>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Az aikido nem a győzelem — hanem az összhang művészete. Ez az oldal Magyarország aikido közösségének digitális otthona.
              </p>

              <a
                href="mailto:info@hungaryaikido.com"
                className="inline-block text-sm text-accent hover:underline underline-offset-4 transition-colors"
              >
                info@hungaryaikido.com
              </a>
            </div>

            {/* Right: split nav lists */}
            <div className="flex flex-row gap-16 md:gap-20">
              <div className="space-y-4">
                <p className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground font-medium">Tartalom</p>
                <nav className="flex flex-col gap-3" aria-label="Footer tartalom navigáció">
                  {navLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 w-fit relative after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {l.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="space-y-4">
                <p className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground font-medium">Jogi</p>
                <nav className="flex flex-col gap-3" aria-label="Footer jogi navigáció">
                  {legalLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 w-fit relative after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {l.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* ── Massive display text ── */}
          <div
            className="mt-12 select-none overflow-hidden"
            aria-hidden="true"
          >
            <p className="font-serif font-bold leading-[0.82] tracking-tight text-border whitespace-nowrap"
              style={{ fontSize: 'clamp(80px, 16vw, 220px)' }}
            >
              合気道
            </p>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="px-6 md:px-14 py-5 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <p className="text-[11px] text-muted-foreground tracking-wide">
          &copy; {new Date().getFullYear()} Hungary Aikido &mdash; Minden jog fenntartva.
        </p>
        <p className="text-[11px] text-muted-foreground tracking-[0.15em] uppercase">
          hungaryaikido.com
        </p>
      </div>
    </footer>
  )
}
