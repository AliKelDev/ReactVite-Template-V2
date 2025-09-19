import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { slideUp } from '../../styles/animations';

const Header = () => (
  <>
    <motion.div
      className="inline-flex items-center gap-4 mb-6"
      whileHover={{ scale: 1.05 }}
    >
      <motion.span
        className="text-6xl font-bold bg-gradient-to-r from-white to-primary-200 text-transparent bg-clip-text"
        initial={{ backgroundPosition: "0%" }}
        whileHover={{ backgroundPosition: "100%" }}
        transition={{ duration: 0.5 }}
      >
        React Vite Template
      </motion.span>
      <AnimatedHeart />
    </motion.div>

    <motion.p
      className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto"
      variants={slideUp}
    >
      A modern, feature-rich template for building React applications with Vite.
      Get started in minutes with pre-configured tools and best practices.
    </motion.p>
  </>
);

const AnimatedHeart = () => (
  <motion.div
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 10, -10, 0]
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }}
  >
    <Heart className="w-12 h-12 text-primary-500 hover:text-primary-400 transition-colors" />
  </motion.div>
);

export default Header;