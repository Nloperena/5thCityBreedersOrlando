import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMars,
  faVenus,
  faPhone,
  faEnvelope,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const PuppyCard = ({ puppy }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const totalImages = puppy.images.length;

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const phoneNumber = "555-1234";
  const email = "info@puppystore.com";

  const currentImageUrl = `/assets/puppypictures/${puppy.images[currentImageIndex]}`;

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105 duration-300">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md"
        style={{ backgroundImage: `url(${currentImageUrl})` }}
      ></div>

      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Main Image */}
      <img
        src={currentImageUrl}
        alt={`${puppy.name}`}
        className="w-full h-full object-cover cursor-pointer relative z-10"
        onClick={handleNextImage}
      />

      {/* Navigation Indicators */}
      {totalImages > 1 && (
        <>
          {/* Left Arrow */}
          <button
            onClick={handlePrevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl z-30 focus:outline-none"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl z-30 focus:outline-none"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </>
      )}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 z-20">
        {/* Top Section */}
        <div>
          {/* Availability Badge */}
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold text-white ${
              puppy.available ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {puppy.available ? 'Available' : 'Not Available'}
          </span>
        </div>

        {/* Bottom Section */}
        <div>
          {/* Puppy Name */}
          <h3 className="text-3xl font-bold text-white">{puppy.name}</h3>

          {/* Gender Icon and Text */}
          <div className="flex items-center mt-2">
            <FontAwesomeIcon
              icon={puppy.male ? faMars : faVenus}
              className={`text-2xl ${
                puppy.male ? 'text-blue-500' : 'text-pink-500'
              }`}
            />
            <span className="ml-2 text-lg text-white">
              {puppy.male ? 'Male' : 'Female'}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-4">
            {/* Call Button */}
            <a
              href={`tel:${phoneNumber}`}
              className="flex-1 inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              Call
            </a>

            {/* Email Button */}
            <a
              href={`mailto:${email}`}
              className="flex-1 inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuppyCard;
