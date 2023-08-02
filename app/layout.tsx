import "@/style/reset.scss"
import "@/style/global.scss"
import type { Metadata } from 'next'
import { inter, poppins } from "@/libs/font"
import Header from "@/components/Header"


export const metadata: Metadata = {
  title: 'Canvas Lancer',
  description: 'Agency Website Landing Page | Mert Enercan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable + ' ' + poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
