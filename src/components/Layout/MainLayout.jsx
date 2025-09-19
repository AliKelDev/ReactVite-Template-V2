import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Navbar from '../Navigation/Navbar';
import Footer from '../Navigation/Footer';

const MainLayout = ({ children }) => {
  return (
    <motion.div 
      className="min-h-screen w-full bg-page-gradient from-primary-900 via-primary-950 to-black text-white"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-32">
        {children}
      </main>
      <Footer />
    </motion.div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;