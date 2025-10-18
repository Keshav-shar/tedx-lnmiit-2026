import { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Theme", path: "/theme" },
  { name: "About", path: "/about" },
  { name: "Speakers", path: "/speakers" },
  { name: "Gallery", path: "/gallery" },
  { name: "Team", path: "/team" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between px-4 py-3 bg-black shadow-md relative">

      {/* Left Logo */}
      <div className="flex flex-col">
        <img 
          src="/images/logo-white.png"
          alt="TEDx LNMIIT Logo" 
          className="h-8 w-auto object-contain"
        />
        <span className="text-xs text-white leading-tight">
          x = independently organized <span className="text-red-600 font-semibold">TED</span> event
        </span>
      </div>

      {/* Right side: Get Tickets + Hamburger */}
      <div className="flex items-center space-x-3">
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap">
          Get Tickets
        </button>
        <button
          className="text-2xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu (Full Screen) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center space-y-6 z-50">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="text-white text-2xl font-semibold"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            ✕
          </button>
        </div>
      )}
    </header>
  );
}
