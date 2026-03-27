import { motion } from 'motion/react';
import { Play, Headphones, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const episodes = [
  {
    id: 1,
    title: 'Ep 04: Surviving First Year Architecture',
    description: 'Tips, tricks, and late-night studio stories from a first-year architecture student at Portsmouth.',
    date: 'Oct 20, 2025',
    duration: '45 min',
    image: 'https://picsum.photos/seed/archpod1/400/400?blur=2'
  },
  {
    id: 2,
    title: 'Ep 03: "Less is a bore" vs "Less is more"',
    description: 'A deep dive into the contrasting philosophies of Robert Venturi and Ludwig Mies Van Der Rohe.',
    date: 'Oct 05, 2025',
    duration: '52 min',
    image: 'https://picsum.photos/seed/archpod2/400/400?blur=2'
  },
  {
    id: 3,
    title: 'Ep 02: Travel Diaries - Paris Architecture',
    description: 'Discussing the urban planning of Haussmann and the hidden architectural gems of Paris.',
    date: 'Sep 15, 2025',
    duration: '38 min',
    image: 'https://picsum.photos/seed/archpod3/400/400?blur=2'
  },
  {
    id: 4,
    title: 'Ep 01: Why I Chose Architecture',
    description: 'My journey from Spain to England, and what inspired me to pursue a degree in architecture.',
    date: 'Aug 30, 2025',
    duration: '41 min',
    image: 'https://picsum.photos/seed/archpod4/400/400?blur=2'
  }
];

export function Podcast() {
  return (
    <div className="pt-32 pb-20 bg-paper relative z-10 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <Headphones className="w-8 h-8 text-sage-600" />
            <h1 className="text-5xl md:text-7xl font-serif font-medium text-sage-900">
              Aura Podcast
            </h1>
          </div>
          <p className="text-xl text-ink/60 font-light leading-relaxed">
            Conversations on design, technology, and the creative process. Tune in for weekly insights and interviews.
          </p>
          
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-sage-900 text-paper rounded-none font-medium hover:bg-sage-800 transition-colors flex items-center gap-2">
              <Play className="w-4 h-4" /> Listen on Spotify
            </button>
            <button className="px-6 py-3 bg-transparent border border-sage-300 text-sage-900 rounded-none font-medium hover:bg-sage-100 transition-colors">
              Apple Podcasts
            </button>
          </div>
        </motion.div>

        <div className="space-y-8">
          {episodes.map((episode, index) => (
            <motion.div
              key={episode.id}
              className="group bg-sage-100/50 rounded-none p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center border border-sage-200/50 hover:bg-sage-100 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={`/podcast/${episode.id}`} className="w-full md:w-48 h-48 shrink-0 rounded-none overflow-hidden relative block">
                <div className="absolute inset-0 bg-sage-900/20 group-hover:bg-sage-900/10 transition-colors duration-300 z-10 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-none bg-paper/90 backdrop-blur-sm flex items-center justify-center text-sage-900 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play className="w-5 h-5 ml-1" />
                  </div>
                </div>
                <img 
                  src={episode.image} 
                  alt={episode.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </Link>
              
              <div className="flex-grow">
                <div className="flex items-center gap-4 mb-3 text-sm text-sage-600 font-medium">
                  <span>{episode.date}</span>
                  <span className="w-1 h-1 rounded-none bg-sage-400" />
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {episode.duration}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-sage-900 mb-4 group-hover:text-sage-700 transition-colors">
                  <Link to={`/podcast/${episode.id}`} className="focus:outline-none">
                    {episode.title}
                  </Link>
                </h3>
                
                <p className="text-ink/70 font-light text-lg max-w-2xl">
                  {episode.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
