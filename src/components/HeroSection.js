import React from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImage from '../assets/americanbullybanner.png';

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 md:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Adopt American Bullies Near You
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8">
          Find the perfect addition to your family
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Adopt Button */}
          <button
            onClick={() => navigate('/contact')}
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            Adopt a Dog
          </button>
          {/* Learn More Button */}
          <button
            onClick={() => navigate('/about')}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
