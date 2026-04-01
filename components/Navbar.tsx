export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="text-xl font-bold tracking-tight text-[#004aad]">
          Acafo
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#how-it-works" className="hover:text-[#004aad] transition-colors">
            How it works
          </a>
          <a href="#services" className="hover:text-[#004aad] transition-colors">
            Services
          </a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden md:inline-flex text-sm font-medium text-gray-600 hover:text-[#004aad] transition-colors"
          >
            Sign in
          </a>
          <a
            href="#"
            id="nav-cta"
            className="text-sm font-semibold px-4 py-2 rounded-xl bg-[#004aad] text-white hover:bg-[#003a8c] transition-colors"
          >
            Start Free
          </a>
        </div>
      </div>
    </nav>
  );
}
