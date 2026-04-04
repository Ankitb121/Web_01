import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useState } from 'react';
import { Shield, Clock, ThumbsUp, Heart, Store, Users, Smartphone } from 'lucide-react';

function Counter({ value, duration = 2 }: { value: string, duration?: number }) {
  const [displayValue, setDisplayValue] = useState("0");
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    const controls = animate(0, numericValue, {
      duration,
      onUpdate: (latest) => setDisplayValue(Math.floor(latest).toString()),
    });
    return () => controls.stop();
  }, [numericValue, duration]);

  return <span>{displayValue}{suffix}</span>;
}

export default function AboutUsPage() {
  return (
    <div className="pt-32 pb-16 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#c41e1e_0%,transparent_70%)] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight leading-tight uppercase">
              About <span className="text-[#c41e1e]">Us</span>
            </h1>
            <p className="text-lg text-gray-400 font-medium uppercase tracking-widest">
              "We are more than just a cell phone repair store"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Years Experience", value: "10+", icon: <Clock className="w-8 h-8" /> },
              { label: "Devices Repaired", value: "50k+", icon: <Smartphone className="w-8 h-8" /> },
              { label: "Happy Customers", value: "100%", icon: <ThumbsUp className="w-8 h-8" /> },
              { label: "Expert Techs", value: "15+", icon: <Users className="w-8 h-8" /> }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gray-900 w-20 h-20 rounded-[2rem] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#c41e1e] transition-all duration-500 shadow-xl">
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <p className="text-4xl font-black text-gray-900 mb-2 leading-none">
                  <Counter value={stat.value} />
                </p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tight uppercase leading-none">
                Our <span className="text-[#c41e1e]">Mission</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At Cell Phone Repair Texas, we understand how essential your devices are to your daily life. Whether it's for work, staying connected with loved ones, or entertainment, a broken device can be a major disruption.
                </p>
                <p>
                  That's why we've dedicated ourselves to providing the fastest, most reliable, and affordable repair services in the region. Our team of certified technicians brings years of expertise to every repair, ensuring your device is handled with the utmost care and precision.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop" 
                alt="Our Workshop" 
                className="rounded-[2.5rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#c41e1e] text-white p-8 rounded-3xl shadow-xl">
                <p className="text-4xl font-black leading-none">
                  <Counter value="10+" />
                </p>
                <p className="text-sm font-bold uppercase tracking-widest mt-2">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#c41e1e_0%,transparent_70%)] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/10 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-xl">
                <Users className="w-10 h-10 text-[#c41e1e]" />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">We Grow Together</h3>
              <p className="text-gray-400 leading-relaxed">
                Our success is built on the trust of our community. As we expand, we remain committed to the local neighborhoods we serve.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-white/10 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-xl">
                <Heart className="w-10 h-10 text-[#c41e1e]" />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">We Value Our Customers</h3>
              <p className="text-gray-400 leading-relaxed">
                You are our top priority. Every repair comes with a satisfaction guarantee and personalized support to ensure you're happy.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-white/10 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-xl">
                <Store className="w-10 h-10 text-[#c41e1e]" />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Our STORE</h3>
              <p className="text-gray-400 leading-relaxed">
                Visit our modern, fully-equipped facilities where we use state-of-the-art tools to bring your devices back to life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tight">Why Choose <span className="text-[#c41e1e]">Us?</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="w-8 h-8" />, title: "Certified Parts", desc: "We only use high-quality, certified replacement parts for all repairs." },
              { icon: <Clock className="w-8 h-8" />, title: "Quick Turnaround", desc: "Most repairs are completed within 30-60 minutes while you wait." },
              { icon: <ThumbsUp className="w-8 h-8" />, title: "Warranty Included", desc: "We stand behind our work with a comprehensive warranty on all repairs." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all group">
                <div className="text-[#c41e1e] mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
