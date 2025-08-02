import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductView from './components/ProductView';
import TechSpecs from './components/TechSpecs';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <Hero />
      <Features />
      <ProductView />
      <TechSpecs />
      <Comparison />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;