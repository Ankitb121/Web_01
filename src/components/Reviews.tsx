import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Sarah Jenkins",
    role: "iPhone 13 Pro Max",
    comment: "Fixed my shattered screen in less than 45 minutes! The price was exactly as quoted and the staff was super professional. Highly recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Michael Chen",
    role: "Samsung S22 Ultra",
    comment: "Best repair shop in Hurst. They fixed a charging port issue that other shops said couldn't be repaired without a full motherboard swap.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Emily Rodriguez",
    role: "iPad Air 4",
    comment: "Brought my iPad in for a battery replacement. It feels like a brand new device now. Very transparent about the process and costs.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "David Wilson",
    role: "PS5 Console",
    comment: "My PS5 was overheating constantly. They cleaned it out and replaced the thermal paste. Works perfectly now and is silent again!",
    rating: 4,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Jessica Taylor",
    role: "Google Pixel 6",
    comment: "Quick screen repair and they even gave me a free screen protector. The customer service here is top-notch.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            WHAT OUR <span className="text-[#c41e1e]">CUSTOMERS SAY</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#c41e1e] mx-auto rounded-full"></div>
        </div>
      </div>

      <div className="relative">
        {/* Horizontal Scroll Container */}
        <motion.div 
          className="flex gap-6 px-4 md:px-8 lg:px-12 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ right: 0, left: -1200 }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="min-w-[350px] md:min-w-[450px] bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-between"
              whileHover={{ y: -5 }}
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#c41e1e]/10 rotate-180" />
                  <p className="text-gray-700 text-lg italic leading-relaxed mb-8 relative z-10">
                    "{review.comment}"
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#c41e1e]/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-[#c41e1e] font-semibold">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center text-gray-400 text-sm font-medium animate-pulse">
          ← Drag to explore more reviews →
        </div>
      </div>
    </section>
  );
}
