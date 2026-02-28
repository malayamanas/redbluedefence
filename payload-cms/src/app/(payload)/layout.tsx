import React from 'react'

export const metadata = {
  description: 'RedBlueDefence CMS Admin',
  title: 'RedBlueDefence Admin',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
