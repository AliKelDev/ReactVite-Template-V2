import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { Loader } from 'lucide-react';

const PreviewEmbed = ({ siteUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  return (
    <motion.div 
      className="w-full h-96 relative mt-6 rounded-lg border border-indigo-500/30 bg-indigo-950/90 backdrop-blur-sm overflow-hidden shadow-lg"
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-indigo-500/30 bg-indigo-900/20">
        <div className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-yellow-500" />
          <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex items-center gap-2">
          {isLoading && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Loader className="w-4 h-4 text-indigo-300" />
            </motion.div>
          )}
          <span className="text-sm text-indigo-300 font-mono truncate max-w-[200px]">
            {siteUrl}
          </span>
        </div>
      </div>
      
      <div className="relative w-full h-[calc(100%-2.5rem)]">
        <AnimatePresence>
          {isLoading && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-indigo-950/50 backdrop-blur-sm"
            >
              <div className="flex flex-col items-center gap-2">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: 360
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Loader className="w-8 h-8 text-indigo-500" />
                </motion.div>
                <span className="text-sm text-indigo-300 font-mono">Loading preview...</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {loadError ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-indigo-950/50 backdrop-blur-sm"
          >
            <div className="text-center px-4">
              <p className="text-red-400 font-mono mb-2">Preview unavailable</p>
              <p className="text-sm text-indigo-300">Please visit the site directly</p>
            </div>
          </motion.div>
        ) : (
          <iframe
            src={siteUrl}
            className="w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setLoadError(true);
              setIsLoading(false);
            }}
            title="Site Preview"
            sandbox="allow-scripts allow-same-origin"
          />
        )}
      </div>
    </motion.div>
  );
};

PreviewEmbed.propTypes = {
  siteUrl: PropTypes.string.isRequired,
};

export default PreviewEmbed;