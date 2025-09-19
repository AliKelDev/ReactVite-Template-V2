import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { ExternalLink } from 'lucide-react';
import { slideUp } from '../../styles/animations';

const TechCard = ({ title, desc, Icon, link }) => {
  const CardContent = () => (
    <>
      <div className="flex items-center justify-between mb-4">
        <Icon className="w-8 h-8 text-indigo-500 group-hover:text-indigo-400 transition-colors duration-200" />
        {link && (
          <ExternalLink className="w-4 h-4 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        )}
      </div>
      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-indigo-200 text-transparent bg-clip-text">
        {title}
      </h3>
      <p className="text-indigo-200">{desc}</p>
    </>
  );

  if (link) {
    return (
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-6 rounded-lg border border-indigo-500/30 bg-indigo-900/10 backdrop-blur-sm group cursor-pointer"
        whileHover={{
          borderColor: "rgba(99, 102, 241, 0.4)"
        }}
        variants={slideUp}
      >
        <CardContent />
      </motion.a>
    );
  }

  return (
    <motion.div
      className="p-6 rounded-lg border border-indigo-500/30 bg-indigo-900/10 backdrop-blur-sm group"
      whileHover={{
        borderColor: "rgba(99, 102, 241, 0.4)"
      }}
      variants={slideUp}
    >
      <CardContent />
    </motion.div>
  );
};

TechCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  link: PropTypes.string,
};

export default TechCard;