import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const socials = [
  { name: 'Instagram', href: '#' },
  { name: 'Podcast', href: '/podcast' },
  { name: 'Blog', href: '/blog' },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-sage-900 text-paper py-12 md:py-20 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-7xl font-serif font-medium mb-6 leading-tight">
              Let's talk <br />
              <span className="italic text-sage-400">architecture.</span>
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-xl md:text-2xl font-light hover:text-sage-300 transition-colors group"
            >
              Contact Me
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            className="flex flex-col md:items-end justify-end gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-sage-500 mb-2">Socials</h3>
              {socials.map((social) => {
                const isInternal = social.href.startsWith('/');
                return isInternal ? (
                  <Link
                    key={social.name}
                    to={social.href}
                    className="text-lg font-light hover:text-sage-300 transition-colors"
                  >
                    {social.name}
                  </Link>
                ) : (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-lg font-light hover:text-sage-300 transition-colors"
                  >
                    {social.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="pt-8 border-t border-sage-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-light text-sage-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} Aspiring Architects by Victoria Cornall.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-paper transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-paper transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sage-800/20 rounded-none blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
    </footer>
  );
}
