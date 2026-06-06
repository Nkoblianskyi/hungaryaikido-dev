import Image from 'next/image'
import Link from 'next/link'

export default function HistoryPreview() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-border" aria-label="Történet előnézet">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        {/* Text column */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="w-12 h-px bg-accent" />
            <span className="text-xs tracking-[0.4em] uppercase text-accent font-medium">Történet</span>
          </div>

          <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] font-bold text-foreground">
            Egy új
            <br />
            <span className="italic">harcművészet</span>
            <br />
            születése
          </h2>

          <p className="text-muted-foreground leading-relaxed text-base max-w-lg">
            Az aikido a 20. század első felében született Japánban, és gyökeresen eltért a korabeli harcművészetektől. Nem a győzelem, hanem a harmónia elvén alapul, ahol a mozgás és az energia irányítása a kulcs.
          </p>

          <p className="text-muted-foreground leading-relaxed text-base max-w-lg">
            Magyarországra az aikido az 1970-es évek végén érkezett, és azóta folyamatosan növekvő közössége van az egész országban.
          </p>

          <Link
            href="/tortenet"
            className="inline-flex items-center gap-4 group"
          >
            <span className="text-sm font-medium tracking-widest uppercase text-foreground border-b border-foreground pb-0.5 group-hover:border-accent group-hover:text-accent transition-all">
              Teljes történet
            </span>
            <span className="text-accent font-bold text-lg group-hover:translate-x-2 transition-transform">
              /
            </span>
          </Link>
        </div>

        {/* Image column */}
        <div className="relative">
          <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
            <Image
              src="/images/history-aikido.png"
              alt="Az aikido dojo, ahol a harcművészet gyökerei kereshetők"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-background/20" />
          </div>
          {/* Floating label */}
          <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground px-6 py-4 max-w-xs">
            <p className="font-serif text-lg font-semibold italic leading-tight">
              &ldquo;Győzd le önmagad, ne az ellenséged.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
