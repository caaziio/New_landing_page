export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#004aad] flex items-center justify-center text-xs">✨</div>
          acafo.
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-10 text-[14px] font-medium text-light-blue">
          <a href="#how-it-works" className="hover:text-white transition-colors">
            Our Approach
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="hidden md:inline-flex text-[14px] font-medium text-light-blue hover:text-white transition-colors"
          >
            Log in
          </a>
          <a
            href="#"
            id="nav-cta"
            className="text-[14px] font-bold px-5 py-2.5 rounded-full bg-white text-navy hover:bg-light-blue transition-transform active:scale-95 shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
