import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PhotonCore Technologies | Software, AI & Automation',
  description: 'PhotonCore Technologies builds software products, AI solutions, business automation systems, industrial technology solutions and practical technology training.',
  metadataBase: new URL('https://photoncoretechnologies.com.ng'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'PhotonCore Technologies | Software, AI & Automation',
    description: 'Building the technology that moves Africa forward.',
    url: 'https://photoncoretechnologies.com.ng',
    siteName: 'PhotonCore Technologies',
    type: 'website',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/photoncore-technologies-logo-white.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/photoncore-technologies-logo-white.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/photoncore-technologies-logo-white.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/photoncore-technologies-logo-white.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
