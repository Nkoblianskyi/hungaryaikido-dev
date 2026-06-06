'use client'

import Image from 'next/image'
import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

const values = [
  {
    label: 'Harmónia',
    japanese: '和',
    body: 'Az aikido nem az ellenfél legyőzéséről szól, hanem az összhang megteremtéséről. A harmónia elve minden technikai és szellemi döntésünket vezérli.',
  },
  {
    label: 'Folytonos fejlődés',
    japanese: '道',
    body: 'Az út (do) soha nem ér véget. A kezdő és a mester egyaránt naponta tanul valamit újonnan, és ez az örökös tanulás az aikido egyik legfontosabb üzenete.',
  },
  {
    label: 'Közösség',
    japanese: '仲間',
    body: 'Az aikido közösségi harcművészet. A dojóban nem ellenfelek, hanem tanulótársak dolgoznak együtt. A közösség összetartása és a kölcsönös tisztelet az alap.',
  },
  {
    label: 'Ismeretterjesztés',
    japanese: '知',
    body: 'Célunk, hogy az aikidóval kapcsolatos hiteles, jól megírt magyar nyelvű tartalom mindenki számára elérhető legyen, dojótól és fokozattól függetlenül.',
  },
]

export default function RolunkPage() {
  const [popupVisible, setPopupVisible] = useState(false)
  const [formState, setFormState] = useState({ nev: '', email: '', uzenet: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!formState.nev.trim() || !formState.email.trim() || !formState.uzenet.trim()) {
      setError('Kérjük, töltsd ki az összes mezőt.')
      return
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRe.test(formState.email)) {
      setError('Érvénytelen e-mail cím.')
      return
    }
    setSubmitted(true)
  }

  function closePopup() {
    setPopupVisible(false)
    setSubmitted(false)
    setError('')
    setFormState({ nev: '', email: '', uzenet: '' })
  }

  return (
    <>
      <Header />
      <main className="pt-16">
      {/* Page hero */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <Image
          src="/images/about-aikido.png"
          alt="Aikido oktatók köszönése a dojóban"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-10">
          <span className="text-xs tracking-[0.4em] uppercase text-accent font-medium block mb-3">
            Rólunk
          </span>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-bold text-foreground leading-[0.95]">
            Kik vagyunk,
            <br />
            <span className="italic">és mit képviselünk</span>
          </h1>
        </div>
      </div>

      {/* Mission statement */}
      <section className="px-6 md:px-12 lg:px-24 py-20 border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-bold text-foreground leading-[1.05] text-balance">
            Magyarország aikido ismeretterjesztő forrása
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              A Hungary Aikido oldal célja, hogy a japán harcművészet iránt érdeklődők számára egységes, hiteles és jól strukturált magyar nyelvű forrást biztosítson. Legyen szó az aikido történetéről, technikáinak megértéséről, a szabályokról vagy a felszerelésről — minden fontos terület érthetően és részletesen olvasható az oldalon.
            </p>
            <p>
              Az oldal nem köthető egyetlen dojóhoz, stílushoz vagy szervezethez. Független ismeretterjesztő platformként működünk, amelynek egyetlen célja az, hogy az aikido világa minél több ember számára megközelíthetővé váljon.
            </p>
            <p>
              Ha kérdésed van, észrevételed, vagy szeretnél hozzájárulni az oldalhoz cikkek formájában, vedd fel velünk a kapcsolatot az alábbi űrlapon keresztül.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-12 lg:px-24 py-20 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <span className="w-12 h-px bg-accent" />
            <span className="text-xs tracking-[0.4em] uppercase text-accent font-medium">Értékeink</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-border">
            {values.map((v) => (
              <div key={v.label} className="p-8 space-y-4 first:pl-0 last:pr-0">
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-serif text-5xl text-border select-none"
                    aria-hidden="true"
                  >
                    {v.japanese}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-foreground">{v.label}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-secondary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-8 h-px bg-accent" />
              <span className="text-xs tracking-[0.4em] uppercase text-accent font-medium">Kapcsolat</span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-bold text-foreground leading-[1.0] text-balance">
              Írj nekünk
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Kérdésed van az aikidóval kapcsolatban? Szeretnéd megosztani tapasztalataidat, vagy cikket küldenél az oldalra? Töltsd ki az űrlapot, és hamarosan válaszolunk.
            </p>
            <div className="space-y-2 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">E-mail:</p>
              <a
                href="mailto:info@hungaryaikido.com"
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                info@hungaryaikido.com
              </a>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Kapcsolati űrlap">
            {error && (
              <p role="alert" className="text-sm text-destructive bg-destructive/10 px-4 py-3 border border-destructive/30">
                {error}
              </p>
            )}

            <div className="space-y-2">
              <label htmlFor="nev" className="block text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium">
                Neved
              </label>
              <input
                id="nev"
                type="text"
                autoComplete="name"
                value={formState.nev}
                onChange={(e) => setFormState((s) => ({ ...s, nev: e.target.value }))}
                className="w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors text-sm"
                placeholder="Teljes neved"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium">
                E-mail cím
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={formState.email}
                onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                className="w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors text-sm"
                placeholder="pelda@email.hu"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="uzenet" className="block text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium">
                Üzeneted
              </label>
              <textarea
                id="uzenet"
                rows={6}
                value={formState.uzenet}
                onChange={(e) => setFormState((s) => ({ ...s, uzenet: e.target.value }))}
                className="w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors text-sm resize-none"
                placeholder="Írd ide üzenetedet..."
              />
            </div>

            <button
              type="submit"
              onClick={() => {
                const nev = formState.nev.trim()
                const email = formState.email.trim()
                const uzenet = formState.uzenet.trim()
                const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (nev && emailRe.test(email) && uzenet) {
                  setError('')
                  setPopupVisible(true)
                }
              }}
              className="w-full bg-foreground text-background py-4 text-sm font-medium tracking-widest uppercase hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Elküldöm
            </button>
          </form>
        </div>
      </section>

      {/* Success popup */}
      {popupVisible && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm px-6"
          role="dialog"
          aria-modal="true"
          aria-label="Üzenet elküldve"
          onClick={(e) => e.target === e.currentTarget && closePopup()}
        >
          <div className="bg-card border border-border max-w-md w-full p-10 space-y-6 relative">
            {/* Close button */}
            <button
              onClick={closePopup}
              aria-label="Bezárás"
              className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M2 2L18 18M18 2L2 18" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>

            <div className="space-y-1">
              <span className="text-xs tracking-[0.4em] uppercase text-accent font-medium block">
                Köszönjük
              </span>
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Üzeneted megérkezett.
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Üzeneted sikeresen megkaptuk. Általában 1-3 munkanapon belül válaszolunk a megadott e-mail címre. Addig is böngészd az oldalunkon elérhető cikkeket és tartalmakat.
            </p>

            <div className="flex flex-col gap-3 pt-2">
              <button
                onClick={closePopup}
                className="w-full bg-foreground text-background py-3 text-sm font-medium tracking-widest uppercase hover:bg-accent hover:text-accent-foreground transition-all"
              >
                Rendben
              </button>
            </div>
          </div>
        </div>
      )}
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
