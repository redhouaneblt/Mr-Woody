import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';

const projects = [
  { id: 1, title: 'Oak Dining Table', category: 'Furniture', img: 'https://images.unsplash.com/photo-1577146333359-b9fdd3b3cad0?q=80&w=2070&auto=format&fit=crop', desc: 'A hand-crafted solid oak dining table designed for a modern farmhouse interior.' },
  { id: 2, title: 'Modern Walnut Kitchen', category: 'Kitchen', img: 'https://images.unsplash.com/photo-1556911223-e296e7407175?q=80&w=2070&auto=format&fit=crop', desc: 'A complete kitchen overhaul featuring custom walnut cabinetry and integrated appliances.' },
  { id: 3, title: 'Classic Entrance Door', category: 'Doors', img: 'https://images.unsplash.com/photo-1506377247377-2a5b3b0ca7ef?q=80&w=2070&auto=format&fit=crop', desc: 'A grand entrance door made from reclaimed teak with hand-forged iron hardware.' },
  { id: 4, title: 'Wooden Wall Paneling', category: 'Decoration', img: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=2070&auto=format&fit=crop', desc: 'Custom geometric wall paneling for a luxury office space.' },
  { id: 5, title: 'Restored Antique Desk', category: 'Restoration', img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop', desc: 'A 19th-century mahogany desk restored to its former glory.' },
  { id: 6, title: 'Minimalist Coffee Table', category: 'Furniture', img: 'https://images.unsplash.com/photo-1530018607912-eff2df114f11?q=80&w=2070&auto=format&fit=crop', desc: 'A simple yet elegant coffee table made from a single slab of cherry wood.' },
];

const categories = ['All', 'Furniture', 'Kitchen', 'Doors', 'Decoration', 'Restoration'];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-wood-medium font-bold uppercase tracking-[0.3em] mb-4 block"
          >
            Our Portfolio
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-wood-dark mb-8"
          >
            Masterpieces in Wood
          </motion.h1>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                filter === cat 
                  ? 'bg-wood-dark text-white shadow-xl' 
                  : 'bg-wood-beige text-wood-dark hover:bg-wood-light/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/5] cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/90 via-wood-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <span className="text-wood-light text-sm font-bold uppercase tracking-widest mb-2">{project.category}</span>
                  <h3 className="text-3xl font-serif font-bold text-white mb-6">{project.title}</h3>
                  <div className="w-14 h-14 bg-white text-wood-dark rounded-full flex items-center justify-center hover:bg-wood-light transition-colors">
                    <ArrowRight size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-wood-dark/90 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-[3rem] overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col lg:flex-row relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white hover:text-wood-dark transition-all"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={24} />
                </button>

                <div className="flex-1 h-[40vh] lg:h-auto">
                  <img 
                    src={selectedProject.img} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex-1 p-12 lg:p-16 overflow-y-auto space-y-8">
                  <div>
                    <span className="text-wood-medium font-bold uppercase tracking-widest mb-2 block">{selectedProject.category}</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-dark">{selectedProject.title}</h2>
                  </div>
                  
                  <p className="text-xl text-wood-dark/70 leading-relaxed">
                    {selectedProject.desc}
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-bold text-wood-dark uppercase tracking-widest text-sm">Project Details</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-wood-medium block">Material</span>
                        <span className="font-bold text-wood-dark">Premium Solid Wood</span>
                      </div>
                      <div>
                        <span className="text-wood-medium block">Duration</span>
                        <span className="font-bold text-wood-dark">4-6 Weeks</span>
                      </div>
                      <div>
                        <span className="text-wood-medium block">Craftsman</span>
                        <span className="font-bold text-wood-dark">Arthur Miller</span>
                      </div>
                      <div>
                        <span className="text-wood-medium block">Location</span>
                        <span className="font-bold text-wood-dark">Private Residence</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8">
                    <button className="bg-wood-dark text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-wood-medium transition-all w-full">
                      Inquire About Similar Project
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
