import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import CustomCursor from '../components/CustomCursor';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Loader will handle its own completion timing via onComplete prop
  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="fixed inset-0 flex items-center justify-center bg-primary z-50"
          >
            <Loader onComplete={() => setIsLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        {!isLoading && (
          <>
            <CustomCursor />
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Certificates />
            <CTA />
            <Contact />
            <Footer />
          </>
        )}
      </motion.main>
    </>
  );
};

export default Home;
