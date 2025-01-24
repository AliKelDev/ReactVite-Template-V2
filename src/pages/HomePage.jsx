// src/pages/HomePage.jsx
import { motion } from "framer-motion";
import { Heart, Github, Code } from "lucide-react";
import InstallGuide from "../components/UI/InstallGuide";
import ProjectList from "../components/Projects/ProjectList";
import { projects } from "../data/projects";
import { slideUp, stagger } from "../styles/animations";
// adding this to do a commit

const HomePage = () => {
  return (
    <>
      <motion.div 
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <ActionButtons />
      </motion.div>

      <InstallGuide />

      <ProjectList projects={projects} />
    </>
  );
};

const Header = () => (
  <>
    <motion.div
      className="inline-flex items-center gap-4 mb-6"
      whileHover={{ scale: 1.05 }}
    >
      <motion.span 
        className="text-6xl font-bold bg-gradient-to-r from-white to-indigo-200 text-transparent bg-clip-text"
        initial={{ backgroundPosition: "0%" }}
        whileHover={{ backgroundPosition: "100%" }}
        transition={{ duration: 0.5 }}
      >
        React Vite Template
      </motion.span>
      <AnimatedHeart />
    </motion.div>

    <motion.p 
      className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto"
      variants={slideUp}
    >
      A modern, feature-rich template for building React applications with Vite. 
      Get started in minutes with pre-configured tools and best practices.
    </motion.p>
  </>
);

const ActionButtons = () => (
  <motion.div 
    className="flex justify-center gap-4"
    variants={stagger}
    initial="initial"
    animate="animate"
  >
    {[
      { href: "https://github.com/AliKelDev", Icon: Github, text: "View on GitHub" },
      { href: "https://github.com/AliKelDev/ReactViteTemplate", Icon: Code, text: "Use Template" }
    ].map((link, index) => (
      <motion.a
        key={index}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-indigo-300 hover:text-white transition-colors px-6 py-3 rounded-lg border border-indigo-500/30 hover:border-indigo-400 bg-indigo-900/20 hover:bg-indigo-800/30 backdrop-blur-sm"
        variants={slideUp}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <link.Icon className="w-5 h-5" />
        <span>{link.text}</span>
      </motion.a>
    ))}
  </motion.div>
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
    <Heart className="w-12 h-12 text-indigo-500 hover:text-indigo-400 transition-colors" />
  </motion.div>
);

export default HomePage;