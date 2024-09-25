import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function ContactUsSection() {
  return (
    <section className="p-8 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-8">
          We would love to hear from you! Whether you have questions about our puppies, our breeding practices, or anything else, feel free to reach out to us.
        </p>
        
        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faPhoneAlt} className="text-blue-800 text-2xl" />
            <span className="text-lg text-gray-800">(123) 456-7890</span>
          </div>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-800 text-2xl" />
            <span className="text-lg text-gray-800">info@5thcitybreeders.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-800 text-2xl" />
            <span className="text-lg text-gray-800">1234 Breeders Lane, Orlando, FL</span>
          </div>
        </div>

        {/* Form */}
        <form className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <input
            type="text"
            className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Subject"
          />
          <textarea
            className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-800 text-white rounded-lg px-6 py-3 w-full font-semibold hover:bg-blue-900"
          >
            Send Message
          </button>
        </form>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center gap-6">
          <a href="#" className="text-blue-800 text-2xl">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="text-blue-800 text-2xl">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-blue-800 text-2xl">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;
