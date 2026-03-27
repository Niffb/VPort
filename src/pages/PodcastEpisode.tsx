import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Clock, Headphones } from 'lucide-react';

export function PodcastEpisode() {
  const { id } = useParams();

  return (
    <div className="pt-32 pb-20 bg-paper relative z-10 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <Link to="/podcast" className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-800 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Podcast
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
            <div className="w-full md:w-1/3 shrink-0 rounded-2xl overflow-hidden shadow-lg">
              <img src={`https://picsum.photos/seed/archpod${id}/800/800?blur=2`} alt="Podcast cover" className="w-full h-auto object-cover aspect-square" />
            </div>
            
            <div className="flex-grow">
              <div className="flex items-center gap-4 mb-4 text-sm text-sage-600 font-medium">
                <span className="bg-sage-100 px-3 py-1 rounded-full">Episode {id}</span>
                <span>Oct 20, 2025</span>
                <span className="w-1 h-1 rounded-full bg-sage-400" />
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> 45 min
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif font-medium text-sage-900 mb-6 leading-tight">
                Surviving First Year Architecture
              </h1>
              
              <p className="text-xl text-ink/70 font-light mb-8">
                Tips, tricks, and late-night studio stories from a first-year architecture student at Portsmouth.
              </p>
              
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-sage-900 text-paper rounded-full font-medium hover:bg-sage-800 transition-colors flex items-center gap-3 text-lg">
                  <Play className="w-5 h-5" /> Play Episode
                </button>
              </div>
            </div>
          </div>
          
          <div className="prose prose-lg prose-sage max-w-none text-ink/80 font-light border-t border-sage-200 pt-12">
            <h2 className="text-2xl font-serif font-medium text-sage-900 mb-6">Show Notes</h2>
            <p className="mb-6">
              In this episode, we dive deep into the realities of starting an architecture degree. From the initial shock of studio culture to finding your footing in design crits, we cover it all.
            </p>
            <h3 className="text-xl font-serif font-medium text-sage-900 mt-8 mb-4">Topics Discussed:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>The transition from A-Levels to University</li>
              <li>Essential tools and materials for first years</li>
              <li>Managing time and avoiding all-nighters</li>
              <li>Understanding the critique process</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
