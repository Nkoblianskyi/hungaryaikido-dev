import Image from 'next/image'

const achievements = [
  {
    year: '1979',
    title: 'Az aikido megérkezése Magyarországra',
    desc: 'Az első szervezett aikido edzések megkezdődtek az országban, megalapozva a hazai mozgalom útját.',
  },
  {
    year: '1988',
    title: 'Első nemzetközi szereplés',
    desc: 'Magyar aikidósok először vesznek részt európai szintű demonstrációkon és szemináriumokon.',
  },
  {
    year: '1993',
    title: 'Hazai szövetségi szervezet megalakítása',
    desc: 'Az aikido szervezett keretek közé kerül Magyarországon, egységes vizsgaszabályzattal.',
  },
  {
    year: '2001',
    title: 'Tokiói kapcsolat kiépítése',
    desc: 'Közvetlen szakmai együttműködés jön létre a japán anyaszervezettel, rendszeres mesterképzők indulnak.',
  },
  {
    year: '2009',
    title: 'Több mint 50 oktató',
    desc: 'Magyarország-szerte több mint ötven minősített aikido oktató tevékenykedik, folyamatos utánpótlással.',
  },
  {
    year: '2018',
    title: 'Európai szemináriumok vendégszervezése',
    desc: 'Magyarország otthont ad több kiemelkedő európai aikido szemináriumnak és mesterbemutatónak.',
  },
]

export default function AchievementsSection() {
  return (
    <section className="py-24 md:py-32 border-b border-border" aria-label="Eredmények és mérföldkövek">
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="w-12 h-px bg-accent" />
          <span className="text-xs tracking-[0.4em] uppercase text-accent font-medium">Eredmények</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] font-bold text-foreground">
              Magyar
              <br />
              <span className="italic text-accent">aikido</span>
              <br />
              mérföldkövek
            </h2>
            <div className="relative h-64 overflow-hidden mt-8">
              <Image
                src="/images/achievements.png"
                alt="Az aikido elismerései és mérföldkövei"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-8 relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-6 md:ml-8" />
            <div className="space-y-0 divide-y divide-border">
              {achievements.map((a) => (
                <div key={a.year} className="pl-16 md:pl-20 py-8 relative">
                  {/* Year dot */}
                  <div className="absolute left-0 top-8 flex items-center justify-center w-[52px] md:w-16">
                    <span className="w-3 h-3 rounded-full bg-accent ring-4 ring-background flex-shrink-0" />
                  </div>
                  <span className="font-serif text-5xl font-bold text-border leading-none">{a.year}</span>
                  <h3 className="text-foreground font-semibold text-lg mt-2">{a.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
