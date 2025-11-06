import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaYoutube, FaInstagram } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const speakers = [
   {
    id: 1,
    name: "Dr. Tanu Jain",
    image: "/images/image0.png",
    description: "Former civil servant turned motivational speaker...",
    youtube: "https://www.youtube.com/@DrTanuJain", 
    instagram: "https://www.instagram.com/drtanujain", 
  },
  { id: 2, name: "Gunjan Saini", image: "/images/image01.png", description: "Former civil servant turned motivational speaker..." , youtube: "https://www.youtube.com/@DrTanuJain", 
    instagram: "https://www.instagram.com/drtanujain" },
  { id: 3, name: "Preksha Kaparwan", image: "/images/image1.png", description: "Former civil servant turned motivational speaker..." , youtube: "https://www.youtube.com/@DrTanuJain", 
    instagram: "https://www.instagram.com/drtanujain" },
  { id: 4, name: "Dr. Kamna Chhibber", image: "/images/image2.png", description: "Former civil servant turned motivational speaker..." , youtube: "https://www.youtube.com/@DrTanuJain", 
    instagram: "https://www.instagram.com/drtanujain" },
  { id: 5, name: "Dr. Ajay Data", image: "/images/image3.png", description: "Former civil servant turned motivational speaker..."  , youtube: "https://www.youtube.com/@DrTanuJain", 
    instagram: "https://www.instagram.com/drtanujain"},
  { id: 6, name: "Dr. Lopa Mudraa", image: "/images/image4.png", description: "Former civil servant turned motivational speaker..." , youtube: "https://www.youtube.com/@DrTanuJain", 
    instagram: "https://www.instagram.com/drtanujain" },
  { id: 7, name: "Anand Megalingam", image: "/images/image5.png", description: "Former civil servant turned motivational speaker..."  , youtube: "https://www.youtube.com/@DrTanuJain", 
    instagram: "https://www.instagram.com/drtanujain"},
  { id: 8, name: "Aabha Hanjura", image: "/images/image6.png", description: "Former civil servant turned motivational speaker..." , youtube: "https://www.youtube.com/@DrTanuJain", 
    instagram: "https://www.instagram.com/drtanujain" },
  { id: 9, name: "Shelly Jyoti", image: "/images/image7.png", description: "Former civil servant turned motivational speaker..." , youtube: "https://www.youtube.com/@DrTanuJain", 
    instagram: "https://www.instagram.com/drtanujain" },
];

 export default function PastSpeakers() {
  const cardsRef = useRef([]);

  useEffect(() => {
    // ✅ Animation (unchanged)
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
  }, []);

  return (
    <main className="relative w-full text-white text-center flex flex-col items-center py-[15vh] bg-black">
      {/* ✅ Grid layout for 2 cards per row on laptop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[3vw] gap-y-[15vh] place-items-center w-full px-4 sm:px-6 md:px-10">
        {speakers.map((speaker, index) => (
          <div
            key={speaker.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="
              speaker-card sticky top-[15vh]
              w-[75vw] sm:w-[60vw] md:w-[32vw] lg:w-[28vw]
              max-w-[400px] min-w-[260px]
              py-[10vh] px-4
              rounded-[25px] overflow-hidden
              flex flex-col items-center text-center
            "
          >
            {/* ✅ Background */}
            <div className="absolute inset-0 bg-[url('/images/bg-image.png')] bg-cover bg-center opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>

            {/* ✅ Content */}
            <div className="relative z-10 flex flex-col items-center gap-4 text-white px-2 sm:px-4">
              <div className="w-[220px] aspect-square rounded-[20px] overflow-hidden border-4 border-red-700 shadow-lg sm:w-[180px]">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h1 className="text-3xl font-extrabold text-red-500 drop-shadow-md sm:text-2xl">
                {speaker.name}
              </h1>

              <p className="text-lg font-medium max-w-[90%] leading-relaxed text-white/90 sm:text-base sm:max-w-full">
                {speaker.description}
              </p>

              {/* ✅ Social Icons */}
              <div className="flex items-center justify-center gap-6 mt-4">
                {speaker.youtube && (
                  <a
                    href={speaker.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-600 text-3xl transition-transform transform hover:scale-110"
                  >
                    <FaYoutube />
                  </a>
                )}
                {speaker.instagram && (
                  <a
                    href={speaker.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-600 text-3xl transition-transform transform hover:scale-110"
                  >
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
