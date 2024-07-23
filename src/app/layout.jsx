import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import clsx from 'clsx'
import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'


import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'Ellen Joe - Mysterious S-Rank Agent | Zenless Zone Zero',
  description:
    "Discover Ellen Joe: explore her backstory, combat skills, wallpapers, and more in Zenless Zone Zero.",
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
      )}
    >
      <head>
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap"
        />
      </head>
      <body className="flex min-h-full flex-col">
        {children}
        <Analytics />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_G_ID} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_G_ID} />

    </html>
  )
}
