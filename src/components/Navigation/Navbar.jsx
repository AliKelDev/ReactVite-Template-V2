import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed w-full border-b border-primary-500/30 backdrop-blur-sm z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary-950/90 shadow-lg shadow-primary-500/20' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="text-xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 text-transparent bg-clip-text"
            >
              Vite Template
            </Link>
          </motion.div>
          <div className="flex gap-6">
            {['Example 1', 'Example 2', 'Example 3'].map((item, index) => (
              <motion.div
                key={item}
                className="relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={`/exemple${index + 1}`}
                  className="text-primary-300 hover:text-primary-400 transition-colors"
                >
                  {item}
                </Link>
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;