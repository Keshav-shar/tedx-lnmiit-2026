import { useContext, useEffect, useState } from "react";
import { NavbarContext } from "../context/NavContext";

export default function Navbar() {
  const { setNavOpen } = useContext(NavbarContext);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down → hide navbar
        setShowNavbar(false);
      } else {
        // Scrolling up → show navbar
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 py-3 bg-black shadow-md z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* LEFT SECTION */}
      <div className="flex flex-col items-start">
        <img
          src="/images/logo-white.png"
          alt="TEDx LNMIIT Logo"
          className="h-10 w-auto object-contain object-left"
        />
        <span className="mt-1 text-[11px] leading-tight text-white">
          x = independently organized{" "}
          <span className="text-red-600 font-semibold">TED</span> event
        </span>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center space-x-4">
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
          Get Tickets
        </button>
        <button
          className="text-3xl text-white"
          onClick={() => setNavOpen(true)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}

