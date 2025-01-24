import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => (
  <motion.footer 
    className="w-full border-t border-indigo-500/30 bg-indigo-950/90 backdrop-blur-sm py-8 mt-32"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    <div className="max-w-6xl mx-auto px-4 text-center text-indigo-300">
      <p className="flex items-center justify-center gap-2">
        Made with <Heart className="w-4 h-4 text-indigo-500" /> by{" "}
        <a 
          href="https://github.com/AliKelDev" 
          className="hover:text-indigo-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          AliKelDev
        </a>
      </p>
      <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
    </div>
  </motion.footer>
);

export default Footer;