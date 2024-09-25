import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import bannerImage from '../assets/americanbullybanner.png';

function HeroSection() {
  const navigate = useNavigate(); // Create a navigate function

  return (
    <section
      className="h-96 md:h-[605px] flex items-center justify-center bg-cover bg-center p-8"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="max-w-3xl mx-auto p-6 bg-black/50 rounded-lg text-center">
        {/* Wrapper div has centered text alignment */}
        <div className="text-white font-sans">
          <h1 className="text-5xl font-bold mb-4">Adopt American Bullies Near You</h1>
          <p className="text-gray-300 mb-6">Find the perfect addition to your family</p>
          <div className="flex flex-col md:flex-row md:justify-center gap-4">
            {/* Button for navigating to the Adopt page */}
            <button
              onClick={() => navigate('/contact')} // Navigate to contact form
              className="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-full text-white max-w-xs w-full md:w-auto"
            >
              Adopt a Dog
            </button>
            {/* Button for navigating to the About page */}
            <button
              onClick={() => navigate('/about')} // Navigate to about page
              className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-full text-white max-w-xs w-full md:w-auto"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

