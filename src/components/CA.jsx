import { FaBullhorn, FaUsers, FaGift, FaLink } from "react-icons/fa";

export default function CA() {
  return (
    <main className="bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white min-h-screen flex flex-col items-center font-sans">
      {/* ---------- HEADER ---------- */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold">
          <span className="text-red-600">TEDx</span>LNMIIT{" "}
          <span className="text-red-500">2026</span>
        </h1>
        <p className="text-lg sm:text-xl mt-3 text-gray-300">
          Campus Ambassador Program
        </p>

        <div className="mt-10 bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white px-6 py-3 rounded-full shadow-[0_0_25px_#ff0000] font-semibold">
          Spread Ideas That Matter!
        </div>
      </section>

      {/* ---------- WHY SECTION ---------- */}
      <section className="w-full max-w-6xl text-center px-4 mb-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-red-500 mb-14">
          Why Become a Campus Ambassador?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Benefits */}
          <div className="bg-[#0d0d0d] border border-red-600 rounded-2xl p-8 shadow-[0_0_35px_#ff000040]">
            <h3 className="text-2xl font-bold mb-2">Benefits</h3>
            <p className="text-gray-400 mb-4">
              What you'll gain as an ambassador
            </p>
            <ul className="text-left list-disc list-inside space-y-2 text-gray-200">
              <li>Exclusive Free Ticket for TEDxLNMIIT 2026</li>
              <li>Exclusive TEDxLNMIIT merchandise and goodies</li>
              <li>Official certificate recognizing your contribution</li>
              <li>Networking with speakers and influencers</li>
              <li>Develop leadership and organizational skills</li>
            </ul>
          </div>

          {/* Right: Responsibilities */}
          <div className="bg-[#0d0d0d] border border-red-600 rounded-2xl p-8 shadow-[0_0_35px_#ff000040]">
            <h3 className="text-2xl font-bold mb-2">Responsibilities</h3>
            <p className="text-gray-400 mb-4">
              Your role as an ambassador
            </p>
            <ul className="text-left list-disc list-inside space-y-2 text-gray-200">
              <li>Promote TEDxLNMIIT 2026 through various channels</li>
              <li>Assist in organizing TEDx-related campus events</li>
              <li>Engage and inspire your community</li>
              <li>Share the importance of ideas worth spreading</li>
              <li>Represent TEDxLNMIIT in your institution</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- CTA BUTTON ---------- */}
      <section className="text-center mb-24">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          Ready to Make an Impact?
        </h2>
        <button className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-[0_0_25px_#ff000080] hover:shadow-[0_0_35px_#ff0000]">
          Apply to be a Campus Ambassador
        </button>
        <p className="mt-4 text-gray-400 text-sm">
          Fill out the application form, and we'll contact you with further
          details.
        </p>
      </section>

      {/* ---------- COMMUNITY SECTION ---------- */}
      <section className="w-full max-w-5xl text-center px-4 pb-24">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10">
          Join Our Inspiring Community
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#0d0d0d] rounded-xl p-8 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_#ff000030] hover:shadow-[0_0_25px_#ff0000]">
            <FaBullhorn className="text-3xl text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Spread Ideas</h3>
            <p className="text-gray-400">
              Be a catalyst for sharing innovative thoughts
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0d0d0d] rounded-xl p-8 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_#ff000030] hover:shadow-[0_0_25px_#ff0000]">
            <FaUsers className="text-3xl text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Build Connections</h3>
            <p className="text-gray-400">
              Network with diverse, like-minded individuals
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0d0d0d] rounded-xl p-8 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_#ff000030] hover:shadow-[0_0_25px_#ff0000]">
            <FaGift className="text-3xl text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Personal Growth</h3>
            <p className="text-gray-400">
              Enhance your skills and broaden your horizons
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
