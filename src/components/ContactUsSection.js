import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';

function ContactUsSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_wwmtqsm', 'template_mpot1qd', e.target, 'user_YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section className="p-8 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-8">
          We would love to hear from you! Whether you have questions about our puppies or our breeding practices, feel free to reach out.
        </p>
        
        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faPhoneAlt} className="text-blue-800 text-2xl" />
            <span className="text-lg text-gray-800">347-928-8541</span>
          </div>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-800 text-2xl" />
            <span className="text-lg text-gray-800">fifthcitybreedersinfo@gmail.com</span>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="user_name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Subject"
          />
          <textarea
            name="message"
            className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-800 text-white rounded-lg px-6 py-3 w-full font-semibold hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUsSection;
