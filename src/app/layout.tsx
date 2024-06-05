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
      <body>{children}</body>
    </html>
  )
}
