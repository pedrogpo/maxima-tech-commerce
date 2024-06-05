import './globals.css'
import { Inter as FontSans } from 'next/font/google'
import { Footer, Navbar } from '~/_components/organisms'

import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link
          rel="icon"
          href="https://maximatech.com.br/wp-content/uploads/2019/04/favicon-maximatech-192x192px-36x36.png"
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
