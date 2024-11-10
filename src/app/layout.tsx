import './globals.css'
export const metadata = {
  title: 'Amine Air',
  description: 'Best flys, all you searching for is here click this link on top',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body>{children}</body>
    </html>
  )
}
