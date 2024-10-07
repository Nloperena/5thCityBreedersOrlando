import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="/puppies" className="hover:text-white">
                Our Puppies
              </a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        
      </div>
      <div className="text-center mt-8 text-gray-500">
        © {new Date().getFullYear()} 5th City Breeders. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
