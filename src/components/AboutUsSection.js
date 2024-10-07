import React, { useRef, useEffect } from 'react';

function AboutUsSection() {
  const textRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Adjust the video height to match the text height
    if (textRef.current && videoRef.current) {
      videoRef.current.style.height = `${textRef.current.clientHeight}px`;
    }
  }, []);

  return (
    <div className="p-6 md:p-12 bg-gray-100 rounded-xl shadow-lg mt-10">
      <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mb-6 text-center">About Us</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 lg:space-x-12">
        <div className="flex justify-center md:w-1/2 w-full mb-6 md:mb-0">
          <iframe 
            title="vimeo-player" 
            src="https://player.vimeo.com/video/1016879488?h=b120b525ae&autoplay=1&muted=1&loop=1" 
            width="100%" 
            ref={videoRef}
            frameBorder="0" 
            allow="autoplay; fullscreen" 
            allowFullScreen 
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
        <div 
          className="md:w-1/2 w-full text-gray-700 text-base md:text-lg lg:text-xl flex flex-col justify-center"
          ref={textRef}
        >
          <p className="mb-4">
            We are dedicated American Bulldog breeders based in Kissimmee, Florida. Our mission is to raise healthy, well-socialized puppies 
            that make great companions for families and individuals alike. Each of our puppies is cared for in a loving environment, with a 
            focus on quality and temperament.
          </p>
          <p>
            Our puppies are bred with attention to both physical health and temperament, ensuring they fit right in with your family. 
            Whether you’re in Kissimmee, Buenaventura Lakes, or Orlando, we invite you to learn more about us and discover the difference 
            our commitment makes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
