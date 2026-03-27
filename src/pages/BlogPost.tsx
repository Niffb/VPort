import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function BlogPost() {
  const { id } = useParams();

  return (
    <div className="pt-32 pb-20 bg-paper relative z-10 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-800 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-sage-600 bg-sage-100 px-3 py-1 rounded-none">
              Architecture
            </span>
            <span className="text-sm text-ink/50 font-light">Recent • 5 min read</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-medium text-sage-900 mb-8 leading-tight">
            Blog Post {id}
          </h1>
          
          <div className="prose prose-lg prose-sage max-w-none text-ink/80 font-light">
            <p className="lead text-xl text-ink/70 mb-8">
              This is a placeholder for the blog post content. In a real application, you would fetch the post data based on the ID ({id}) from an API or a local data source.
            </p>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h2 className="text-2xl font-serif font-medium text-sage-900 mt-12 mb-6">The Intersection of Design and Function</h2>
            <p className="mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <img src="https://picsum.photos/seed/archblog/1200/600?blur=2" alt="Blog post image" className="rounded-none my-12 w-full object-cover aspect-[2/1]" />
            <p className="mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
