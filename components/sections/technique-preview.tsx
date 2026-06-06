import Image from 'next/image'
import Link from 'next/link'

const techniques = [
  { code: 'IRIMI', name: 'Belépés', desc: 'Az irimi a támadóval azonos irányba való belépés technikája.' },
  { code: 'TENKAN', name: 'Fordulat', desc: 'A tenkan a forgó elkerülés alapmozdulata, az energia átirányítása.' },
  { code: 'UKEMI', name: 'Esés', desc: 'Az ukemi a biztonságos esések és gördülések elsajátítása.' },
  { code: 'ATEMI', name: 'Ütés', desc: 'Az atemi a figyelemterelésre használt csapás, amely a technika részét képezi.' },
]

export default function TechniquePreview() {
  return (
    <section className="py-24 md:py-32 border-b border-border overflow-hidden" aria-label="Technika előnézet">
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="w-12 h-px bg-accent" />
          <span className="text-xs tracking-[0.4em] uppercase text-accent font-medium">Technika és edzés</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Headline */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] font-bold text-foreground">
              A test
              <br />
              <span className="italic text-accent">tudása</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              Az aikido technikái a természet erőire alapulnak: körkörös mozdulatok, folyamatos áramlás és az ellenfél energiájának felhasználása.
            </p>
            <Link
              href="/technika"
              className="inline-flex items-center gap-4 group mt-4"
            >
              <span className="text-sm font-medium tracking-widest uppercase text-foreground border-b border-foreground pb-0.5 group-hover:border-accent group-hover:text-accent transition-all">
                Minden technika
              </span>
              <span className="text-accent font-bold text-lg group-hover:translate-x-2 transition-transform">
                /
              </span>
            </Link>
          </div>

          {/* Image */}
          <div className="lg:col-span-4 relative h-80 lg:h-96 overflow-hidden">
            <Image
              src="/images/technique-aikido.png"
              alt="Aikido csukló-visszatartás technika"
              fill
              className="object-cover"
            />
          </div>

          {/* Technique list */}
          <div className="lg:col-span-4 divide-y divide-border">
            {techniques.map((t) => (
              <div key={t.code} className="py-5 group">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">{t.code}</span>
                  <span className="text-foreground font-semibold">{t.name}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
