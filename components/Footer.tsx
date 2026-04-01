export default function Footer() {
  return (
    <footer className="border-t border-[#e7e5e4]/50 py-16 px-6 bg-[#fdfaf6]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[15px] text-[#a8a29e]">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <span className="font-serif text-2xl text-[#1c1917] font-semibold">acafo.</span>
          <span className="hidden md:inline-block w-px h-5 bg-[#e7e5e4]"></span>
          <span>Because your career story matters.</span>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 font-medium">
          <a href="#" className="hover:text-[#1c1917] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#1c1917] transition-colors">Terms</a>
          <a href="#" className="hover:text-[#1c1917] transition-colors">Contact</a>
        </div>
        
        <div className="text-sm">
          © {new Date().getFullYear()} Acafo.
        </div>
      </div>
    </footer>
  );
}
