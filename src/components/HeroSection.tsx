import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const [fizzParticles, setFizzParticles] = useState<{ id: number; x: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    // Generate random fizz particles
    const particles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 3,
      size: Math.random() * 10 + 5,
    }));
    setFizzParticles(particles);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#3A0F12] flex items-center justify-center">
      {/* Background Video/Image Simulation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#711F25]/80 to-[#3A0F12] z-10 mix-blend-multiply" />
        <img 
          src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2070&auto=format&fit=crop" 
          alt="Carbonated beverage background" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Fizz Particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {fizzParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bottom-0 rounded-full bg-white/40 backdrop-blur-sm"
            style={{
              left: `${particle.x}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: ['0vh', '-100vh'],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center"
        style={{ y: y2, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-serif text-7xl md:text-9xl font-black text-[#F4EFEA] tracking-tighter leading-none mb-6 text-shadow-glow">
            There's Only One.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="font-sans text-xl md:text-3xl font-medium text-[#F4EFEA]/90 mb-12 tracking-wide uppercase">
            23 flavors. Infinite attitude.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <button className="group relative px-8 py-4 bg-[#F4EFEA] text-[#711F25] font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 flex items-center gap-2">
            <span className="relative z-10">Find Your Dr Pepper</span>
            <MapPin className="w-5 h-5 relative z-10" />
            <div className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 z-0" />
          </button>
          
          <button className="group px-8 py-4 text-[#F4EFEA] font-bold text-lg rounded-full border border-[#F4EFEA]/30 hover:bg-[#F4EFEA]/10 transition-colors flex items-center gap-2 glass-panel">
            Explore the Flavor Story
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-[#F4EFEA]/60 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs font-bold tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>

      {/* Parallax Bottle (Decorative) */}
      <motion.div 
        className="absolute -right-20 md:right-10 bottom-0 z-10 w-64 md:w-96 opacity-30 md:opacity-50 mix-blend-overlay"
        style={{ y: y1, rotate: 15 }}
      >
        <img 
          src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop" 
          alt="Dr Pepper Bottle Silhouette" 
          className="w-full h-auto filter contrast-200 grayscale"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
}
