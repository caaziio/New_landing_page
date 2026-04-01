export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#004aad] text-base">Acafo</span>
          <span>— Align your skills. Get hired in Korea.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-gray-600 transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-gray-600 transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-gray-600 transition-colors">
            Contact
          </a>
        </div>
        <p>© {new Date().getFullYear()} Acafo. All rights reserved.</p>
      </div>
    </footer>
  );
}
