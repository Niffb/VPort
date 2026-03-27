import { motion } from 'motion/react';

export function BackgroundShapes() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-60">
      {/* Large organic shape top left */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-none bg-sage-300/40 mix-blend-multiply filter blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Large organic shape bottom right */}
      <motion.div
        className="absolute -bottom-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-none bg-sage-200/50 mix-blend-multiply filter blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Medium organic shape center */}
      <motion.div
        className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] rounded-none bg-sage-100/60 mix-blend-multiply filter blur-3xl"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* SVG Wavy Lines mimicking the image */}
      <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
        <motion.path
          d="M-100,100 C200,400 300,-100 600,500 S800,100 1200,800"
          fill="none"
          stroke="var(--color-sage-900)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.path
          d="M-50,800 C300,600 200,100 500,300 S900,900 1200,200"
          fill="none"
          stroke="var(--color-sage-900)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.path
          d="M300,-100 C400,300 100,600 400,900 S700,400 1000,1000"
          fill="none"
          stroke="var(--color-sage-900)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 3.5, ease: "easeInOut", delay: 1 }}
        />
      </svg>
    </div>
  );
}
