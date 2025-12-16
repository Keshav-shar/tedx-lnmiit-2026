import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const teamData = [
  {
    domain: "../graphics/FACULTY MENTOR.png",   
    members: [
      {
        name: "Dr. Narendra Kumar",
        role: ["Faculty Mentor", "Licensee"],   
        image: "/team/narendra.png",
        linkedin: "#",
      },
    ],
  },

  {
    domain: "../graphics/ORGANIZERS.png",
    members: [
      { name: "Abdul Hadi", role: "Organizer", image: "/team/abdul.png", linkedin: "#" },
      { name: "Anshika Agarwal", role: "Organizer", image: "/team/anshika.png", linkedin: "#" },
      { name: "Vihaan Malik", role: "Organizer", image: "/team/vihaan.png", linkedin: "#" },
      { name: "Parv Khandelwal", role: "Organizer", image: "/team/parv.png", linkedin: "#" },
    ],
  },

  {
    domain: "../graphics/DEVELOPMENT & CONTENT HEAD.png",
    members: [
      {
        name: "Keshav Sharma",
        role: "Development Head",
        image: "/team/keshav.png",
        linkedin: "#",
      },
      {
        name: "Aryan Jadhav",
        role: "Content Writing Head",
        image: "/team/aditya.jpg",
        linkedin: "#",
      },
    ],
  },

  {
    domain: "../graphics/CREATIVE HEAD.png",
    members: [
      { name: "Neha Raniwala", role: "Graphic Designing Head", image: "/team/neha.png", linkedin: "#" },
      { name: "Utkrasht Gupta", role: "Graphic Designing Head", image: "/team/utkrasht.png", linkedin: "#" },
      { name: "Yash Jain", role: "Video Editing Head", image: "/team/yash.png", linkedin: "#" },
    ],
  },

  {
    domain: "../graphics/WEB DEVELOPMENT.png",
    members: [
      {
        name: "Arnim Agarwal",
        role: "Web Developer",
        image: "/team/arnim3.png",
        linkedin: "https://www.linkedin.com/in/arnimaga",
      },
      { name: "Priyanshi Jain", role: "Web Developer", image: "/team/priyanshi.png", linkedin: "#" },
    ],
  },

  {
    domain: "../graphics/CONTENT WRITING.png",
    members: [
      { name: "krishangee Tayal", role: "Content Writer", image: "/team/krishangee.png", linkedin: "#" },
      { name: "Poorvi Jagga", role: "Content Writer", image: "/team/poorvi.png", linkedin: "#" },
      { name: "Praneel Dev", role: "Content Writer", image: "/team/praneel.png", linkedin: "#" },
      { name: "Madhura Vyas", role: "Content Writer", image: "/team/madhura.png", linkedin: "#" },
      { name: "Garvit Garg", role: "Content Writer", image: "/team/garvit.png", linkedin: "#" },
    ],
  },

  {
    domain: "../graphics/SPEAKER OUTREACH.png",
    members: [
      { name: "Aditya Jain", role: "Speaker Outreach", image: "/team/adi.png", linkedin: "#" },
      { name: "Diksha Sakhi", role: "Speaker Outreach", image: "/team/diksha.png", linkedin: "#" },
      { name: "Raghav Khandelwal", role: "Speaker Outreach", image: "/team/raghav.png", linkedin: "#" },
    ],
  },

  {
    domain: "../graphics/GRAPHIC DESIGNING.png",
    members: [
      { name: "Aditya Narula", role: "Graphic Designer", image: "/team/narula.png", linkedin: "#" },
      { name: "Vedha Sinkar", role: "Graphic Designer", image: "/team/vedha.png", linkedin: "#" },
      { name: "Tanmay Sharma", role: "Graphic Designer", image: "/team/tanmay.png", linkedin: "#" },
      { name: "Shubhangi", role: "Graphic Designer", image: "/team/parv.png", linkedin: "#" },
      { name: "Somil", role: "Graphic Designer", image: "/team/parv.png", linkedin: "#" },
      { name: "Aanya Agarwal", role: "Graphic Designer", image: "/team/aanya.png", linkedin: "#" },
    ],
  },

  {
    domain: "../graphics/EVENT MANAGEMENT.png",
    members: [
      { name: "Kavya Jethani", role: "Event Management", image: "/team/kavya.png", linkedin: "#" },
      { name: "Krittika Agarwal", role: "Event Management", image: "/team/krittika.png", linkedin: "#" },
      { name: "Pranav Vashisth", role: "Event Management", image: "/team/pranav.png", linkedin: "#" },
      { name: "Devansh Kataria", role: "Event Management", image: "/team/devansh.png", linkedin: "#" },
      { name: "Dev Rastogi", role: "Event Management", image: "/team/dev.png", linkedin: "#" },
      { name: "Anshul Bansal", role: "Event Management", image: "/team/anshul.png", linkedin: "#" },
    ],
  },

  {
    domain: "../graphics/SPONSORSHIP.png",
    members: [
      { name: "Adwaiy Mahajan", role: "Sponsorship", image: "/team/adwaiy.png", linkedin: "#" },
      { name: "Krishna Khairnar", role: "Sponsorship", image: "/team/krishna.png", linkedin: "#" },
      { name: "Manan Vaish", role: "Sponsorship", image: "/team/manan.png", linkedin: "#" },
      { name: "Samar Goyal", role: "Sponsorship", image: "/team/samar.png", linkedin: "#" },
    ],
  },

  {
    domain: "../graphics/SOCIAL MEDIA.png",
    members: [
      { name: "Aayana Jain", role: "Social Media", image: "/team/aayana.png", linkedin: "#" },
      { name: "Kaustubh Gera", role: "Social Media", image: "/team/kaustubh.png", linkedin: "#" },
    ],
  },


  {
    domain: "../graphics/VIDEOEDITING.png",
    members: [
      { name: "K Arya Shekhar Das", role: "Video Editor", image: "/team/karya.png", linkedin: "#" },
      { name: "Rutwik Naik", role: "Video Editor", image: "/team/rutwik.png", linkedin: "#" },
      { name: "Roodraksh Agarwal", role: "Video Editor", image: "/team/roodraksh.png", linkedin: "#" },
      { name: "Somik Jain", role: "Video Editor", image: "/team/somik.png", linkedin: "#" },
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
      className="min-h-screen bg-black/30 text-white flex flex-col items-center py-20 px-4"
    >
      <img className="h-15 w-auto -mt-8 mb-10" src="../graphics/MEET OUR TEAM.png" alt="meet our team" />

      <div className="flex flex-col gap-16 w-full max-w-6xl">
        {teamData.map((domain, index) => (
          <div key={index} className="team-row w-full">

            <img
              src={domain.domain}
              alt=""
              className="h-8 w-auto mt-8 mx-auto mb-10 object-contain"
            />

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {domain.members.map((member, i) => (
                <div
                  key={i}
                  className="team-card group relative flex flex-col items-center 
                    bg-neutral-900 rounded-2xl shadow-lg p-5 
                    w-[80%] xs:w-[70%] sm:w-[45%] md:w-[22%]
                    transition-transform duration-250 hover:scale-95 hover:shadow-[#eb0028]/50"
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

                  {/* ROLE FIX: Supports array OR string */}
                  <p className="text-xs sm:text-sm text-gray-400 text-center leading-tight">
                    {Array.isArray(member.role)
                      ? member.role.map((line, idx) => (
                          <span key={idx}>
                            {line}
                            <br />
                          </span>
                        ))
                      : member.role}
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
