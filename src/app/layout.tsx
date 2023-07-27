export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta charSet="UTF-8" />
      <body>{children}</body>
    </html>
  )
}
