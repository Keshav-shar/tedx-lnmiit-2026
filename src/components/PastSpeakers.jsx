import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import PixelCard from "./PixelCard";

gsap.registerPlugin(ScrollTrigger);

export default function PastSpeakers() {
  const cardsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  const speakers = [
    { id: 1, name: "Dr. Tanu Jain", image: "/images/image0.png", description: "Former civil servant turned motivational speaker...", youtube: "https://www.youtube.com/@DrTanuJain", instagram: "https://www.instagram.com/drtanujain" },
    { id: 2, name: "Gunjan Saini", image: "/images/image01.png", description: "Former civil servant turned motivational speaker...", youtube: "https://www.youtube.com/@DrTanuJain", instagram: "https://www.instagram.com/drtanujain" },
    { id: 3, name: "Preksha Kaparwan", image: "/images/image1.png", description: "Former civil servant turned motivational speaker...", youtube: "https://www.youtube.com/@DrTanuJain", instagram: "https://www.instagram.com/drtanujain" },
    { id: 4, name: "Dr. Kamna Chhibber", image: "/images/image2.png", description: "Former civil servant turned motivational speaker...", youtube: "https://www.youtube.com/@DrTanuJain", instagram: "https://www.instagram.com/drtanujain" },
    { id: 5, name: "Dr. Ajay Data", image: "/images/image3.png", description: "Former civil servant turned motivational speaker...", youtube: "https://www.youtube.com/@DrTanuJain", instagram: "https://www.instagram.com/drtanujain" },
    { id: 6, name: "Dr. Lopa Mudraa", image: "/images/image4.png", description: "Former civil servant turned motivational speaker...", youtube: "https://www.youtube.com/@DrTanuJain", instagram: "https://www.instagram.com/drtanujain" },
    { id: 7, name: "Anand Megalingam", image: "/images/image5.png", description: "Former civil servant turned motivational speaker...", youtube: "https://www.youtube.com/@DrTanuJain", instagram: "https://www.instagram.com/drtanujain" },
    { id: 8, name: "Aabha Hanjura", image: "/images/image6.png", description: "Former civil servant turned motivational speaker...", youtube: "https://www.youtube.com/@DrTanuJain", instagram: "https://www.instagram.com/drtanujain" },
    { id: 9, name: "Shelly Jyoti", image: "/images/image7.png", description: "Former civil servant turned motivational speaker...", youtube: "https://www.youtube.com/@DrTanuJain", instagram: "https://www.instagram.com/drtanujain" },
    { id: 10, name: "Shelly Jyoti", image: "/images/image7.png", description: "Former civil servant turned motivational speaker...", youtube: "https://www.youtube.com/@DrTanuJain", instagram: "https://www.instagram.com/drtanujain" },
    { id: 11, name: "Shelly Jyoti", image: "/images/image7.png", description: "Former civil servant turned motivational speaker...", youtube: "https://www.youtube.com/@DrTanuJain", instagram: "https://www.instagram.com/drtanujain" },
    { id: 12, name: "Shelly Jyoti", image: "/images/image7.png", description: "Former civil servant turned motivational speaker...", youtube: "https://www.youtube.com/@DrTanuJain", instagram: "https://www.instagram.com/drtanujain" },
  ];

  /* ---------- Mobile detection ---------- */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const visibleSpeakers = isMobile ? speakers.slice(0, 5) : speakers;

  /* ---------- GSAP Scroll (DO NOT TOUCH) ---------- */
  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;
      gsap.to(card, {
        scale: 0.7,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 15%",
          end: "bottom 15%",
          scrub: true,
        },
      });
    });
  }, [visibleSpeakers]);

  return (
    <main className="relative w-full bg-black/50 text-white flex flex-col items-center py-[15vh]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[3vw] gap-y-[15vh] place-items-center w-full px-4 sm:px-6 md:px-10">
        {visibleSpeakers.map((speaker, index) => (
          <div
            key={speaker.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="
              speaker-card sticky top-[15vh] relative
              w-[75vw] sm:w-[60vw] md:w-[32vw] lg:w-[28vw]
              max-w-[400px] min-w-[260px]
              py-[10vh] px-4
              rounded-[25px] overflow-hidden
              bg-[radial-gradient(ellipse_at_center,_#000_0%,_#000_60%,_#120000_85%,_#1a0000_100%)]
            "
          >
            {/* PIXEL OVERLAY (z-0 → z-1 on hover) */}
            <PixelCard
              variant="pink"
              className="
                absolute inset-0 z-0
                opacity-0 hover:opacity-100
                transition-opacity duration-300
              "
            />

            {/* CONTENT (ALWAYS ABOVE) */}
            <div className="relative z-10 flex flex-col items-center gap-4 text-center px-2 sm:px-4 pointer-events-none">
              <div className="w-[220px] aspect-square rounded-[20px] overflow-hidden border-4 border-[#EB0028] shadow-lg sm:w-[180px]">
                <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
              </div>

              <h1 className="text-3xl font-extrabold text-[#EB0028] sm:text-2xl">
                {speaker.name}
              </h1>

              <p className="text-lg font-medium max-w-[90%] leading-relaxed sm:text-base sm:max-w-full">
                {speaker.description}
              </p>

              <div className="flex items-center justify-center gap-6 mt-4 pointer-events-auto">
                {speaker.youtube && (
                  <a href={speaker.youtube} target="_blank" rel="noopener noreferrer" className="text-red-600 text-3xl hover:scale-110 transition-transform">
                    <FaYoutube />
                  </a>
                )}
                {speaker.instagram && (
                  <a href={speaker.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 text-3xl hover:scale-110 transition-transform">
                    <FaInstagram />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
