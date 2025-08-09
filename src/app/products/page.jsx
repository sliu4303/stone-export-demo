import ProductCard from '../components/ProductCard';
import products from '../data/data.json';

export default function ProductsPage() {
  // Build category list for sidebar (not wired yet—purely visual)
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  return (
    <main className="max-w-7xl mx-auto px-6 md:px-8 py-8">
      <h1 className="text-3xl font-bold mb-2">Product Catalog</h1>
      <p className="text-gray-600 mb-8">
        Browse our selection of marble, granite, and quartz. Request a quote for details.
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-64 bg-gray-100 border rounded-lg p-4 h-max">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  type="button"
                  className="w-full text-left px-3 py-2 rounded hover:bg-gray-200 transition"
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Product grid */}
        <section className="flex-1">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}