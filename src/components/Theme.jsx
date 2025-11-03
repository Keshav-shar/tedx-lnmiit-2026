import { motion } from "framer-motion";

export default function Theme() {
  return (
    <div className="w-full bg-black text-white overflow-hidden">
      {/* 🌅 Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text 
                     bg-gradient-to-r from-red-600 via-orange-500 to-red-700
                     animate-gradient bg-[length:200%_200%]"
        >
          FORGING THE FUTURE
        </motion.h1>

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

      {/* 🎬 Video / Graphic Section */}
      <section className="w-full py-20 flex justify-center px-4">
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 150 }}
          className="max-w-4xl w-full bg-gradient-to-r from-gray-800 to-gray-900 
                     rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,0,0,0.3)]"
        >
          <div className="w-full h-64 md:h-96 flex items-center justify-center text-gray-400">
            🎥 Video / Graphic Placeholder
          </div>
        </motion.div>
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
  );
}
