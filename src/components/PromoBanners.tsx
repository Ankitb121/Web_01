import { motion } from 'motion/react';

export default function PromoBanners() {
  return (
    <section className="py-0 overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Tablet Solutions */}
        <div className="relative h-[500px] flex items-center group overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2030&auto=format&fit=crop"
            alt="Tablet Repair"
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 px-12 lg:px-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
                TABLET SOLUTIONS
              </h2>
              <p className="text-gray-200 mb-8 max-w-md text-lg leading-relaxed">
                Comprehensive repair services for iPad, Samsung Galaxy Tab, and other leading tablets, handling screen cracks, battery issues, and more.
              </p>
              <button className="bg-[#c41e1e] hover:bg-[#a01818] text-white font-bold py-4 px-8 rounded transition-all">
                SCHEDULE REPAIR
              </button>
            </motion.div>
          </div>
        </div>

        {/* Gaming & Computer Repairs */}
        <div className="relative h-[500px] flex items-center group overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=2070&auto=format&fit=crop"
            alt="Gaming Repair"
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#c41e1e]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 px-12 lg:px-20">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight uppercase">
                Gaming & Computer Repairs
              </h2>
              <p className="text-gray-200 mb-8 max-w-md text-lg leading-relaxed">
                From console overheating and disk drive issues to PC screen replacements and data recovery, we fix it all!
              </p>
              <button className="bg-white text-[#c41e1e] hover:bg-gray-100 font-bold py-4 px-8 rounded transition-all">
                GET A QUOTE
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
