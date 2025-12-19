import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {

  useGSAP(() => {

    const tl = gsap.timeline({
     scrollTrigger :{
      trigger: ".landing" ,
      markers: true,
      start: "0% 0%",
      end: "50% 0%",
      scrub: true,
      pin:true,
      anticipatePin:1
      
    }
  }
  );

  tl.from(".img", {
   opacity: 0,
   duration: 3,
   ease: "power3.out",
 });


 tl.fromTo(
  ".forging",
  { x: -500, opacity: 0 },
  { x: -250, opacity: 1, duration: 3 , ease: "power3.out" }
),"1";

tl.fromTo(
  ".future",
  { x: 800, opacity: 0 },
  { x: -280, opacity: 1, duration: 3 , ease: "power3.out" }
),"1";

tl.fromTo(
  ".the",
  { x: 0, opacity: 0 },
  { x: -300, opacity: 1, duration: 3 , ease: "power3.out" }
),"1";


     tl.to(".img", {
      x: 100,
      duration: 3,
      scale: 1.,
      ease: "power3.out",
    });

    tl.from(".forging", {
      x: -400,
      opacity: 0,
      duration: 3,
      ease: "power3.out",
    } , "1");

  });

  return (
    <section
      id="hero"
      className=" landing relative h-[200vh] overflow-hidden bg-black px-4"
    >
      {/* DESKTOP TEXT */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none z-20">
        <p
          className="forging absolute left-1/2 -translate-x-1/2
                     text-[10vw] font-extrabold text-[#EB0028]"
          style={{ top: "18vh" }}
        >
          FORGING
        </p>

        <p
          className="the absolute left-1/2 -translate-x-1/2
                     text-[2.5vw] font-bold text-white "
          style={{ top: "46vh" }}
        >
          THE
        </p>

        <p
          className="future absolute left-1/2 -translate-x-1/2
                     text-[10vw] font-extrabold text-white"
          style={{ top: "58vh" }}
        >
          FUTURE
        </p>
      </div>

      {/* HERO IMAGE */}
       <img src="/images/MainRed3d.png" alt="TEDx LNMIIT Hero" loading="lazy" className="img absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain max-h-[65vh] z-10" />
    </section>
  );
}
