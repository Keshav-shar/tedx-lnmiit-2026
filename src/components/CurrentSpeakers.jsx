import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

gsap.registerPlugin(ScrollToPlugin);

const SPEAKERS = [
  { id: 1, name: "Dr. Tanu Jain", title: "Assistant Director, DRDO", image: "/images/image0.png", bio: "Former IAS officer and DRDO Assistant Director, Dr. Jain advocates for education and UPSC reforms. Her multifaceted career exemplifies her dedication to creating impact beyond conventional roles.", linkedin: "#", instagram: "#" },
  { id: 2, name: "Gunjan Saini", title: "AI Researcher", image: "/images/image01.png", bio: "Poet, writer, and founder of @officialletstalk, she fosters emotional well-being through shared stories. Gunjan's creative force helps bridge emotional gaps, making a significant impact in mental health.", linkedin: "#", instagram: "#" },
  { id: 3, name: "Preksha Kaparwan", title: "Founder", image: "/images/image1.png", bio: "Preksha Kaparwan - the dynamic entrepreneur and storyteller revolutionizing the way we access and understand data! As the Co-Founder and CMO of Alphaa AI, she's on a mission to democratize data using AI and NLP, building a platform that empowers users to interact with data effortlessly. A passionate marketer and a curious technologist, Preksha blends creativity and innovation to drive change.", linkedin: "#", instagram: "#" },
  { id: 4, name: "Arnim Agarwal", title: "Founder", image: "/images/image2.png", bio: "Dr. Kamna Chhibber, Head of Mental Health at Fortis Healthcare, is a renowned clinical psychologist with over 15 years of experience specializing in Cognitive Behaviour Therapy, relationships, trauma, and abuse. A passionate advocate for mental health awareness, she is an accomplished author and speaker whose insights have shaped the discourse on mental well-being across leading platforms.", linkedin: "#", instagram: "#" },
  { id: 5, name: "Vatsal Jain", title: "Founder", image: "/images/image3.png", bio: "Dr. Ajay Data, Managing Director of Data Group of Industries, is a visionary entrepreneur who introduced the internet to Rajasthan. As founder of Data XGen Technologies, he developed the world’s first linguistic email solution, driving global digital inclusion.", linkedin: "#", instagram: "#" },
  { id: 6, name: "Jay Kumawat", title: "Founder", image: "/images/image4.png", bio: "Short bio...", linkedin: "#", instagram: "#" },
];

