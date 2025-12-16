import { motion } from "framer-motion";

export default function Theme() {
  return (
    <div className="w-full min-h-screen text-white px-6">

      {/* 🔹 MAIN HEADING */}
      <section className="w-full flex justify-center pt-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-wide"
        >
          <span className="text-red-500">FORGING</span> THE FUTURE
        </motion.h1>
      </section>

      {/* 🔹 INTRO */}
      <section className="w-full flex justify-center mt-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl text-gray-300 text-lg md:text-xl leading-relaxed"
        >
          Where innovation meets inspiration — a celebration of ideas that
          define tomorrow.
        </motion.p>
      </section>

      {/* 🔹 THEME DESCRIPTION */}
      <section className="w-full flex justify-center mt-14 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="max-w-3xl text-gray-200 text-lg md:text-xl leading-relaxed"
        >
          <span className="font-semibold text-red-500">Forging the Future</span>{" "}
          is about challenging conventions, amplifying unheard voices, and
          shaping solutions that matter. It reflects the courage to rethink,
          reimagine, and rebuild the world around us with intention and impact.
        </motion.p>
      </section>

      {/* 🔹 THEME FLOW / JOURNEY */}
      <section className="w-full flex justify-center mt-24">
        <div className="max-w-3xl w-full space-y-10 text-center">

          {[
            "It begins with a question — what kind of future do we want?",
            "It grows through ideas that disrupt, inspire, and challenge norms.",
            "It strengthens when voices from different paths come together.",
            "And it is forged when vision turns into meaningful action.",
          ].map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed"
            >
              {text}
            </motion.p>
          ))}

        </div>
      </section>

      {/* 🔹 WHY THIS THEME */}
      <section className="w-full flex justify-center mt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why This Theme?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Because the future isn’t something we wait for — it’s something we
            actively shape. This theme invites thinkers, creators, and leaders
            to share ideas that spark progress and inspire action beyond the
            stage.
          </p>
        </motion.div>
      </section>

      {/* 🔹 CLOSING STATEMENT */}
      <section className="w-full flex justify-center mt-24 pb-32 text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold"
        >
          The future is not predicted.
          <br />
          <span className="text-red-500">It is forged.</span>
        </motion.h3>
      </section>

    </div>
  );
}
