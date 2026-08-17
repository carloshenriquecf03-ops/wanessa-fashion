import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
})

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans"
})

export const metadata: Metadata = {
  title: 'Wanessa Fashion - Centro Estético | Saúde & Beleza',
  description: 'Centro Estético em Balneário Gaivota - SC. Mais de 20 anos de experiência em estética facial, corporal e tratamentos de beleza. Agende sua consulta!',
  keywords: 'estética, beleza, tratamentos faciais, estética corporal, Balneário Gaivota, rejuvenescimento, limpeza de pele',
  generator: 'v0.app',
  openGraph: {
    title: 'Wanessa Fashion - Centro Estético | Saúde & Beleza',
    description: 'Centro Estético em Balneário Gaivota - SC. Mais de 20 anos de experiência em estética facial, corporal e tratamentos de beleza.',
    type: 'website',
    locale: 'pt_BR',
  },
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
    <html lang="pt-BR">
      <body className={`${cormorant.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
