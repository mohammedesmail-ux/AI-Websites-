import { motion } from 'motion/react';
import { useState } from 'react';

const FLAVORS = [
  'Amaretto', 'Almond', 'Blackberry', 'Black Licorice', 'Caramel', 'Carrot', 'Clove', 'Cherry', 'Cola', 'Ginger', 'Juniper', 'Lemon', 'Molasses', 'Nutmeg', 'Orange', 'Prune', 'Plum', 'Pepper', 'Root Beer', 'Rum', 'Raspberry', 'Tomato', 'Vanilla'
];

export default function FlavorExperience() {
  const [hoveredFlavor, setHoveredFlavor] = useState<string | null>(null);

  return (
    <section className="py-32 bg-[#F4EFEA] relative overflow-hidden">
      <div className="absolute inset-0 bg-texture pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-serif text-5xl md:text-7xl font-bold text-[#3A0F12] mb-6"
          >
            What's Your Flavor Mix?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="font-sans text-xl text-[#711F25] max-w-2xl mx-auto font-medium"
          >
            23 authentic flavors perfectly blended. Hover to explore the mystery.
          </motion.p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
          {FLAVORS.map((flavor, index) => (
            <motion.div
              key={flavor}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
              onHoverStart={() => setHoveredFlavor(flavor)}
              onHoverEnd={() => setHoveredFlavor(null)}
              className="relative aspect-square rounded-full flex items-center justify-center cursor-pointer group"
            >
              <div className="absolute inset-0 rounded-full border-2 border-[#711F25]/20 group-hover:border-[#711F25] transition-colors duration-300" />
              
              {/* Ripple Effect */}
              {hoveredFlavor === flavor && (
                <motion.div
                  layoutId="ripple"
                  className="absolute inset-0 rounded-full bg-[#711F25]/10"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1.2, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              <span className="font-sans text-xs md:text-sm font-bold text-[#3A0F12] text-center px-2 z-10 group-hover:scale-110 transition-transform duration-300">
                {flavor}
              </span>
            </motion.div>
          ))}
          
          {/* The 23rd Spot (Mystery) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 23 * 0.05, type: "spring", stiffness: 100 }}
            className="relative aspect-square rounded-full flex items-center justify-center cursor-pointer group bg-[#711F25]"
          >
            <span className="font-serif text-3xl font-bold text-[#F4EFEA] z-10 group-hover:scale-110 transition-transform duration-300">
              23
            </span>
          </motion.div>
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button className="px-10 py-4 bg-[#3A0F12] text-[#F4EFEA] font-bold text-lg rounded-full hover:bg-[#711F25] transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Discover the Legend
          </button>
        </motion.div>
      </div>
    </section>
  );
}
