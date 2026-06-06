import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" aria-label="Főoldal hero">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-aikido.png"
          alt="Aikido mozgás"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Vertical label left */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center gap-3">
        <span className="writing-mode-vertical text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium">
          Magyarország aikido oldala
        </span>
        <span className="w-px h-20 bg-border" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-end flex-1 px-8 md:px-16 lg:px-24 pb-16 pt-32">
        <div className="max-w-4xl">
          {/* Label */}
          <p className="text-xs tracking-[0.4em] uppercase text-accent font-medium mb-6">
            Harcművészet / Önvédelem / Harmónia
          </p>

          {/* Big headline */}
          <h1 className="font-serif text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] font-bold text-foreground text-balance">
            A mozgás
            <br />
            <span className="italic text-accent">
              harmóniája.
            </span>
          </h1>

          <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            Az aikido a japán harcművészet, amely az erő helyett az egyensúlyt, a küzdelem helyett az összhangot keresi. Fedezd fel Magyarország aikido közösségének világát.
          </p>

          <div className="mt-10 flex items-center gap-6 flex-wrap">
            <Link
              href="/tortenet"
              className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Fedezd fel
            </Link>
            <Link
              href="/technika"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors border-b border-transparent hover:border-foreground pb-0.5"
            >
              Technikák
            </Link>
          </div>
        </div>

        {/* Bottom strip stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px border border-border bg-border">
          {[
            { value: '1942', label: 'Az aikido alapítása' },
            { value: '140+', label: 'Ország, ahol jelen van' },
            { value: '7', label: 'Dan fokozat' },
            { value: '合気道', label: 'Japán neve' },
          ].map((s) => (
            <div key={s.label} className="bg-card px-6 py-5">
              <p className="font-serif text-2xl md:text-3xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-tight">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
