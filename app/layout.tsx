import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mango',
  description: 'Made by Alex',
  generator: 'ALEX',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="max-w-full mx-auto">{children}</body>
    </html>
  )
}
