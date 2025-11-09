import Header from "./components/Header";
import Hero from "./components/Hero";
import Collection from "./components/Collection";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />
      <main>
        <Hero />
        <Collection />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-black/5 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Aatma Aakarshan. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#collection" className="text-neutral-600 hover:text-neutral-900">Collection</a>
            <a href="#about" className="text-neutral-600 hover:text-neutral-900">About</a>
            <a href="#contact" className="text-neutral-600 hover:text-neutral-900">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
