import "@/style/reset.scss"
import "@/style/global.scss"
import type { Metadata } from 'next'
import { inter, poppins } from "@/libs/font"
import Header from "@/components/Header"
import Footer from "@/components/Footer"


export const metadata: Metadata = {
  title: 'Canvas Lancer',
  description: 'Agency Website Landing Page | Mert Enercan',
  openGraph:{images:['https://raw.githubusercontent.com/mertthesamael/canvas-lancer/master/_assets/logo.png']}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html  lang="en">
      <body className={inter.variable + ' ' + poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
