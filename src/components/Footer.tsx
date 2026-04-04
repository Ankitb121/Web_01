import { Facebook, Instagram, Globe, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-8 border-b border-gray-800 pb-2 inline-block">USEFUL LINKS</h3>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="/repair/iphone" className="hover:text-white transition-colors">iPhone Repair</a></li>
              <li><a href="/repair/samsung" className="hover:text-white transition-colors">Smartphone Repair</a></li>
              <li><a href="/repair/ipad" className="hover:text-white transition-colors">iPad Repair</a></li>
              <li><a href="/repair/tablet" className="hover:text-white transition-colors">Tablet Repair</a></li>
              <li><a href="/about-us" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* More Links */}
          <div className="lg:pt-10">
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Buy Sell Trade</a></li>
              <li><a href="/schedule-repair" className="hover:text-white transition-colors">Schedule Repair</a></li>
              <li><a href="/#contact" className="hover:text-white transition-colors">Get A Quote</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-8 border-b border-gray-800 pb-2 inline-block">LOCATIONS</h3>
            <div className="space-y-6 text-gray-400">
              <div>
                <p className="flex items-start gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-[#c41e1e] shrink-0 mt-1" />
                  <span>1714 Precinct Line Rd Suite 400, Hurst, TX 76054</span>
                </p>
                <p className="flex items-center gap-2 mb-2">
                  <Phone className="w-5 h-5 text-[#c41e1e]" />
                  <span>(469) 274-5851</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#c41e1e]" />
                  <span>Mon - Sat: 9 AM - 8 PM | Sun: 11 AM - 6 PM</span>
                </p>
              </div>
              <div className="pt-4 border-t border-gray-800">
                <p className="flex items-start gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-[#c41e1e] shrink-0 mt-1" />
                  <span>835 NE Green Oaks Blvd # B, Arlington, TX 76006</span>
                </p>
                <p className="flex items-center gap-2 mb-2">
                  <Phone className="w-5 h-5 text-[#c41e1e]" />
                  <span>(469) 274-5851</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#c41e1e]" />
                  <span>Mon - Sat: 9 AM - 7 PM | Sun: 11 AM - 5 PM</span>
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-8 border-b border-gray-800 pb-2 inline-block">SOCIAL MEDIA</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-[#c41e1e] transition-all">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-[#c41e1e] transition-all">
                <Globe className="w-6 h-6" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-[#c41e1e] transition-all">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2024 Cell Phone Repair Texas | All Rights Reserved | Designed by Studio</p>
        </div>
      </div>
    </footer>
  );
}
