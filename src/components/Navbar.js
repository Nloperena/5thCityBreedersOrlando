import React from 'react';
import { Link } from 'react-router-dom';

// Update the import paths to be relative
import HeroSection from './HeroSection';
import AboutUsSection from './AboutUsSection';
import PuppiesList from './PuppiesList';
import PuppyAdoptionSection from './PuppyAdoptionSection';
import ContactUsSection from './ContactUsSection';
import Footer from './Footer';

function Navbar() {
  return (
    <nav className="bg-blue-800 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          5th City Breeders
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/puppies" className="hover:text-gray-300">
            Puppies
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
