import { motion } from 'motion/react';
import { Mail, Star, Gift } from 'lucide-react';

export default function LoyaltyCapture() {
  return (
    <section className="py-40 bg-[#711F25] text-[#F4EFEA] relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-texture opacity-20 mix-blend-overlay" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#D4AF37] text-[#3A0F12] mb-8 shadow-2xl">
            <Star className="w-10 h-10 fill-current" />
          </div>

          <h2 className="font-serif text-6xl md:text-8xl font-black leading-none text-shadow-glow">
            Stay in the Flavor Loop
          </h2>

          <p className="font-sans text-2xl text-[#F4EFEA]/80 max-w-2xl mx-auto font-medium">
            Join the Inner Circle for early flavor access, exclusive merch drops, and secret events.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto mt-12">
            <div className="relative flex-1">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-[#3A0F12]/50" />
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-[#F4EFEA] text-[#3A0F12] font-bold text-lg px-16 py-6 rounded-full outline-none focus:ring-4 focus:ring-[#D4AF37]/50 transition-all placeholder-[#3A0F12]/40"
              />
            </div>
            <button className="px-10 py-6 bg-[#3A0F12] text-[#F4EFEA] font-bold text-lg rounded-full hover:bg-[#1A1A1A] transition-colors shadow-xl flex items-center justify-center gap-2 whitespace-nowrap">
              <Gift className="w-5 h-5" />
              Join Now
            </button>
          </div>

          <p className="text-sm text-[#F4EFEA]/50 mt-6 font-medium">
            By joining, you agree to our Terms of Service and Privacy Policy.
          </p>
        </motion.div>
      </div>

      {/* Decorative Bubbles */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-[#D4AF37] rounded-full blur-[80px] opacity-40" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#3A0F12] rounded-full blur-[100px] opacity-60" />
    </section>
  );
}
