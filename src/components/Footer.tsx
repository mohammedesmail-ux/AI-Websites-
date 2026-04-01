import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Youtube, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#F4EFEA] pt-32 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-texture opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <h3 className="font-serif text-5xl font-black tracking-tighter text-[#711F25]">
              Dr Pepper
            </h3>
            <p className="font-sans text-lg text-[#F4EFEA]/60 leading-relaxed font-medium">
              23 authentic flavors. One legendary taste. Fueling the culture since 1885.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-[#3A0F12] flex items-center justify-center hover:bg-[#711F25] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-[#3A0F12] flex items-center justify-center hover:bg-[#711F25] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-[#3A0F12] flex items-center justify-center hover:bg-[#711F25] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-[#3A0F12] flex items-center justify-center hover:bg-[#711F25] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div className="space-y-6">
            <h4 className="font-sans font-bold text-xl uppercase tracking-widest text-[#D4AF37]">Products</h4>
            <ul className="space-y-4 font-medium text-[#F4EFEA]/80">
              <li><a href="#" className="hover:text-[#F4EFEA] transition-colors">Dr Pepper Original</a></li>
              <li><a href="#" className="hover:text-[#F4EFEA] transition-colors">Dr Pepper Zero Sugar</a></li>
              <li><a href="#" className="hover:text-[#F4EFEA] transition-colors">Dr Pepper Cherry</a></li>
              <li><a href="#" className="hover:text-[#F4EFEA] transition-colors">Strawberries & Cream</a></li>
              <li><a href="#" className="hover:text-[#F4EFEA] transition-colors">Cream Soda</a></li>
            </ul>
          </div>

          {/* Explore Column */}
          <div className="space-y-6">
            <h4 className="font-sans font-bold text-xl uppercase tracking-widest text-[#D4AF37]">Explore</h4>
            <ul className="space-y-4 font-medium text-[#F4EFEA]/80">
              <li><a href="#" className="hover:text-[#F4EFEA] transition-colors">The 23 Flavors</a></li>
              <li><a href="#" className="hover:text-[#F4EFEA] transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-[#F4EFEA] transition-colors">Pepper Perks</a></li>
              <li><a href="#" className="hover:text-[#F4EFEA] transition-colors">Merch Store</a></li>
              <li><a href="#" className="hover:text-[#F4EFEA] transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Action Column */}
          <div className="space-y-8">
            <h4 className="font-sans font-bold text-xl uppercase tracking-widest text-[#D4AF37]">Find Us</h4>
            <button className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#711F25] text-[#F4EFEA] font-bold rounded-full hover:bg-[#A11D2A] transition-colors shadow-lg">
              <MapPin className="w-5 h-5" />
              Store Locator
            </button>
            <div className="p-6 bg-[#3A0F12]/50 rounded-2xl border border-[#711F25]/20">
              <p className="text-sm font-medium text-[#F4EFEA]/80 mb-4">
                Need help? We're here for you.
              </p>
              <a href="#" className="text-[#D4AF37] font-bold hover:underline">Contact Support</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#F4EFEA]/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-[#F4EFEA]/50 font-medium">
            © {new Date().getFullYear()} Dr Pepper/Seven Up, Inc. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-[#F4EFEA]/50 font-medium">
            <a href="#" className="hover:text-[#F4EFEA] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#F4EFEA] transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-[#F4EFEA] transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
