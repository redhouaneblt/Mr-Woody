import { motion } from 'motion/react';
import { Hammer, Star, Clock, Shield, ChevronRight, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=2070&auto=format&fit=crop" 
        alt="Wood craftsmanship" 
        className="w-full h-full object-cover brightness-50"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-wood-dark/40 via-transparent to-wood-dark/60"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-block text-wood-light font-bold uppercase tracking-[0.3em] mb-6"
      >
        Premium Wood Craftsmanship
      </motion.span>
      
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-[1.1]"
      >
        Crafting <span className="italic text-wood-light">Elegance</span> <br /> 
        From Nature's Finest
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed"
      >
        Bespoke furniture, luxury kitchens, and custom woodwork designed to last a lifetime. Where traditional artistry meets modern luxury.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-6"
      >
        <Link 
          to="/contact" 
          className="bg-wood-light text-wood-dark px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all shadow-2xl hover:scale-105"
        >
          Get a Quote
        </Link>
        <Link 
          to="/portfolio" 
          className="text-white border border-white/30 px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2"
        >
          View Portfolio <ArrowRight size={18} />
        </Link>
      </motion.div>
    </div>

    {/* Scroll Indicator */}
    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
    >
      <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
        <div className="w-1 h-2 bg-white/50 rounded-full"></div>
      </div>
    </motion.div>
  </section>
);

const TrustIndicators = () => (
  <section className="bg-wood-beige py-12 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { label: 'Years Experience', value: '25+' },
        { label: 'Projects Completed', value: '1,200+' },
        { label: 'Happy Clients', value: '950+' },
        { label: 'Awards Won', value: '15' },
      ].map((stat, i) => (
        <div key={i} className="text-center">
          <div className="text-3xl md:text-4xl font-serif font-bold text-wood-dark mb-1">{stat.value}</div>
          <div className="text-sm text-wood-medium font-medium uppercase tracking-widest">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
);

const ServicesOverview = () => {
  const services = [
    { title: 'Custom Furniture', icon: <Hammer />, desc: 'One-of-a-kind pieces tailored to your style and space.' },
    { title: 'Kitchen Design', icon: <Star />, desc: 'Luxury wooden kitchens that blend functionality with beauty.' },
    { title: 'Wooden Doors', icon: <Shield />, desc: 'Grand entrances and interior doors crafted for durability.' },
    { title: 'Interior Decoration', icon: <Clock />, desc: 'Complete wooden wall paneling and decorative elements.' },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-wood-medium font-bold uppercase tracking-widest mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-dark">Mastering the Art of Wood</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 bg-wood-beige/30 rounded-3xl border border-wood-beige hover:border-wood-light transition-all group"
            >
              <div className="w-14 h-14 bg-wood-dark text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-wood-dark">{service.title}</h3>
              <p className="text-wood-dark/70 leading-relaxed mb-6">{service.desc}</p>
              <Link to="/services" className="text-wood-medium font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ChevronRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => (
  <section className="py-24 px-6 bg-wood-dark text-white overflow-hidden relative">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <img 
          src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop" 
          alt="Workshop" 
          className="rounded-3xl shadow-2xl relative z-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-wood-medium/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-wood-light/10 rounded-full blur-3xl"></div>
      </div>

      <div className="space-y-8">
        <div>
          <span className="text-wood-light font-bold uppercase tracking-widest mb-4 block">Why Mr Woody?</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Uncompromising Quality in Every Grain</h2>
          <p className="text-wood-light/70 leading-relaxed text-lg">
            We don't just build furniture; we create heirlooms. Our process combines centuries-old techniques with modern precision to deliver results that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            { title: 'Sustainable Sourcing', desc: 'We only use ethically harvested, premium hardwoods.' },
            { title: 'Lifetime Guarantee', desc: 'Our craftsmanship is backed by a commitment to durability.' },
            { title: 'Bespoke Design', desc: 'Every project is uniquely designed for your specific needs.' },
            { title: 'Expert Team', desc: 'Master carpenters with decades of specialized experience.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-wood-medium/20 flex items-center justify-center shrink-0">
                <div className="w-2 h-2 bg-wood-light rounded-full"></div>
              </div>
              <div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-wood-light/60 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const PortfolioPreview = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <span className="text-wood-medium font-bold uppercase tracking-widest mb-4 block">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-dark">Recent Masterpieces</h2>
        </div>
        <Link to="/portfolio" className="text-wood-dark font-bold border-b-2 border-wood-medium pb-1 hover:text-wood-medium transition-colors">
          View All Projects
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'Oak Dining Table', cat: 'Furniture', img: 'https://images.unsplash.com/photo-1577146333359-b9fdd3b3cad0?q=80&w=2070&auto=format&fit=crop' },
          { title: 'Modern Walnut Kitchen', cat: 'Kitchen', img: 'https://images.unsplash.com/photo-1556911223-e296e7407175?q=80&w=2070&auto=format&fit=crop' },
          { title: 'Classic Entrance Door', cat: 'Doors', img: 'https://images.unsplash.com/photo-1506377247377-2a5b3b0ca7ef?q=80&w=2070&auto=format&fit=crop' },
        ].map((project, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-3xl aspect-[4/5]"
          >
            <img 
              src={project.img} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/90 via-wood-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <span className="text-wood-light text-sm font-bold uppercase tracking-widest mb-2">{project.cat}</span>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">{project.title}</h3>
              <Link to="/portfolio" className="w-12 h-12 bg-white text-wood-dark rounded-full flex items-center justify-center hover:bg-wood-light transition-colors">
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 px-6 bg-wood-beige">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-wood-medium font-bold uppercase tracking-widest mb-4 block">Testimonials</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-dark">What Our Clients Say</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: 'Sarah Johnson', role: 'Homeowner', content: 'Mr Woody transformed our living room with a custom oak library. The attention to detail is simply unmatched.' },
          { name: 'Michael Chen', role: 'Architect', content: 'As an architect, I have high standards. Mr Woody is the only craftsman I trust for premium wooden interiors.' },
          { name: 'Elena Rodriguez', role: 'Interior Designer', content: 'Their ability to bring complex designs to life is incredible. Truly the best in the business.' },
        ].map((t, i) => (
          <div key={i} className="bg-white p-10 rounded-3xl shadow-xl relative">
            <Quote className="absolute top-8 right-8 text-wood-beige w-12 h-12" />
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-wood-medium text-wood-medium" />)}
            </div>
            <p className="text-wood-dark/80 italic mb-8 leading-relaxed">"{t.content}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-wood-beige rounded-full flex items-center justify-center font-bold text-wood-dark">
                {t.name[0]}
              </div>
              <div>
                <h4 className="font-bold text-wood-dark">{t.name}</h4>
                <p className="text-xs text-wood-medium uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const LeadCapture = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-5xl mx-auto bg-wood-dark rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-wood-medium/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-wood-light/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Ready to Start Your Project?</h2>
        <p className="text-wood-light/70 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Contact us today for a free consultation and quote. Let's bring your vision to life with the beauty of wood.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            to="/contact" 
            className="bg-wood-light text-wood-dark px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all shadow-2xl w-full sm:w-auto"
          >
            Get a Quote
          </Link>
          <a 
            href="tel:+15551234567" 
            className="text-white border border-white/30 px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white/10 transition-all w-full sm:w-auto"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="pt-0">
      <Hero />
      <TrustIndicators />
      <ServicesOverview />
      <WhyChooseUs />
      <PortfolioPreview />
      <Testimonials />
      <LeadCapture />
    </div>
  );
}
