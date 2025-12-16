import { motion } from "framer-motion";

export default function Theme() {
  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden">

  


      {/* 🔹 FOREGROUND CONTENT (z-10) */}
      <div className="relative z-10 w-full text-white overflow-hidden">

        {/* 🌅 Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
          <motion.img
            src="../images/THEME PAGE.png"
            alt="Forging the Future"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-[50%] md:w-[40%] mx-auto object-contain"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Where innovation meets inspiration — a celebration of ideas that will
            define tomorrow.
          </motion.p>
        </section>

        {/* 🧠 Description Section */}
        <section className="w-full py-16 px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-gray-200 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            Our theme,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 font-bold">
              FORGING THE FUTURE
            </span>
            , embodies the spirit of innovation, creativity, and resilience.
            <br className="hidden md:block" />
            It's about shaping a world where bold ideas, fresh perspectives, and
            human potential converge to build a better tomorrow.
          </motion.p>
        </section>

      </div>
    </div>
  );
}
