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
  },
  {
    id: 4,
    title: 'Gamblers Paradise',
    excerpt: 'Analyzing the extravagant and psychological design of casino architecture.',
    date: 'Recent',
    readTime: '7 min read',
    category: 'Architecture'
  },
  {
    id: 5,
    title: 'Bury the Church… Not Your Faith.',
    excerpt: 'Thoughts on the evolution of sacred spaces and modern ecclesiastical design.',
    date: 'Recent',
    readTime: '6 min read',
    category: 'Thoughts'
  }
];

export function Blog() {
  return (
    <div className="pt-32 pb-20 bg-sage-100 relative z-10 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-sage-900 mb-6">
            Writing & Thoughts
          </h1>
          <p className="text-xl text-ink/60 font-light leading-relaxed">
            Insights on design, development, and the intersection of both. I write about my process, learnings, and industry trends.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group bg-paper rounded-none p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-sage-200/50 flex flex-col h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
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
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-sage-100">
                <span className="text-sm text-ink/50 font-medium">{post.readTime}</span>
                <div className="w-8 h-8 rounded-none bg-sage-100 flex items-center justify-center group-hover:bg-sage-800 group-hover:text-paper transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
