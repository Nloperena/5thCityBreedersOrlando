import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

function AboutUsSection() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
    <div className="p-8 md:p-16 lg:p-24 bg-gradient-to-b from-gray-100 to-gray-200 rounded-xl shadow-lg mt-10 space-y-10 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 -z-10 bg-cover bg-fixed opacity-10" style={{ backgroundImage: "url('/path/to/paw-print-pattern.png')" }}></div>

      <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mb-6 text-center mt-4 underline decoration-wavy">About Us</h2>

      {videos.map((video, index) => (
        <div 
          key={index} 
          className={`flex flex-col md:flex-row items-center md:space-x-6 lg:space-x-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
          data-aos="fade-up"
        >
          <div className="md:w-1/2 w-full flex flex-col justify-center text-center md:text-left mb-6 md:mb-0 p-4 space-y-4">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-800 font-medium">{content[index].text}</p>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-700 bg-blue-100 px-4 py-2 rounded-lg shadow-sm">{content[index].seoPhrase}</p>
          </div>

          {/* Video Section with 3D Effect and Hover Filter */}
          <div className="md:w-1/2 w-full rounded-2xl overflow-hidden shadow-2xl relative transform transition-transform duration-300 hover:scale-105 hover:shadow-3xl rotate-1" style={{ height: 'auto', maxHeight: '100%' }}>
            <iframe 
              title={`vimeo-player-${index}`} 
              src={video} 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
              className="w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-2xl"
              style={{ filter: "brightness(95%) contrast(105%)" }}
              allowFullScreen 
            ></iframe>
          </div>
        </div>
      ))}

      <div className="flex justify-center space-x-4 mt-10">
        <button 
          onClick={() => handleNavigation('/contact')} 
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 focus:ring-4 focus:ring-blue-300 transition-transform transform hover:scale-105 duration-200 flex items-center space-x-2"
        >
          <span>Contact Us</span>
          <span>🐾</span>
        </button>
        <button 
          onClick={() => handleNavigation('/puppies')} 
          className="bg-green-600 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-gradient-to-r hover:from-green-600 hover:to-green-700 focus:ring-4 focus:ring-green-300 transition-transform transform hover:scale-105 duration-200 flex items-center space-x-2"
        >
          <span>See Puppies</span>
          <span>🐾</span>
        </button>
      </div>
    </div>
  );
}

export default AboutUsSection;
