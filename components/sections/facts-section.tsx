const facts = [
  {
    title: 'Az aikido nem versenyorientált',
    desc: 'Az aikido az egyetlen nagy japán harcművészet, amelyben nincsenek versenyküzdelmek. Az aikidó a partnerrel való együttmozgásra épül, nem az ellenfél legyőzésére.',
  },
  {
    title: 'A neve szó szerint harmóniát jelent',
    desc: 'Az "aikido" három kanji-ból áll: ai (harmónia), ki (energia/szellem), do (út). Szó szerint "az energiaharmonizálás útja".',
  },
  {
    title: 'Minden korosztály számára alkalmas',
    desc: 'Az aikido technikái nem az izomerőre támaszkodnak, ezért fiatalok, idősek, és különböző fizikai adottságú emberek egyaránt gyakorolhatják.',
  },
  {
    title: 'A szumoból és jiujitsuból nőtt ki',
    desc: 'Az aikido alapítója a hagyományos japán harcművészetek mestereitől tanult, főként a Daito-ryu aiki-jiujitsuból merítette tudását.',
  },
  {
    title: 'A "ki" fogalma központi szerepet tölt be',
    desc: 'A ki (életerő, belső energia) fogalma az aikido mozgásfilozófiájának alapja. Az edzésen a test és elme egységének fejlesztése is cél.',
  },
  {
    title: 'Százmilliós globális közösség',
    desc: 'Az aikidót a világ több mint 140 országában gyakorolják, különböző stílusokban és irányzatokban, de közös szellemiséggel.',
  },
]

export default function FactsSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary border-b border-border" aria-label="Érdekességek az aikidóról">
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="w-12 h-px bg-accent" />
          <span className="text-xs tracking-[0.4em] uppercase text-accent font-medium">Érdekességek</span>
        </div>

        <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] font-bold text-foreground mb-16 max-w-2xl">
          Amit talán nem
          <br />
          <span className="italic">tudtál az aikidóról</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-border bg-border">
          {facts.map((f, i) => (
            <div
              key={i}
              className="bg-card p-8 space-y-4 hover:bg-background transition-colors group"
            >
              <span className="font-serif text-6xl font-bold text-border group-hover:text-muted-foreground transition-colors leading-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-foreground font-semibold text-base leading-snug">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
