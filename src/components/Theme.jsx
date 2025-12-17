import { motion } from "framer-motion";

export default function Theme() {
  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden">

      {/* 🔹 FOREGROUND CONTENT */}
      <div className="relative z-10 w-full text-white">

        {/* 🌅 HERO SECTION */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center gap-8">

          {/* Heading (REPLACES IMAGE) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
              flex items-baseline gap-6
              font-light
              tracking-tight
              leading-[0.95]
              text-[10vw] md:text-[7.5vw] lg:text-[6.5vw]
            "
          >
            <span className="text-[#EB0028]">Theme</span>
            <span className="text-white">Page</span>
          </motion.h1>

          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Where innovation meets inspiration — a celebration of ideas that will
            define tomorrow.
          </motion.p>
        </section>

        {/* 🧠 DESCRIPTION SECTION */}
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
