import { motion } from 'framer-motion';
import { Github, Code } from 'lucide-react';
import { slideUp, stagger } from '../../styles/animations';

const ActionButtons = () => (
  <motion.div
    className="flex justify-center gap-4"
    variants={stagger}
    initial="initial"
    animate="animate"
  >
    {[
      { href: "https://github.com/AliKelDev", Icon: Github, text: "View on GitHub" },
      { href: "https://github.com/AliKelDev/ReactVite-Template-V2", Icon: Code, text: "Use Template" }
    ].map((link, index) => (
      <motion.a
        key={index}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-primary-300 hover:text-white transition-colors px-6 py-3 rounded-lg border border-primary-500/30 hover:border-primary-400 bg-primary-900/20 hover:bg-primary-800/30 backdrop-blur-sm"
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

export default ActionButtons;