import { motion } from 'framer-motion';
import { ExternalLink, Terminal } from 'lucide-react';
import TechCard from './TechCard';
import PreviewEmbed from '../UI/PreviewEmbed';
import { slideUp, stagger, scaleIn } from '../../styles/animations';

const ProjectCard = ({ project }) => (
  <motion.div 
    className="relative"
    variants={scaleIn}
  >
    <motion.div 
      className="rounded-xl border border-indigo-500/30 bg-indigo-900/10 backdrop-blur-sm overflow-hidden shadow-xl hover:shadow-indigo-500/20 transition-shadow"
      whileHover={{ 
        borderColor: "rgba(99, 102, 241, 0.5)",
        backgroundColor: "rgba(79, 70, 229, 0.2)"
      }}
    >
      <div className="p-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="lg:w-1/2"
            variants={slideUp}
          >
            <motion.div className="flex flex-wrap gap-4 mb-8">
              <motion.a 
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg font-mono text-lg group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative">Visit Site</span>
                <ExternalLink className="w-5 h-5 relative transform group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
            <PreviewEmbed siteUrl={project.previewUrl} />
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            variants={slideUp}
          >
            <motion.div 
              className="flex items-center gap-2 mb-4"
              whileHover={{ x: 10 }}
            >
              <Terminal className="text-indigo-500" />
              <span className="font-mono text-xl bg-gradient-to-r from-indigo-400 to-indigo-600 text-transparent bg-clip-text">
                {project.client}
              </span>
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 text-transparent bg-clip-text"
              whileHover={{ x: 10 }}
            >
              {project.title}
            </motion.h2>
            <motion.p 
              className="text-lg text-indigo-200 mb-8"
              whileHover={{ x: 10 }}
            >
              {project.description}
            </motion.p>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={stagger}
            >
              {project.technologies.map((tech, idx) => (
                <TechCard key={idx} {...tech} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default ProjectCard;