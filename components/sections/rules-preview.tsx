import Link from 'next/link'

const rules = [
  { num: '01', title: 'Az edzőterem tisztelete', desc: 'A dojoba belépve mindig meg kell hajolni, jelezve a hely és a gyakorlat megbecsülését.' },
  { num: '02', title: 'Az oktatók tisztelete', desc: 'Az oktató utasításait figyelemmel és alázattal kell fogadni. A kérdéseket edzésen kívül kell feltenni.' },
  { num: '03', title: 'Partnerek biztonsága', desc: 'A technikákat mindig partnerünk biztonságára ügyelve kell alkalmazni. Az erőszak tiltiott.' },
  { num: '04', title: 'Pontos megjelenés', desc: 'Az edzésre időben kell megérkezni. Késés esetén a dojoba való belépés az oktató engedélyével történhet.' },
]

export default function RulesPreview() {
  return (
    <section className="py-24 md:py-32 border-b border-border bg-secondary" aria-label="Szabályok előnézet">
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Header */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-12 h-px bg-accent" />
              <span className="text-xs tracking-[0.4em] uppercase text-accent font-medium">Szabályok</span>
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] font-bold text-foreground">
              A dojo
              <br />
              <span className="italic">etikettje</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              Az aikido nem csupán fizikai gyakorlat. Az edzőtermi viselkedési szabályok a kölcsönös tisztelet és a közösségi rend alapkövei.
            </p>
            <Link
              href="/szabalyok"
              className="inline-flex items-center gap-4 group"
            >
              <span className="text-sm font-medium tracking-widest uppercase text-foreground border-b border-foreground pb-0.5 group-hover:border-accent group-hover:text-accent transition-all">
                Teljes szabályzat
              </span>
              <span className="text-accent font-bold text-lg group-hover:translate-x-2 transition-transform">/</span>
            </Link>
          </div>

          {/* Rules list */}
          <div className="lg:col-span-8 divide-y divide-border">
            {rules.map((r) => (
              <div key={r.num} className="py-6 flex gap-8 items-start group">
                <span className="font-serif text-5xl font-bold text-border group-hover:text-muted-foreground transition-colors flex-shrink-0 leading-none">
                  {r.num}
                </span>
                <div className="space-y-2">
                  <h3 className="text-foreground font-semibold text-lg">{r.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
