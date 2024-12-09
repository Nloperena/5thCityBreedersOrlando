import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faSmile, faHeart, faRunning } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function PuppyBenefitsSection() {
  const benefits = [
    {
      icon: faShieldAlt,
      title: 'Natural Protectors',
      description:
        'American Bulldogs are known for their protective instincts, ensuring your family’s safety with unwavering loyalty.',
    },
    {
      icon: faSmile,
      title: 'Family-Friendly',
      description:
        'These dogs thrive in family settings, offering love, patience, and playful companionship for everyone, including kids.',
    },
    {
      icon: faHeart,
      title: 'Loving Companions',
      description:
        'With their affectionate nature, American Bulldogs form deep emotional bonds, enriching your life with loyalty and love.',
    },
    {
      icon: faRunning,
      title: 'Energetic and Active',
      description:
        'They love outdoor adventures, encouraging an active lifestyle with fun activities like running and playing.',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.2,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="p-10 bg-gradient-to-r from-blue-200 to-blue-100 rounded-xl shadow-xl mt-10 mb-16">
    <h2 className="text-4xl font-extrabold mb-6 text-blue-900 text-center">
      Why Choose an American Bulldog?
    </h2>
    <p className="text-blue-700 mb-10 text-lg text-center">
      Discover the unique qualities that make American Bulldogs a cherished part of your family.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          className="relative flex flex-col items-center bg-gradient-to-b from-blue-50 to-blue-200 rounded-lg shadow-lg hover:shadow-2xl transition-all p-8 transform hover:-translate-y-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={index}
          variants={cardVariants}
        >
          {/* Icon Container */}
          <div className="absolute -top-8 flex items-center justify-center w-16 h-16 bg-blue-300 rounded-full shadow-lg">
            <FontAwesomeIcon icon={benefit.icon} className="text-blue-900 text-3xl" />
          </div>

          {/* Content */}
          <div className="mt-10 text-center">
            <h3 className="text-xl font-bold text-blue-900 mb-2">{benefit.title}</h3>
            <p className="text-blue-700">{benefit.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
  );
}

export default PuppyBenefitsSection;
