import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How long will my repair take?",
    answer: "Most screen replacements and battery swaps are completed within 30-60 minutes. More complex repairs like water damage or motherboard issues may take 24-48 hours."
  },
  {
    question: "Do you offer a warranty on repairs?",
    answer: "Yes! We offer a limited lifetime warranty on all screen repairs and a 90-day warranty on other parts and labor. Your satisfaction and device safety are our top priorities."
  },
  {
    question: "What types of devices do you repair?",
    answer: "We repair smartphones (iPhone, Samsung, Google Pixel, Motorola, etc.), tablets (iPad, Galaxy Tab), laptops (MacBook, Dell, HP), gaming consoles (PS5, Xbox, Nintendo Switch), and desktop computers."
  },
  {
    question: "Are walk-ins welcome?",
    answer: "Absolutely! Walk-ins are always welcome at any of our locations. However, scheduling an appointment can help ensure the fastest possible turnaround time for your specific repair."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#c41e1e] font-bold tracking-widest uppercase text-sm">FAQ</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2 tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
              >
                <span className={`text-xl font-bold transition-colors ${activeIndex === index ? 'text-[#c41e1e]' : 'text-gray-900 group-hover:text-[#c41e1e]'}`}>
                  {faq.question}
                </span>
                <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-[#c41e1e]' : 'text-gray-400'}`} />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-600 text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
