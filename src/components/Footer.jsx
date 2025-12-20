import React from "react";
import ShootingStars from "./ShootingStars";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white pt-8 pb-16 md:pt-12 md:pb-12 relative overflow-hidden">

      {/* 🌠 Shooting Stars Background */}
      <div className="absolute inset-0 z-0">
        <ShootingStars />
      </div>

      {/* Logo */}
      <div className="flex flex-col items-center mb-6 relative z-10">
        <img
          src="/images/logo-white.png"
          alt="TEDx Logo"
          className="h-12 md:h-16 object-contain"
        />
        <p className="text-sm text-gray-300 mt-2 tracking-wide text-center px-4">
          x = independently organized{" "}
          <span className="text-red-600 font-semibold">TED</span> event
        </p>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-6 text-lg font-light mb-6 px-4 text-center relative z-10">
       
        <a href="/speakers" className="hover:text-[#EB0028] transition">Speakers</a>
        <a href="/gallery" className="hover:text-[#EB0028] transition">Gallery</a>
        <a href="/sponsors" className="hover:text-[#EB0028] transition">Sponsors</a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-8 relative z-10">
           <a
             href="https://www.instagram.com/tedxlnmiit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center justify-center w-10 h-10 border border-white rounded-full hover:bg-[#EB0028] transition"
           >
             <i className="fab fa-instagram"></i>
           </a>
         
           <a
             href="https://www.linkedin.com/company/tedxlnmiit/"
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center justify-center w-10 h-10 border border-white rounded-full hover:bg-[#EB0028] transition"
           >
             <i className="fab fa-linkedin-in"></i>
           </a>

           <a
             href="https://www.youtube.com/@TEDxLNMIIT"
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center justify-center w-10 h-10 border border-white rounded-full hover:bg-[#EB0028] transition"
           >
             <i className="fab fa-youtube"></i>
           </a>
        </div>


      {/* Divider */}
      <div className="border-t border-gray-700 w-3/4 mx-auto mb-6 relative z-10"></div>

      {/* Footer Text */}
      <div className="text-center text-sm md:text-base px-6 leading-relaxed relative z-10">
        © 2026 <span className="text-[#EB0028] font-semibold">TEDxLNMIIT</span>.
        THIS INDEPENDENT TEDX EVENT IS OPERATED UNDER LICENSE FROM TED 
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#EB0028] text-white w-12 h-12 rounded-full shadow-lg text-2xl flex items-center justify-center hover:bg-red-700 transition z-50"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
