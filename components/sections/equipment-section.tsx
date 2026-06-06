import Image from 'next/image'

const items = [
  {
    num: '01',
    name: 'Gi (道着)',
    hu: 'Edzőruha',
    desc: 'A fehér pamut edzőruha a tisztaság és az egyenlőség szimbóluma. A gi tartós anyagból készül, amely lehetővé teszi a szabad mozgást és ellenáll a megfogásoknak.',
  },
  {
    num: '02',
    name: 'Hakama (袴)',
    hu: 'Redős nadrág',
    desc: 'A fekete vagy sötétszürke hakama magasabb fokozatoknál viselt, hét ráncból áll, amelyek mindegyike egy-egy erkölcsi értéket jelképez: becsület, bátorság, szeretet, barátság, józanság, bölcsesség, jóakarat.',
  },
  {
    num: '03',
    name: 'Bokken (木刀)',
    hu: 'Fa kard',
    desc: 'A bokken egy kemény fából faragott edzőkard, amelyet a kardtechnikák biztonságos elsajátítására használnak. Súlya és egyensúlya a valódi kardot tükrözi.',
  },
  {
    num: '04',
    name: 'Jo (杖)',
    hu: 'Fa bot',
    desc: 'A jo egy körülbelül 128 cm hosszú keményfa rúd. A jogyakorlatokban megtanult mozdulatok az ütések, szúrások és söprések precíz koordinációját fejlesztik.',
  },
  {
    num: '05',
    name: 'Tanto (短刀)',
    hu: 'Fakés',
    desc: 'A tanto a rövid pengéjű tőr faedző változata. A tantotechnikák során a védekező megtanulja, hogyan kezelje és távolítsa el a fegyvert biztonságosan.',
  },
  {
    num: '06',
    name: 'Tatami (畳)',
    hu: 'Edzőszőnyeg',
    desc: 'A tatami az esések biztonságos végrehajtásának alapja. A rugalmas, de stabil felület lehetővé teszi, hogy az esőgyakorlatokat (ukemi) sérülés nélkül lehessen végezni.',
  },
]

export default function EquipmentSection() {
  return (
    <section className="py-24 md:py-32 border-b border-border" aria-label="Felszerelés és eszközök">
      {/* Section header */}
      <div className="px-6 md:px-12 lg:px-24 mb-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="w-12 h-px bg-accent" />
          <span className="text-xs tracking-[0.4em] uppercase text-accent font-medium">Felszerelés</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-0 justify-between">
          <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] font-bold text-foreground max-w-lg">
            Az aikidós
            <br />
            <span className="italic">eszközei</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-md text-base">
            Az aikido gyakorlásához egyszerű, de gondosan megválasztott felszerelés szükséges. Minden eszköznek megvan a maga szimbolikus jelentése és funkcionális szerepe.
          </p>
        </div>
      </div>

      {/* Two-column layout: image left, list right */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Sticky image */}
        <div className="relative h-64 lg:h-auto lg:min-h-[700px] overflow-hidden">
          <Image
            src="/images/equipment-aikido.png"
            alt="Az aikido felszerelése: gi, bokken, jo"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/30" />
        </div>

        {/* Equipment list */}
        <div className="divide-y divide-border">
          {items.map((item) => (
            <div key={item.num} className="px-6 md:px-12 py-8 flex gap-6 group hover:bg-secondary transition-colors">
              <span className="font-serif text-4xl font-bold text-border group-hover:text-muted-foreground transition-colors flex-shrink-0 w-12">
                {item.num}
              </span>
              <div className="space-y-2">
                <div className="flex items-baseline gap-3">
                  <h3 className="text-foreground font-semibold text-lg">{item.name}</h3>
                  <span className="text-xs text-accent tracking-widest uppercase">{item.hu}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
