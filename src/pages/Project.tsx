import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function Project() {
  const { id } = useParams();

  return (
    <div className="pt-32 pb-20 bg-paper relative z-10 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-800 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
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
            <span className="text-sm text-ink/50 font-light">2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-medium text-sage-900 mb-8 leading-tight">
            Project {id}
          </h1>
          
          <img src={`https://picsum.photos/seed/archmodel${id}/1200/800?blur=2`} alt="Project hero" className="rounded-none my-12 w-full object-cover aspect-[16/9]" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 prose prose-lg prose-sage max-w-none text-ink/80 font-light">
              <h2 className="text-2xl font-serif font-medium text-sage-900 mb-6">Project Overview</h2>
              <p className="mb-6">
                This is a placeholder for the project details. In a real application, you would fetch the project data based on the ID ({id}) from an API or a local data source.
              </p>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            
            <div>
              <div className="bg-sage-50 p-6 rounded-none">
                <h3 className="text-lg font-serif font-medium text-sage-900 mb-4">Project Details</h3>
                <ul className="space-y-4 text-sm font-light text-ink/70">
                  <li>
                    <strong className="block text-ink font-medium mb-1">Client</strong>
                    Private Client
                  </li>
                  <li>
                    <strong className="block text-ink font-medium mb-1">Location</strong>
                    London, UK
                  </li>
                  <li>
                    <strong className="block text-ink font-medium mb-1">Role</strong>
                    Architectural Designer
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
