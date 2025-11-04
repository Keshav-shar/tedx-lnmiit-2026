import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Sponsors() {
  const scrollRef = useRef(null);

  // Auto-scroll loop for previous partners
  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    let ctx = gsap.context(() => {
      const totalWidth = scroll.scrollWidth / 2; // Half since we’ll duplicate
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
    { name: "VRJ Productions", logo: "https://www.tedxlnmiit.in/assets/vrj-DWhpatzn.png" },
    { name: "The Waffle Charm", logo: "https://www.tedxlnmiit.in/assets/waffle-Dx47cejU.png" },
    { name: "The Fern Residency", logo: "https://www.tedxlnmiit.in/assets/fern-DKRF2PPM.jpg" },
    { name: "Canara Bank", logo: "https://www.tedxlnmiit.in/assets/cb-C0LbaTS2.png" },
  ];

  const previousPartners = [
    { name: "Petite Patisserie", logo: "https://www.tedxlnmiit.in/assets/BP-DFiBk8y2.png" },
    { name: "Kalam IAS Academy", logo: "https://www.tedxlnmiit.in/assets/EP-EnyPpFcG.png" },
    { name: "Sarovar Hotels", logo: "https://www.tedxlnmiit.in/assets/HP-CVKn_lHs.png" },
    { name: "Regal Offset", logo: "https://www.tedxlnmiit.in/assets/PP-B-Kdf_as.png" },
    { name: "Union Bank", logo: "https://www.tedxlnmiit.in/assets/UB-CvFSxgC7.png" },
    { name: "The Waffle Charm", logo: "https://www.tedxlnmiit.in/assets/waffle-Dx47cejU.png" },
    { name: "VRJ Productions", logo: "https://www.tedxlnmiit.in/assets/vrj-DWhpatzn.png" },
    { name: "The Fern Residency", logo: "https://www.tedxlnmiit.in/assets/fern-DKRF2PPM.jpg" },
    { name: "Canara Bank", logo: "https://www.tedxlnmiit.in/assets/cb-C0LbaTS2.png" },
  ];

  // Duplicate list for infinite effect
  const loopedPartners = [...previousPartners, ...previousPartners];

  return (
    <section className="bg-black text-white py-20 flex flex-col items-center gap-20 overflow-hidden">
      {/* CURRENT PARTNERS */}
      <div className="text-center">
        <h1 className="text-5xl font-light mb-10">
          <span className="text-gray-300">Current </span>
          <span className="text-red-500 font-semibold">Partners</span>
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
        <h1 className="text-5xl font-light mb-10 text-center">
          <span className="text-gray-300">Previous </span>
          <span className="text-red-500 font-semibold">Partners</span>
        </h1>

        <div className="relative w-full overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-12 w-max whitespace-nowrap"
          >
            {loopedPartners.map((partner, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-xl w-48 h-48 flex flex-col justify-center items-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="object-contain w-32 h-20 mb-2"
                />
                <p className="text-black text-center text-sm font-medium">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER SECTION */}
      <div className="text-center mt-16 max-w-3xl">
        <h2 className="text-4xl font-semibold mb-4">
          Interested in partnership?
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Collaborating with TEDxLNMIIT provides a unique opportunity to enhance
          your organization's global network within the TED community.
          Leverage innovative ideas and technology to empower education and
          foster innovation.
        </p>
        <a href="#" className="text-blue-400 underline hover:text-blue-300">
          Know more
        </a>
      </div>
    </section>
  );
}