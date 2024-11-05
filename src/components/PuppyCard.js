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
  const [animationState, setAnimationState] = useState('enter');
  const [imageLoaded, setImageLoaded] = useState(true);

  const images = puppy.images && puppy.images.length > 0 ? puppy.images : ['/path/to/placeholder.jpg'];
  const totalImages = images.length;

  const preloadImage = (src, callback) => {
    const img = new Image();
    img.src = src;
    img.onload = callback;
  };

  const handleNextImage = () => {
    if (totalImages > 1) {
      setAnimationState('exit');
      setImageLoaded(false);

      const nextIndex = currentImageIndex === totalImages - 1 ? 0 : currentImageIndex + 1;
      const nextImageUrl = `/assets/puppypictures-updated/${images[nextIndex]}`;

      preloadImage(nextImageUrl, () => {
        setCurrentImageIndex(nextIndex);
        setAnimationState('enter');
        setImageLoaded(true);
      });
    }
  };

  const handlePrevImage = () => {
    if (totalImages > 1) {
      setAnimationState('exit');
      setImageLoaded(false);

      const prevIndex = currentImageIndex === 0 ? totalImages - 1 : currentImageIndex - 1;
      const prevImageUrl = `/assets/puppypictures-updated/${images[prevIndex]}`;

      preloadImage(prevImageUrl, () => {
        setCurrentImageIndex(prevIndex);
        setAnimationState('enter');
        setImageLoaded(true);
      });
    }
  };

  const phoneNumber = "555-1234";
  const email = "info@puppystore.com";
  const currentImageUrl = `/assets/puppypictures-updated/${images[currentImageIndex]}`;

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105 duration-300">
      {/* Background Image with Blur */}
      <div
        className={`absolute inset-0 bg-cover bg-center filter blur-md ${animationState === 'exit' ? 'fade-out' : 'fade-in'}`}
        style={{ backgroundImage: `url(${currentImageUrl})` }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <img
        src={currentImageUrl}
        alt={`${puppy.name || 'Puppy'}`}
        className={`w-full h-full object-cover cursor-pointer relative z-10 transition-opacity duration-300 ${
          imageLoaded ? (animationState === 'exit' ? 'opacity-0' : 'opacity-100') : 'opacity-0'
        }`}
        onClick={handleNextImage}
      />

      {totalImages > 1 && (
        <>
          <button
            onClick={handlePrevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl z-30 focus:outline-none"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <button
            onClick={handleNextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl z-30 focus:outline-none"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </>
      )}

      <div className="absolute inset-0 flex flex-col justify-between p-6 z-20">
        <div>
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold text-white ${
              puppy.available ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {puppy.available ? 'Available' : 'Not Available'}
          </span>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white">{puppy.name || 'Unknown Puppy'}</h3>
          <div className="flex items-center mt-2">
            <FontAwesomeIcon
              icon={puppy.male ? faMars : faVenus}
              className={`text-2xl ${puppy.male ? 'text-blue-500' : 'text-pink-500'}`}
            />
            <span className="ml-2 text-lg text-white">{puppy.male ? 'Male' : 'Female'}</span>
          </div>
          <div className="flex space-x-4 mt-4">
            <a
              href={`tel:${phoneNumber}`}
              className="flex-1 inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              Call
            </a>
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
