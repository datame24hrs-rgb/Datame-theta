export const metadata = {
  title: 'Datame',
  description: 'Data and Airtime Wallet',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
