import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Theme() {
  return (
    <>
      <MobileTheme />
      <DesktopTheme />
    </>
  );
}

/* ===================== MOBILE — GSAP PARALLAX ===================== */
function MobileTheme() {
  return (
    <section className="relative md:hidden bg-black/10 px-6 pt-24">
<div className="sticky top-5 z-10 flex flex-col items-center">
    
    {/* Heading + image ka div */}
    <h2 className="text-4xl text-[#FFFFF] font-semibold tracking-wide mb-8 text-center">
      Our <span className="text-[#eb0028] ">Theme </span>
    </h2>

   
    <img
      src="../images/MainElement2.png"
      alt="Hero element"
      className="w-full max-w-[90%] object-contain"
    />

  </div>

     {/* Text ka div*/}
      <div className="relative z-20 mt-[60vh] max-w-md mx-auto text-center bg-black/50 text-white">
        
    
        <h2 className="text-2xl text-[#ffffff] font-semibold tracking-wide mb-12 underline">
          Forging the  Future
        </h2>

       
        <p className="text-base leading-relaxed opacity-85">
          Forging the future is not about prediction, but about intention.
          Change is inherent to who we are, shaping our ability to evolve,
          adapt, and create.
        </p>

        <p className="mt-6 text-base leading-relaxed opacity-85">
          The future does not simply wait to be discovered. It takes shape
          through questions that challenge the familiar and ideas that dare
          to move beyond certainty.
        </p>

        <p className="mt-6 font-medium">
          We are not passive observers of what lies ahead.
          <br />
          We are its architects.
        </p>
      </div>

  
      <div className="h-[80vh]" />

    </section>
  );
}


/* ===================== DESKTOP (SPLIT SCROLL) ===================== */

function DesktopTheme() {
  return (
    <section className="hidden md:block bg-transparent px-24 py-10">

    
      <h2
        className="
          flex justify-center
         
          tracking-tight
          leading-tight
          max-w-[92vw]
          mx-auto
          mb-2
          -mt-7
          text-[clamp(2rem,6vw,4.5rem)]
           
        "
      >
        <span className=" font-medium ">Our </span>  <span className="text-[#eb0028] mx-4 font-medium">Theme</span>
      </h2>

      <div className="flex gap-16">

        {/* LEFT  text */}
        <div className="w-9/12">
         <div className="bg-black/80 p-10 text-white text-lg leading-relaxed space-y-8
                shadow-lg shadow-[#eb0028]/20">

            
            <h3 className="flex justify-center font-semibold tracking-wide">
              <span className="text-[#eb0028] text-4xl">
                Forging the Future
              </span>
            </h3>

            <p>
              Forging the future is not about prediction, but about intention.
              Change is not something external that arrives with time; it is
              inherent to who we are. The ability to evolve, to adapt, and to
              create is woven into our very design, making progress not an
              anomaly, but a natural consequence of human curiosity and effort.
            </p>

            <p>
              The future does not simply wait to be discovered. It takes shape
              through questions that challenge the familiar and ideas that dare
              to move beyond certainty. Progress begins when we choose to shape
              what comes next rather than merely adjust to what already exists.
            </p>

            <p>
              To forge the future is to move from adaptation to creation. It is
              the decision to act with purpose, to build with clarity, and to
              accept that meaningful progress demands courage and persistence.
              Challenges become crucibles, refining ideas into impact and vision
              into reality.
            </p>

            <p className="font-medium pt-4">
              We are not passive observers of what lies ahead.
              <br />
              We are its architects.
            </p>

          </div>
        </div>

        {/* RIGHT —image */}
        <div className="w-6/12 -mt-15">
          <div className="sticky top-24 h-[80vh] flex justify-end">
            <img
              src="../images/MainElement2.png"
              alt="Theme visual"
              className="h-full object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
