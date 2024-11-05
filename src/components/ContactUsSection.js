import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';

function ContactUsSection() {
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null); // Success or error message status
  const [showForm, setShowForm] = useState(true); // Controls the form visibility

  // Initialize EmailJS with the public key when component mounts
  useEffect(() => {
    emailjs.init('_byCfFtPNSpDFGqh9');  // Ensure this is your actual public key
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessageStatus(null);

    emailjs.sendForm('service_wwmtqsm', 'template_ure3rh3', e.target, '_byCfFtPNSpDFGqh9')
      .then((result) => {
        setLoading(false);
        setMessageStatus('success');
        setShowForm(false); // Hide the form after successful submission
      }, (error) => {
        setLoading(false);
        setMessageStatus('error');
      });
  };

  const handleConfirmation = () => {
    setMessageStatus(null);
    setShowForm(true); // Show the form again
  };

  return (
    <section className="p-8 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-8">
          We would love to hear from you! Whether you have questions about our puppies or our breeding practices, feel free to reach out.
        </p>

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

        {/* Contact Form or Confirmation Message */}
        {showForm ? (
          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="from_name"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="from_email"
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
              className={`bg-blue-800 text-white rounded-lg px-6 py-3 w-full font-semibold hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto flex flex-col items-center">
            {messageStatus === 'success' && (
              <div className="text-green-700 text-2xl mb-4">
                Your message has been sent successfully!
              </div>
            )}
            {messageStatus === 'error' && (
              <div className="text-red-700 text-2xl mb-4">
                There was an error sending your message. Please try again later.
              </div>
            )}
            <button
              onClick={handleConfirmation}
              className="bg-blue-800 text-white rounded-lg px-6 py-3 w-full font-semibold hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 transition duration-200"
            >
              OK
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ContactUsSection;
