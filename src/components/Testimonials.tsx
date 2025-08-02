import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial, delay, direction = 'left' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
    >
      <div className="flex items-center mb-6">
        <Quote className="w-8 h-8 text-blue-400 mr-3" />
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
      </div>
      
      <p className="text-gray-300 text-lg mb-6 leading-relaxed group-hover:text-white transition-colors">
        "{testimonial.review}"
      </p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-white">{testimonial.name}</div>
          <div className="text-gray-400 text-sm">{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Audio Engineer",
      review: "The sound quality is absolutely phenomenal. The ANC is the best I've experienced in any earbuds, and the battery life exceeds expectations."
    },
    {
      name: "Marcus Johnson",
      role: "Fitness Enthusiast",
      review: "Perfect for workouts! They stay secure during intense sessions, and the sweat resistance is impressive. The sound keeps me motivated."
    },
    {
      name: "Emily Rodriguez",
      role: "Remote Worker",
      review: "Crystal clear calls and amazing noise cancellation make these perfect for working from anywhere. The comfort level is unmatched."
    },
    {
      name: "David Kim",
      role: "Musician",
      review: "As a professional musician, I'm extremely picky about audio quality. These earbuds deliver studio-grade sound in a portable package."
    },
    {
      name: "Lisa Thompson",
      role: "Travel Blogger",
      review: "Essential for long flights! The ANC blocks out engine noise completely, and the battery lasts through international trips."
    },
    {
      name: "Alex Chen",
      role: "Gamer",
      review: "Ultra-low latency makes gaming incredible. No audio delay, perfect for competitive gaming and streaming content."
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
            What People Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of satisfied customers who've elevated their audio experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              delay={index * 0.15}
              direction={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "50K+", label: "Happy Customers" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "99%", label: "Satisfaction Rate" },
            { value: "24/7", label: "Customer Support" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700"
            >
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;