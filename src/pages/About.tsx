import { motion } from 'motion/react';

export function About() {
  return (
    <div className="pt-32 pb-20 bg-paper relative z-10 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl md:text-7xl font-serif font-medium text-sage-900 mb-8 italic leading-tight">
              Who am I? <br />
              What is this?
            </h1>
            
            <div className="aspect-[3/4] md:aspect-[3/4] bg-sage-100 overflow-hidden relative mb-8 lg:mb-0">
               <img 
                src="https://picsum.photos/seed/about-vicky/800/1000?grayscale" 
                alt="Victoria Cornall" 
                className="object-cover w-full h-full mix-blend-multiply opacity-80"
              />
              <div className="absolute inset-0 bg-sage-900/10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8 text-lg text-ink/70 font-light leading-relaxed"
          >
            <p>
              Photos can never fully capture the essence of a place, which is why I am privileged to have experienced great architecture first hand. I am an avid traveller, and the first time I visited St. Petersburg in 2008, I was immersed into its culture; it eventually felt homely, but I never appreciated the country's hidden beauty in its structures until much later, when I fell in love with architecture. To me, each building is a story told through St. Petersburg's rich history.
            </p>
            
            <p>
              With this blog, I wish to delve into more depth about architecture, like the history behind movements, where certain styles come from, and how architecture has generally evolved with time. Many of these blog posts are inspired from my travels, and I will try to use my original photographs that I have taken. The best part about travelling, is seeing how culture influences a country’s architecture, particularly how they have adopted certain styles and have been influenced by others.
            </p>

            <p>
              Not only do I love to travel, but I also dabble in sketches when I do, to really appreciate a country’s beauty and capture it’s essence. Drawing is not the only creative thing I enjoy, my school in sixth form offered a program called young enterprise whence I was elected for the role of operations director, taking charge of the production process, bespoke coasters crafted with my own unique design. This work developed my CAD knowledge in digitising our coaster designs to be cut on a laser cutter using a 2D design program. Using CAD in this way not only gave me a head start, but confirmed architecture was for me.
            </p>

            <p>
              Since taking Design Technology in year 7, I knew I wanted a career in design, but as time passed, I figured I had a particular interest in architecture. Now, I am a first year, finally studying my dream course (architecture) at the university of Portsmouth. Born in 2005, in Santiago De La Ribera, Spain, where I lived for two years before moving to England. My nationality is half English, half Russian, and I am very proud of my heritage. While I am fluent in English, I can speak a moderate amount of Spanish, Russian, and German. Speaking the native language when travelling, I have found to be incredibly useful, and will learn more as I plan to venture to other places.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
