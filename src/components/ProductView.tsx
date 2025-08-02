import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RotateCcw } from 'lucide-react';

const ProductView = () => {
  const [rotation, setRotation] = useState(0);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section ref={ref} className="relative py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            360° Product View
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Explore every angle of the SonicBuds Pro X with our interactive view
          </p>
          <div className="flex items-center justify-center space-x-2 text-blue-400">
            <RotateCcw className="w-5 h-5" />
            <span className="text-sm">Scroll to rotate</span>
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            style={{ rotateY }}
            className="w-96 h-96 mx-auto relative perspective-1000"
          >
            {/* Main earbud body */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-300 to-gray-500 rounded-full shadow-2xl transform-gpu">
              {/* Inner chamber */}
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-gray-800 to-black rounded-full shadow-inner">
                <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-1 bg-blue-400 rounded-full opacity-50"
                  />
                </div>
              </div>
              
              {/* Charging contacts */}
              <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2">
                <div className="w-3 h-3 bg-gold-400 rounded-full"></div>
              </div>
              <div className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2">
                <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
              </div>
              <div className="absolute bottom-1/4 right-1/3 transform translate-x-1/2">
                <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
              </div>
            </div>

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-emerald-400/20 to-blue-400/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Floating specs */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute top-1/4 left-0 bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 border border-gray-700"
          >
            <div className="text-sm text-gray-300">Driver Size</div>
            <div className="text-xl font-bold text-white">12mm</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="absolute top-1/3 right-0 bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 border border-gray-700"
          >
            <div className="text-sm text-gray-300">Weight</div>
            <div className="text-xl font-bold text-white">4.2g</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 border border-gray-700"
          >
            <div className="text-sm text-gray-300">Bluetooth</div>
            <div className="text-xl font-bold text-white">5.3</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductView;