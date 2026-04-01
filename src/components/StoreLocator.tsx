import { motion } from 'motion/react';
import { MapPin, Search, Navigation, ShoppingBag } from 'lucide-react';

export default function StoreLocator() {
  return (
    <section className="py-32 bg-[#F4EFEA] text-[#3A0F12] relative overflow-hidden">
      <div className="absolute inset-0 bg-texture pointer-events-none opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-[#711F25]/10">
          
          {/* Search Interface */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-5xl md:text-6xl font-bold mb-4"
              >
                Get Dr Pepper Now
              </motion.h2>
              <p className="font-sans text-xl text-[#711F25] font-medium">
                Find the 23 flavors near you. In-store or delivered to your door.
              </p>
            </div>

            <div className="relative">
              <div className="flex items-center bg-[#F4EFEA] rounded-full p-2 shadow-inner border border-[#3A0F12]/10 focus-within:border-[#711F25] focus-within:ring-2 focus-within:ring-[#711F25]/20 transition-all">
                <Search className="w-6 h-6 text-[#711F25] ml-4" />
                <input 
                  type="text" 
                  placeholder="Enter Zip Code or City" 
                  className="w-full bg-transparent border-none outline-none px-4 py-3 text-lg font-medium text-[#3A0F12] placeholder-[#3A0F12]/40"
                />
                <button className="bg-[#711F25] text-[#F4EFEA] p-3 rounded-full hover:bg-[#3A0F12] transition-colors flex items-center justify-center">
                  <Navigation className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 p-4 rounded-2xl border-2 border-[#711F25]/20 hover:border-[#711F25] hover:bg-[#711F25]/5 transition-all font-bold text-[#3A0F12]">
                <MapPin className="w-5 h-5 text-[#711F25]" />
                In Store
              </button>
              <button className="flex items-center justify-center gap-2 p-4 rounded-2xl border-2 border-[#711F25]/20 hover:border-[#711F25] hover:bg-[#711F25]/5 transition-all font-bold text-[#3A0F12]">
                <ShoppingBag className="w-5 h-5 text-[#711F25]" />
                Delivery
              </button>
            </div>

            <div className="pt-8 border-t border-[#711F25]/10">
              <p className="text-sm font-bold text-[#711F25] uppercase tracking-wider mb-4">Available At</p>
              <div className="flex gap-6 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Placeholder logos for retailers */}
                <div className="font-serif font-black text-2xl">Walmart</div>
                <div className="font-sans font-black text-2xl italic">Target</div>
                <div className="font-serif font-bold text-xl">Kroger</div>
              </div>
            </div>
          </div>

          {/* Map Visual */}
          <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] relative rounded-3xl overflow-hidden bg-[#E5E5E5] shadow-inner border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" 
              alt="Map" 
              className="w-full h-full object-cover filter contrast-125 saturate-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#711F25]/10 mix-blend-multiply" />
            
            {/* Map Pins */}
            <motion.div 
              initial={{ scale: 0, y: -20 }}
              whileInView={{ scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.6, delay: 0.2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#711F25] drop-shadow-xl"
            >
              <MapPin className="w-12 h-12 fill-current text-white" />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-black/30 rounded-full blur-sm" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
