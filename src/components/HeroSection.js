// src/components/HeroSection.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  // State to track if the video has loaded
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full transition-filter"
          style={{
            filter: videoLoaded ? 'blur(0px)' : 'blur(20px)',
            transition: 'filter 5s ease',
          }}
        >
          {/* Original Puppy Video Embed */}
          <iframe
            src="https://player.vimeo.com/video/1016868998?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&background=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            className="absolute top-1/2 left-1/2"
            style={{
              width: '177.78vh', // Maintains 16:9 aspect ratio
              height: '100vh',
              transform: 'translate(-50%, -50%)',
              zIndex: -1,
            }}
            title="Puppy Hero Video"
            onLoad={() => setVideoLoaded(true)}
          ></iframe>
        </div>
      </div>

      {/* Animated Gradient Overlay */}
      {!videoLoaded && (
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-animation"></div>
        </div>
      )}

      {/* Black Overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Scan Lines Overlay */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity ease ${
          videoLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          transition: 'opacity 10s ease',
        }}
      >
        <div className="scan-lines"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 z-10">
        {/* Headline */}
        <h1 className="text-5xl md:text-8xl font-extrabold mb-6 crt-text">
          American Bullies in Orlando 
        </h1>
        {/* Description */}
        <p className="text-lg md:text-3xl mb-8 max-w-3xl crt-text">
          Discover loyal companions from champion bloodlines.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <button
            onClick={() => navigate('/puppies')}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-500 hover:to-pink-600 text-white py-4 px-10 rounded-xl text-2xl transition duration-300 transform hover:scale-110 crt-button focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            View Puppies
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="border-4 border-pink-500 text-white py-4 px-10 rounded-xl text-2xl transition duration-300 hover:bg-pink-500 hover:text-black bg-transparent hover:border-transparent transform hover:scale-110 crt-button focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        /* Gradient Animation */
        .bg-gradient-animation {
          background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.7),
            rgba(255, 255, 255, 0.7)
          );
          background-size: 100% 200%;
          animation: gradientMove 3s linear infinite;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 0% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }

        /* Scan Lines */
        .scan-lines {
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.2) 0px,
            rgba(255, 255, 255, 0.2) 3px,
            rgba(0, 0, 0, 0.2) 3px,
            rgba(0, 0, 0, 0.2) 6px
          );
          background-size: 100% 200%;
          animation: scanLineMove 10s linear infinite, flicker 3s infinite;
        }

        @keyframes scanLineMove {
          from {
            background-position: 0% 0%;
          }
          to {
            background-position: 0% 100%;
          }
        }

        /* Flicker Animation */
        @keyframes flicker {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.95;
          }
        }

        /* CRT Text Effect */
        .crt-text {
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
        }

        /* CRT Button Effect */
        .crt-button {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(2px);
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
