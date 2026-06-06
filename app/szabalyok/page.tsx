import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'A dojo törvényei — Szabályok és etika',
  description:
    'Az aikido dojó etikettje, viselkedési szabályok, partnerfegyelem és a gyakorlás alapelvei. Az edzőtermi rend a közösségi harmónia alapköve.',
  alternates: { canonical: 'https://hungaryaikido.com/szabalyok' },
  openGraph: {
    title: 'A dojo törvényei — Szabályok és etika | Hungary Aikido',
    description:
      'Az aikido dojó etikettje, viselkedési szabályok, partnerfegyelem és a gyakorlás alapelvei.',
    url: 'https://hungaryaikido.com/szabalyok',
    type: 'article',
  },
}

const sections = [
  {
    title: 'A dojo tisztelete',
    items: [
      'A dojoba való belépésnél és kilépésnél mindig meg kell hajolni a tatami felé.',
      'A dojot rendben kell tartani. Az edzés kezdete előtt és végén közösen takarítjuk az edzőtermet.',
      'Az edzőteremben étkezni, inni és hangoskodni tilos.',
      'A mobiltelefont néma üzemmódba kell kapcsolni, illetve lehetőség szerint el kell hagyni.',
      'A tatamira mindig tiszta, megfelelően ápolt edzőruhában szabad lépni.',
    ],
  },
  {
    title: 'Az oktató és a senpai tisztelete',
    items: [
      'Az oktató (sensei) utasításait figyelmesen, alázattal és megjegyzés nélkül kell fogadni az edzés során.',
      'Kérdések feltevésének ideje az edzésen kívüli idő, vagy az oktató által megjelölt szünet.',
      'A senpai (tapasztaltabb tanuló) iránymutatása is megbecsülést érdemel, mivel a tudás átadásának fontos résztvevője.',
      'Az oktatóval szemben nem szabad vitatkozni edzés közben. A vélemény kifejtésére az edzés utáni párbeszéd alkalmas.',
    ],
  },
  {
    title: 'Partnerfegyelem',
    items: [
      'Mindig a partner biztonságára ügyelve kell technikát alkalmazni. A fájdalomjelzést (kopogtató jel vagy szó) azonnal tiszteletben kell tartani.',
      'Az erőszakos, kontrollálatlan technikaalkalmazás tilos, függetlenül a fokozatkülönbségtől.',
      'Az edzésen mindenki egyenlő: sem fokozat, sem kör, sem nem alapján nem lehet különbséget tenni a partnerek megválasztásánál.',
      'A partnerrel szemben mindig udvariasan és türelemmel kell viselkedni.',
    ],
  },
  {
    title: 'Megjelenés és pontosság',
    items: [
      'Az edzésre időben kell megérkezni. Késés esetén az edzőterembe való belépés az oktató engedélyével és meghajlással történik.',
      'A gi (edzőruha) mindig tiszta és megfelelően kötött legyen. Az öv kötési módja is a megjelenés részét képezi.',
      'Körmöket röviden kell tartani a partner bőrének védelme érdekében.',
      'Ékszereket, karórát és egyéb kiegészítőket az edzés előtt le kell venni.',
    ],
  },
  {
    title: 'Az edzés szelleme',
    items: [
      'Az aikido edzésen nem versengünk, hanem tanulunk és tanítunk egymást.',
      'Az ego háttérbe szorítása alapkövetelmény: a technika nem arról szól, ki az erősebb.',
      'A figyelmes, koncentrált jelenlét az edzés teljes ideje alatt elvárás.',
      'Az újonc tanulók segítése, a befogadás és a türelem a közösség alapértékei.',
    ],
  },
  {
    title: 'A dojo elhagyása és a vizsgarend',
    items: [
      'A dojot az edzés rendes befejezésekor, közös meghajlással zárják le.',
      'A fokozatvizsgán való részvétel feltétele az oktató ajánlása, amelyet az edzéseken mutatott előrehaladás alapoz meg.',
      'A vizsgán az előírt technikákon túl a megjelenés, a hozzáállás és a partnerkezelés is értékelési szempont.',
      'A vizsga eredménye végleges; fellebbezésnek helye nincs, de az oktató visszajelzése mindig értékes tanulási forrás.',
    ],
  },
]

export default function SzabalyokPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
      {/* Hero */}
      <div className="bg-secondary border-b border-border px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs tracking-[0.4em] uppercase text-accent font-medium">Szabályok és etika</span>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-bold text-foreground leading-[0.95] mt-4">
            A dojo
            <br />
            <span className="italic">törvényei</span>
          </h1>
          <p className="mt-8 text-muted-foreground leading-relaxed max-w-2xl text-base">
            Az aikido az egyensúly harcművészete, és ez a harctechtikákon jóval túlmutat. Az edzőtermi szabályok a közösségi harmónia, a kölcsönös tisztelet és a biztonságos tanulás alapkövei. Betartásuk nem kötelezettség, hanem a közösséghez tartozás természetes megnyilvánulása.
          </p>
        </div>
      </div>

      {/* Rules content */}
      <div className="px-6 md:px-12 lg:px-24 py-16 max-w-7xl mx-auto">
        <div className="space-y-0 divide-y divide-border">
          {sections.map((sec, i) => (
            <div key={sec.title} className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4 space-y-2">
                <span className="font-serif text-6xl font-bold text-border leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="font-serif text-2xl font-bold text-foreground">{sec.title}</h2>
              </div>
              <ul className="lg:col-span-8 space-y-4">
                {sec.items.map((item, j) => (
                  <li key={j} className="flex gap-4 items-start">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Closing */}
      <div className="border-t border-border bg-card px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-accent font-medium">Fontos megjegyzés</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              A szabályok nem korlátok
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Az aikido etikettje nem büntető jellegű szabályrendszer. Ezek az irányelvek generációk tapasztalatából kristályosodtak ki, és azt a célt szolgálják, hogy mindenki biztonságban, nyugalomban és hatékonyan tudjon tanulni. A szabályokhoz való viszony maga is az aikido tanulásának részét képezi.
            </p>
          </div>
          <div className="border border-border p-8 space-y-4">
            <p className="font-serif text-2xl italic text-foreground">
              &ldquo;Az igazi fegyelem nem kívülről jön, hanem belülről fakad.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
