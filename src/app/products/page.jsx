import ProductCard from '../components/ProductCard';
import products from '../data/data.json';

export default function ProductsPage() {
  return (
    <main className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 p-4 border-r border-gray-200 bg-white">
        <h2 className="text-lg font-bold mb-4">Categories</h2>
        <ul className="space-y-2">
          <li className="cursor-pointer hover:underline">Marble</li>
          <li className="cursor-pointer hover:underline">Granite</li>
          <li className="cursor-pointer hover:underline">Quartz</li>
          <li className="cursor-pointer hover:underline">Custom Orders</li>
        </ul>

        <h2 className="text-lg font-bold mt-6 mb-4">Filters</h2>
        <ul className="space-y-2">
          <li><input type="checkbox" /> In Stock</li>
          <li><input type="checkbox" /> On Sale</li>
        </ul>
      </aside>

      {/* Product Grid */}
      <section className="flex-1 p-6">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
