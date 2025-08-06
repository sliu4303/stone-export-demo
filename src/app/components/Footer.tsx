import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#D9D9D9] text-black py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Product Category */}
        <div>
          <h3 className="text-xl font-bold mb-4">Product Category</h3>
          <ul className="space-y-2 font-semibold">
            <li>
              <Link href="/products/type1" className="hover:underline">Type 1</Link>
            </li>
            <li>
              <Link href="/products/type2" className="hover:underline">Type 2</Link>
            </li>
            <li>
              <Link href="/products/type3" className="hover:underline">Type 3</Link>
            </li>
            <li>
              <Link href="/products/type4" className="hover:underline">Type 4</Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Link</h3>
          <ul className="space-y-2 font-semibold">
            <li>
              <Link href="/about" className="hover:underline">About Us</Link>
            </li>
            <li>
              <Link href="/materials" className="hover:underline">Material</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline">Projects</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <ul className="space-y-4 font-semibold">
            <li className="flex items-center justify-center md:justify-start gap-2">
              📞 +86 123-4567-8910
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              ✉️ janedoe@abc.com
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              📍 China
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
