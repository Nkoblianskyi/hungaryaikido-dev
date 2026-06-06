import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Adatvédelmi irányelvek',
  description:
    'A Hungary Aikido weboldal adatkezelési és adatvédelmi irányelvei. GDPR-megfelelő tájékoztató az adatgyűjtésről, tárolásról és az érintetti jogokról.',
  alternates: { canonical: 'https://hungaryaikido.com/adatvedelmi-iranyelvek' },
  openGraph: {
    title: 'Adatvédelmi irányelvek | Hungary Aikido',
    description: 'A Hungary Aikido weboldal adatkezelési és adatvédelmi irányelvei.',
    url: 'https://hungaryaikido.com/adatvedelmi-iranyelvek',
    type: 'website',
  },
  robots: { index: false, follow: false },
}

const sections = [
  {
    title: 'Az adatkezelő azonosítása',
    body: `Az adatkezelő a Hungary Aikido weboldal üzemeltetője (a továbbiakban: „mi" vagy „az oldal"). Az oldal elérhetősége: hungaryaikido.com. Kapcsolati e-mail cím: info@hungaryaikido.com.

Ez az adatvédelmi tájékoztató leírja, hogy milyen személyes adatokat gyűjtünk, milyen célból, és hogyan kezeljük azokat az Európai Unió általános adatvédelmi rendeletének (GDPR) és a vonatkozó magyar jogszabályoknak megfelelően.`,
  },
  {
    title: 'Milyen adatokat gyűjtünk?',
    body: `**Kapcsolatfelvétel során megadott adatok:** Amennyiben a Rólunk oldalon lévő kapcsolatfelvételi űrlapot kitöltöd, az alábbi adatokat kezeljük: neved, e-mail címed és az üzenet szövege. Ezeket az adatokat kizárólag a megkeresésed megválaszolásához használjuk fel.

**Automatikusan gyűjtött adatok:** Az oldal látogatása során a szerver naplóban rögzülhetnek technikai adatok, például az IP-cím (anonimizált formában), a böngésző típusa, a látogatás időpontja és a megtekintett oldalak. Ezek az adatok nem kapcsolhatók azonosított személyhez, és kizárólag az oldal biztonságának és működésének fenntartásához szükségesek.

**Süti adatok:** A süti irányelvekben részletezett, anonimizált analitikai adatok.`,
  },
  {
    title: 'Az adatkezelés jogalapja',
    body: `Az általunk végzett adatkezelések jogalapja:

- **Hozzájárulás (GDPR 6. cikk (1) bek. a) pont):** A kapcsolatfelvételi űrlap kitöltésével és az elküldés gombra kattintással önkéntesen adod meg adataidat.
- **Jogos érdek (GDPR 6. cikk (1) bek. f) pont):** A technikai naplóadatok kezelése az oldal biztonságos üzemeltetéséhez fűződő jogos érdekünkön alapul.
- **Süti-hozzájárulás:** Az analitikai sütik kizárólag kifejezett hozzájárulásod alapján kerülnek alkalmazásra.`,
  },
  {
    title: 'Az adatok tárolásának időtartama',
    body: `A kapcsolatfelvételi adatokat (név, e-mail cím, üzenet) a megkeresésre adott válasz megküldését követően legfeljebb 6 hónapig őrizzük meg, ezt követően töröljük őket.

A technikai naplóadatokat 30 napig tároljuk, majd automatikusan törlődnek.

A sütikre vonatkozó hozzájárulási adatot 12 hónapig tároljuk a böngésző tárhelyén (localStorage), kizárólag a hozzájárulás megjegyzése céljából.`,
  },
  {
    title: 'Adatok megosztása harmadik felekkel',
    body: `Személyes adataidat nem adjuk el, nem adjuk bérbe, és harmadik félnek nem továbbítjuk marketing célból. Az adatokhoz kizárólag az oldal üzemeltetéséhez igénybe vett technikai szolgáltatók férhetnek hozzá (például tárhelyszolgáltató), akik az adatokat a mi utasításaink szerint, adatfeldolgozói minőségben kezelik.

Kivételt képez a hatóságok által jogszabály alapján elrendelt adattovábbítás, amelynek teljesítésére jogszabályi kötelezettség alapján kerülhet sor.`,
  },
  {
    title: 'Az érintett jogai',
    body: `A vonatkozó adatvédelmi jogszabályok alapján az alábbi jogok illetnek meg:

- **Hozzáférési jog:** Jogod van tájékoztatást kérni arról, hogy milyen személyes adataidat kezeljük.
- **Helyesbítési jog:** Kérheted a pontatlan vagy hiányos adataid helyesbítését.
- **Törlési jog (elfeledtetéshez való jog):** Kérheted az adataid törlését, ha az adatkezelésre már nincs szükség.
- **Adatkezelés korlátozásához való jog:** Bizonyos esetekben kérheted az adatkezelés korlátozását.
- **Tiltakozási jog:** Jogos érdeken alapuló adatkezelés esetén tiltakozhatsz az adatkezelés ellen.
- **Panasztétel joga:** Panasszal fordulhatsz a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH, naih.hu).`,
  },
  {
    title: 'Adatbiztonság',
    body: `Az általunk kezelt adatok védelme érdekében megfelelő technikai és szervezési intézkedéseket alkalmazunk. Az oldal HTTPS protokollon keresztül érhető el, ami titkosítja a kommunikációt a böngésző és a szerver között.

Felhívjuk a figyelmet arra, hogy az interneten keresztül történő adatátvitel sosem garantálható teljes mértékben biztonságosnak. Az adatok biztonsága érdekében folyamatosan fejlesztjük eljárásainkat.`,
  },
  {
    title: 'Kapcsolat és panasz',
    body: `Ha adatvédelmi kérdésed van, vagy jogaid valamelyikét kívánja gyakorolni, keresd fel a Rólunk oldalt, vagy írj közvetlenül a következő e-mail címre: info@hungaryaikido.com.

A kérelmedre 30 napon belül válaszolunk. Amennyiben nem vagy elégedett a válasszal, panaszt tehetsz a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH): www.naih.hu.`,
  },
]

