'use client'
import Link from 'next/link';

export default function ProductCard({ product, compact = false, onQuote }) {
  const { id, name, image, short, category, finish, thicknessMM, inStock } = product;

  const imgHeight = compact ? 'h-32' : 'h-48';
  const pad = compact ? 'p-3' : 'p-4';
  const titleSize = compact ? 'text-sm' : 'text-base';
  const bodySize = compact ? 'text-xs' : 'text-sm';
  const btnText = compact ? 'text-xs' : 'text-sm';
  const gap = compact ? 'gap-3' : 'gap-4';

  return (
    <div className="relative border rounded-lg overflow-hidden bg-white shadow hover:shadow-lg transition-shadow">
      {/* Image (with frame + fallback so white slabs are visible) */}
      <div className={`relative ${imgHeight} bg-gray-200 border-b`}>
        <img
          src={image}                         // e.g. "/images/products/volakas.jpg"
          alt={name}
          className={`w-full h-full object-cover ${!inStock ? 'grayscale' : ''}`}
          onError={(e) => { e.currentTarget.src = '/images/products/placeholder.jpg'; }}
        />

        {!inStock && (
          <>
            <div className="absolute inset-0 bg-white/60" aria-hidden="true" />
            <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
              Out of stock
            </span>
          </>
        )}
      </div>

      {/* Info */}
      <div className={pad}>
        <h3 className={`font-semibold ${titleSize}`}>{name}</h3>
        <p className={`${bodySize} text-gray-600 line-clamp-2`}>{short}</p>

        <div className={`mt-2 ${bodySize} text-gray-500`}>
          <span>{category}</span> • <span>{finish}</span> • <span>{thicknessMM}mm</span>
        </div>

        {/* Actions (centered) */}
        <div className={`mt-4 flex justify-center ${gap}`}>
          <Link
            href={`/products/${id}`}
            className={`px-4 py-2 rounded-full bg-black text-white ${btnText}
                        shadow-sm transition-all duration-200
                        hover:bg-gray-600 motion-safe:hover:scale-105 hover:shadow-md
                        focus:outline-none focus:ring-2 focus:ring-black/20`}
          >
            Details
          </Link>

          <button
            type="button"
            onClick={() => onQuote?.(product)}  // <-- IMPLEMENTATION: trigger modal/callback
            title={inStock ? 'Request Quote' : 'Currently out of stock — request availability'}
            className={`px-4 py-2 rounded-full border ${btnText}
                        transition-all duration-200 shadow-sm
                        ${inStock
                          ? 'border-black text-black hover:bg-black hover:text-white'
                          : 'border-gray-400 text-gray-600 hover:bg-gray-100'}
                        motion-safe:hover:scale-105 hover:shadow-md
                        focus:outline-none focus:ring-2 focus:ring-black/10`}
          >
            {inStock ? 'Request Quote' : 'Request Availability'}
          </button>
        </div>
      </div>
    </div>
  );
}
