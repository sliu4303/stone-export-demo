export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-gray-700 mb-8">
        Have a question or need a quote? Reach out to us using the details below.
      </p>

      <div className="space-y-4 text-gray-800">
        <p><strong>Address:</strong> 123 Stone Street, Shanghai, China</p>
        <p><strong>Phone:</strong> +86 123-4567-8910</p>
        <p><strong>Email:</strong> info@stoneexport.com</p>
        <p><strong>Facebook:</strong> <a href="#" className="text-blue-600 hover:underline">facebook.com/stoneexport</a></p>
        <p><strong>Instagram:</strong> <a href="#" className="text-pink-600 hover:underline">instagram.com/stoneexport</a></p>
        <p><strong>LinkedIn:</strong> <a href="#" className="text-blue-500 hover:underline">linkedin.com/company/stoneexport</a></p>
      </div>
    </main>
  );
}
