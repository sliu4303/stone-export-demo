export default function ProductsPage() {
  const items = [
    { id: 1, name: 'Volakas White Marble', img: '/placeholder-1.jpg' },
    { id: 2, name: 'Absolute Black Granite', img: '/placeholder-2.jpg' },
    { id: 3, name: 'Calacatta Quartz', img: '/placeholder-3.jpg' },
    { id: 4, name: 'Basalt Tile', img: '/placeholder-4.jpg' },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">Products</h1>
      <p className="text-gray-600 mb-8">
        Catalog coming soon. Here are sample placeholders.
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden bg-white shadow hover:shadow-lg transition"
          >
            <div className="h-48 bg-gray-100">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-500 mt-1">Specs & pricing soon.</p>

              {/* Request Quote Button (no action) */}
              <button
                className="mt-4 w-full px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 transition-colors duration-200"
              >
                Request Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
