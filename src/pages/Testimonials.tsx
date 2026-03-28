import { motion } from 'motion/react';
import { Star, Quote, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  { id: 1, name: 'Sarah Johnson', role: 'Homeowner', content: 'Mr Woody transformed our living room with a custom oak library. The attention to detail is simply unmatched. It has become the centerpiece of our home.', rating: 5, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop' },
  { id: 2, name: 'Michael Chen', role: 'Architect', content: 'As an architect, I have high standards for craftsmanship. Mr Woody is the only craftsman I trust for premium wooden interiors. Their technical precision is flawless.', rating: 5, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop' },
  { id: 3, name: 'Elena Rodriguez', role: 'Interior Designer', content: 'Their ability to bring complex designs to life is incredible. Truly the best in the business. Every project we have collaborated on has been a success.', rating: 5, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop' },
  { id: 4, name: 'David Thompson', role: 'Restaurateur', content: 'We commissioned custom walnut tables for our new restaurant. The quality and finish are exceptional, and they have held up beautifully under heavy use.', rating: 5, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop' },
  { id: 5, name: 'Amanda White', role: 'Real Estate Developer', content: 'The custom entrance doors Mr Woody created for our luxury development added significant value and prestige to the properties. Highly recommended.', rating: 5, img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop' },
  { id: 6, name: 'Robert Miller', role: 'Collector', content: 'The restoration of my antique mahogany desk was handled with incredible care and expertise. It looks exactly as it did when it was first made.', rating: 5, img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop' },
];

export default function Testimonials() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-wood-medium font-bold uppercase tracking-[0.3em] mb-4 block"
          >
            Client Reviews
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-wood-dark mb-8"
          >
            Voices of Satisfaction
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-wood-dark/70 max-w-3xl mx-auto leading-relaxed"
          >
            We take pride in every project we undertake. Here is what some of our valued clients have to say about their experience with Mr Woody.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {testimonials.map((t, i) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i % 3 * 0.1 }}
              className="bg-white p-12 rounded-[3rem] shadow-xl border border-wood-beige hover:border-wood-light transition-all group relative"
            >
              <Quote className="absolute top-10 right-10 text-wood-beige w-16 h-16 opacity-50" />
              
              <div className="flex gap-1 mb-8">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-wood-medium text-wood-medium" />
                ))}
              </div>

              <p className="text-xl text-wood-dark/80 italic mb-10 leading-relaxed relative z-10">
                "{t.content}"
              </p>

              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-wood-beige">
                  <img 
                    src={t.img} 
                    alt={t.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-wood-dark">{t.name}</h4>
                  <p className="text-sm text-wood-medium font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-wood-dark text-white rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-wood-medium/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-wood-light/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-6xl font-serif font-bold">Join Our List of Happy Clients</h2>
            <p className="text-xl text-wood-light/70 leading-relaxed">
              Every project is a new opportunity for us to demonstrate our commitment to excellence. Let us create something extraordinary for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/contact" 
                className="bg-wood-light text-wood-dark px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all shadow-2xl w-full sm:w-auto"
              >
                Start Your Project
              </Link>
              <Link 
                to="/portfolio" 
                className="text-white border border-white/30 px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white/10 transition-all w-full sm:w-auto flex items-center gap-3"
              >
                View Our Work <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
