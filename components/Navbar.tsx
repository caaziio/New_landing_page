export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fdfaf6]/80 backdrop-blur-xl border-b border-[#e7e5e4]/50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="/" className="text-2xl font-serif font-semibold tracking-tight text-[#1c1917]">
          acafo.
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-[#78716c]">
          <a href="#how-it-works" className="hover:text-[#1c1917] transition-colors">
            Our Approach
          </a>
          <a href="#services" className="hover:text-[#1c1917] transition-colors">
            Services
          </a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="hidden md:inline-flex text-[15px] font-medium text-[#78716c] hover:text-[#1c1917] transition-colors"
          >
            Log in
          </a>
          <a
            href="#"
            id="nav-cta"
            className="text-[15px] font-semibold px-5 py-2.5 rounded-full bg-[#1c1917] text-white hover:bg-[#333] transition-transform hover:scale-105 active:scale-95"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
