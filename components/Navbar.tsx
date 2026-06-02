"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "AI Çözümleri", href: "#ai-cozumleri" },
  { label: "Teknoloji", href: "#teknoloji" },
  { label: "Portfolyo", href: "#portfolyo" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md bg-[#0a0a0f]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold gradient-text">NovaCode</a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#iletisim"
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Projeni Başlat
            </a>
          </div>

          <button className="md:hidden text-gray-400" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0a0a0f]/95 backdrop-blur-md px-4 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#iletisim"
            onClick={() => setOpen(false)}
            className="bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-lg text-center"
          >
            Projeni Başlat
          </a>
        </div>
      )}
    </nav>
  );
}
