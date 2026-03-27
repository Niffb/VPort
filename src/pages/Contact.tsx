import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-32 pb-20 bg-paper relative z-10 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-20 max-w-3xl"
        >
          <h1 className="text-4xl md:text-7xl font-serif font-medium text-sage-900 mb-6 italic leading-tight">
            Get in touch.
          </h1>
          <p className="text-lg md:text-xl text-ink/60 font-light leading-relaxed">
            Have a question, a project idea, or just want to say hello? I'd love to hear from you. 
            Fill out the form below or reach out via email.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-10"
          >
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-sage-500 mb-6">Contact Details</h3>
              <div className="flex flex-col gap-6">
                <a href="mailto:vickycornall1@example.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-none bg-sage-100 flex items-center justify-center text-sage-600 group-hover:bg-sage-600 group-hover:text-paper transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-ink/40 font-light">Email</p>
                    <p className="text-lg font-medium text-sage-900">vickycornall1@example.com</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-none bg-sage-100 flex items-center justify-center text-sage-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-ink/40 font-light">Phone</p>
                    <p className="text-lg font-medium text-sage-900">+44 (0) 123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-none bg-sage-100 flex items-center justify-center text-sage-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-ink/40 font-light">Studio</p>
                    <p className="text-lg font-medium text-sage-900">Portsmouth, United Kingdom</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-sage-500 mb-6">Socials</h3>
              <div className="flex gap-6">
                <a href="#" className="text-lg font-medium text-sage-900 hover:text-sage-600 transition-colors">Instagram</a>
                <a href="/podcast" className="text-lg font-medium text-sage-900 hover:text-sage-600 transition-colors">Podcast</a>
                <a href="/blog" className="text-lg font-medium text-sage-900 hover:text-sage-600 transition-colors">Blog</a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <form className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-sage-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-sage-50 border border-sage-200 focus:outline-none focus:border-sage-500 transition-colors rounded-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-sage-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 bg-sage-50 border border-sage-200 focus:outline-none focus:border-sage-500 transition-colors rounded-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-sage-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 bg-sage-50 border border-sage-200 focus:outline-none focus:border-sage-500 transition-colors rounded-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-sage-700">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 bg-sage-50 border border-sage-200 focus:outline-none focus:border-sage-500 transition-colors rounded-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sage-800 text-paper font-medium hover:bg-sage-900 transition-all group"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
