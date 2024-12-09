import React, { useState, useEffect } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus, faPhone, faEnvelope, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const PuppyCard = ({ puppy, delayIndex = 0 }) => {
  // Keep track of the current image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Keep track if visible so we start animations
  const [visible, setVisible] = useState(false);

  // Use puppy images or a placeholder
  const images = puppy.images.length > 0 ? puppy.images : ['/path/to/placeholder.jpg'];
  const totalImages = images.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const handleNextImage = () => {
    if (totalImages > 1) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }
  };

  const handlePrevImage = () => {
    if (totalImages > 1) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
    }
  };

  const phoneNumber = '555-1234';
  const email = 'info@puppystore.com';

  // Increase the offset slightly (0.3s per card)
  const animationDelay = `${delayIndex * 0.3}s`;

  const cardStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.5s ease, transform 0.5s ease',

    // We are setting all animation properties individually to avoid warnings:
    animationName: visible ? 'fadeInUp, floatAnimation' : 'none',
    animationDuration: visible ? '0.8s, 3s' : '0s, 0s',
    animationTimingFunction: visible ? 'ease, ease-in-out' : 'ease, ease-in-out',
    animationIterationCount: visible ? '1, infinite' : '0, 0',
    animationFillMode: visible ? 'forwards, none' : 'none, none',
    animationDelay: visible ? `0s, ${animationDelay}` : '0s, 0s',
  };

  return (
    <>
      {/* Define keyframes for fadeInUp and float */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes floatAnimation {
            0% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>

      {/* Wrapper div with 'group' class to control hover state */}
      <div className="group inline-block">
        {/* The card now responds to group hover */}
        <div
          className="relative bg-white rounded-lg shadow-lg overflow-hidden transform-gpu transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1"
          style={cardStyle}
        >
          {/* Image Container */}
          <div className="relative w-full aspect-square">
            <img
              src={images[currentImageIndex]}
              alt={puppy.name}
              className="w-full h-full object-cover"
            />
            {totalImages > 1 && (
              <>
                {/* Left Arrow */}
                <button
                  onClick={handlePrevImage}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow 
                            hover:text-black focus:outline-none transition-colors transition-transform duration-200 active:scale-95"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNextImage}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow 
                            hover:text-black focus:outline-none transition-colors transition-transform duration-200 active:scale-95"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </>
            )}
          </div>

          {/* Content Section */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">{puppy.name}</h3>
            <p className="text-sm text-gray-600 mb-4">
              {puppy.gender === 'Male' ? (
                <FontAwesomeIcon icon={faMars} className="text-blue-500" />
              ) : (
                <FontAwesomeIcon icon={faVenus} className="text-pink-500" />
              )}
              <span className="ml-2">{puppy.gender}</span>
            </p>
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                puppy.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              {puppy.available ? 'Available' : 'Not Available'}
            </span>

            <div className="mt-4 flex justify-between">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                Call
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center justify-center bg-green-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PuppyCard;
