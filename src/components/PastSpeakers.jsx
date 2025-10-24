import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const speakers = [
  { id: 1, name: "Dr. Tanu Jain", image: "/images/image0.png", description: "Former civil servant turned motivational speaker..." },
  { id: 2, name: "Gunjan Saini", image: "/images/image01.png", description: "Former civil servant turned motivational speaker..." },
  { id: 3, name: "Preksha Kaparwan", image: "/images/image1.png", description: "Former civil servant turned motivational speaker..." },
  { id: 4, name: "Dr. Kamna Chhibber", image: "/images/image2.png", description: "Former civil servant turned motivational speaker..." },
  { id: 5, name: "Dr. Ajay Data", image: "/images/image3.png", description: "Former civil servant turned motivational speaker..." },
  { id: 6, name: "Dr. Lopa Mudraa", image: "/images/image4.png", description: "Former civil servant turned motivational speaker..." },
  { id: 7, name: "Anand Megalingam", image: "/images/image5.png", description: "Former civil servant turned motivational speaker..." },
  { id: 8, name: "Aabha Hanjura", image: "/images/image6.png", description: "Former civil servant turned motivational speaker..." },
  { id: 9, name: "Shelly Jyoti", image: "/images/image7.png", description: "Former civil servant turned motivational speaker..." },
];

export default function PastSpeakers() {
  const cardsRef = useRef([]);

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
  }, []);

  return (
    <main className="relative w-full text-white text-center flex flex-col items-center py-[15vh] bg-black">
      {speakers.map((speaker, index) => (
        <div
          key={speaker.id}
          ref={(el) => (cardsRef.current[index] = el)}
          className="
            speaker-card sticky top-[15vh]
            w-[27vw] max-w-[400px] min-w-[280px]
            py-[10vh] px-4
            rounded-[25px] overflow-hidden
            flex flex-col items-center text-center
            md:w-[27vw] sm:w-[80vw]
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
          </div>
        </div>
      ))}
    </main>
  );
}
