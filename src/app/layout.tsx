import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CursorTrail from '@/components/CursorTrail'
import MobileWriteButton from '@/components/ui/MobileWriteButton'
import SmoothScroll from '@/components/SmoothScroll'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Azat Nugmanov - Designer Portfolio',
  description:
    'Portfolio of Azat Nugmanov - digital designer focused on premium websites, interfaces, and visual systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={inter.className}>
      <body>
        <CursorTrail />
        {children}
        <MobileWriteButton />
      </body>
    </html>
  )
}

