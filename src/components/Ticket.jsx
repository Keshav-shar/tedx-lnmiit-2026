const Tickets = () => {
  return (
    <main className="text-white min-h-screen">

      {/* ---------- HERO ---------- */}
      <section className="text-center pt-20 pb-16 px-4 space-y-6">
        <h1 className="text-6xl sm:text-6xl md:text-7xl font-bold">
  <span className="text-[#EB0028]">TEDx</span>LNMIIT
</h1>


        <p className="text-gray-300 text-lg">
          Date: 11<sup>th</sup> January 2026 | LNMIIT, Jaipur
        </p>

        {/* CTA Ribbon */}
        <div className="mx-auto mt-10">
          <div className="py-4 text-lg font-semibold bg-gradient-to-r from-black via-[#EB0028] to-black">
            Book Your Ticket Now
          </div>
        </div>
      </section>

      {/* ---------- EXPERIENCE ---------- */}
      <section className="text-center py-5 px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light">
  Choose Your <span className="text-[#EB0028] font-medium">Experience</span>
</h2>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* LNMIIT */}
          <div className="relative border border-red-600 rounded-3xl p-8 bg-black shadow-[0_0_40px_rgba(235,0,40,0.35)]">
            <h3 className="text-2xl font-semibold mb-6">LNMIIT Students / Staff</h3>

            <ul className="text-gray-300 space-y-3 text-left mb-8">
              <li>• Access to all TEDxLNMIIT talks and workshops</li>
              <li>• Interaction sessions with speakers</li>
              <li>• Delicious meal and refreshments</li>
              <li>• Exclusive TEDxLNMIIT experience</li>
              <li>• Complimentary goodies</li>
            </ul>

            <div className="border-t border-gray-700 pt-6 text-center">
              <p className="text-3xl font-bold text-[#EB0028] mb-4">₹799</p>

              <div className="flex justify-center mb-4">
                <div className="w-40 h-40 bg-white" />
              </div>

              <p className="text-sm text-gray-400">
                OR use UPI ID:{" "}
                <span className="text-[#EB0028]">thelnmi5108900553@sbi</span>
              </p>

              <button className="mt-6 px-8 py-3 bg-[#EB0028] rounded-full font-semibold hover:scale-105 transition">
                Buy Now
              </button>
            </div>
          </div>

          {/* General */}
          <div className="relative border border-red-600 rounded-3xl p-8 bg-black shadow-[0_0_40px_rgba(235,0,40,0.35)]">
            <h3 className="text-2xl font-semibold mb-6">General Admission</h3>

            <ul className="text-gray-300 space-y-3 text-left mb-8">
              <li>• Access to all TEDxLNMIIT talks and workshops</li>
              <li>• LNMIIT campus experience and exposure</li>
              <li>• Interaction sessions with speakers</li>
              <li>• Delicious meal and refreshments</li>
              <li>• Complimentary goodies</li>
            </ul>

            <div className="border-t border-gray-700 pt-6 text-center">
              <p className="text-3xl font-bold text-[#EB0028] mb-4">₹999</p>

              <div className="flex justify-center mb-4">
                <div className="w-40 h-40 bg-white" />
              </div>

              <p className="text-sm text-gray-400">
                OR use UPI ID:{" "}
                <span className="text-[#EB0028]">thelnmi5108900553@sbi</span>
              </p>

              <button className="mt-6 px-8 py-3 bg-[#EB0028] rounded-full font-semibold hover:scale-105 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY ATTEND ---------- */}
      <section className="py-10 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-12">
          Why Attend TEDxLNMIIT?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Inspiring Talks",
            "Networking",
            "Exclusive Goodies",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#121212] rounded-xl p-8"
            >
              <h3 className="text-xl font-medium mb-2">{item}</h3>
              <p className="text-gray-400 text-sm">
                Engage with thought-provoking ideas
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- EVENT HIGHLIGHTS ---------- */}
      <section className="py-10 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-12">
          Event Highlights
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Keynote Speakers",
            "Interactive Sessions",
            "Networking Events",
            "Fun Activities",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#121212] rounded-xl py-6"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}

export default Tickets
