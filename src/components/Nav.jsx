import { useContext, useEffect, useState } from "react";
import { NavbarContext } from "../context/NavContext";

export default function Navbar() {
  const { setNavOpen } = useContext(NavbarContext);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) setShowNavbar(false);
      else setShowNavbar(true);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Theme", href: "/theme" },
    { name: "About", href: "/about" },
    { name: "Speakers", href: "/speakers" },
    { name: "Gallery", href: "/gallery" },
    { name: "Team", href: "/team" },
  ];

  return (
    <header
  className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 lg:py-4 bg-black/90 backdrop-blur-lg shadow-md z-50 transition-transform duration-300 ${
    showNavbar ? "translate-y-0" : "-translate-y-full"
  }`}
>
    
      {/* LEFT SECTION */}
     <div className="flex flex-col items-start">
  <img
    src="/images/logo-white.png"
    alt="TEDx LNMIIT Logo"
    className="h-10 lg:h-12 w-auto object-contain"
  />
  <span className="mt-1 text-[11px] lg:text-[12px] text-white leading-tight">
    x = independently organized{" "}
    <span className="text-red-600 font-bold">TED</span> event
  </span>
</div>


      {/* DESKTOP NAVIGATION */}
      <nav className="hidden lg:flex items-center space-x-10 text-white text-base font-semibold">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="relative group tracking-wide"
          >
            <span className="transition-all duration-200 group-hover:text-red-500">
              {item.name}
            </span>
            {/* Underline animation */}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </nav>

      {/* RIGHT BUTTONS */}
      <div className="flex items-center gap-3 sm:gap-4 lg:gap-4">
    <button className="bg-red-600 hover:bg-red-700 transition text-white px-4 sm:px-5 lg:px-6 py-2 rounded-lg text-sm lg:text-base font-semibold shadow-lg">
      Get Tickets
    </button>

    {/* Hamburger menu (only on mobile) */}
    <button
      className="text-3xl text-white lg:hidden"
      onClick={() => setNavOpen(true)}
    >
      ☰
    </button>
      </div>
    </header>
  );
}
