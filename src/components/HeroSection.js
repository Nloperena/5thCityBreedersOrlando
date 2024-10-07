import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import herobannerimg from '../assets/americanbullybanner.png';

const HeroSection = () => {
  const navigate = useNavigate();

  // State to track if the video has loaded
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity"
        style={{
          backgroundImage: `url(${herobannerimg})`,
          opacity: videoLoaded ? 0 : 1,
          transition: 'opacity 2s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      ></div>

      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1016868998?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&background=1"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          className="absolute top-1/2 left-1/2"
          style={{
            width: '177.78vh', // Maintains 16:9 aspect ratio
            height: '100vh',
            transform: 'translate(-50%, -50%)',
            opacity: videoLoaded ? 1 : 0,
            filter: 'blur(1px)', // Apply a slight blur effect to the video
            transition: 'opacity 2s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: -1,
          }}
          title="Puppy Hero Video"
          onLoad={() => setVideoLoaded(true)}
        ></iframe>
      </div>

      {/* Black Overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 z-10">
        {/* Headline */}
        <h1 className="text-5xl md:text-8xl font-extrabold mb-6">
          American Bullies in Orlando 
        </h1>
        {/* Description */}
        <p className="text-lg md:text-3xl mb-8 max-w-3xl">
          Discover loyal companions from champion bloodlines.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <button
            onClick={() => navigate('/puppies')}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-500 hover:to-pink-600 text-white py-4 px-10 rounded-xl text-2xl transition duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            View Puppies
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="border-4 border-pink-500 text-white py-4 px-10 rounded-xl text-2xl transition duration-300 hover:bg-pink-500 hover:text-black bg-transparent hover:border-transparent transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
