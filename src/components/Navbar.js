import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white p-4 sticky top-0 z-20">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          5th City Breeders
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {['Home', 'About', 'Puppies', 'Contact'].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} // Handle 'Home' separately
                className="hover:text-gray-300"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.5 }}
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
        >
          <div className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-blue-800 shadow-lg z-20 p-6">
            <nav className="flex flex-col space-y-6 mt-10">
              {['Home', 'About', 'Puppies', 'Contact'].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} // Handle 'Home' separately
                    className="text-white text-lg hover:text-gray-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
