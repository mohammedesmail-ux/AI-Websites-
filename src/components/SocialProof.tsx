import { motion } from 'motion/react';
import { Play, Heart, MessageCircle } from 'lucide-react';

const SOCIAL_POSTS = [
  { id: 1, type: 'video', likes: '1.2M', comments: '45K', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400&auto=format&fit=crop' },
  { id: 2, type: 'image', likes: '890K', comments: '12K', img: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=400&auto=format&fit=crop' },
  { id: 3, type: 'video', likes: '2.4M', comments: '88K', img: 'https://images.unsplash.com/photo-1516280440502-a2fc9979e208?q=80&w=400&auto=format&fit=crop' },
  { id: 4, type: 'image', likes: '500K', comments: '8K', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop' },
];

export default function SocialProof() {
  return (
    <section className="py-32 bg-[#1A1A1A] text-[#F4EFEA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl font-bold mb-6"
          >
            Fans Don't Explain It.<br/>
            <span className="text-[#711F25]">They Crave It.</span>
          </motion.h2>
          <p className="font-sans text-xl text-[#F4EFEA]/70 max-w-2xl mx-auto">
            From late-night gaming sessions to festival main stages, Dr Pepper is the fuel for the culture.
          </p>
        </div>

        {/* TikTok-style vertical clips layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {SOCIAL_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={post.img} 
                alt="Fan content" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              
              {post.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#711F25]/80 transition-colors">
                    <Play className="w-5 h-5 text-white fill-white ml-1" />
                  </div>
                </div>
              )}

              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1 text-sm font-bold">
                    <Heart className="w-4 h-4 fill-current" /> {post.likes}
                  </div>
                  <div className="flex items-center gap-1 text-sm font-bold">
                    <MessageCircle className="w-4 h-4 fill-current" /> {post.comments}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#711F25] to-[#D4AF37] p-[2px]">
                  <div className="w-full h-full rounded-full bg-black" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-transparent border-2 border-[#F4EFEA] text-[#F4EFEA] font-bold text-lg rounded-full hover:bg-[#F4EFEA] hover:text-[#1A1A1A] transition-colors"
          >
            Share Your Pepper Moment
          </motion.button>
        </div>

      </div>
    </section>
  );
}
