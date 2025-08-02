import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowLeftRight } from 'lucide-react';

const Comparison = () => {
  const [activeModel, setActiveModel] = useState(0);

  const models = [
    {
      name: "SonicBuds Pro X",
      price: "$199",
      features: {
        anc: true,
        battery: "24h",
        bluetooth: "5.3",
        waterproof: "IPX7",
        drivers: "12mm",
        latency: "60ms"
      },
      color: "from-blue-500 to-emerald-500"
    },
    {
      name: "SonicBuds Pro",
      price: "$149",
      features: {
        anc: true,
        battery: "20h",
        bluetooth: "5.2",
        waterproof: "IPX5",
        drivers: "10mm",
        latency: "80ms"
      },
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "SonicBuds Basic",
      price: "$99",
      features: {
        anc: false,
        battery: "16h",
        bluetooth: "5.0",
        waterproof: "IPX4",
        drivers: "8mm",
        latency: "120ms"
      },
      color: "from-gray-600 to-gray-700"
    }
  ];

  const featureLabels = {
    anc: "Active Noise Cancellation",
    battery: "Battery Life",
    bluetooth: "Bluetooth Version",
    waterproof: "Water Resistance",
    drivers: "Driver Size",
    latency: "Audio Latency"
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Compare Models
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Find the perfect SonicBuds for your needs and budget
          </p>
          <div className="flex items-center justify-center space-x-2 text-blue-400">
            <ArrowLeftRight className="w-5 h-5" />
            <span className="text-sm">Drag to compare</span>
          </div>
        </motion.div>

        {/* Model selector */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-800 rounded-full p-2 border border-gray-700">
            {models.map((model, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveModel(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeModel === index
                    ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {model.name.split(' ').pop()}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 transition-all duration-500 ${
                index === 0 
                  ? 'border-blue-500 transform scale-105 shadow-2xl shadow-blue-500/25' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              {index === 0 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    FLAGSHIP
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{model.name}</h3>
                <div className={`text-4xl font-bold bg-gradient-to-r ${model.color} bg-clip-text text-transparent`}>
                  {model.price}
                </div>
              </div>

              <div className="space-y-4">
                {Object.entries(featureLabels).map(([key, label]) => (
                  <div key={key} className="flex items-center justify-between py-2 border-b border-gray-700">
                    <span className="text-gray-300 text-sm">{label}</span>
                    <div className="flex items-center">
                      {typeof model.features[key] === 'boolean' ? (
                        model.features[key] ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <X className="w-5 h-5 text-red-500" />
                        )
                      ) : (
                        <span className="text-white font-semibold">{model.features[key]}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full mt-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg'
                    : 'border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white'
                }`}
              >
                {index === 0 ? 'Order Now' : 'Learn More'}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;