import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Custom Furniture',
    description: 'Bespoke pieces designed to fit your unique space and style. From dining tables to bedroom sets, we craft furniture that tells your story.',
    benefits: ['Unique design', 'Premium wood selection', 'Precision joinery', 'Lifetime durability'],
    img: 'https://images.unsplash.com/photo-1577146333359-b9fdd3b3cad0?q=80&w=2070&auto=format&fit=crop',
    reverse: false
  },
  {
    title: 'Kitchen Design',
    description: 'Transform your kitchen into a masterpiece of wood craftsmanship. We combine modern functionality with the timeless beauty of natural wood.',
    benefits: ['Ergonomic layout', 'Custom cabinetry', 'Integrated appliances', 'Hand-finished surfaces'],
    img: 'https://images.unsplash.com/photo-1556911223-e296e7407175?q=80&w=2070&auto=format&fit=crop',
    reverse: true
  },
  {
    title: 'Wooden Doors',
    description: 'Make a grand entrance with custom-crafted doors. Our doors are built for security, insulation, and stunning visual impact.',
    benefits: ['Solid wood construction', 'Weather resistance', 'Custom hardware', 'Artistic detailing'],
    img: 'https://images.unsplash.com/photo-1506377247377-2a5b3b0ca7ef?q=80&w=2070&auto=format&fit=crop',
    reverse: false
  },
  {
    title: 'Interior Decoration',
    description: 'Elevate your interior with wooden wall paneling, ceiling beams, and decorative elements that add warmth and luxury to any room.',
    benefits: ['Acoustic improvement', 'Thermal insulation', 'Timeless aesthetics', 'Increased property value'],
    img: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=2070&auto=format&fit=crop',
    reverse: true
  },
  {
    title: 'Restoration',
    description: 'Breathe new life into antique or damaged wood pieces. Our restoration experts preserve the history while restoring the beauty.',
    benefits: ['Historical accuracy', 'Structural repair', 'Refinishing', 'Preservation techniques'],
    img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop',
    reverse: false
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-wood-medium font-bold uppercase tracking-[0.3em] mb-4 block"
          >
            Our Services
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-wood-dark mb-8"
          >
            Excellence in Every Detail
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-wood-dark/70 max-w-3xl mx-auto leading-relaxed"
          >
            We offer a comprehensive range of wood craftsmanship services, each delivered with the highest standards of quality and artistry.
          </motion.p>
        </div>

        <div className="space-y-32">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row items-center gap-16 ${service.reverse ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 space-y-8">
                <h2 className="text-4xl font-serif font-bold text-wood-dark">{service.title}</h2>
                <p className="text-lg text-wood-dark/70 leading-relaxed">{service.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-center gap-3 text-wood-dark font-medium">
                      <CheckCircle2 className="text-wood-medium" size={20} />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link 
                    to="/contact" 
                    className="bg-wood-dark text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-wood-medium transition-all inline-flex items-center gap-3"
                  >
                    Request a Quote <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="flex-1 relative group">
                <div className="absolute -inset-4 bg-wood-beige rounded-[2rem] -z-10 group-hover:scale-105 transition-transform duration-500"></div>
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full aspect-[4/3] object-cover rounded-[2rem] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
