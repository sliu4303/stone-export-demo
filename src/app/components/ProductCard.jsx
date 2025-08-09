import Link from 'next/link';

export default function ProductCard({ product }) {
  const { id, name, image, short, category, finish, thicknessMM, inStock } = product;

  return (
    <div className="relative border rounded-lg overflow-hidden bg-white shadow hover:shadow-lg transition">
      <div className="relative h-48 bg-gray-100">
        <img src={image} alt={name} className={`w-full h-full object-cover ${!inStock ? 'grayscale' : ''}`} />
        {!inStock && (
          <>
            <div className="absolute inset-0 bg-white/60" />
            <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
              Out of stock
            </span>
          </>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{short}</p>
        <div className="mt-3 text-xs text-gray-500">
          <span>{category}</span> • <span>{finish}</span> • <span>{thicknessMM}mm</span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <Link href={`/products/${id}`} className="px-4 py-2 text-center bg-black text-white text-sm rounded hover:bg-gray-800">
            View Details
          </Link>
          <button className={`px-4 py-2 text-sm rounded border ${inStock ? 'border-black text-black hover:bg-black hover:text-white' : 'border-gray-400 text-gray-500'}`}>
            {inStock ? 'Request Quote' : 'Request Availability'}
          </button>
        </div>
      </div>
    </div>
  );
}
