import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const sections = [
    {
      id: 1,
      titleImage: "/images/Tedxlnm.png",
      size: "h-[70px] md:h-[70px] lg:h-[70px]", // Size for TEDxLNMIIT
      text: `TEDxLNMIIT is a student-organised event that brings together community leaders, innovators, and changemakers to express their ideas. It is a forum for individuals to share their stories, thoughts, and hobbies in an instructive and inspirational way. By Forging The Future, we open up endless possibilities for innovation and game-changing ideas. This is not just necessary but also an exciting endeavour which requires bravery, ingenuity, and patience. It also provides enormous benefits and satisfaction. Our goal is to bring together the best minds to present ideas that will change your perspectives and lead you on a journey of self-discovery.`,
    },
    {
      id: 2,
      titleImage: "/images/ABOUT TED.png",
      size: "h-[60px] md:h-[60px] lg:h-[60px]", // Size for ABOUT TED
      text: `TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues. It is on a mission to discover and spread ideas that spark imagination, embrace possibility and catalyze impact.`,
    },
    {
      id: 3,
      titleImage: "/images/ABOUT TEDx.png",
      size: "h-[60px] md:h-[60px] lg:h-[60px]", // Size for ABOUT TEDx
      text: `In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks videos and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event.`,
    },
  ];

  return (
    <div className="w-full">
      {sections.map((sec) => (
        <section
          key={sec.id}
          className="relative w-full h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 " />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 text-center px-6"
          >
            {/* ---------- HEADING IMAGE WITH CUSTOM SIZE ---------- */}
            <img
              src={sec.titleImage}
              alt="Section Title"
              className={`mx-auto object-contain mb-6 ${sec.size}`}
            />

            {/* ---------- TEXT ---------- */}
            <p className="text-lg md:text-2xl text-gray-200 drop-shadow-md max-w-3xl mx-auto leading-relaxed">
              {sec.text}
            </p>
          </motion.div>
        </section>
      ))}
    </div>
  );
};

export default About;
