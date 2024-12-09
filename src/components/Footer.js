import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function Footer() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Generate random positions and sizes for stars
  const generateStars = (count, extraLarge = false) =>
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: extraLarge ? Math.random() * 8 + 8 : Math.random() * 3 + 2, // Larger size for extra-large stars
      top: `${Math.random() * 100}%`, // Confined to footer and modal area
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.5 + 0.5,
      delay: Math.random() * 2,
    }));

  const stars = generateStars(70); // Normal stars
  const extraLargeStars = generateStars(20, true); // Extra-large stars

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 relative overflow-hidden">
      {/* Footer Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left">
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              +1 (347) 928-8541
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              fifthcitybreedersinfo@gmail.com
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              Orlando, Kissimmee, Buenaventura Lakes, Central Florida
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/puppies" className="hover:text-white transition duration-300">
                Our Puppies
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition duration-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">About 5th City Breeders</h3>
          <p className="text-gray-400">
            We are dedicated to connecting families with their perfect American Bulldog companion. Explore our site to learn more about our puppies and services.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center relative">
        <div className="text-gray-500 mb-4">
          © {new Date().getFullYear()} 5th City Breeders. All rights reserved.
        </div>

        {/* Love This Website Button */}
        <motion.div
          className="relative bg-blue-900 text-white text-sm font-bold rounded-full px-6 py-3 mx-auto shadow-lg cursor-pointer hover:bg-blue-700 transition-all duration-300 w-max"
          onClick={togglePopup}
        >
          Love this website?
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent"
            animate={{
              borderColor: [
                'rgba(255, 255, 255, 0)',
                'rgba(255, 255, 255, 0.5)',
                'rgba(255, 255, 255, 0)',
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </div>

      {/* Twinkling Stars (Footer & Modal) */}
      {[...stars, ...extraLargeStars].map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
          animate={{
            opacity: [0, star.opacity, 0],
            scale: [0.7, 1.2, 0.7],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            delay: star.delay,
          }}
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="#fff" />
          </svg>
        </motion.div>
      ))}

      {/* Modal */}
      {showPopup && (
        <motion.div
          className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-gray-900 text-gray-200 border border-blue-600 rounded-lg p-4 w-64 shadow-lg z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={togglePopup}
            className="absolute top-2 right-2 text-gray-300 hover:text-white"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h4 className="text-xl font-bold mb-2 text-blue-300">Hi, I'm Nico!</h4>
          <p className="text-sm mb-4">
            I created this website! With over 6+ years of experience, I can build your dream website.
          </p>
          <a
            href="https://nicoloperena.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition duration-300"
          >
            Visit My Website
          </a>
        </motion.div>
      )}
    </footer>
  );
}

export default Footer;
