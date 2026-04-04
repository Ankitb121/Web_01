import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, Smartphone } from 'lucide-react';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    device: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to an API
    alert("Thank you! Your request has been sent. We'll get back to you shortly.");
    setFormState({ name: '', email: '', phone: '', device: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              GET A <span className="text-[#c41e1e]">FREE QUOTE</span> TODAY
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Have a question about a repair or need a price estimate? Fill out the form and our technicians will get back to you within 30 minutes during business hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#c41e1e]/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-[#c41e1e]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Call Us Directly</h4>
                  <p className="text-gray-600">(469) 274-5851</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#c41e1e]/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-[#c41e1e]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Support</h4>
                  <p className="text-gray-600">support@ourphonerepair.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#c41e1e]/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#c41e1e]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Visit Our Hurst Location</h4>
                  <p className="text-gray-600">1714 Precinct Line Rd Suite 400, Hurst, TX 76054</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 lg:p-12 rounded-3xl shadow-xl border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#c41e1e] focus:ring-2 focus:ring-[#c41e1e]/20 outline-none transition-all"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#c41e1e] focus:ring-2 focus:ring-[#c41e1e]/20 outline-none transition-all"
                    placeholder="(000) 000-0000"
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#c41e1e] focus:ring-2 focus:ring-[#c41e1e]/20 outline-none transition-all"
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Device Model & Issue</label>
                <div className="relative">
                  <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="text" 
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#c41e1e] focus:ring-2 focus:ring-[#c41e1e]/20 outline-none transition-all"
                    placeholder="iPhone 14 - Cracked Screen"
                    value={formState.device}
                    onChange={(e) => setFormState({...formState, device: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Additional Details</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#c41e1e] focus:ring-2 focus:ring-[#c41e1e]/20 outline-none transition-all resize-none"
                  placeholder="Tell us more about the problem..."
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#c41e1e] hover:bg-[#a01818] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send className="w-5 h-5" />
                SEND QUOTE REQUEST
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
