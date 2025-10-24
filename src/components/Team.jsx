import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const teamData = [
  {
    domain: "Faculty Mentor",
    members: [
      {
        name: "Dr. Narendra Kumar",
        role: "Faculty Mentor",
        image: "/team/narendra.png",
        linkedin: "#",
      },
    ],
  },
  {
    domain: "Organizers",
    members: [
      { name: "Abdul Hadi", role: "Organizer", image: "/team/abdul.png", linkedin: "#" },
      { name: "Anshika Agarwal", role: "Organizer", image: "/team/anshika.png" , linkedin: "#"},
      { name: "Vihaan Malik", role: "Organizer", image: "/team/vihaan.png" , linkedin: "#"},
      { name: "Parv Khandelwal", role: "Organizer", image: "/team/parv.png", linkedin: "#" },
    ],
  },
  {
    domain: "Development & Content Head",
    members: [
      {
        name: "Keshav Sharma",
        role: "Development Head",
        image: "/team/keshav.jpg",
         linkedin: "#",
      },
      {
        name: "Aditya Singh",
        role: "Content Writing Head",
        image: "/team/aditya.jpg",
         linkedin: "#",
      },
    ],
  },
  {
    domain: "Creative Head",
    members: [
      { name: "Abdul Hadi", role: "Organizer", image: "/team/abdul.png", linkedin: "#", },
      { name: "Anshika Agarwal", role: "Organizer", image: "/team/anshika.png" , linkedin: "#",},
    ],
  },
  {
    domain: "Web Development",
    members: [
      { name: "Arnim Agarwal", role: "Web Developer", image: "/team/abdul.png", linkedin: "https://www.linkedin.com/in/arnimaga", },
      { name: "Priyanshi Jain", role: "Web Developer", image: "/team/anshika.png" , linkedin: "#",},
    ],
  },
  {
    domain: "Content Writing",
    members: [
      { name: "Abdul Hadi", role: "Organizer", image: "/team/abdul.png" , linkedin: "#",},
      { name: "Anshika Agarwal", role: "Organizer", image: "/team/anshika.png", linkedin: "#", },
      { name: "Vihaan Malik", role: "Organizer", image: "/team/vihaan.png" , linkedin: "#",},
      { name: "Parv Khandelwal", role: "Organizer", image: "/team/parv.png" , linkedin: "#",},
    ],
  },
  {
    domain: "Speaker Outreach",
    members: [
      { name: "Abdul Hadi", role: "Organizer", image: "/team/abdul.png", linkedin: "#", },
      { name: "Anshika Agarwal", role: "Organizer", image: "/team/anshika.png" , linkedin: "#",},
      { name: "Vihaan Malik", role: "Organizer", image: "/team/vihaan.png", linkedin: "#", },
      { name: "Parv Khandelwal", role: "Organizer", image: "/team/parv.png", linkedin: "#", },
    ],
  },
  {
    domain: "Graphic Designing",
    members: [
      { name: "Aditya Narula", role: "Organizer", image: "/team/abdul.png" , linkedin: "#",},
      { name: "Vedha Sinkar", role: "Organizer", image: "/team/anshika.png" , linkedin: "#",},
      { name: "Vihaan Malik", role: "Organizer", image: "/team/vihaan.png" , linkedin: "#",},
      { name: "Parv Khandelwal", role: "Organizer", image: "/team/parv.png" , linkedin: "#",},
    ],
  },
  {
    domain: "Event Management",
    members: [
      { name: "Abdul Hadi", role: "Organizer", image: "/team/abdul.png" , linkedin: "#",},
      { name: "Anshika Agarwal", role: "Organizer", image: "/team/anshika.png" , linkedin: "#",},
      { name: "Vihaan Malik", role: "Organizer", image: "/team/vihaan.png" , linkedin: "#",},
      { name: "Parv Khandelwal", role: "Organizer", image: "/team/parv.png" , linkedin: "#",},
    ],
  },
  {
    domain: "Sponsorship",
    members: [
      { name: "Naman Agarwal", role: "Organizer", image: "/team/abdul.png" , linkedin: "#",},
      { name: "Anshika Agarwal", role: "Organizer", image: "/team/anshika.png" , linkedin: "#",},
      { name: "Vihaan Malik", role: "Organizer", image: "/team/vihaan.png" , linkedin: "#",},
      { name: "Parv Khandelwal", role: "Organizer", image: "/team/parv.png" , linkedin: "#",},
    ],
  },
  {
    domain: "Social Media",
    members: [
      { name: "Abdul Hadi", role: "Organizer", image: "/team/abdul.png" , linkedin: "#",},
    ],
  },
  {
    domain: "Video Editing",
    members: [
      { name: "K Arya Sekhar Das", role: "Organizer", image: "/team/karya.png", linkedin: "#", },
      { name: "Rutwik Naik", role: "Organizer", image: "/team/anshika.png", linkedin: "#", },
      { name: "Roodraksh Agarwal", role: "Organizer", image: "/team/vihaan.png", linkedin: "#", },
      { name: "Somik Jain", role: "Organizer", image: "/team/parv.png" , linkedin: "#",},
    ],
  },
];



export default function Team() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".team-card");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.9, filter: "blur(8px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black text-white flex flex-col items-center py-20 px-4"
    >
      {/* Heading with gradient */}
      <h2
        className="text-5xl md:text-7xl font-semibold mb-20 text-center
      bg-gradient-to-r from-red-700 via-red-500 to-red-300 
      bg-clip-text text-transparent tracking-wide drop-shadow-md"
      >
        Meet Our Team
      </h2>

      <div className="flex flex-col gap-16 w-full max-w-6xl">
        {teamData.map((domain, index) => (
          <div key={index} className="team-row w-full">
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-gray-300 uppercase tracking-wider">
              {domain.domain}
            </h3>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {domain.members.map((member, i) => (
                <div
                  key={i}
                  className="team-card group relative flex flex-col items-center 
                  bg-neutral-900 rounded-2xl shadow-lg p-5 
                  w-[80%] xs:w-[70%] sm:w-[45%] md:w-[22%]
                  transition-transform duration-300 hover:scale-105 hover:shadow-red-500/40"
                >
                  <div className="relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-28 h-28 md:w-36 md:h-36 object-cover 
                      rounded-full border-2 border-red-600"
                    />
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 
                      bg-black/60 rounded-full flex items-center justify-center
                      transition-opacity duration-300"
                    >
                      <FaLinkedin className="text-white text-3xl" />
                    </a>
                  </div>

                  <h4 className="text-base sm:text-lg font-semibold text-white text-center whitespace-nowrap">
                    {member.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 text-center">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}