import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Az aikido eredete és útja',
  description:
    'Az aikido keletkezése, fejlődése és magyarországi meghonosodásának teljes idővonala. A hagyományos japán harcrendszerektől a mai magyarországi közösségig.',
  alternates: { canonical: 'https://hungaryaikido.com/tortenet' },
  openGraph: {
    title: 'Az aikido eredete és útja | Hungary Aikido',
    description:
      'Az aikido keletkezése, fejlődése és magyarországi meghonosodásának teljes idővonala.',
    url: 'https://hungaryaikido.com/tortenet',
    type: 'article',
  },
}

const timeline = [
  {
    era: 'Előzmények',
    period: '1883 körül',
    title: 'A hagyományos japán harcművészetek kora',
    body: 'A japán szigetcsoporton évszázadok óta fejlődtek különböző harcművészeti iskolák (ryu). A Daito-ryu aiki-jiujitsu, amelyből az aikido kinőtt, tekintélyes múltra tekint vissza, és az ízületi technikák, emelők és átirányítások rendszerét dolgozta ki.',
  },
  {
    era: 'Gyökerek',
    period: 'Korai 20. század',
    title: 'Az alapítás előzményei',
    body: 'Az aikido megalkotója élénken tanulmányozta a különböző harcstílusokat, mielőtt saját rendszerét kidolgozta. A Daito-ryu jiujitsun túl foglalkozott lándzsa- és kardharccal is, és mélyreható szellemi keresést folytatott a mozgás, erő és harmónia összefüggéseinek megértésére.',
  },
  {
    era: 'Alapítás',
    period: '1920-as, 1930-as évek',
    title: 'Az aikido megszületése',
    body: 'Az aikido fokozatosan fejlődött ki a hagyományos technikák és egy mélyebb szellemi látásmód szintéziseként. Az aikido elveti a versengést és a harci győzelmet mint végcélt. Helyette az összhangot, az energie átirányítását és a konfrontáció feloldását helyezi a középpontba.',
  },
  {
    era: 'Elterjedés',
    period: '1950-es, 1960-as évek',
    title: 'Japánból a világ felé',
    body: 'A második világháborút követően a japán harcművészetek világ szerte terjedni kezdtek. Az aikido az 1950-es évektől Európában és Amerikában is megjelent, számos tanítványon keresztül, akik mestereiktől tanulva alapítottak dojokat hazájukban.',
  },
  {
    era: 'Magyarország',
    period: '1970-es évek vége',
    title: 'Az aikido Magyarországon',
    body: 'Magyarországra az aikido az 1970-es évek végén érkezett meg. Az első edzések visszafogott körülmények között zajlottak, de elkötelezett úttörők alapozták meg azt a közösséget, amely ma az egész országban jelen van.',
  },
  {
    era: 'Fejlődés',
    period: '1989 után',
    title: 'Szervezett keretek',
    body: 'A rendszerváltás után megnyíló lehetőségek révén a hazai aikido közösség szervezett keretek közé lépett. Képzési rendszer, oktatói minősítések és rendszeres rendezvények fémjelezték az érettséget. Japán és nyugat-európai vendégmesterek rendszeres látogatásai tovább emelték a szintet.',
  },
  {
    era: 'Ma',
    period: '2000-es évektől',
    title: 'Az aikido helyzete ma',
    body: 'Az aikido ma Magyarország számos városában és kisebb településén is jelen van. A gyakorlók köre fiatalokat, középkorúakat és időseket egyaránt magában foglal. A rendszeres szemináriumok és a külföldi kapcsolatok fenntartása biztosítja a minőség és a fejlődés folyamatosságát.',
  },
]

export default function TortenetPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
      {/* Page hero */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <Image
          src="/images/history-aikido.png"
          alt="Az aikido dojo belső tere"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-10">
          <span className="text-xs tracking-[0.4em] uppercase text-accent font-medium mb-3">Történet</span>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-bold text-foreground leading-[0.95]">
            Az aikido
            <br />
            <span className="italic">eredete és útja</span>
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section className="px-6 md:px-12 lg:px-24 py-16 max-w-7xl mx-auto border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <p className="text-xl md:text-2xl font-serif font-light text-foreground leading-relaxed">
            Az aikido nem kizárólag egy harcrendszer. Egy életszemlélet, amely a mozgás, az energia és a harmónia elveit foglalja egységes rendszerbe.
          </p>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Az aikido (合気道) gyökerei évszázados japán harcrendszerekig nyúlnak vissza, de mai formájában a 20. század terméke. A harcrendszert nem a rombolás, hanem az összhangkeresés szándékával fejlesztették ki: a cél az ellenfél ártalmatlanítása anélkül, hogy súlyos sérülést okoznának.
            </p>
            <p>
              Ez az elv radikálisan eltér minden versenyalapú sporttól és a hagyományos harci gondolkodástól egyaránt. Az aikidóban nincs győztes és vesztes, csak közös mozgás és kölcsönös tanulás.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 md:px-12 lg:px-24 py-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="w-12 h-px bg-accent" />
          <span className="text-xs tracking-[0.4em] uppercase text-accent font-medium">Idővonal</span>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-[180px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-0 divide-y divide-border">
            {timeline.map((item) => (
              <div key={item.period} className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-10">
                <div className="lg:col-span-2 space-y-1">
                  <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">{item.era}</span>
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                </div>
                <div className="lg:col-span-10 lg:pl-12 space-y-3">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">{item.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing quote */}
      <section className="border-t border-border bg-secondary py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-6xl font-serif text-border leading-none select-none">&ldquo;</span>
          <blockquote className="font-serif text-3xl md:text-4xl font-light italic text-foreground leading-relaxed">
            Az aikido útja nem harcosokat termel, hanem embereket formál.
          </blockquote>
        </div>
      </section>
    </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
