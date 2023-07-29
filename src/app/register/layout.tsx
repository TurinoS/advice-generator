import StyledComponentsRegistry from "../../../registry"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta charSet="UTF-8" />
      <StyledComponentsRegistry>
      <body>{children}</body>
      </StyledComponentsRegistry>
    </html>
  )
}
