import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Spatial Exploration Model',
    category: 'Physical Modeling',
    image: 'https://picsum.photos/seed/archmodel1/800/600?blur=2',
    link: '#',
    year: '2025'
  },
  {
    id: 2,
    title: 'Urban Pavilion',
    category: 'Conceptual Design',
    image: 'https://picsum.photos/seed/pavilion2/800/600?blur=2',
    link: '#',
    year: '2024'
  },
  {
    id: 3,
    title: 'Site Analysis: Portsmouth',
    category: 'Research & Mapping',
    image: 'https://picsum.photos/seed/mapping3/800/600?blur=2',
    link: '#',
    year: '2024'
  },
  {
    id: 4,
    title: 'Light & Shadow Studies',
    category: 'Sketching & Drafting',
    image: 'https://picsum.photos/seed/sketch4/800/600?blur=2',
    link: '#',
    year: '2023'
  }
];

export function Work() {
  return (
    <section id="work" className="py-20 md:py-32 bg-paper relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-6xl font-serif font-medium text-sage-900 mb-4">
              Selected Work
            </h2>
            <p className="text-lg text-ink/60 max-w-md font-light">
              A collection of projects focused on minimal design, smooth interactions, and robust engineering.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 text-sage-800 font-medium hover:text-sage-600 transition-colors"
            >
              View All Projects
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group relative flex flex-col`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={`/portfolio/${project.id}`} className="block overflow-hidden rounded-none bg-sage-100 mb-6 relative aspect-[4/3]">
                <div className="absolute inset-0 bg-sage-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </Link>
              
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-medium text-sage-900 mb-2 group-hover:text-sage-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-ink/60 font-light">{project.category}</p>
                </div>
                <span className="text-sm font-medium text-sage-500 bg-sage-100 px-3 py-1 rounded-none">
                  {project.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
