import React from "react"
import type { Metadata, Viewport } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navigation } from "@/components/landing/navigation"
import { FooterSection } from "@/components/landing/footer-section"
import { ChatWidget } from "@/components/chat/chat-widget"
import { Toaster } from "@/components/ui/sonner"
import './globals.css'

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: {
    default: 'AEIV Global Private Limited — Governance, Accessibility & Workplace Software',
    template: '%s | AEIV Global Private Limited',
  },
  description:
    'AEIV Global Private Limited is a Nagpur, India based software company building Blisswork (workplace experience), GRC (governance, risk & compliance), and WCAG (digital accessibility) platforms for the modern enterprise.',
  generator: 'v0.app',
  metadataBase: new URL('https://aeivglobal.com'),
  keywords: [
    'AEIV Global',
    'AEIV Global Private Limited',
    'Blisswork',
    'GRC software',
    'WCAG compliance',
    'accessibility software',
    'governance risk compliance',
    'Nagpur software company',
  ],
  openGraph: {
    title: 'AEIV Global Private Limited',
    description:
      'Enterprise software for governance, accessibility, and workplace experience — Blisswork, GRC, and WCAG by AEIV Global.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#faf9f7',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <div className="relative min-h-screen overflow-x-hidden noise-overlay flex flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <FooterSection />
        </div>
        <ChatWidget />
        <Toaster position="top-right" />
        <Analytics />
      </body>
    </html>
  )
}
