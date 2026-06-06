import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'A test nyelve — Technika és edzés',
  description:
    'Az aikido alapmozgásai, dobó- és tartótechnikái, edzésmódszerek és edzéstervek kezdőktől haladókig. Tippek és elvek a helyes aikido gyakorláshoz.',
  alternates: { canonical: 'https://hungaryaikido.com/technika' },
  openGraph: {
    title: 'A test nyelve — Technika és edzés | Hungary Aikido',
    description:
      'Az aikido alapmozgásai, dobó- és tartótechnikái, edzésmódszerek és edzéstervek kezdőktől haladókig.',
    url: 'https://hungaryaikido.com/technika',
    type: 'article',
  },
}

const techGroups = [
  {
    category: 'Alapmozgások',
    techniques: [
      {
        name: 'Irimi (入り身)',
        subtitle: 'Belépés',
        desc: 'Az irimi az ellenfél felé való határozott lépés technikája. A cél az, hogy a védelmet végző saját terére lépjen be, ezzel semlegesítve a támadás ívét. Az irimi az aikido legaktívabb mozdulata.',
        tip: 'Edzési tipp: irimi közben a súlyt a belépő lábra kell áthelyezni, és a testet az ellenfél tengelyével párhuzamosan kell fordítani.',
      },
      {
        name: 'Tenkan (転換)',
        subtitle: 'Forgó elkerülés',
        desc: 'A tenkan a helybeni forgás technikája, amellyel a védelmet végző az ellenfél energiáját körkörös mozgással irányítja félre. A tenkan esetén a lábak helyzete viszonylag fix, a test forog.',
        tip: 'Edzési tipp: a tenkan kulcsa a csípő és a törzs szinkron mozgása. A karok passzívan követik a forgást, nem aktívan hajtják azt.',
      },
      {
        name: 'Taisabaki (体捌き)',
        subtitle: 'Testmozgás',
        desc: 'Az általános testeltérítés, amely az előző kettő kombinációját és variánsait foglalja magában. A taisabaki a teljes test összehangolt mozgása, amellyel a védelmet végző kiszabadul a közvetlen ütközési vonalból.',
        tip: 'Edzési tipp: a helyes taisabakihoz szükséges a testközpont (hara) tudatosítása. A mozgás nem a karoktól indul.',
      },
    ],
  },
  {
    category: 'Dobó technikák (Nage Waza)',
    techniques: [
      {
        name: 'Irimi Nage (入り身投げ)',
        subtitle: 'Belépő dobás',
        desc: 'Az irimi nage az egyik legismertebb aikido dobótechnika. A védelmet végző belép az ellenfél oldalára, majd az ellenfél nyakát és fejét ellenőrzi, és fordítással a földre vezeti.',
        tip: 'Edzési tipp: ne nyomj, hanem vezess. A dobást a testsúlyeltolás hozza létre, nem a kar ereje.',
      },
      {
        name: 'Kokyu Nage (呼吸投げ)',
        subtitle: 'Légzésdobás',
        desc: 'A kokyu nage technikák egy csoportot alkotnak, amelyeket a kokyu (légzés és belső energia) összehangolt alkalmazása jellemez. Ezek általában egyszerűbb formák, de mély megértést igényelnek.',
        tip: 'Edzési tipp: lazítsd el a kezed. A kokyu nage csak lazán tartott kézzel működik igazán.',
      },
      {
        name: 'Koshi Nage (腰投げ)',
        subtitle: 'Csípődobás',
        desc: 'Az aikido csípődobása az ellenfél testsúlyát a dobó csípőjén vezeti át. A koshi nage intenzív technika, amelyet kellő előkészítés és biztonságos ukemi ismerete után szabad tanulni.',
        tip: 'Edzési tipp: a csípőknek az ellenfél testközpontja alatt kell elhelyezkednie a dobás pillanatában.',
      },
    ],
  },
  {
    category: 'Tartó technikák (Katame Waza)',
    techniques: [
      {
        name: 'Ikkyo (一教)',
        subtitle: 'Első elv',
        desc: 'Az ikkyo az aikido egyik alapvető csuklóemelője. A kéz, a csukló és a könyök egyidejű kontrollját alkalmazza, és földre vitelbe vagy lefogásba torkollik.',
        tip: 'Edzési tipp: az ikkyo a könyökből vezet, nem a csuklóból. A nyomásnak a kar teljes hosszán kell végigvonulni.',
      },
      {
        name: 'Nikyo (二教)',
        subtitle: 'Második elv',
        desc: 'A nikyo csukló-visszacsavarást alkalmaz, amely a csuklón és az alkar izomzatán keresztül súlyos fájdalmat okoz helytelen fogástartásnál. Precizitása miatt az egyik leghatékonyabb tartó technika.',
        tip: 'Edzési tipp: nikyo csak kontrollált mértékű nyomással végezhető. A partner jelzésére azonnal lazítani kell.',
      },
      {
        name: 'Sankyo (三教)',
        subtitle: 'Harmadik elv',
        desc: 'A sankyo csavaró mozdulattal az egész kar tengelyén vezet végig. A technika a csuklótól a vállig terjed, és szabályozható intenzitású fájdalmat alkalmaz az irányításhoz.',
        tip: 'Edzési tipp: a sankyo hatékonyságát a spiral mozgás adja, nem a fizikai erőkifejtés.',
      },
    ],
  },
  {
    category: 'Edzésmódszerek',
    techniques: [
      {
        name: 'Kihon Waza',
        subtitle: 'Alaptechnikák',
        desc: 'A kihon waza az előírt, pontos formájú alaptechnikák ismétlő gyakorlása. Minden előrehaladott aikidós rendszeresen visszatér ehhez az alapszintű munkához.',
        tip: 'Edzési tipp: a lassú, pontos gyakorlás többet ér a gyors de bizonytalan ismétlésnél.',
      },
      {
        name: 'Jiyu Waza',
        subtitle: 'Szabad technika',
        desc: 'A jiyu waza az aikido szabad alkalmazása folyamatos szituációkban. Nincs előre meghatározott technika; a védelmet végző a helyzettől függően dönt.',
        tip: 'Edzési tipp: ne gondolkodj, mozogj. A jiyu waza az edzett reflexeket hívja elő, nem a tudatos döntéseket.',
      },
      {
        name: 'Randori',
        subtitle: 'Több támadó',
        desc: 'A randori során egy védelmet végző több szimultán támadóval dolgozik. Ez a folyamatos mozgást, a tér felhasználását és a koncetrációt fejleszti.',
        tip: 'Edzési tipp: randoriban ne állj egy helyen. A folyamatos mozgás megakadályozza, hogy körülzárjanak.',
      },
    ],
  },
]

