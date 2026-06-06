import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rólunk és kapcsolat',
  description:
    'A Hungary Aikido oldal küldetése, értékei és kapcsolatfelvételi lehetőség. Ismeretterjesztő platform Magyarország aikido közössége számára.',
  alternates: { canonical: 'https://hungaryaikido.com/rolunk' },
  openGraph: {
    title: 'Rólunk és kapcsolat | Hungary Aikido',
    description:
      'A Hungary Aikido oldal küldetése, értékei és kapcsolatfelvételi lehetőség.',
    url: 'https://hungaryaikido.com/rolunk',
    type: 'website',
  },
}

export default function RolunkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
