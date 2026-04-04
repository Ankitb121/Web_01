import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#111] text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?q=80&w=1974&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#c41e1e_0%,transparent_70%)] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tighter">
              GOT A CRACK? WE <br />
              <span className="text-[#c41e1e]">HAVE YOUR BACK!</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-lg font-medium leading-relaxed">
              FAST, AFFORDABLE, AND RELIABLE REPAIRS FOR PHONES, TABLETS, LAPTOPS, MACBOOKS, GAME CONSOLES, AND COMPUTERS—BY SKILLED TECHNICIANS DEDICATED TO QUALITY AND CUSTOMER SATISFACTION.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-[#c41e1e] hover:bg-[#a01818] text-white font-bold py-4 px-10 rounded-lg text-lg transition-all transform hover:scale-105 shadow-xl shadow-[#c41e1e]/20"
              >
                CONTACT US
              </button>
              <Link 
                to="/get-quote"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-4 px-10 rounded-lg text-lg transition-all transform hover:scale-105 text-center"
              >
                GET QUOTE
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
