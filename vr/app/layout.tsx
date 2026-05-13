import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import '@fontsource/press-start-2p'
import './globals.css'

export const metadata: Metadata = {
  title: 'AR-PI-GI | Real-Life RPG',
  description: 'Augmented Reality RPG Game HUD Interface',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#0B1020]">
      <body className="antialiased overflow-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
