import { motion } from 'motion/react';
import { Calendar, Clock, Shield, CheckCircle2, ArrowRight, Smartphone, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ScheduleRepairPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#c41e1e_0%,transparent_70%)] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-extrabold mb-6 tracking-tight leading-tight uppercase">
              Schedule <span className="text-[#c41e1e]">Repair</span>
            </h1>
            <p className="text-xl text-gray-400 font-medium uppercase tracking-widest">
              Book a repair quickly and reliably through our website
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tight uppercase leading-none">
                Can't Find Your Device? <br />
                <span className="text-[#c41e1e]">Get An Instant Quote!</span>
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                If your device isn't listed or you're unsure about the repair needed, don't worry! Our expert technicians are ready to help. Simply request a quote and we'll get back to you with pricing and availability.
              </p>
              <Link 
                to="/get-quote"
                className="inline-flex items-center gap-3 bg-[#c41e1e] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#a01818] transition-all shadow-xl shadow-[#c41e1e]/20 group"
              >
                GET AN INSTANT QUOTE
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100"
            >
              <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-tight">Key Benefits We Provide</h3>
              <div className="space-y-6">
                {[
                  { title: "Same Day Repairs", desc: "Most repairs are completed within the same day, often in under an hour.", icon: <Clock className="w-6 h-6 text-[#c41e1e]" /> },
                  { title: "Certified Technicians", desc: "Our team consists of highly trained and certified professionals.", icon: <Shield className="w-6 h-6 text-[#c41e1e]" /> },
                  { title: "Premium Quality Parts", desc: "We only use the highest quality replacement parts for your devices.", icon: <Smartphone className="w-6 h-6 text-[#c41e1e]" /> },
                  { title: "Warranty Protection", desc: "All our repairs come with a comprehensive warranty for your peace of mind.", icon: <ThumbsUp className="w-6 h-6 text-[#c41e1e]" /> }
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-white p-2 rounded-xl shadow-sm h-fit">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 uppercase tracking-tight">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tight">Frequently Asked <span className="text-[#c41e1e]">Questions</span></h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "How long does a typical repair take?", a: "Most smartphone repairs, like screen or battery replacements, take between 30 to 60 minutes. More complex repairs may take longer." },
              { q: "Do I need an appointment?", a: "While walk-ins are always welcome, scheduling an appointment ensures the fastest possible service and that we have the necessary parts in stock." },
              { q: "What is your warranty policy?", a: "We offer a comprehensive warranty on all parts and labor. If you experience any issues related to the repair, we'll fix it at no extra cost." },
              { q: "Do you use original parts?", a: "We use high-quality, certified replacement parts that meet or exceed original manufacturer specifications to ensure optimal performance." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-tight">{faq.q}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
