import React from 'react';
import { motion } from 'framer-motion';

function AnimatedSection({ children }) {
  const sectionVariants = {
    initial: { opacity: 0, x: -100 }, // Start off-screen to the left
    animate: { opacity: 1, x: 0 }, // Slide in from the left
  };

  return (
    <motion.section
      className="p-4 pt-2 bg-gray-100" // Adjusted padding: top padding reduced
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }} // Animate only once when in view
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}

export default AnimatedSection;
