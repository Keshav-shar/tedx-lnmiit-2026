import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Sponsors() {
  const scrollRef = useRef(null);

  // Auto-scroll loop for previous partners
  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    let ctx = gsap.context(() => {
      const totalWidth = scroll.scrollWidth / 2;
      gsap.to(scroll, {
        x: `-${totalWidth}px`,
        duration: 25,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  const currentPartners = [
    { name: "The YAKKS", logo: "/CurrentPartners/YAKKS.webp" },
    { name: "The Waffle Charm", logo: "" },
    { name: "The Fern Residency", logo: "/CurrentPartners/fern.webp" },
    { name: "Canara Bank", logo: "" },
  ];

  const previousPartners = [
    { name: "Petite Patisserie", logo: "/PrevPartners/petite.webp" },
    { name: "Kalam IAS Academy", logo: "/PrevPartners/kalam.webp" },
    { name: "Sarovar Hotels", logo: "/PrevPartners/sarovar.webp" },
    { name: "Regal Offset", logo: "/PrevPartners/regal.webp" },
    { name: "Union Bank", logo: "/PrevPartners/unionn.webp" },
    { name: "The Waffle Charm", logo: "/PrevPartners/Waffle.webp" },
    { name: "VRJ Productions", logo: "/PrevPartners/VRJ2.webp" },
    { name: "The Fern Residency", logo: "/PrevPartners/fern.webp" },
    { name: "Canara Bank", logo: "/PrevPartners/canaraa.webp" },
  ];

  const loopedPartners = [...previousPartners, ...previousPartners];

  return (
    <section className="text-white py-5 flex flex-col items-center gap-20 overflow-hidden">

      {/* CURRENT PARTNERS */}
      <div className="text-center">
        <h1
          className="
            text-center
            font-light
            tracking-tight
            leading-tight
            max-w-[92vw]
            mx-auto
            py-5
            text-[clamp(2.4rem,8vw,4.5rem)]
          "
        >
          <span className="text-white">Current</span>{" "}
          <span className="text-[#EB0028]">Partners</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-10">
          {currentPartners.map((partner, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform w-56 h-56 flex flex-col justify-center items-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="object-contain w-40 h-28 mb-2"
              />
              <p className="text-black font-medium text-center text-sm">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* PREVIOUS PARTNERS */}
      <div className="w-full overflow-hidden">
        <h1
          className="
            text-center
            font-light
            tracking-tight
            leading-tight
            max-w-[92vw]
            mx-auto
            py-5
            text-[clamp(2.4rem,8vw,4.5rem)]
          "
        >
          <span className="text-white">Previous</span>{" "}
          <span className="text-[#EB0028]">Partners</span>
        </h1>

        <div className="relative w-full overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-3 w-max whitespace-nowrap"
          >
            {loopedPartners.map((partner, i) => (
              <div
                key={i}
                className="bg-[#ffffff] rounded-2xl shadow-xl w-48 h-20 flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="object-contain w-32 h-18"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER SECTION */}
      <div className="text-center mt-16 max-w-3xl">
        <h1
          className="
            text-center
            font-light
            tracking-tight
            leading-tight
            max-w-[92vw]
            mx-auto
            py-5
            text-[clamp(2rem,6vw,3.2rem)]
          "
        >
          <span className="text-white">Interested in partnership?</span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl mt-8 leading-relaxed font-medium text-gray-200">
  Collaborating with{" "}
  <span className="text-[#EB0028] font-semibold">TEDxLNMIIT</span>{" "}
  provides a unique opportunity to enhance your organization's global network
  within the{" "}
  <span className="text-white font-semibold">TED community</span>.
  Leverage{" "}
  <span className="text-red-500 font-semibold">innovative ideas</span>{" "}
  and technology to empower education and foster innovation.
</p>

        <a
 href="/Brochure/Partnership_Brochure_TEDxLNMIIT2026.pdf"   // replace later with your actual PDF link
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex items-center justify-center
    px-6 py-3
    bg-[#EB0028] text-white font-medium
    rounded-full
    transition-all duration-300 ease-out
    hover:bg-[#ff0932]
    hover:-translate-y-0.5
    active:translate-y-0
  "
>
  Know more
</a>

      </div>
    </section>
  );
}
