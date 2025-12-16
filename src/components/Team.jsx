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
      { name: "Abdul Hadi", role: "Organizer", image: "/team/abdul.png", linkedin: "https://www.linkedin.com/in/abdul-hadi-siddiqui-145850295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Anshika Agarwal", role: "Organizer", image: "/team/anshika.png", linkedin: "https://www.linkedin.com/in/anshika-agrawal3379?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Vihaan Malik", role: "Organizer", image: "/team/vihaan.png", linkedin: "https://www.linkedin.com/in/vihaan-malik?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Parv Khandelwal", role: "Organizer", image: "/team/parv.png", linkedin: "https://www.linkedin.com/in/parv-khandelwal-918562281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    ],
  },

 {
  domain: "../graphics/ORGANIZERS.png",
  members: [
    {
      name: "Keshav Sharma",
      role: "Development Head",
      image: "/team/keshav.png",
      linkedin: "https://www.linkedin.com/in/keshav-sharma-0aa02627b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: " Nirmal Patel",
      role: "Event Management Head",
      image: "/team/nirmal.png",
      linkedin: "https://www.linkedin.com/in/nirmal-patel-0a8868267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ],
},

 {
  domain: "../graphics/ORGANIZERS.png",
  members: [
    {
      name: "Priyal Maheshwari",
      role: "Development Head",
      image: "/team/priyal.png",
      linkedin: "https://www.linkedin.com/in/priyal-maheshwari-001494284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Naman Agarwal",
      role: "Sponsorship Head",
      image: "/team/naman.png",
      linkedin: "https://www.linkedin.com/in/naman-agarwal-53b26030b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ],
},


  {
    domain: "../graphics/CREATIVE HEAD.png",
    members: [
      { name: "Neha Raniwala", role: "Graphic Designing Head", image: "/team/neha.png", linkedin: "https://www.linkedin.com/in/neha-raniwala?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Utkrasht Gupta", role: "Graphic Designing Head", image: "/team/utkrasht.png", linkedin: "https://www.linkedin.com/in/utkrasht-gupta-903317205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Yash Jain", role: "Video Editing Head", image: "/team/yash.png", linkedin: "https://www.linkedin.com/in/yash-jain-agkj11?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
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
      { name: "krishangee Tayal", role: "Content Writer", image: "/team/krishangee.png", linkedin: "https://www.linkedin.com/in/krishangee-tayal-96a861242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Poorvi Jagga", role: "Content Writer", image: "/team/poorvi.png", linkedin: "https://www.linkedin.com/in/poorvi-jagga-ba6b9b341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Praneel Dev", role: "Content Writer", image: "/team/praneel.png", linkedin: "https://www.linkedin.com/in/praneel-dev-3b9754321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Madhura Vyas", role: "Content Writer", image: "/team/madhura.png", linkedin: "#" },
      { name: "Garvit Garg", role: "Content Writer", image: "/team/garvit.png", linkedin: "#" },
    ],
  },

  {
    domain: "../graphics/SPEAKER OUTREACH.png",
    members: [
      { name: "Aditya Jain", role: "Speaker Outreach", image: "/team/adi.png", linkedin: "https://www.linkedin.com/in/aditya-jain-790743322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Diksha Sakhi", role: "Speaker Outreach", image: "/team/diksha.png", linkedin: "https://www.linkedin.com/in/diksha-sakhi-a60b62334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Raghav Khandelwal", role: "Speaker Outreach", image: "/team/raghav.png", linkedin: "https://www.linkedin.com/in/raghav-khandelwal-b8b7012a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    ],
  },

  {
    domain: "../graphics/GRAPHIC DESIGNING.png",
    members: [
      { name: "Aditya Narula", role: "Graphic Designer", image: "/team/narula.png", linkedin: "https://www.linkedin.com/in/aditya-narula-b36057301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Vedha Sinkar", role: "Graphic Designer", image: "/team/vedha.png", linkedin: "https://www.linkedin.com/in/vedha-sinkar-308b4131a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Tanmay Sharma", role: "Graphic Designer", image: "/team/tanmay.png", linkedin: "https://www.linkedin.com/in/tanmay-sharma-2a84212b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Shubhangi", role: "Graphic Designer", image: "/team/parv.png", linkedin: "#" },
      { name: "Somil Ajmera", role: "Graphic Designer", image: "/team/somil.png", linkedin: "https://www.linkedin.com/in/somil-ajmera-077a04356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Aanya Agarwal", role: "Graphic Designer", image: "/team/aanya.png", linkedin: "https://www.linkedin.com/in/aanya-agarwal-86a841380?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    ],
  },

  {
    domain: "../graphics/EVENT MANAGEMENT.png",
    members: [
      { name: "Kavya Jethani", role: "Event Management", image: "/team/kavya.png", linkedin: "https://www.linkedin.com/in/kavya-jethani-380629292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Krittika Agarwal", role: "Event Management", image: "/team/krittika.png", linkedin: "https://www.linkedin.com/in/kavya-jethani-380629292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Pranav Vashisth", role: "Event Management", image: "/team/pranav.png", linkedin: "https://www.linkedin.com/in/pranav-vashisth?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Devansh Kataria", role: "Event Management", image: "/team/devansh.png", linkedin: "https://www.linkedin.com/in/devansh-katariya-a639b4289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Dev Rastogi", role: "Event Management", image: "/team/dev.png", linkedin: "#" },
      { name: "Anshul Bansal", role: "Event Management", image: "/team/anshul.png", linkedin: "https://www.linkedin.com/in/anshulbansalxd?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    ],
  },

  {
    domain: "../graphics/SPONSORSHIP.png",
    members: [
      { name: "Adwaiy Mahajan", role: "Sponsorship", image: "/team/adwaiy.png", linkedin: "https://www.linkedin.com/in/adwaiy-mahajan-107503212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Krishna Khairnar", role: "Sponsorship", image: "/team/krishna.png", linkedin: "https://www.linkedin.com/in/krishna-khairnar-229291318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Manan Vaish", role: "Sponsorship", image: "/team/manan.png", linkedin: "https://www.linkedin.com/in/manan-vaish-0ba187313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Samar Goyal", role: "Sponsorship", image: "/team/samar.png", linkedin: "https://www.linkedin.com/in/samar-goyal-164383314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    ],
  },

  {
    domain: "../graphics/SOCIAL MEDIA.png",
    members: [
      { name: "Aayana Jain", role: "Social Media", image: "/team/aayana.png", linkedin: "https://www.linkedin.com/in/aayana-jain-aa8902321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Kaustubh Gera", role: "Social Media", image: "/team/kaustubh.png", linkedin: "https://www.linkedin.com/in/kaustubh-gera-906094321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    ],
  },

   {
    domain: "../graphics/SOCIAL MEDIA.png",
    members: [
      { name: "Diya Mathur", role: "Hospitality", image: "/team/diya.png", linkedin: "https://www.linkedin.com/in/diya-mathur-2b0074266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    ],
  },


  {
    domain: "../graphics/VIDEOEDITING.png",
    members: [
      { name: "K Arya Shekhar Das", role: "Video Editor", image: "/team/karya.png", linkedin: "https://www.linkedin.com/in/intelligentears?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Rutwik Naik", role: "Video Editor", image: "/team/rutwik.png", linkedin: "https://www.linkedin.com/in/rutwik-naik-0526b8340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Roodraksh Agarwal", role: "Video Editor", image: "/team/roodraksh.png", linkedin: "https://www.linkedin.com/in/roodraksh-agrawal-6a91a232b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Somik Jain", role: "Video Editor", image: "/team/somik.png", linkedin: "https://www.linkedin.com/in/somik-jain-3a5933316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
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
