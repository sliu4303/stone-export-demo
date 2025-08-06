import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-[#D9D9D9] w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-6">
        {/* Left: Site Name (Clickable) */}
        <Link href="/" className="text-lg font-bold text-black hover:underline">
          Site Name/Logo
        </Link>

        {/* Right: Navigation Links */}
        <div className="space-x-10 font-semibold text-black">
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/about" className="hover:underline">About Us</Link>
          <Link href="/contact" className="hover:underline">Contacts</Link>
        </div>
      </div>
    </nav>
  )
}
