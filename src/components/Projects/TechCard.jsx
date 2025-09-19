import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { slideUp } from '../../styles/animations';

const TechCard = ({ title, desc, Icon }) => (
  <motion.div 
    className="p-6 rounded-lg border border-indigo-500/30 bg-indigo-900/10 backdrop-blur-sm group"
    whileHover={{ 
      scale: 1.05,
      borderColor: "rgba(99, 102, 241, 0.5)",
      backgroundColor: "rgba(79, 70, 229, 0.2)"
    }}
    variants={slideUp}
  >
    <motion.div
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      <Icon className="w-8 h-8 text-indigo-500 mb-4 group-hover:text-indigo-400 transition-colors" />
    </motion.div>
    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-indigo-200 text-transparent bg-clip-text">
      {title}
    </h3>
    <p className="text-indigo-200 group-hover:text-white transition-colors">{desc}</p>
  </motion.div>
);

TechCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
};

export default TechCard;