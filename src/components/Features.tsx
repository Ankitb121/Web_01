import { motion } from 'motion/react';
import { Shield, Award, Star, Zap } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-10 h-10 text-[#c41e1e]" />,
    title: "TRANSPARENCY",
    description: "Clear pricing and service explanations from the start."
  },
  {
    icon: <Award className="w-10 h-10 text-[#c41e1e]" />,
    title: "PROFICIENCY",
    description: "Highly trained technicians for all device types."
  },
  {
    icon: <Star className="w-10 h-10 text-[#c41e1e]" />,
    title: "TOP QUALITY",
    description: "Premium parts and guaranteed repairs."
  },
  {
    icon: <Zap className="w-10 h-10 text-[#c41e1e]" />,
    title: "QUICK SERVICE",
    description: "Fast turnaround times to get you back online."
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">WHY CHOOSE US</h2>
          <div className="w-20 h-1 bg-[#c41e1e] mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-wide">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-[200px] mx-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
