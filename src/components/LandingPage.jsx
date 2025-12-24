import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function LandingPage() {
  
  useGSAP(() => {

    ScrollTrigger.matchMedia({

      /* ===============================
         DESKTOP 
      =============================== */
      "(min-width: 640px)": () => {

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".landing",
            start: "0% 0%",
            end: "120% 30%",
            scrub: true,
            pin: true,
            scroller: document.body,
            pinReparent: true,
            anticipatePin: 1,
          },
        });

        tl.fromTo(".forging",
          { x: -400, opacity: 0 },
          { x: -250, opacity: 1, duration: 6, ease: "power3.out" },
          "1"
        );

        tl.fromTo(".the",
          { x: 200, opacity: 0 },
          { x: -250, opacity: 1, duration: 6, ease: "power3.out" },
          "1"
        );

        tl.fromTo(".future",
          { x: 400, opacity: 0 },
          { x: -250, opacity: 1, duration: 6, ease: "power3.out" },
          "1"
        );

        tl.to(".img",
          { x: 300, duration: 6, scale: 0.8, ease: "power3.out" },
          "1"
        );
      },

      /* ===============================
         MOBILE 
      =============================== */
      "(max-width: 639px)": () => {

        // Initial states
        gsap.set(".img", {
          left: "50%",
          top: "50%",
          xPercent: -50,
          yPercent: -50,
        });

        gsap.set(".forging", { x: "-120vw" });
        gsap.set(".future", { x: "120vw" });
        gsap.set(".the", { x: "120vw", opacity: 1 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".landing",
            start: "top top",
            end: "+=500",
            scrub: true,
            pin: true,
            pinReparent: true,
            anticipatePin: 1,
          },
        });

        // FORGING → left → center
        tl.to(".forging", {
          x: 0,
          duration: 4,
          ease: "power3.out",
        }, 0);

        // THE → right → center (above FUTURE)
        tl.to(".the", {
          x: 0,
          duration: 4,
          ease: "power3.out",
        }, 0);

        // FUTURE → right → center
        tl.to(".future", {
          x: 0,
          duration: 4,
          ease: "power3.out",
        }, 0);
      },
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section className="landing h-screen bg-radial from-black from-1% to-transparent relative overflow-hidden">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-center px-12">

        {/* TEXT */}
        <div className="relative font-bebas flex flex-col items-center gap-6 pointer-events-none z-20">

          {/* FORGING */}
          <p className="forging tracking-wide font-bebas text-[#eb0028] text-[22vw] sm:text-[16vw] font-extrabold leading-none">
            FORGING
          </p>

          {/* THE + FUTURE (VERTICAL STACK) */}
          <div className="flex flex-col items-center leading-none">
            <p className="the font-bebas text-white text-[12vw] sm:text-[8vw] font-extrabold tracking-wide mb-6">
              THE
            </p>

            <p className="future font-bebas tracking-wide text-white text-[22vw] sm:text-[16vw] font-extrabold">
              FUTURE
            </p>
          </div>

        </div>

        {/* IMAGE */}
        <img
          src="/images/MainRed3d.png"
          alt="TEDx LNMIIT Hero"
          loading="lazy"
          className="img max-h-[90vh] object-contain absolute z-10"
        />
      </div>
    </section>
  );
}
