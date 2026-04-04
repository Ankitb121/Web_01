import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Smartphone, CheckCircle2, X } from 'lucide-react';
import { brands } from '../data';
import { MobileModel } from '../types';

export default function BrandRepairPage() {
  const { brandId } = useParams<{ brandId: string }>();
  const brand = brands.find(b => b.id === brandId);
  const [selectedModel, setSelectedModel] = useState<MobileModel | null>(null);

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Brand not found</h2>
          <Link to="/" className="text-[#c41e1e] font-bold flex items-center justify-center gap-2">
            <ChevronLeft className="w-5 h-5" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-[#c41e1e] font-bold mb-12 hover:gap-2 transition-all">
          <ChevronLeft className="w-5 h-5" /> Back to Services
        </Link>

        <div className="mb-16">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            {brand.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            {brand.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brand.models.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedModel(model)}
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{model.name}</h3>
                <p className="text-gray-600 line-clamp-2">{model.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Model Details Modal */}
      <AnimatePresence>
        {selectedModel && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedModel(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-4xl rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedModel(null)}
                className="absolute top-6 right-6 z-10 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-full">
                  <img
                    src={selectedModel.image}
                    alt={selectedModel.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 md:p-12 overflow-y-auto max-h-[80vh]">
                  <div className="flex items-center gap-2 text-[#c41e1e] font-bold mb-4">
                    <Smartphone className="w-5 h-5" />
                    <span className="tracking-widest uppercase text-sm">{brand.name}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{selectedModel.name}</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {selectedModel.description}
                  </p>

                  <h4 className="text-xl font-bold mb-6 border-b pb-2">Repair Services</h4>
                  <div className="space-y-4">
                    {selectedModel.services.map((service, i) => (
                      <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                          <span className="font-bold text-gray-800">{service.name}</span>
                        </div>
                        <span className="text-[#c41e1e] font-extrabold text-lg">{service.price}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 flex gap-4">
                    <button className="flex-1 bg-[#c41e1e] hover:bg-[#a01818] text-white font-bold py-4 rounded-2xl shadow-lg shadow-[#c41e1e]/20 transition-all transform hover:scale-[1.02]">
                      Book This Repair
                    </button>
                    <button 
                      onClick={() => {
                        window.location.href = '/#contact';
                      }}
                      className="flex-1 bg-black hover:bg-gray-800 text-white font-bold py-4 rounded-2xl transition-all transform hover:scale-[1.02]"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
