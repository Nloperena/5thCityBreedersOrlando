import React from 'react';
import { useNavigate } from 'react-router-dom';

function AboutUsSection() {
  const videos = [
    "https://player.vimeo.com/video/1016879488?h=b120b525ae&autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&badge=0&autopause=0",
    "https://player.vimeo.com/video/1016879458?title=0&byline=0&portrait=0&badge=0&autopause=0&autoplay=1&muted=1&loop=1",
    "https://player.vimeo.com/video/1016879342?title=0&byline=0&portrait=0&badge=0&autopause=0&autoplay=1&muted=1&loop=1",
  ];

  const content = [
    {
      text: "Our American Bulldog puppies for sale in Kissimmee, Florida, are raised with love and care. We focus on providing well-socialized, healthy puppies to families looking for a loyal companion.",
      seoPhrase: "American Bulldog puppies for sale in Kissimmee, Florida",
    },
    {
      text: "We invite residents of Buenaventura Lakes to learn more about our available American Bulldogs. Our puppies are bred for temperament, strength, and compatibility with families.",
      seoPhrase: "American Bulldog puppies available in Buenaventura Lakes",
    },
    {
      text: "Puppy reservations start with a simple phone call. We ensure each puppy is matched with the right family. Our American Bulldog puppies are perfect for homes in Kissimmee, Buenaventura Lakes, and surrounding areas.",
      seoPhrase: "Reservations of the puppy start with a phone call",
    },
  ];

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="p-6 md:p-12 bg-gray-100 rounded-xl shadow-lg mt-10 space-y-10">
      <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mb-6 text-center">About Us</h2>
      {videos.map((video, index) => (
        <div 
          key={index} 
          className={`flex flex-col md:flex-row items-center md:items-center md:space-x-6 lg:space-x-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
        >
          <div className="md:w-1/2 w-full flex flex-col justify-center text-center md:text-left mb-6 md:mb-0 p-4">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-800 font-medium mb-4">{content[index].text}</p>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-700">{content[index].seoPhrase}</p>
          </div>
          <div className="md:w-1/2 w-full rounded-lg overflow-hidden shadow-md" style={{ height: 'auto', maxHeight: '100%' }}>
            <iframe 
              title={`vimeo-player-${index}`} 
              src={video} 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
              className="w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-lg" 
              allowFullScreen 
            ></iframe>
          </div>
        </div>
      ))}
      <div className="flex justify-center space-x-4 mt-10">
        <button 
          onClick={() => handleNavigation('/contact')} 
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-200"
        >
          Contact Us
        </button>
        <button 
          onClick={() => handleNavigation('/puppies')} 
          className="bg-green-600 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-green-700 focus:ring-4 focus:ring-green-300 transition duration-200"
        >
          See Puppies
        </button>
      </div>
    </div>
  );
}

export default AboutUsSection;