function renderBody(body: string) {
  return body.split('\n\n').map((block, i) => {
    const lines = block.split('\n')
    const listItems = lines.filter((l) => l.trim().startsWith('- '))
    const paragraphs = lines.filter((l) => !l.trim().startsWith('- '))

    return (
      <div key={i} className="space-y-3">
        {paragraphs.map((p, j) => {
          if (!p.trim()) return null
          const parts = p.split(/\*\*(.+?)\*\*/g)
          return (
            <p key={j} className="text-muted-foreground leading-relaxed">
              {parts.map((part, k) =>
                k % 2 === 1 ? (
                  <strong key={k} className="text-foreground font-semibold">
                    {part}
                  </strong>
                ) : (
                  part
                )
              )}
            </p>
          )
        })}
        {listItems.length > 0 && (
          <ul className="list-disc pl-6 space-y-2">
            {listItems.map((item, j) => {
              const parts = item.slice(2).split(/\*\*(.+?)\*\*/g)
              return (
                <li key={j} className="text-muted-foreground leading-relaxed">
                  {parts.map((part, k) =>
                    k % 2 === 1 ? (
                      <strong key={k} className="text-foreground font-semibold">
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </li>
              )
            })}
          </ul>
        )}
      </div>
    )
  })
}

function formatHungarianDate(date: Date): string {
  const year = date.getFullYear()
  const month = date.toLocaleString('hu-HU', { month: 'long' })
  const day = date.getDate()
  return `${year}. ${month} ${day}.`
}

export default function AdatvedelmiIranyelvekPage() {
  const lastUpdated = formatHungarianDate(new Date())

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Header */}
        <section className="px-6 md:px-12 lg:px-24 py-16 border-b border-border">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="text-xs tracking-[0.4em] uppercase text-accent font-medium block">
              Jogi dokumentum
            </span>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-bold text-foreground leading-[0.95]">
              Adatvédelmi
              <br />
              <span className="italic">irányelvek</span>
            </h1>
            <p className="text-muted-foreground">
              Utolsó módosítás: {lastUpdated}
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="px-6 md:px-12 lg:px-24 py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            <p className="text-muted-foreground leading-relaxed text-lg border-l-2 border-accent pl-6">
              A Hungary Aikido oldal komolyan veszi a személyes adatok védelmét. Ez a tájékoztató átláthatóan ismerteti, hogy milyen adatokat gyűjtünk, milyen célból, és hogyan gondoskodunk azok biztonságáról a GDPR előírásainak megfelelően.
            </p>

            {sections.map((section, i) => (
              <div key={i} className="space-y-4 border-b border-border pb-10 last:border-none last:pb-0">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  {section.title}
                </h2>
                {renderBody(section.body)}
              </div>
            ))}

            <div className="pt-6 border-t border-border flex flex-col sm:flex-row gap-4">
              <Link
                href="/suti-iranyelvek"
                className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="w-6 h-px bg-muted-foreground group-hover:w-10 group-hover:bg-foreground transition-all" />
                Süti irányelvek
              </Link>
              <Link
                href="/rolunk"
                className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="w-6 h-px bg-muted-foreground group-hover:w-10 group-hover:bg-foreground transition-all" />
                Kapcsolat
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
