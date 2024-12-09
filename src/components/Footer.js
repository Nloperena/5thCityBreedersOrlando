import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 p-8">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
          <ul>
            <li className="mb-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              +1 (347) 928-8541
            </li>
            <li className="mb-2">
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
          <ul>
            <li className="mb-2">
              <a href="/" className="hover:text-white transition duration-300">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="/about" className="hover:text-white transition duration-300">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="/puppies" className="hover:text-white transition duration-300">
                Our Puppies
              </a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="hover:text-white transition duration-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="text-gray-400 hover:text-white text-2xl transition duration-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-gray-400 hover:text-white text-2xl transition duration-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-gray-400 hover:text-white text-2xl transition duration-300" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        className="text-center mt-8 text-gray-500"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        © {new Date().getFullYear()} 5th City Breeders. All rights reserved.
      </motion.div>
    </footer>
  );
}

export default Footer;
