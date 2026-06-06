'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/tortenet', label: 'Történet' },
  { href: '/technika', label: 'Technika' },
  { href: '/szabalyok', label: 'Szabályok' },
  { href: '/blog', label: 'Cikkek' },
  { href: '/rolunk', label: 'Rólunk' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-background/96 backdrop-blur-lg border-b border-border'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-14 h-[72px]">

          {/* Wordmark Logo */}
          <Link href="/" className="flex items-center gap-[14px] group" aria-label="Hungary Aikido főoldal">
            {/* Custom SVG: two interlocking arcs — yin-yang derived, abstract aikido circle */}
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              aria-hidden="true"
              className="flex-shrink-0"
            >
              {/* Outer ring */}
              <circle cx="19" cy="19" r="17.5" stroke="oklch(0.55 0.22 26)" strokeWidth="1.2" />
              {/* Left arc — ink stroke */}
              <path
                d="M19 1.5 C10 1.5, 3 9.5, 3 19 C3 28.5, 10 36.5, 19 36.5"
                fill="oklch(0.55 0.22 26)"
                opacity="0.9"
              />
              {/* Inner dot top */}
              <circle cx="19" cy="10" r="3.8" fill="oklch(0.55 0.22 26)" />
              {/* Inner dot bottom — white void */}
              <circle cx="19" cy="28" r="3.8" fill="oklch(0.08 0 0)" stroke="oklch(0.55 0.22 26)" strokeWidth="1" />
            </svg>

            {/* Text: two-line wordmark */}
            <span className="flex flex-col leading-none">
              <span className="font-serif text-[15px] font-semibold tracking-[0.3em] uppercase text-foreground/80 transition-colors duration-300 group-hover:text-accent">
                Hungary
              </span>
              <span className="font-serif text-[22px] font-semibold italic leading-none tracking-tight text-foreground mt-[1px]">
                Aikido
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Főmenü">
            {navLinks.map((l) => {
              const active = pathname === l.href
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-200 pb-[3px] ${
                    active
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute left-0 bottom-0 h-px bg-accent transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Hamburger — minimal two-line style */}
          <button
            className="md:hidden relative w-10 h-10 flex flex-col items-end justify-center gap-[7px] cursor-pointer"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Menü bezárása' : 'Menü megnyitása'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-px bg-foreground origin-right transition-all duration-400 ${
                menuOpen ? 'w-7 rotate-[-45deg] translate-y-[3.5px]' : 'w-7'
              }`}
            />
            <span
              className={`block h-px bg-foreground transition-all duration-400 ${
                menuOpen ? 'w-5 rotate-[45deg] -translate-y-[3.5px]' : 'w-5'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigáció"
        className={`fixed inset-0 z-40 bg-background flex flex-col justify-between px-8 pt-[90px] pb-12 transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Decorative vertical label */}
        <span
          className="absolute right-8 top-[90px] writing-mode-vertical text-[10px] tracking-[0.3em] uppercase text-muted-foreground select-none"
          aria-hidden="true"
        >
          合気道
        </span>

        <nav className="flex flex-col gap-1 mt-4" aria-label="Mobil menü">
          {navLinks.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex items-baseline gap-4 py-4 border-b border-border last:border-b-0"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="text-[10px] tracking-widest text-muted-foreground w-6 font-mono">
                0{i + 1}
              </span>
              <span className="font-serif text-[42px] font-light italic text-foreground group-hover:text-accent transition-colors duration-200 leading-none">
                {l.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-between">
          <p className="text-xs tracking-widest uppercase text-muted-foreground">
            Magyarország aikido oldala
          </p>
          <p className="text-xs text-muted-foreground">hungaryaikido.com</p>
        </div>
      </div>
    </>
  )
}
