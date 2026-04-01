import { motion } from 'motion/react';
import { ChevronRight, Info } from 'lucide-react';
import { useState } from 'react';

const PRODUCTS = [
  {
    id: 'original',
    name: 'Dr Pepper Original',
    desc: 'The authentic blend of 23 flavors.',
    color: '#711F25',
    img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop', // Placeholder
    nutrition: '150 Calories | 40g Sugar',
  },
  {
    id: 'zero',
    name: 'Dr Pepper Zero Sugar',
    desc: 'Zero sugar, infinite attitude.',
    color: '#1A1A1A',
    img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop&grayscale=1', // Placeholder
    nutrition: '0 Calories | 0g Sugar',
  },
  {
    id: 'cherry',
    name: 'Dr Pepper Cherry',
    desc: 'A kiss of cherry flavor.',
    color: '#A11D2A',
    img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop', // Placeholder
    nutrition: '160 Calories | 42g Sugar',
  },
  {
    id: 'strawberries',
    name: 'Strawberries & Cream',
    desc: 'Smooth, sweet, and creamy.',
    color: '#E5989B',
    img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop', // Placeholder
    nutrition: '150 Calories | 39g Sugar',
  },
];

export default function ProductShowcase() {
  const [activeProduct, setActiveProduct] = useState(PRODUCTS[0]);
  const [showNutrition, setShowNutrition] = useState(false);

  return (
    <section className="py-32 bg-[#3A0F12] text-[#F4EFEA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Product Image / 3D Can Simulation */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, x: -50, rotateY: -90 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: 50, rotateY: 90 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              className="relative w-64 h-96 md:w-80 md:h-[500px] cursor-grab active:cursor-grabbing"
              whileHover={{ scale: 1.05, rotateZ: 5 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
            >
              <div 
                className="absolute inset-0 rounded-[2rem] shadow-2xl overflow-hidden border-4 border-[#F4EFEA]/10"
                style={{ backgroundColor: activeProduct.color }}
              >
                <img 
                  src={activeProduct.img} 
                  alt={activeProduct.name}
                  className="w-full h-full object-cover mix-blend-overlay opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                <div className="absolute bottom-8 left-0 right-0 text-center px-4">
                  <h3 className="font-serif text-3xl font-bold text-white mb-2 text-shadow-glow">
                    {activeProduct.name}
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Nutrition Toggle */}
            <button 
              onClick={() => setShowNutrition(!showNutrition)}
              className="absolute top-4 right-4 md:-right-12 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <Info className="w-6 h-6" />
            </button>

            {showNutrition && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-20 right-4 md:-right-20 bg-white text-[#3A0F12] p-4 rounded-xl shadow-xl w-48 z-20"
              >
                <h4 className="font-bold text-sm mb-2 uppercase tracking-wider">Nutrition Facts</h4>
                <p className="text-sm">{activeProduct.nutrition}</p>
              </motion.div>
            )}
          </div>

          {/* Product Selection */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-5xl md:text-6xl font-bold mb-6"
              >
                Find Your Flavor
              </motion.h2>
              <p className="font-sans text-xl text-[#F4EFEA]/80">
                {activeProduct.desc}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {PRODUCTS.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setActiveProduct(product)}
                  className={`flex items-center justify-between p-6 rounded-2xl transition-all duration-300 border-2 ${
                    activeProduct.id === product.id 
                      ? 'border-[#F4EFEA] bg-[#F4EFEA]/10 scale-105' 
                      : 'border-transparent hover:border-[#F4EFEA]/30 hover:bg-[#F4EFEA]/5'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-6 h-6 rounded-full shadow-inner" 
                      style={{ backgroundColor: product.color }}
                    />
                    <span className="font-sans font-bold text-xl">{product.name}</span>
                  </div>
                  {activeProduct.id === product.id && (
                    <motion.div layoutId="arrow">
                      <ChevronRight className="w-6 h-6" />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 py-5 bg-[#F4EFEA] text-[#3A0F12] font-bold text-xl rounded-full w-full shadow-[0_0_30px_rgba(244,239,234,0.3)] hover:shadow-[0_0_40px_rgba(244,239,234,0.5)] transition-shadow"
            >
              Locate Near You
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
