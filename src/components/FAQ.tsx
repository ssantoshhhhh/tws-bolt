import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden"
    >
      <motion.button
        onClick={onToggle}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors"
        whileHover={{ backgroundColor: "rgba(55, 65, 81, 0.3)" }}
      >
        <h3 className="text-lg font-semibold text-white pr-4">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          {isOpen ? (
            <Minus className="w-6 h-6 text-blue-400" />
          ) : (
            <Plus className="w-6 h-6 text-blue-400" />
          )}
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-gray-300 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0]));

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqs = [
    {
      question: "How does the Active Noise Cancellation work?",
      answer: "SonicBuds Pro X uses advanced ANC technology with multiple microphones to detect external noise and generate inverse sound waves, effectively canceling up to 95% of ambient noise. This creates a quiet, immersive listening environment perfect for music, calls, or focus."
    },
    {
      question: "What's the actual battery life in real-world usage?",
      answer: "With ANC on, you'll get 8 hours from the earbuds plus 16 hours from the case (24 hours total). With ANC off, this extends to 10 hours + 20 hours. Fast charging provides 2 hours of playback with just 15 minutes of charging."
    },
    {
      question: "Are they really waterproof for swimming?",
      answer: "SonicBuds Pro X has IPX7 rating, making them highly water-resistant for workouts, rain, and splashes. However, they're not designed for swimming or full submersion. They can handle sweat, light rain, and accidental spills without issues."
    },
    {
      question: "How's the call quality and microphone performance?",
      answer: "The built-in microphones feature Environmental Noise Cancellation (ENC) technology that isolates your voice from background noise. This ensures crystal-clear call quality even in noisy environments like cafes, streets, or offices."
    },
    {
      question: "Do they work well for gaming and watching videos?",
      answer: "Absolutely! With ultra-low 60ms latency, SonicBuds Pro X provides seamless audio sync for gaming and video streaming. The Bluetooth 5.3 connection ensures stable, high-quality audio transmission without lag."
    },
    {
      question: "What's included in the box and what's the warranty?",
      answer: "Each package includes the SonicBuds Pro X earbuds, premium charging case, 3 sizes of ear tips, USB-C cable, and quick start guide. We provide a comprehensive 2-year warranty covering manufacturing defects and performance issues."
    }
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get answers to common questions about SonicBuds Pro X features and performance
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems.has(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;