import './globals.scss'
import './page.module.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Строительная бригада',
  description: 'Все виды строительных и ремонтных работ по Ульяновску и Ульяновской области',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
