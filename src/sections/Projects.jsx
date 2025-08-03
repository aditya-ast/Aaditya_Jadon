import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";
const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space py-12 md:py-16 lg:py-20"
      id="project"
    >
      {/* Simple and Dynamic Header - Left Aligned */}
      <div className="relative mb-16 text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          {/* Clean heading */}
          <h2 className="projects-heading text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-white">My Selected </span>
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
              Projects
            </span>
          </h2>
          
          {/* Simple animated underline */}
          <motion.div
            className="flex justify-start"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
          </motion.div>
          
          {/* Subtitle */}
          <motion.p
            className="projects-heading text-lg text-neutral-400 max-w-2xl mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Showcasing innovation, creativity, and technical excellence
          </motion.p>
          
          {/* Dynamic badges at the end */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex items-center space-x-3 mt-8"
          >
            <motion.span
              className="projects-badge px-3 py-2 text-sm font-medium bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-400"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                opacity: [0.8, 1, 0.8],
                y: [0, -2, 0]
              }}
              transition={{ 
                opacity: { duration: 2, repeat: Infinity },
                y: { duration: 3, repeat: Infinity }
              }}
            >
              🚀 Portfolio
            </motion.span>
            <motion.span
              className="projects-badge px-3 py-2 text-sm font-medium bg-purple-500/10 border border-purple-400/30 rounded-full text-purple-400"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                opacity: [0.8, 1, 0.8],
                y: [0, -2, 0]
              }}
              transition={{ 
                opacity: { duration: 2, repeat: Infinity, delay: 0.5 },
                y: { duration: 3, repeat: Infinity, delay: 0.5 }
              }}
            >
              💼 {myProjects.length} Projects
            </motion.span>
            <motion.span
              className="projects-badge px-3 py-2 text-sm font-medium bg-emerald-500/10 border border-emerald-400/30 rounded-full text-emerald-400"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                opacity: [0.8, 1, 0.8],
                y: [0, -2, 0]
              }}
              transition={{ 
                opacity: { duration: 2, repeat: Infinity, delay: 1 },
                y: { duration: 3, repeat: Infinity, delay: 1 }
              }}
            >
              ⭐ Featured
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
