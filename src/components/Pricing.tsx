import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Check, Zap } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Get Your SonicBuds Pro X
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Premium audio experience with professional features at an incredible value
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border-2 border-blue-500 shadow-2xl shadow-blue-500/25 relative overflow-hidden"
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-3xl" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                LIMITED TIME OFFER
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl text-gray-400 line-through mr-4">$249</span>
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
                >
                  $199
                </motion.span>
              </div>
              <p className="text-gray-400 text-lg">Save $50 - Ends Soon!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">What's Included:</h3>
                <ul className="space-y-3">
                  {[
                    "SonicBuds Pro X Earbuds",
                    "Premium Charging Case",
                    "3 Sizes of Ear Tips",
                    "USB-C Charging Cable",
                    "Quick Start Guide",
                    "2-Year Warranty"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">Key Features:</h3>
                <ul className="space-y-3">
                  {[
                    "Active Noise Cancellation",
                    "24-Hour Battery Life",
                    "IPX7 Water Resistance",
                    "Ultra-Low 60ms Latency",
                    "Bluetooth 5.3 Connection",
                    "Premium 12mm Drivers"
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="flex items-center text-gray-300"
                    >
                      <Zap className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-12 py-4 rounded-full font-bold text-xl transition-all duration-300 shadow-lg shadow-blue-500/25 mb-4 inline-flex items-center"
              >
                <ShoppingCart className="w-6 h-6 mr-3" />
                Order Now - $199
              </motion.button>
              
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Free Shipping
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  30-Day Returns
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  2-Year Warranty
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Payment options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Secure payment options available</p>
          <div className="flex items-center justify-center space-x-6">
            {['Visa', 'Mastercard', 'PayPal', 'Apple Pay'].map((payment, index) => (
              <div key={index} className="bg-gray-800 rounded-lg px-4 py-2 text-gray-300 text-sm font-medium border border-gray-700">
                {payment}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;