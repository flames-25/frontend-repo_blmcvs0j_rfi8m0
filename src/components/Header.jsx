import { ShoppingBag, Phone, MapPin } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-9 w-9 grid place-items-center rounded-md bg-gradient-to-tr from-rose-500 to-amber-400 text-white shadow-sm">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="font-semibold tracking-tight">Aatma Aakarshan</p>
              <p className="text-xs text-neutral-500">Nepali Traditional Wear</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#home" className="text-neutral-700 hover:text-neutral-900">Home</a>
            <a href="#collection" className="text-neutral-700 hover:text-neutral-900">Collection</a>
            <a href="#about" className="text-neutral-700 hover:text-neutral-900">About</a>
            <a href="#contact" className="text-neutral-700 hover:text-neutral-900">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="tel:+9779800000000" className="inline-flex items-center gap-2 text-neutral-700 hover:text-neutral-900">
              <Phone className="h-4 w-4" />
              <span>+977 980-0000000</span>
            </a>
            <a href="#map" className="inline-flex items-center gap-2 text-neutral-700 hover:text-neutral-900">
              <MapPin className="h-4 w-4" />
              <span>Kathmandu</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
