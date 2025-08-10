'use client';
import { useEffect } from 'react';

export default function QuoteModal({ open, onClose, product }) {
  // close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  // stop scroll when open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <button
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        aria-label="Close quote form"
      />

      {/* Modal */}
      <div className="relative w-[92%] max-w-lg rounded-2xl bg-white shadow-xl p-6 animate-[fadeIn_.15s_ease]">
        <h2 id="quote-title" className="text-xl font-semibold mb-1">
          Request a Quote
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          {product ? `Product: ${product.name}` : 'Tell us what you need and we’ll get back to you.'}
        </p>
        

        <form
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: send to email/CRM/API
            alert('Quote request sent! (Wire this to your email/CRM next)');
            onClose();
          }}
          className="space-y-3"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone (optional)"
            className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
          />
          <input
            type="text"
            name="projectLocation"
            placeholder="Project location (city, country)"
            className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
          />
          <input
            type="number"
            min="0"
            name="quantity"
            placeholder="Quantity (m² or slabs)"
            className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
          />
          <textarea
            name="message"
            placeholder="Project details (sizes, finish, timing, etc.)"
            rows={4}
            className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
          />
          {/* Hidden product info */}
          {product && <input type="hidden" name="productId" value={product.id} />}

          <div className="mt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md border hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-700 transition"
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
