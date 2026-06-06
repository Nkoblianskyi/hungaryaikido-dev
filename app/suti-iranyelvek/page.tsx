import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Süti irányelvek',
  description:
    'A Hungary Aikido weboldal által használt sütikre vonatkozó irányelvek. Megtudhatod, milyen sütiket használunk, meddig tároljuk őket és hogyan kezelheted azokat.',
  alternates: { canonical: 'https://hungaryaikido.com/suti-iranyelvek' },
  openGraph: {
    title: 'Süti irányelvek | Hungary Aikido',
    description: 'A Hungary Aikido weboldal által használt sütikre vonatkozó irányelvek.',
    url: 'https://hungaryaikido.com/suti-iranyelvek',
    type: 'website',
  },
  robots: { index: false, follow: false },
}

const sections = [
  {
    title: 'Mi az a süti (cookie)?',
    body: `A sütik kis szöveges fájlok, amelyeket a weboldalak a felhasználó számítógépén, telefonján vagy táblagépén tárolnak, amikor az adott oldalt meglátogatja. Ezek a fájlok lehetővé teszik, hogy a weboldal megjegyezze a felhasználó beállításait, preferenciáit, és általánosan javítsa a böngészési élményt.

A sütik biztonságosak: nem tartalmaznak végrehajtható programkódot, és nem okozhatnak kárt a számítógépen. Az adatokat kizárólag az oldal működéséhez és fejlesztéséhez használjuk fel.`,
  },
  {
    title: 'Milyen sütiket használunk?',
    body: `**Feltétlenül szükséges sütik:** Ezek a sütik az oldal alapvető működéséhez nélkülözhetetlenek. Például a cookie-hozzájárulás tárolása, vagy a munkamenet kezelése. Ezek nélkül az oldal nem működne megfelelően, és hozzájárulás nélkül is használatban vannak.

**Funkcionális sütik:** Ezek a sütik az oldal kényelmesebb használatát segítik. Például megjegyzik, ha már elfogadtad a süti-tájékoztatót, hogy a jövőben ne kelljen újra megerősítened azt.

**Analitikai sütik:** Ezek a sütik névtelen statisztikákat gyűjtenek az oldal látogatottságáról és az olvasási szokásokról. Az adatokat kizárólag az oldal tartalmának és felhasználói élményének javítására használjuk. Személyes azonosításra alkalmas adatokat nem gyűjtünk.`,
  },
  {
    title: 'Mennyi ideig tárolódnak a sütik?',
    body: `A sütik tárolási ideje süti típusonként eltér:

- **Munkamenet-sütik:** Csak a böngésző bezárásáig aktívak, utána automatikusan törlődnek.
- **Tartós sütik:** Meghatározott ideig, általában 6 hónaptól 2 évig tárolódnak, ha közben nem törlöd őket.
- **Hozzájárulási süti:** A cookie-hozzájárulásod döntését 12 hónapig tároljuk, hogy ne kelljen minden egyes látogatáskor újra döntened.`,
  },
  {
    title: 'Hogyan kezelheted a sütiket?',
    body: `A böngésző beállításain keresztül bármikor módosíthatod vagy törölheted a sütik kezelésére vonatkozó preferenciáidat. A legtöbb böngésző lehetővé teszi:

- Az összes süti törlését
- Az egyes sütik blokkolását
- Az értesítést minden egyes süti mentésekor
- A harmadik féltől származó sütik blokkolását

Fontos: ha blokkolod az összes sütit, előfordulhat, hogy az oldal egyes funkciói nem működnek megfelelően. A feltétlenül szükséges sütik nélkül az oldal alapvető funkciói is korlátozódhatnak.`,
  },
  {
    title: 'Harmadik féltől származó sütik',
    body: `A Hungary Aikido oldal jelenleg nem alkalmaz harmadik féltől származó marketing- vagy nyomkövetési sütiket, és nem oszt meg személyes adatokat külső hirdetési platformokkal. Ha ez a jövőben megváltozna, az irányelveket frissítjük, és újabb hozzájárulást kérünk.`,
  },
  {
    title: 'Az irányelvek módosítása',
    body: `Fenntartjuk a jogot, hogy a süti irányelveinket bármikor módosítsuk. A legutóbbi módosítás dátuma mindig feltüntetésre kerül az oldalon. Jelentős változások esetén a weboldalon megfelelő értesítést helyezünk el.`,
  },
  {
    title: 'Kapcsolat',
    body: `Ha kérdésed van a süti irányelvekkel kapcsolatban, fordulj hozzánk bizalommal az info@hungaryaikido.com e-mail címen, vagy használd a Rólunk oldalon található kapcsolati űrlapot.`,
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
          <ul className="list-disc pl-6 space-y-1">
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

export default function SutiIranyelvekPage() {
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
              Süti irányelvek
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
              Ez a tájékoztató ismerteti, hogy a Hungary Aikido weboldal (hungaryaikido.com) hogyan és milyen céllal alkalmaz sütiket, valamint tájékoztat arról, hogyan kezelheted azokat.
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
                href="/adatvedelmi-iranyelvek"
                className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="w-6 h-px bg-muted-foreground group-hover:w-10 group-hover:bg-foreground transition-all" />
                Adatvédelmi irányelvek
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