export default function TechnikaPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
      {/* Hero */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <Image
          src="/images/technique-aikido.png"
          alt="Aikido csukló-visszatartás technika közeli kép"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-10">
          <span className="text-xs tracking-[0.4em] uppercase text-accent font-medium mb-3">Technika és edzés</span>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-bold text-foreground leading-[0.95]">
            A test
            <br />
            <span className="italic">nyelve</span>
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section className="px-6 md:px-12 lg:px-24 py-16 max-w-7xl mx-auto border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <p className="font-serif text-xl md:text-2xl font-light text-foreground leading-relaxed">
            Az aikido technikái nem különálló fogások gyűjteménye, hanem egy összefüggő mozgásnyelv, amelynek minden eleme a többire épül.
          </p>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Az aikido mozgásrendszerét alapvetően két nagy csoportra osztják: a nage waza (dobótechnikák) és a katame waza (tartó- és emelőtechnikák) csoportjára. Ezen felül az alapmozgások (sabaki) és a fegyvergyakorlatok (buki waza) egészítik ki a rendszert.</p>
            <p>Mindegyik technikánál az elvek azonosak: az egyensúly elvétele, a körkörös erőátirányítás és a kontrollált végzés. A technikák variánsai (omote és ura formák) megmutatják az elv rugalmasságát a különböző helyzetekben.</p>
          </div>
        </div>
      </section>

      {/* Technique groups */}
      {techGroups.map((group) => (
        <section key={group.category} className="border-b border-border">
          <div className="px-6 md:px-12 lg:px-24 py-12 bg-secondary">
            <div className="max-w-7xl mx-auto flex items-center gap-4">
              <span className="w-8 h-px bg-accent" />
              <h2 className="text-xs tracking-[0.4em] uppercase text-accent font-medium">{group.category}</h2>
            </div>
          </div>
          <div className="max-w-7xl mx-auto divide-y divide-border">
            {group.techniques.map((t) => (
              <div key={t.name} className="px-6 md:px-12 lg:px-24 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-3 space-y-1">
                  <h3 className="font-serif text-xl font-bold text-foreground">{t.name}</h3>
                  <span className="text-xs tracking-[0.3em] uppercase text-accent">{t.subtitle}</span>
                </div>
                <div className="lg:col-span-9 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{t.desc}</p>
                  <div className="border-l-2 border-accent pl-4">
                    <p className="text-sm text-foreground/80 italic leading-relaxed">{t.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Training plan */}
      <section className="px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="w-12 h-px bg-accent" />
          <span className="text-xs tracking-[0.4em] uppercase text-accent font-medium">Edzéstervezés</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-border bg-border">
          {[
            {
              level: 'Kezdő',
              freq: '2 alkalom / hét',
              focus: 'Ukemi, alapmozgások, ikkyo, nikyo',
              note: 'A testtudat és az esések biztonsága az első prioritás.',
            },
            {
              level: 'Középhaladó',
              freq: '3 alkalom / hét',
              focus: 'Teljes kihon waza, fegyveralap, jiyu waza bevezetés',
              note: 'A technikák összefüggéseinek megértése válik fontossá.',
            },
            {
              level: 'Haladó',
              freq: '4+ alkalom / hét',
              focus: 'Jiyu waza, randori, szemináriumok, oktatásban való részvétel',
              note: 'A mélységi megértés és a tanítás képessége válik az edzés fókuszává.',
            },
          ].map((p) => (
            <div key={p.level} className="bg-card p-8 space-y-4">
              <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">{p.level}</span>
              <p className="font-serif text-3xl font-bold text-foreground leading-tight">{p.freq}</p>
              <p className="text-sm text-foreground font-medium">{p.focus}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.note}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
