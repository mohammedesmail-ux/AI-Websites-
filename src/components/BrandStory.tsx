import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function BrandStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} className="py-40 bg-[#711F25] text-[#F4EFEA] relative overflow-hidden">
      <div className="absolute inset-0 bg-texture opacity-10 mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-6xl md:text-8xl font-black mb-6 leading-none">
                Born in 1885.
                <br />
                <span className="text-[#D4AF37]">Still a Mystery.</span>
              </h2>
              <p className="font-sans text-2xl font-medium text-[#F4EFEA]/90 leading-relaxed">
                Before the internet, before pop culture as we know it, there was a pharmacist in Waco, Texas, who mixed 23 flavors into something the world had never tasted.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="font-sans text-lg text-[#F4EFEA]/70">
                We didn't invent the rules. We just decided to ignore them. From the corner drugstore to the global stage, the recipe hasn't changed, but the legend has grown.
              </p>
              
              <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-[#711F25] bg-[#F4EFEA] rounded-full overflow-hidden transition-all hover:scale-105">
                <span className="relative z-10">Join the Story</span>
                <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 ease-out group-hover:scale-100 group-hover:bg-[#D4AF37]" />
              </button>
            </motion.div>
          </div>

          {/* Image Collage / Parallax */}
          <div className="w-full lg:w-1/2 relative h-[600px]">
            <motion.div 
              style={{ y: y1 }}
              className="absolute top-0 right-0 w-2/3 h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F4EFEA]/20"
            >
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop" 
                alt="Vintage Pharmacy" 
                className="w-full h-full object-cover filter sepia-[.5] contrast-125"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#711F25]/20 mix-blend-multiply" />
            </motion.div>

            <motion.div 
              style={{ y: y2 }}
              className="absolute bottom-0 left-0 w-3/4 h-[350px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#D4AF37]/30 z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop" 
                alt="Modern Dr Pepper" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A0F12] to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6">
                <span className="font-serif text-4xl font-bold text-[#F4EFEA] drop-shadow-lg">
                  The Legend Continues
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
