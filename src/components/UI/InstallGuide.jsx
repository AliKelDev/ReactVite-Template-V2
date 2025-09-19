import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { slideUp, stagger } from '../../styles/animations';

const InstallGuide = () => (
  <motion.div 
    className="max-w-2xl mx-auto my-12 px-4"
    variants={slideUp}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
  >
    <div className="rounded-lg border border-primary-500/30 bg-primary-950/90 backdrop-blur-sm overflow-hidden shadow-xl shadow-primary-500/20">
      <motion.div 
        className="flex items-center px-4 py-2 border-b border-primary-500/30 bg-primary-900/20"
        whileHover={{ backgroundColor: "rgba(79, 70, 229, 0.3)" }}
      >
        <div className="flex items-center gap-2">
          <motion.div 
            whileHover={{ scale: 1.2 }} 
            className="w-3 h-3 rounded-full bg-red-500"
            whileTap={{ scale: 0.9 }}
          />
          <motion.div 
            whileHover={{ scale: 1.2 }} 
            className="w-3 h-3 rounded-full bg-yellow-500"
            whileTap={{ scale: 0.9 }}
          />
          <motion.div 
            whileHover={{ scale: 1.2 }} 
            className="w-3 h-3 rounded-full bg-green-500"
            whileTap={{ scale: 0.9 }}
          />
        </div>
      </motion.div>
      <div className="p-6 font-mono text-sm">
        <motion.div variants={stagger}>
          <motion.p variants={slideUp} className="text-primary-300 mb-4"># Clone the repository</motion.p>
          <motion.p variants={slideUp} className="text-emerald-400 mb-4">$ git clone https://github.com/AliKelDev/ReactVite-Template-V2.git</motion.p>

          <motion.p variants={slideUp} className="text-primary-300 mb-4"># Install dependencies</motion.p>
          <motion.p variants={slideUp} className="text-emerald-400 mb-4">$ cd ReactVite-Template-V2<br />$ npm install</motion.p>

          <motion.p variants={slideUp} className="text-primary-300 mb-4"># Start development server</motion.p>
          <motion.p variants={slideUp} className="text-emerald-400 mb-4">$ npm run dev</motion.p>

          <motion.p variants={slideUp} className="text-primary-300 mb-4"># Build and deploy</motion.p>
          <motion.p variants={slideUp} className="text-emerald-400">$ npm run build<br />$ npm run deploy</motion.p>
        </motion.div>
      </div>
    </div>
    <motion.div 
      className="text-center mt-4"
      variants={slideUp}
    >
      <a 
        href="https://aliceleiserblog.netlify.app/blog/how-to-build-your-professional-website-in-10-minutes"
        className="text-primary-300 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group"
      >
        <span className="relative">
          For detailed instructions, check out my blog
          <motion.span 
            className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 transform scale-x-0 origin-left transition-transform duration-300"
            whileHover={{ scaleX: 1 }}
          />
        </span>
        <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  </motion.div>
);

export default InstallGuide;