import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // icons

const faqs = [
  {
    question: "What is TEDx?",
    answer: "TEDx is a program of local, self-organized events that bring people together to share a TED-like experience."
  },
  {
    question: "How can I attend a TEDx event?",
    answer: "You can attend a TEDx event by registering on the official website of the local TEDx event in your city or institution."
  },
  {
    question: "Are TEDx talks available online?",
    answer: "Yes, most TEDx talks are recorded and available on the official TEDx YouTube channel and website."
  },
  {
    question: "What makes TEDx talks different from TED talks?",
    answer: "TED talks are organized by TED itself, while TEDx events are independently organized under a free license granted by TED."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-24">
      {/* Heading */}
      <h1 className="text-5xl font-bold mb-12 text-center">
        <span className="bg-gradient-to-r from-gray-200 via-white to-gray-400 bg-clip-text text-transparent animate-pulse">
          Frequently Asked
        </span>{" "}
        <span className="text-red-600 drop-shadow-[0_0_10px_rgba(255,0,0,0.7)] hover:drop-shadow-[0_0_20px_rgba(255,0,0,1)] transition">
          Questions
        </span>
      </h1>

      {/* FAQ List */}
      <div className="w-full max-w-2xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-neutral-900 rounded-xl shadow-md p-4 cursor-pointer transition hover:bg-neutral-800 hover:scale-[1.02]"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium group">
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent group-hover:drop-shadow-[0_0_10px_rgba(255,0,0,0.9)] transition">
                  {faq.question}
                </span>
              </h2>
              {openIndex === index ? (
                <ChevronUp className="text-red-500" />
              ) : (
                <ChevronDown className="text-red-500" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-3 text-gray-300 animate-fadeIn">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
