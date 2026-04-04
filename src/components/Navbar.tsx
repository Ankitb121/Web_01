import { useState, useEffect } from 'react';
import { Phone, ChevronDown, Menu, X, Smartphone, Tablet, Laptop, Gamepad, Monitor, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const serviceCategories = [
  {
    id: 'apple',
    name: 'Apple',
    icon: <Smartphone className="w-6 h-6" />,
    popularDevices: ['iPhone 15 Pro Max', 'iPhone 14 Pro', 'iPhone 13', 'iPad Pro', 'Apple Watch'],
    commonRepairs: ['Screen Repair', 'Battery Replacement', 'Water Damage', 'Charging Port', 'Camera Repair']
  },
  {
    id: 'samsung',
    name: 'Samsung',
    icon: <Smartphone className="w-6 h-6" />,
    popularDevices: ['Galaxy S24 Ultra', 'Galaxy S23', 'Galaxy Z Fold 5', 'Galaxy Tab S9', 'Galaxy Watch 6'],
    commonRepairs: ['Screen Repair', 'Battery Replacement', 'Back Glass', 'Charging Port', 'Data Recovery']
  },
  {
    id: 'motorola',
    name: 'Motorola',
    icon: <Smartphone className="w-6 h-6" />,
    popularDevices: ['Moto G Stylus', 'Razr+', 'Moto Edge', 'Moto G Power', 'Moto One'],
    commonRepairs: ['Screen Repair', 'Battery Replacement', 'Charging Port', 'Speaker Repair', 'Software Fix']
  },
  {
    id: 'lg',
    name: 'LG',
    icon: <Smartphone className="w-6 h-6" />,
    popularDevices: ['LG V60 ThinQ', 'LG Wing', 'LG Velvet', 'LG G8 ThinQ', 'LG Stylo 6'],
    commonRepairs: ['Screen Repair', 'Battery Replacement', 'Charging Port', 'Microphone Repair', 'Camera Repair']
  },
  {
    id: 'gaming',
    name: 'Gaming',
    icon: <Gamepad className="w-6 h-6" />,
    popularDevices: ['PlayStation 5', 'Xbox Series X', 'Nintendo Switch', 'Steam Deck', 'PS4 Pro'],
    commonRepairs: ['HDMI Port Repair', 'Disc Drive', 'Overheating', 'Controller Drift', 'Power Supply']
  },
  {
    id: 'others',
    name: 'Others',
    icon: <Cpu className="w-6 h-6" />,
    popularDevices: ['Google Pixel 8', 'Microsoft Surface', 'MacBook Pro', 'Dell XPS', 'HP Spectre'],
    commonRepairs: ['Screen Repair', 'Battery Replacement', 'Keyboard Repair', 'Hinge Repair', 'Motherboard']
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0]);

  const handleContactClick = () => {
    if (window.location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#contact';
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center group">
            <img 
              src="https://ourphonerepair.com/wp-content/uploads/thegem-logos/logo_2c597acbde7d141829fbdffe0f0a6ada_2x.png" 
              alt="Cell Phone Repair Logo" 
              className="h-12 w-auto"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-5">
            <div 
              className="relative"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <button className="flex items-center gap-1 font-bold text-sm hover:text-[#c41e1e] transition-colors py-6 uppercase tracking-tight">
                Services <ChevronDown className={`w-4 h-4 transition-transform ${showServices ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {showServices && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-[800px] bg-white shadow-2xl rounded-3xl border border-gray-100 overflow-hidden"
                  >
                    <div className="flex">
                      {/* Left Sidebar: Device Types */}
                      <div className="w-1/3 bg-gray-50 p-4 border-r border-gray-100">
                        <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 px-4">Device Types</h4>
                        <div className="space-y-1">
                          {serviceCategories.map((cat) => (
                            <button
                              key={cat.id}
                              onMouseEnter={() => setActiveCategory(cat)}
                              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                                activeCategory.id === cat.id 
                                  ? 'bg-[#c41e1e] text-white shadow-lg shadow-[#c41e1e]/20' 
                                  : 'text-gray-600 hover:bg-gray-100'
                              }`}
                            >
                              <div className={`${activeCategory.id === cat.id ? 'text-white' : 'text-[#c41e1e]'}`}>
                                {cat.icon}
                              </div>
                              {cat.name}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Right Content: Popular & Repairs */}
                      <div className="w-2/3 p-8 grid grid-cols-2 gap-8 text-left">
                        <div>
                          <h4 className="text-xs font-black text-[#c41e1e] uppercase tracking-widest mb-6">Popular Devices</h4>
                          <ul className="space-y-3">
                            {activeCategory.popularDevices.map((device, i) => (
                              <li key={i}>
                                <Link to={`/repair/${activeCategory.id}`} className="text-gray-700 hover:text-[#c41e1e] font-bold text-sm transition-colors flex items-center gap-2 group">
                                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#c41e1e]"></div>
                                  {device}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xs font-black text-[#c41e1e] uppercase tracking-widest mb-6">Common Repairs</h4>
                          <ul className="space-y-3">
                            {activeCategory.commonRepairs.map((repair, i) => (
                              <li key={i}>
                                <Link to="/get-quote" className="text-gray-700 hover:text-[#c41e1e] font-bold text-sm transition-colors flex items-center gap-2 group">
                                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#c41e1e]"></div>
                                  {repair}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/schedule-repair" className="font-bold text-sm hover:text-[#c41e1e] transition-colors uppercase tracking-tight">Schedule Repair</Link>
            <Link to="#" className="font-bold text-sm hover:text-[#c41e1e] transition-colors uppercase tracking-tight">Buy-Sell Trade</Link>
            <Link to="#" className="font-bold text-sm hover:text-[#c41e1e] transition-colors uppercase tracking-tight">Accessories</Link>
            <Link to="/about-us" className="font-bold text-sm hover:text-[#c41e1e] transition-colors uppercase tracking-tight">About Us</Link>
            
            <Link 
              to="/get-quote"
              className="bg-[#c41e1e] text-white px-4 py-2 rounded font-bold text-sm hover:bg-[#a01818] transition-colors uppercase tracking-tight"
            >
              Get Quote
            </Link>
            
            <button 
              onClick={handleContactClick}
              className="bg-black text-white px-4 py-2 rounded font-bold text-sm hover:bg-gray-800 transition-colors uppercase tracking-tight"
            >
              Contact Us
            </button>
            
            <div className="flex items-center gap-1 font-bold text-sm ml-2 whitespace-nowrap">
              <Phone className="w-4 h-4 text-[#c41e1e]" />
              <span>(469) 274-5851</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <div className="space-y-2">
                <p className="font-bold text-gray-400 text-xs uppercase tracking-widest px-2">Our Services</p>
                <div className="grid grid-cols-2 gap-2">
                  <Link to="/repair/iphone" onClick={() => setIsOpen(false)} className="block font-semibold py-2 px-2 hover:text-[#c41e1e] text-sm">iPhone</Link>
                  <Link to="/repair/samsung" onClick={() => setIsOpen(false)} className="block font-semibold py-2 px-2 hover:text-[#c41e1e] text-sm">Samsung</Link>
                  <Link to="/repair/pixel" onClick={() => setIsOpen(false)} className="block font-semibold py-2 px-2 hover:text-[#c41e1e] text-sm">Google Pixel</Link>
                  <Link to="#" onClick={() => setIsOpen(false)} className="block font-semibold py-2 px-2 hover:text-[#c41e1e] text-sm">Motorola</Link>
                  <Link to="#" onClick={() => setIsOpen(false)} className="block font-semibold py-2 px-2 hover:text-[#c41e1e] text-sm">LG</Link>
                  <Link to="#" onClick={() => setIsOpen(false)} className="block font-semibold py-2 px-2 hover:text-[#c41e1e] text-sm">iPad</Link>
                  <Link to="#" onClick={() => setIsOpen(false)} className="block font-semibold py-2 px-2 hover:text-[#c41e1e] text-sm">Tablet</Link>
                  <Link to="#" onClick={() => setIsOpen(false)} className="block font-semibold py-2 px-2 hover:text-[#c41e1e] text-sm">Computer</Link>
                  <Link to="#" onClick={() => setIsOpen(false)} className="block font-semibold py-2 px-2 hover:text-[#c41e1e] text-sm">Console</Link>
                </div>
              </div>
              <Link to="/schedule-repair" onClick={() => setIsOpen(false)} className="block font-bold py-2 px-2 hover:text-[#c41e1e] uppercase text-sm tracking-tight">Schedule Repair</Link>
              <Link to="#" onClick={() => setIsOpen(false)} className="block font-bold py-2 px-2 hover:text-[#c41e1e] uppercase text-sm tracking-tight">Buy-Sell Trade</Link>
              <Link to="#" onClick={() => setIsOpen(false)} className="block font-bold py-2 px-2 hover:text-[#c41e1e] uppercase text-sm tracking-tight">Accessories</Link>
              <Link to="/about-us" onClick={() => setIsOpen(false)} className="block font-bold py-2 px-2 hover:text-[#c41e1e] uppercase text-sm tracking-tight">About Us</Link>
              
              <Link 
                to="/get-quote" 
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#c41e1e] text-white px-4 py-3 rounded font-bold uppercase text-sm tracking-tight text-center block"
              >
                Get Quote
              </Link>
              <button 
                onClick={handleContactClick}
                className="w-full bg-black text-white px-4 py-3 rounded font-bold uppercase text-sm tracking-tight"
              >
                Contact Us
              </button>
              <div className="flex items-center justify-center gap-2 font-bold pt-4">
                <Phone className="w-5 h-5 text-[#c41e1e]" />
                <span>(469) 274-5851</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
