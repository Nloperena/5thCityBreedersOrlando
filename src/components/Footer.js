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
              +1 (123) 456-7890
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              info@example.com
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              123 Puppy St, Dogtown, USA
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
        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
            </a>
          </div>
        </div>
        {/* Newsletter Signup
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Subscribe to Our Newsletter</h3>
          <form>
            <input
              type="email"
              placeholder="Your email"
              className="w-full mb-4 p-2 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div> */}
      </div>
      <div className="text-center mt-8 text-gray-500">
        © {new Date().getFullYear()} 5th City Breeders. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
