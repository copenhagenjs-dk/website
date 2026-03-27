import type { Metadata } from 'next'
import { BASE_PATH } from '@/lib/constants'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://copenhagenjs-dk.github.io/website'),
  title: {
    default: 'CopenhagenJS - Copenhagen JavaScript Community',
    template: '%s | CopenhagenJS',
  },
  description:
    'Join the largest JavaScript community in Copenhagen. Monthly meetups with talks, networking, and fun with fellow developers. React, Node.js, TypeScript and more.',
  keywords: [
    'JavaScript',
    'Copenhagen',
    'meetup',
    'community',
    'React',
    'Node.js',
    'TypeScript',
    'frontend',
    'web development',
    'Denmark',
    'CopenhagenJS',
  ],
  authors: [{ name: 'CopenhagenJS' }],
  creator: 'CopenhagenJS',
  openGraph: {
    type: 'website',
    locale: 'en_DK',
    url: 'https://copenhagenjs-dk.github.io/website',
    siteName: 'CopenhagenJS',
    title: 'CopenhagenJS - Copenhagen JavaScript Community',
    description:
      'Join the largest JavaScript community in Copenhagen. Monthly meetups with talks, networking, and fun with fellow developers.',
    images: [
      {
        url: `${BASE_PATH}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'CopenhagenJS - Copenhagen JavaScript Community',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CopenhagenJS - Copenhagen JavaScript Community',
    description:
      'Join the largest JavaScript community in Copenhagen. Monthly meetups with talks, networking, and fun.',
    images: [`${BASE_PATH}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://copenhagenjs-dk.github.io/website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CopenhagenJS',
  description: 'The largest JavaScript community in Copenhagen',
  url: 'https://copenhagenjs-dk.github.io/website',
  logo: 'https://copenhagenjs-dk.github.io/website/logo.png',
  sameAs: [
    'https://www.linkedin.com/company/copenhagenjs/',
    'https://discord.gg/bKCH3sP',
    'https://www.meetup.com/copenhagenjs/',
    'https://github.com/copenhagenjs',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Copenhagen',
    addressCountry: 'DK',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
