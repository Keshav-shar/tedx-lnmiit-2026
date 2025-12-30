import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaYoutube, FaInstagram,FaLinkedin } from "react-icons/fa";
import PixelCard from "./PixelCard";

gsap.registerPlugin(ScrollTrigger);

export default function PastSpeakers() {
  const cardsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  const speakers = [
    { id: 1, name: "Dr. Tanu Jain", image: "/images/image0.webp", description: "Former IAS officer and DRDO Assistant Director, Dr. Jain advocates for education and UPSC reforms. Her multifaceted career exemplifies her dedication to creating impact beyond conventional roles.", youtube: "https://drive.google.com/file/d/1b2JeXhUiIs2a75v09skoxKswxAoPksSP/view", instagram: "https://www.instagram.com/dr.tanujain?igsh=MXg5dWVkejNpOW1oMg==" },
    { id: 2, name: "Gunjan Saini", image: "/images/image01.webp", description: "Poet, writer, and founder of @officialletstalk, she fosters emotional well-being through shared stories. Gunjan's creative force helps bridge emotional gaps, making a significant impact in mental health.", youtube: "https://www.youtube.com/watch?v=7Qsg9A-mjgk", instagram: "https://www.instagram.com/gunjan_sainii_?igsh=OWh4dGZ0NTI2Mjd3" },
    { id: 3, name: "Preksha Kaparwan", image: "/images/image1.webp", description: "The dynamic entrepreneur and storyteller revolutionizing the way we access and understand data! As the Co-Founder and CMO of Alphaa AI, she's on a mission to democratize data using AI and NLP, building a platform that empowers users to interact with data effortlessly.", youtube: "https://youtu.be/rVfCN04AEmg?si=yrDxIiQb7OPN5uhA", instagram: "https://www.instagram.com/bossymiss?igsh=YnRlcHVzMDlqeGc1" },
    { id: 4, name: "Deepak Pareek", image: "/images/deepak.webp", description: "Co-founder of Iceberg Creations and IMPACT 30 Under 30 honoree, he's a dynamic content creator. Deepak's work spans multiple platforms, driving innovative, engaging content across industries", youtube: "https://youtu.be/vkIZJ0-hkQY?si=svZpcjBqIBeKMu5s", instagram: "https://www.instagram.com/dkpareek?igsh=MWp5bG5keWl5YzllMw==" },
    { id: 5, name: "Chinmay Gaur", image: "/images/image5.webp", description: "Indian Classical flutist and composer, blending tradition and modernity. His TEDx talk focuses on the transcendental power of music, showing how it bridges cultural and emotional divides", youtube: "https://youtu.be/KyLREMG86r0?si=ltKFggjT3QB82UqO", instagram: "https://www.instagram.com/igaur_chinmay/" },
    { id: 6, name: "Dr. Ajay Data", image: "/images/image3.webp", description: "Managing Director of Data Group of Industries,visionary entrepreneur who introduced the internet to Rajasthan.As founder of Data XGen Technologies, he developed the world's first linguistic email solution, driving global digital inclusion.", youtube: "https://youtu.be/JfBAk9jj--0?si=zxpNOvTTxz3shQOU", instagram: "https://www.instagram.com/ajaydata?igsh=ZGg2bmxhMzA4ZHNu" },
   { id: 7, name: "Krishnan Sunderarajan", image: "/images/krishna.webp", description: "Founder of LOKA, India's first Metaverse app, Krishnan bridges technology and human experience. His Shark Tank success highlights his forward-thinking insights into the future of digital interaction.", youtube: "https://youtu.be/Z9zx3kWLP6c?si=EfKANslHbtSFKjNd", instagram: "https://www.instagram.com/krish_meister?igsh=dnp4dzNmeG9yZjJs" },
    { id: 8, name: "Dr. Lopa Mudraa", image: "/images/image4.webp", description: "Security Evangelist with over two decades of expertise in Information Security.Recognized as a 4x Global 100 Chief Information Security Officer awardee.", youtube: "https://youtu.be/To9sxO9W_Kw?si=v7GvKJygJM71JsQ0",linkedin:"https://www.linkedin.com/in/drlopamudraabasuu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
    { id: 9, name: "Dr. Kamna Chhibber", image: "/images/image2.webp", description: "Head of Mental Health at Fortis Healthcare, is a renowned clinical psychologist with over 15 years of experience specializing in Cognitive Behaviour Therapy, relationships, trauma, and abuse.", youtube: "https://youtu.be/n0me_a9Amnk?si=z1uwpYOGEZlwguZM", instagram: "https://www.instagram.com/fortismentalhealth?igsh=MW5qa25hdW05aWhiNw==" },
    { id: 10, name: "Aabha Hanjura", image: "/images/image6.webp", description: "She is a celebrated Indian singer-songwriter and founder of the band Sufistication. Having carved a unique niche in music by seamlessly blending Kashmiri folk, Sufi, and contemporary pop, she has earned nationwide acclaim in her journey.", youtube: "https://youtu.be/omzsDD9-Ur8?si=goIx0wTfNZePIXh3", instagram: "https://www.instagram.com/aabhahanjura?igsh=MXB1YnphcWVqaXVpNQ==" },
    { id: 11, name: "Chetna Balhara", image: "/images/chetna.webp", description: "Chetna Balhara is a renowned Indian poet and Instagram influencer known for her heartfelt poetry on love, heartbreak, and everyday struggles. Famous for lines like “Bawal hai ke chore”,her relatable work has captivated audiences. With a strong social media presence and powerful performances.", youtube: "https://youtu.be/357IYm05oQU?si=N5EyhDZmzMzKmn42", instagram: "https://www.instagram.com/chetnabalharaofficial?igsh=bTRmODJoMWx3cWJz" },
    { id: 12, name: "Shelly Jyoti", image: "/images/image7.webp", description: "Shelly Jyoti is a contemporary artist, designer, and poet whose work explores Gandhi's principles of nation-building and moral societies. She collaborates with Ajrakh artisans to revive ancient textile traditions, blending khadi and Ajrakh with modern narratives.", youtube: "https://youtu.be/Vu_gdUgJAzk?si=AME2ca9fpCdbIMwn", instagram: "https://www.instagram.com/shellyjyoti1211?igsh=NHU3N2M2dWRlMDc5" },
  ];

  /* ---------- Mobile detection ---------- */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const visibleSpeakers = isMobile ? speakers.slice(0, 5) : speakers;

  /* ---------- GSAP Scroll (DO NOT TOUCH) ---------- */
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
  }, [visibleSpeakers]);

  return (
    <main className="relative w-full bg-transparent text-white flex flex-col items-center py-[15vh]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[3vw] gap-y-[15vh] place-items-center w-full px-4 sm:px-6 md:px-10">
        {visibleSpeakers.map((speaker, index) => (
          <div
            key={speaker.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="
              speaker-card sticky top-[15vh] relative
              w-[88vw] sm:w-[60vw] md:w-[32vw] lg:w-[28vw]
              max-w-[400px] min-w-[260px]
              py-[10vh] px-4
              rounded-[25px] overflow-hidden
              bg-[radial-gradient(ellipse_at_center,_#000_0%,_#000_60%,_#120000_85%,_#1a0000_100%)]
            "
          >
            {/* PIXEL OVERLAY (z-0 → z-1 on hover) */}
            <PixelCard
              variant="pink"
              className="
                absolute inset-0 z-0
                opacity-0 hover:opacity-100
                transition-opacity duration-300
              "
            />

            {/* CONTENT (ALWAYS ABOVE) */}
            <div className="relative z-10 flex flex-col items-center gap-4 text-center px-2 sm:px-4 pointer-events-none">
              <div className="w-[220px] aspect-square rounded-[20px] overflow-hidden border-4 border-[#EB0028] shadow-lg sm:w-[180px]">
                <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
              </div>

              <h1 className="text-3xl font-extrabold text-[#EB0028] sm:text-2xl">
                {speaker.name}
              </h1>

              <p className="
  text-[14px] sm:text-base 
  font-medium 
  max-w-[95%] sm:max-w-full 
  leading-relaxed
">

                {speaker.description}
              </p>

              <div className="flex items-center justify-center gap-6 mt-4 pointer-events-auto">
                {speaker.youtube && (
                  <a href={speaker.youtube} target="_blank" rel="noopener noreferrer" className="text-red-600 text-3xl hover:scale-110 transition-transform">
                    <FaYoutube />
                  </a>
                )}
                {speaker.instagram && (
                  <a href={speaker.instagram} target="_blank" rel="noopener noreferrer" className="text-red-600 text-3xl hover:scale-110 transition-transform">
                    <FaInstagram />
                  </a>
                )}
                {speaker.linkedin && (
                  <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="text-red-600 text-3xl hover:scale-110 transition-transform">
                    <FaLinkedin />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
