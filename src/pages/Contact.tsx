import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Hammer, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { cn } from '../lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'contacts'), {
        ...data,
        status: 'new',
        createdAt: serverTimestamp(),
      });
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-wood-medium font-bold uppercase tracking-[0.3em] mb-4 block"
          >
            Get in Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-wood-dark mb-8"
          >
            Let's Build Something <br /> <span className="italic text-wood-medium">Extraordinary</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-wood-dark/70 max-w-3xl mx-auto leading-relaxed"
          >
            Whether you have a specific project in mind or just want to explore the possibilities, we are here to help. Contact us today for a free consultation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: <Phone />, title: 'Call Us', value: '+1 (555) 123-4567', desc: 'Mon-Fri, 9am-6pm' },
                { icon: <Mail />, title: 'Email Us', value: 'hello@mrwoody.com', desc: 'We reply within 24h' },
                { icon: <MapPin />, title: 'Visit Us', value: '123 Craftsmanship Way', desc: 'Woodville, WV 54321' },
                { icon: <Clock />, title: 'Working Hours', value: '9:00 AM - 6:00 PM', desc: 'Monday to Friday' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-wood-beige/30 p-8 rounded-[2rem] border border-wood-beige hover:border-wood-light transition-all group"
                >
                  <div className="w-12 h-12 bg-wood-dark text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-serif font-bold text-wood-dark mb-2">{item.title}</h4>
                  <p className="text-wood-dark font-bold mb-1">{item.value}</p>
                  <p className="text-sm text-wood-medium uppercase tracking-widest">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-wood-dark text-white p-12 rounded-[3rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-wood-medium/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 flex items-center gap-6">
                <div className="w-16 h-16 bg-wood-medium/20 text-wood-light rounded-2xl flex items-center justify-center shrink-0">
                  <MessageSquare size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-2">Prefer WhatsApp?</h3>
                  <p className="text-wood-light/70 mb-4">Chat with us directly for quick questions and instant updates.</p>
                  <a 
                    href="https://wa.me/15551234567" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-wood-light font-bold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Start Chat <Send size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-80 bg-wood-beige rounded-[3rem] overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
                alt="Map location" 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-wood-dark text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                  <MapPin size={32} />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl border border-wood-beige relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-wood-beige rounded-full -z-10"></div>
            
            <div className="mb-12">
              <h3 className="text-3xl font-serif font-bold text-wood-dark mb-4">Send a Message</h3>
              <p className="text-wood-dark/60">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-wood-medium">Full Name</label>
                  <input 
                    {...register('name')}
                    className={cn(
                      "w-full bg-wood-beige/30 border border-wood-beige rounded-2xl px-6 py-4 focus:outline-none focus:border-wood-medium transition-all",
                      errors.name && "border-red-500"
                    )}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-wood-medium">Email Address</label>
                  <input 
                    {...register('email')}
                    className={cn(
                      "w-full bg-wood-beige/30 border border-wood-beige rounded-2xl px-6 py-4 focus:outline-none focus:border-wood-medium transition-all",
                      errors.email && "border-red-500"
                    )}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-wood-medium">Phone (Optional)</label>
                  <input 
                    {...register('phone')}
                    className="w-full bg-wood-beige/30 border border-wood-beige rounded-2xl px-6 py-4 focus:outline-none focus:border-wood-medium transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-wood-medium">Service Interested In</label>
                  <select 
                    {...register('service')}
                    className={cn(
                      "w-full bg-wood-beige/30 border border-wood-beige rounded-2xl px-6 py-4 focus:outline-none focus:border-wood-medium transition-all appearance-none",
                      errors.service && "border-red-500"
                    )}
                  >
                    <option value="">Select a service</option>
                    <option value="Custom Furniture">Custom Furniture</option>
                    <option value="Kitchen Design">Kitchen Design</option>
                    <option value="Wooden Doors">Wooden Doors</option>
                    <option value="Interior Decoration">Interior Decoration</option>
                    <option value="Restoration">Restoration</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-wood-medium">Your Message</label>
                <textarea 
                  {...register('message')}
                  rows={5}
                  className={cn(
                    "w-full bg-wood-beige/30 border border-wood-beige rounded-2xl px-6 py-4 focus:outline-none focus:border-wood-medium transition-all resize-none",
                    errors.message && "border-red-500"
                  )}
                  placeholder="Tell us about your project..."
                />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-wood-dark text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-wood-medium transition-all shadow-xl disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>

              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 text-green-700 p-4 rounded-xl flex items-center gap-3"
                >
                  <CheckCircle2 size={20} />
                  <span className="font-medium">Message sent successfully! We'll get back to you soon.</span>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
