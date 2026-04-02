export default function Footer() {
  return (
    <footer className="bg-navy py-16 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-8 md:flex-row">
        
        {/* Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <a href="/" className="text-3xl font-bold tracking-tight text-white flex items-center gap-2 mb-2">
            acafo.
          </a>
          <p className="text-light-blue text-sm">
            © {new Date().getFullYear()} Acafo. All rights reserved.
          </p>
        </div>

        {/* Legal Links */}
        <div className="flex items-center gap-6 text-sm text-light-blue font-medium">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

      </div>
    </footer>
  );
}
