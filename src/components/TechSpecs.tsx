import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Zap, Bluetooth, HeadphonesIcon, Clock } from 'lucide-react';

const SpecCard = ({ icon: Icon, title, value, description, delay }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotateY: -90, scale: 0.8 }}
      animate={isInView ? { opacity: 1, rotateY: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer transform-gpu"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>
      
      <h3 className="text-lg font-semibold text-gray-300 mb-2">
        {title}
      </h3>
      
      <div className="text-3xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
        {value}
      </div>
      
      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
        {description}
      </p>
    </motion.div>
  );
};

const TechSpecs = () => {
  const specs = [
    {
      icon: HeadphonesIcon,
      title: "Driver Size",
      value: "12mm",
      description: "Premium titanium-coated drivers deliver exceptional clarity across all frequencies"
    },
    {
      icon: Bluetooth,
      title: "Bluetooth Version",
      value: "5.3",
      description: "Latest Bluetooth technology ensures stable connection and lower power consumption"
    },
    {
      icon: Zap,
      title: "Low Latency",
      value: "60ms",
      description: "Ultra-low latency for seamless gaming and video streaming experience"
    },
    {
      icon: Clock,
      title: "Charging Time",
      value: "1.5hrs",
      description: "Fast charging technology gets you back to your music quickly"
    }
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Technical Excellence
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cutting-edge specifications that push the boundaries of wireless audio technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, index) => (
            <SpecCard
              key={index}
              {...spec}
              delay={index * 0.15}
            />
          ))}
        </div>

        {/* Performance comparison chart */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Performance Metrics
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Frequency Response", value: "20Hz - 20kHz", percentage: 95 },
              { label: "Signal-to-Noise Ratio", value: "≥100dB", percentage: 88 },
              { label: "Battery Efficiency", value: "24h Total", percentage: 92 }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-semibold text-gray-300 mb-2">
                  {metric.label}
                </div>
                <div className="text-2xl font-bold text-white mb-4">
                  {metric.value}
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full"
                  />
                </div>
                <div className="text-sm text-gray-400">
                  {metric.percentage}% Performance
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechSpecs;