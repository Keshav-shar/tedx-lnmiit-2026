import { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Theme", path: "/theme" },
  { name: "About", path: "/about" },
  { name: "Speakers", path: "/speakers" },
  { name: "Events", path: "/events" },
  { name: "Contact us", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between px-4 py-3 bg-black shadow-md relative">

      {/* Left Logo*/}
      <div className="flex flex-col ">
        <img 
          src="../../public/images/logo-white.png"
          alt="TEDx LNMIIT Logo" 
          className="h-7 w-30" 
        />
        <span className="text-xs  text-white ">
          x = independently organized TED event
        </span>
      </div>

      {/* Right side: Get Tickets + Hamburger menu*/}
      <div className="flex items-center space-x-4">
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm">
          Get Tickets
        </button>
        <button
          className="text-2xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white py-6 px-6 shadow-lg space-y-4">
          {navItems.map((item) => (
         <a key={item.name} href={item.path} className="block text-lg text-gray-800">
         {item.name}
         </a>
          ))}
        </div>
      )}
    </header>
  );
}
