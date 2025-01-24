import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { slideUp, stagger } from '../../styles/animations';

const ProjectList = ({ projects }) => (
  <motion.div 
    className="mt-32"
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={stagger}
  >
    <motion.h2 
      className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-indigo-200 text-transparent bg-clip-text"
      variants={slideUp}
    >
      Example Projects
    </motion.h2>
    
    <motion.div 
      className="space-y-32"
      variants={stagger}
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </motion.div>
  </motion.div>
);

export default ProjectList;