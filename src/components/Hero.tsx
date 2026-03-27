import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const springX = useSpring(mousePosition.x, { stiffness: 50, damping: 20 });
  const springY = useSpring(mousePosition.y, { stiffness: 50, damping: 20 });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-sage-900">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block py-1 px-3 rounded-none bg-sage-800 text-sage-100 text-sm font-medium mb-6 tracking-wide uppercase">
              Architecture Student & Blogger
            </span>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-7xl lg:text-8xl font-serif font-medium text-paper leading-tight mb-6 md:mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Victoria <br className="md:block" />
            <span className="italic text-sage-400">Cornall.</span>
          </motion.h1>
          
          <motion.div
            className="text-base md:text-xl text-paper/80 max-w-2xl mx-auto mb-10 md:mb-12 font-light leading-relaxed space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm md:text-lg opacity-60">
              "Less is more." — Ludwig Mies Van Der Rohe<br/>
              "Less is a bore." — Robert Venturi
            </p>
            <p>
              I am a first-year architecture student at the University of Portsmouth, sharing my thoughts on architecture, travel, and design.
            </p>
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-6 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/portfolio"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-paper text-sage-900 rounded-none font-medium hover:bg-sage-100 transition-all duration-300 w-full sm:w-auto"
            >
              View Selected Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent border border-paper/30 text-paper rounded-none font-medium hover:bg-paper/10 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs text-sage-300 uppercase tracking-widest font-medium">Scroll</span>
        <motion.div
          className="w-[1px] h-12 bg-sage-800 relative overflow-hidden"
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-paper"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