export default function CurrentSpeakers() {
  const trackRef = useRef(null);
  const cards = useRef([]);
  const [active, setActive] = useState(0);

  const isAnimatingRef = useRef(false);
  const autoplayIntervalRef = useRef(null);
  const autoplayPausedRef = useRef(false);
  const interactionTimeoutRef = useRef(null);
  const wheelStopTimerRef = useRef(null);
  const AUTOPLAY_MS = 2000;
  const RESUME_AFTER_MS = 1800;
  const WHEEL_SENSITIVITY = 1;

  const centerCard = (index, setActiveCard = true) => {
    const track = trackRef.current;
    const card = cards.current[index];
    if (!track || !card) return;

    isAnimatingRef.current = true;

    const cardRect = card.getBoundingClientRect();
    const trackRect = track.getBoundingClientRect();
    const target =
      track.scrollLeft +
      (cardRect.left - trackRect.left + cardRect.width / 2 - trackRect.width / 2);

    gsap.to(track, {
      scrollTo: { x: target },
      duration: 0.7,
      ease: "power2.out",
      onComplete: () => {
        isAnimatingRef.current = false;
        if (typeof setActiveCard === "boolean" && setActiveCard) {
          setActive(index);
        }
      },
    });
  };

  const findClosest = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const center = track.getBoundingClientRect().width / 2;
    let closest = 0;
    let minDist = Infinity;

    cards.current.forEach((card, i) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const dist = Math.abs(rect.left + rect.width / 2 - center);
      if (dist < minDist) {
        closest = i;
        minDist = dist;
      }
    });

    return closest;
  };

  const clearAutoplay = () => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
      autoplayIntervalRef.current = null;
    }
  };

  const startAutoplay = () => {
    clearAutoplay();
    if (autoplayPausedRef.current) return;
    autoplayIntervalRef.current = setInterval(() => {
      if (isAnimatingRef.current) return;
      setActive((prev) => {
        const next = (prev + 1) % SPEAKERS.length;
        centerCard(next, true);
        return next;
      });
    }, AUTOPLAY_MS);
  };

  const pauseAutoplay = () => {
    autoplayPausedRef.current = true;
    clearAutoplay();
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
      interactionTimeoutRef.current = null;
    }
  };

  const resumeAutoplayAfterIdle = (delay = RESUME_AFTER_MS) => {
    if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    interactionTimeoutRef.current = setTimeout(() => {
      autoplayPausedRef.current = false;
      startAutoplay();
    }, delay);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    setTimeout(() => centerCard(0, true), 80);

    let onScrollTimer = null;

    const onScroll = () => {
      if (isAnimatingRef.current) return;

      pauseAutoplay();
      resumeAutoplayAfterIdle();

      if (onScrollTimer) clearTimeout(onScrollTimer);
      onScrollTimer = setTimeout(() => {
        const idx = findClosest();
        centerCard(idx, true);
      }, 140);
    };

    const onWheel = (e) => {
      if (Math.abs(e.deltaY) >= Math.abs(e.deltaX)) {
        e.preventDefault();
        pauseAutoplay();
        track.scrollLeft += e.deltaY * WHEEL_SENSITIVITY;

        if (wheelStopTimerRef.current) clearTimeout(wheelStopTimerRef.current);
        wheelStopTimerRef.current = setTimeout(() => {
          const idx = findClosest();
          centerCard(idx, true);
          resumeAutoplayAfterIdle();
        }, 160);
      }
    };

    const onPointerDown = () => pauseAutoplay();
    const onMouseEnter = () => pauseAutoplay();
    const onMouseLeave = () => resumeAutoplayAfterIdle();

    track.addEventListener("scroll", onScroll, { passive: true });
    track.addEventListener("wheel", onWheel, { passive: false });
    track.addEventListener("pointerdown", onPointerDown, { passive: true });
    track.addEventListener("mouseenter", onMouseEnter);
    track.addEventListener("mouseleave", onMouseLeave);

    autoplayPausedRef.current = false;
    startAutoplay();

    return () => {
      track.removeEventListener("scroll", onScroll);
      track.removeEventListener("wheel", onWheel);
      track.removeEventListener("pointerdown", onPointerDown);
      track.removeEventListener("mouseenter", onMouseEnter);
      track.removeEventListener("mouseleave", onMouseLeave);
      if (onScrollTimer) clearTimeout(onScrollTimer);
      if (wheelStopTimerRef.current) clearTimeout(wheelStopTimerRef.current);
      if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
      clearAutoplay();
    };
  }, []);

  useEffect(() => {
    cards.current.forEach((card, i) => {
      if (!card) return;
      const isActive = i === active;
      gsap.to(card, {
        scale: isActive ? 1.1 : 0.9,
        duration: 0.45,
        ease: "power3.out",
        filter: isActive ? "grayscale(0%) contrast(110%)" : "grayscale(100%) contrast(90%)",
      });
    });
  }, [active]);

  const handlePrev = () => {
    pauseAutoplay();
    setActive((prev) => {
      const next = (prev - 1 + SPEAKERS.length) % SPEAKERS.length;
      centerCard(next, true);
      resumeAutoplayAfterIdle();
      return next;
    });
  };

  const handleNext = () => {
    pauseAutoplay();
    setActive((prev) => {
      const next = (prev + 1) % SPEAKERS.length;
      centerCard(next, true);
      resumeAutoplayAfterIdle();
      return next;
    });
  };

  return (
  <section className="w-full bg-black text-white py-20">
    <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-10">

      {/* CAROUSEL (Mobile first) */}
      <div className="relative w-full lg:w-2/3 order-1 lg:order-none">
        <button
          aria-label="previous"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 hidden md:flex bg-white/10 text-white w-10 h-10 rounded-full"
          onClick={handlePrev}
        >
          ←
        </button>

        <button
          aria-label="next"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 hidden md:flex bg-white/10 text-white w-10 h-10 rounded-full"
          onClick={handleNext}
        >
          →
        </button>

        <div
          ref={trackRef}
          className="flex overflow-x-auto scrollbar-none gap-12 py-12 px-4 md:px-20"
          style={{ scrollbarWidth: "none" }} // Firefox
        >
          {SPEAKERS.map((spk, i) => (
            <div
              key={spk.id}
              ref={(el) => (cards.current[i] = el)}
              onClick={() => {
                pauseAutoplay();
                centerCard(i, true);
                resumeAutoplayAfterIdle();
              }}
              className="min-w-[250px] md:min-w-[400px] h-[400px] md:h-[500px] rounded-2xl overflow-hidden cursor-pointer transition-all"
            >
              <img src={spk.image} alt={spk.name} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* BIO (Mobile below carousel) */}
      <div className="w-full lg:w-1/3 order-2 lg:order-none lg:sticky lg:top-28">
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase text-center lg:text-left bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-white">
          SPEAKERS
        </h2>

        <div className="mt-8 text-center lg:text-left">
          <h3 className="text-2xl md:text-3xl font-bold">{SPEAKERS[active].name}</h3>
          <p className="text-red-500 font-medium mt-1">{SPEAKERS[active].title}</p>
          <p className="mt-4 text-gray-300 text-lg">{SPEAKERS[active].bio}</p>

          <div className="mt-6 flex justify-center lg:justify-start gap-3">
            {SPEAKERS[active].linkedin && (
              <a
                href={SPEAKERS[active].linkedin}
                target="_blank"
                rel="noreferrer"
                className="border px-3 py-2 rounded-full hover:bg-red-600 transition"
              >
                <FaLinkedin />
              </a>
            )}
            {SPEAKERS[active].instagram && (
              <a
                href={SPEAKERS[active].instagram}
                target="_blank"
                rel="noreferrer"
                className="border px-3 py-2 rounded-full hover:bg-red-600 transition"
              >
                <FaInstagram />
              </a>
            )}
          </div>
        </div>
      </div>

    </div>
  </section>
);
}