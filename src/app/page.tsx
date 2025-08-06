import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      
      {/* Your main content here */}
      <main className="min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to the Homepage</h1>
        <p>More content goes here...</p>
      </main>

      <Footer />
    </div>
  );
}

