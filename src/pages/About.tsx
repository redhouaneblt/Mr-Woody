import { motion } from 'motion/react';
import { Hammer, Star, Shield, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="flex-1 space-y-8">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-wood-medium font-bold uppercase tracking-[0.3em] mb-4 block"
            >
              Our Story
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif font-bold text-wood-dark leading-tight"
            >
              Crafting Legacies <br /> Since 1998
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-wood-dark/70 leading-relaxed"
            >
              Mr Woody began as a small family workshop with a single lathe and a deep passion for the natural beauty of wood. Today, we are a premier destination for luxury wood craftsmanship, blending traditional techniques with modern design.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-wood-dark/60 leading-relaxed"
            >
              Our mission is to create timeless pieces that honor the material and the space they inhabit. Every project is a collaboration between our master craftsmen and our clients, ensuring a result that is as unique as the wood itself.
            </motion.p>
          </div>

          <div className="flex-1 relative group">
            <div className="absolute -inset-6 bg-wood-beige rounded-[3rem] -z-10 group-hover:scale-105 transition-transform duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=2070&auto=format&fit=crop" 
              alt="Workshop" 
              className="w-full aspect-[4/5] object-cover rounded-[3rem] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-wood-dark text-white rounded-[3rem] p-12 md:p-20 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-wood-medium/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-wood-light/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Hammer />, title: 'Artistry', desc: 'We believe in the power of hand-crafted details and artistic expression.' },
              { icon: <Shield />, title: 'Integrity', desc: 'Honesty in our materials, our pricing, and our relationships.' },
              { icon: <Star />, title: 'Excellence', desc: 'Striving for perfection in every joint, every finish, and every project.' },
              { icon: <Clock />, title: 'Legacy', desc: 'Creating pieces that will be cherished for generations to come.' },
            ].map((value, i) => (
              <div key={i} className="space-y-6 text-center md:text-left">
                <div className="w-14 h-14 bg-wood-medium/20 text-wood-light rounded-2xl flex items-center justify-center mx-auto md:mx-0">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold">{value.title}</h3>
                <p className="text-wood-light/60 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="text-wood-medium font-bold uppercase tracking-[0.3em] mb-4 block">The Founder</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-dark">Wood in the Blood</h2>
            <p className="text-lg text-wood-dark/70 leading-relaxed italic">
              "Wood is a living material. It has a memory, a character, and a soul. My job is to listen to what the wood wants to become and help it get there."
            </p>
            <p className="text-lg text-wood-dark/60 leading-relaxed">
              Arthur "Woody" Miller founded the company with a vision of bringing back the respect for traditional carpentry in a world of mass production. With over 40 years of experience, he still oversees every major project that leaves the workshop.
            </p>
            <div className="pt-4">
              <h4 className="text-xl font-serif font-bold text-wood-dark">Arthur Miller</h4>
              <p className="text-wood-medium font-medium uppercase tracking-widest text-sm">Founder & Master Craftsman</p>
            </div>
          </div>

          <div className="flex-1 relative group">
            <div className="absolute -inset-6 bg-wood-beige rounded-[3rem] -z-10 group-hover:scale-105 transition-transform duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1541888941259-79d74e821c24?q=80&w=2070&auto=format&fit=crop" 
              alt="Arthur Miller" 
              className="w-full aspect-square object-cover rounded-[3rem] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
