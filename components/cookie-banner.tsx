'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const t = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie hozzájárulás"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card px-6 md:px-12 py-5"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          Ez az oldal sütiket (cookie-kat) használ a felhasználói élmény javítása érdekében. A sütik
          elfogadásával hozzájárulsz azok használatához.{' '}
          <Link href="/suti-iranyelvek" className="text-foreground underline hover:text-accent transition-colors">
            Süti irányelvek
          </Link>{' '}
          és{' '}
          <Link href="/adatvedelmi-iranyelvek" className="text-foreground underline hover:text-accent transition-colors">
            Adatvédelmi irányelvek
          </Link>
          .
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2 text-sm font-medium border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
          >
            Elutasítom
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-medium bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-all"
          >
            Elfogadom
          </button>
        </div>
      </div>
    </div>
  )
}
