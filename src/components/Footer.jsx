import React from "react";
import ShootingStars from "./ShootingStars";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 relative overflow-hidden">

      {/* ⭐ Shooting Stars Background */}
      <div className="absolute inset-0 z-0">
        <ShootingStars />
      </div>

      {/* MAIN LAYOUT */}
      <div
        className="
          relative z-10 max-w-7xl mx-auto px-6
          grid grid-cols-1 md:grid-cols-3
          gap-10 md:gap-0
          items-start
        "
      >

        {/* ─── LEFT COLUMN ─── */}
        <div className="text-center md:text-left space-y-3">
          <img
  src="/images/logo-white.webp"
  alt="TEDx LNMIIT"
  className="h-10 object-contain mx-auto md:mx-0 md:-ml-4"
/>


          <p className="text-sm leading-snug">
            <span className="text-red-500">x = independently</span><br />
            organized TED event
          </p>

          <p className="text-sm text-gray-300 leading-snug">
            This independent TEDx event is operated<br />
            under license from TED.
          </p>

          <p className="pt-2 text-sm text-gray-400">
            2026 TEDxLNMIIT
          </p>
        </div>

        {/* ─── CENTER COLUMN — FIND US ─── */}
        <div className="text-center space-y-3">
          <h3 className="text-base font-semibold tracking-wide">
            FIND US
          </h3>

          <iframe
            className="w-full max-w-xs h-32 mx-auto rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1450217707263!2d75.9225248!3d26.8645566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6ce449d2633%3A0x4ae26e80d05d20c1!2sThe%20LNM%20Institute%20Of%20Information%20Technology%20(LNMIIT)%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1738255123456!5m2!1sen!2sin"
            loading="lazy"
            title="Location Map"
          ></iframe>

          <p className="text-sm leading-snug text-gray-300">
            Rupa ki Nangal, Post-Sumel,<br />
            Via Jamdoli, Jaipur,<br />
            Rajasthan, India-302031
          </p>
        </div>

        {/* ─── RIGHT COLUMN — LINKS + CONTACT ─── */}
        <div className="
          flex flex-col
          text-center md:text-right
          items-center md:items-end
          space-y-6
        ">

          <div>
            <h3 className="text-base font-semibold tracking-wide mb-2">
              USEFUL LINKS
            </h3>

            <ul className="text-sm text-gray-300 space-y-1">
              <li><a href="/tickets" className="hover:text-white">Tickets</a></li>
              <li><a href="/team" className="hover:text-white">Team</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-wide mb-2">
              GET IN TOUCH
            </h3>

            <ul className="text-sm text-gray-300 space-y-1">
              <li>Abdul Hadi Siddhiqui — +91 81072 10700</li>
              <li>Anshika Agrawal — +91 88262 56810</li>
              <li>Parv Khandelwal — +91 83065 95368</li>
              <li>Vihaan Malik — +91 84458 93879</li>
            </ul>

            <p className="text-sm text-gray-300 mt-3">
              tedxlnmiit@lnmiit.ac.in
            </p>
          </div>
        </div>
      </div>

      {/* ─── SOCIAL ICONS ─── */}
      <div
        className="
          relative z-10 max-w-7xl mx-auto px-6 mt-6
          flex justify-center md:justify-end gap-3
        "
      >
        <a
          href="https://www.linkedin.com/company/tedxlnmiit/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center
          border border-white rounded-md hover:bg-white hover:text-black transition"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>

        <a
          href="https://www.instagram.com/tedxlnmiit"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center
          border border-white rounded-md hover:bg-white hover:text-black transition"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
