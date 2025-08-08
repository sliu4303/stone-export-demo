import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'Stone Export',
  description: 'Premium marble & granite',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Make the page a column so footer sits at the bottom */}
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
