import { motion } from 'framer-motion';
import Navbar from '../Navigation/Navbar';
import Footer from '../Navigation/Footer';

const MainLayout = ({ children }) => {
  return (
    <motion.div 
      className="min-h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900 via-indigo-950 to-black text-white"
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

export default MainLayout;