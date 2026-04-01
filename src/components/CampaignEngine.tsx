import { motion } from 'motion/react';
import { Clock, ArrowRight } from 'lucide-react';

export default function CampaignEngine() {
  return (
    <section className="py-32 bg-[#D4AF37] text-[#3A0F12] relative overflow-hidden">
      <div className="absolute inset-0 bg-texture pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#3A0F12] text-[#F4EFEA] px-4 py-2 rounded-full font-bold text-sm tracking-widest uppercase"
            >
              <Clock className="w-4 h-4" />
              Limited Drop
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-6xl md:text-8xl font-black leading-none"
            >
              Dark Berry<br/>Returns.
            </motion.h2>

            <p className="font-sans text-2xl font-medium text-[#3A0F12]/80 max-w-lg">
              The cult classic is back for a limited time. Don't miss the midnight drop.
            </p>

            <div className="flex gap-4 items-center font-mono text-4xl md:text-5xl font-bold bg-[#F4EFEA]/30 p-6 rounded-2xl backdrop-blur-sm border border-[#3A0F12]/10 w-fit">
              <div className="flex flex-col items-center">
                <span>02</span>
                <span className="text-xs font-sans uppercase tracking-widest mt-1">Days</span>
              </div>
              <span className="text-[#711F25]">:</span>
              <div className="flex flex-col items-center">
                <span>14</span>
                <span className="text-xs font-sans uppercase tracking-widest mt-1">Hrs</span>
              </div>
              <span className="text-[#711F25]">:</span>
              <div className="flex flex-col items-center">
                <span>59</span>
                <span className="text-xs font-sans uppercase tracking-widest mt-1">Mins</span>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 px-10 py-5 bg-[#3A0F12] text-[#F4EFEA] font-bold text-xl rounded-full hover:bg-[#711F25] transition-colors shadow-2xl"
            >
              Unlock the Drop
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </div>

          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px] flex justify-center items-center">
            <motion.div
              animate={{ y: [-10, 10, -10], rotateZ: [0, 2, -2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-64 md:w-80 h-96 md:h-[500px] rounded-[2rem] shadow-2xl overflow-hidden border-4 border-[#3A0F12]/20"
            >
              <img 
                src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop" 
                alt="Dark Berry Can" 
                className="w-full h-full object-cover filter hue-rotate-180 saturate-150 contrast-125"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-80" />
              <div className="absolute bottom-8 left-0 right-0 text-center px-4">
                <h3 className="font-serif text-4xl font-bold text-[#F4EFEA] mb-2 text-shadow-glow">
                  Dark Berry
                </h3>
              </div>
            </motion.div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#711F25] rounded-full blur-[100px] opacity-50 mix-blend-multiply" />
          </div>

        </div>
      </div>
    </section>
  );
}
