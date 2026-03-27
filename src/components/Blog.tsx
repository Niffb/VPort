import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'Building Your Own Escape',
    excerpt: 'Exploring the concept of personal sanctuaries and how architecture shapes our retreats.',
    date: 'Recent',
    readTime: '5 min read',
    category: 'Architecture'
  },
  {
    id: 2,
    title: '-XOXO, Paris',
    excerpt: 'A journey through the streets of Paris, observing its timeless architectural marvels and urban fabric.',
    date: 'Recent',
    readTime: '8 min read',
    category: 'Travel'
  },
  {
    id: 3,
    title: 'In Which Countries is the Religion “Eastern Orthodox” Orthodox?',
    excerpt: 'An exploration of religious architecture and its cultural significance across different nations.',
    date: 'Recent',
    readTime: '6 min read',
    category: 'Culture'
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-20 md:py-32 bg-sage-100 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-6xl font-serif font-medium text-sage-900 mb-4">
              Writing & Thoughts
            </h2>
            <p className="text-lg text-ink/60 max-w-md font-light">
              Insights on design, development, and the intersection of both.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 text-sage-800 font-medium hover:text-sage-600 transition-colors"
            >
              Read All Articles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group bg-paper rounded-none p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-sage-200/50"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-sage-600 bg-sage-100 px-3 py-1 rounded-none">
                  {post.category}
                </span>
                <span className="text-sm text-ink/50 font-light">{post.date}</span>
              </div>
              
              <h3 className="text-2xl font-serif font-medium text-sage-900 mb-4 group-hover:text-sage-600 transition-colors line-clamp-2">
                <Link to={`/blog/${post.id}`} className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-ink/70 font-light mb-8 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm text-ink/50 font-medium">{post.readTime}</span>
                <div className="w-8 h-8 rounded-none bg-sage-100 flex items-center justify-center group-hover:bg-sage-800 group-hover:text-paper transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
