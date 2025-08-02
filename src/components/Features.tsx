import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Shield, Mic, Battery, Droplets } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay, direction = 'left' }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        x: direction === 'left' ? -100 : 100,
        scale: 0.8
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0,
        scale: 1
      } : {}}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>
      
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
        {description}
      </p>
    </motion.div>
  );
};

const Features = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const features = [
    {
      icon: Shield,
      title: "Active Noise Cancellation",
      description: "Advanced ANC technology blocks up to 95% of external noise, creating your perfect audio sanctuary wherever you are.",
      direction: 'left'
    },
    {
      icon: Mic,
      title: "Crystal Clear Mic & ENC",
      description: "Environmental Noise Cancellation ensures your voice comes through crisp and clear on every call, even in noisy environments.",
      direction: 'right'
    },
    {
      icon: Battery,
      title: "24-Hour Battery Life",
      description: "All-day listening with 8 hours in the buds plus 16 hours in the case. Fast charging gives you 2 hours of playback in just 15 minutes.",
      direction: 'left'
    },
    {
      icon: Droplets,
      title: "Sweat & Water Resistant",
      description: "IPX7 rating means your SonicBuds can handle intense workouts, rain, and splashes without missing a beat.",
      direction: 'right'
    }
  ];

  return (
    <section ref={ref} className="relative py-24 px-4 bg-gradient-to-b from-black to-gray-900">
      <motion.div style={{ y }} className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every detail designed to elevate your audio experience to unprecedented heights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Animated battery visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <div className="relative">
              <div className="w-20 h-10 border-2 border-gray-400 rounded-md">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1 }}
                  className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-sm"
                />
              </div>
              <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-4 bg-gray-400 rounded-r-sm" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-white">24 Hours</div>
              <div className="text-sm text-gray-400">Total Battery Life</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;