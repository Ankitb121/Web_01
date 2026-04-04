import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Smartphone, Laptop, Tablet, Gamepad, Send, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

const deviceTypes = [
  { id: 'phone', name: 'Smartphone', icon: <Smartphone className="w-6 h-6" /> },
  { id: 'tablet', name: 'Tablet', icon: <Tablet className="w-6 h-6" /> },
  { id: 'laptop', name: 'Laptop', icon: <Laptop className="w-6 h-6" /> },
  { id: 'console', name: 'Game Console', icon: <Gamepad className="w-6 h-6" /> },
];

const locations = [
  "Hurst, TX (Precinct Line Rd)",
  "Arlington, TX (NE Green Oaks Blvd)"
];

export default function GetQuotePage() {
  const [formState, setFormState] = useState({
    deviceType: 'phone',
    brand: '',
    model: '',
    issue: '',
    name: '',
    email: '',
    phone: '',
    location: locations[0],
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="pt-48 pb-32 bg-white min-h-screen flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-lg px-4"
        >
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-extrabold mb-4 tracking-tight">Quote Request Sent!</h1>
          <p className="text-xl text-gray-600 mb-10">
            Thank you, <span className="font-bold text-black">{formState.name}</span>. Our technicians are reviewing your request and will contact you at <span className="font-bold text-black">{formState.phone}</span> within 30 minutes.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-[#c41e1e] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#a01818] transition-all"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky top-32"
            >
              <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                GET A <span className="text-[#c41e1e]">QUOTE</span> <br />RIGHT AWAY
              </h1>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Get an instant quote by submitting our form or contact us directly. We specialize in all major brands and models.
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4">
                  <div className="bg-[#c41e1e]/10 p-3 rounded-2xl">
                    <Phone className="w-6 h-6 text-[#c41e1e]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Call Us</p>
                    <p className="text-xl font-bold text-gray-900">(469) 274-5851</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4">
                  <div className="bg-[#c41e1e]/10 p-3 rounded-2xl">
                    <Mail className="w-6 h-6 text-[#c41e1e]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email Us</p>
                    <p className="text-xl font-bold text-gray-900">info@ourphonerepair.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-2 max-w-2xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl border border-gray-100"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Device Type Selection */}
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">What needs fixing?</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {deviceTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setFormState({...formState, deviceType: type.id})}
                        className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all ${
                          formState.deviceType === type.id 
                            ? 'border-[#c41e1e] bg-[#c41e1e]/5 text-[#c41e1e]' 
                            : 'border-gray-100 bg-gray-50 text-gray-400 hover:border-gray-200'
                        }`}
                      >
                        <div className="scale-90">{type.icon}</div>
                        <span className="mt-1 font-bold text-xs">{type.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wider">Brand</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#c41e1e] focus:ring-4 focus:ring-[#c41e1e]/10 outline-none transition-all text-sm"
                      placeholder="e.g. Apple, Samsung"
                      value={formState.brand}
                      onChange={(e) => setFormState({...formState, brand: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wider">Model</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#c41e1e] focus:ring-4 focus:ring-[#c41e1e]/10 outline-none transition-all text-sm"
                      placeholder="e.g. iPhone 15 Pro"
                      value={formState.model}
                      onChange={(e) => setFormState({...formState, model: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wider">What's the issue?</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#c41e1e] focus:ring-4 focus:ring-[#c41e1e]/10 outline-none transition-all text-sm"
                    placeholder="e.g. Cracked Screen, Battery Drain"
                    value={formState.issue}
                    onChange={(e) => setFormState({...formState, issue: e.target.value})}
                  />
                </div>

                <div className="h-px bg-gray-100 my-4"></div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wider">Your Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#c41e1e] focus:ring-4 focus:ring-[#c41e1e]/10 outline-none transition-all text-sm"
                      placeholder="Full Name"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wider">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#c41e1e] focus:ring-4 focus:ring-[#c41e1e]/10 outline-none transition-all text-sm"
                      placeholder="(000) 000-0000"
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wider">Preferred Location</label>
                  <select 
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#c41e1e] focus:ring-4 focus:ring-[#c41e1e]/10 outline-none transition-all appearance-none text-sm"
                    value={formState.location}
                    onChange={(e) => setFormState({...formState, location: e.target.value})}
                  >
                    {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wider">Additional Details (Optional)</label>
                  <textarea 
                    rows={3}
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#c41e1e] focus:ring-4 focus:ring-[#c41e1e]/10 outline-none transition-all resize-none text-sm"
                    placeholder="Tell us more about the problem..."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#c41e1e] hover:bg-[#a01818] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] shadow-lg shadow-[#c41e1e]/20 text-sm"
                >
                  <Send className="w-5 h-5" />
                  SUBMIT QUOTE REQUEST
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
