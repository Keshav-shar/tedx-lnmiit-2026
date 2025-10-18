import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white pt-12 pb-6 relative">

      {/* Logo */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="/images/logo-white.png" // 🔴 Replace with your logo path
          alt="TEDx Logo"
          className="h-12 md:h-16 object-contain"
        />
         <p className="text-sm text-gray-300 mt-2 tracking-wide">
          x = independently organized <span className="text-red-600 font-semibold">TED</span> event
        </p>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center space-x-8 text-lg font-light mb-6">
        <a href="/" className="hover:text-red-500 transition">Home</a>
        <a href="/speakers" className="hover:text-red-500 transition">Speakers</a>
        <a href="/gallery" className="hover:text-red-500 transition">Gallery</a>
        <a href="/sponsors" className="hover:text-red-500 transition">Sponsors</a>
        <a href="/about" className="hover:text-red-500 transition">About</a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-8">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
           className="flex items-center justify-center w-10 h-10 border border-white rounded-full hover:bg-red-600 transition">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
           className="flex items-center justify-center w-10 h-10 border border-white rounded-full hover:bg-red-600 transition">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
           className="flex items-center justify-center w-10 h-10 border border-white rounded-full hover:bg-red-600 transition">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 w-3/4 mx-auto mb-6"></div>

      {/* Footer Text */}
      <div className="text-center text-sm md:text-base px-4">
        © 2026 <span className="text-red-500 font-semibold">TEDxLNMIIT</span>. 
        THIS INDEPENDENT TEDX EVENT IS OPERATED UNDER LICENSE FROM TED &nbsp;|&nbsp;
        <a href="#terms" className="hover:text-red-500">Terms & Conditions</a> &nbsp;|&nbsp;
        <a href="#accessibility" className="hover:text-red-500">Accessibility</a>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-red-600 text-white w-12 h-12 rounded-full shadow-lg text-2xl flex items-center justify-center hover:bg-red-700 transition"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
