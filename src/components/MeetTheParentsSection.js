import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDumbbell,
  faHeart,
  faShieldAlt,
  faAward,
} from '@fortawesome/free-solid-svg-icons';
import parentImage from '../assets/dogstransparent.png';

function MeetTheParentsSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  }, []);

  const parentInfo = {
    name: 'Walt & Celine',
    description:
      'Walt and Celine are the proud parents of our latest litter. Walt is a champion bloodline American Bully with exceptional strength and temperament. Celine is known for her nurturing nature and excellent health. Together, they produce some of the finest puppies, inheriting their wonderful traits and pedigree.',
    image: parentImage,
  };

  const sellingPoints = [
    {
      icon: faDumbbell,
      title: 'Strength & Power',
      description:
        'Walt represents the Red Lion bloodline, known for its impressive strength and muscular build. These traits are passed down to his puppies, making them strong and agile companions.',
    },
    {
      icon: faHeart,
      title: 'Temperament',
      description:
        'Despite their powerful appearance, Walt and Celine are gentle and loving dogs. Their puppies inherit this balanced temperament, making them great family pets.',
    },
    {
      icon: faShieldAlt,
      title: 'Health & Pedigree',
      description:
        'The Red Lion bloodline is renowned for its health and longevity. Celine’s exceptional health and Walt’s strong pedigree ensure that their puppies are born with excellent genetics.',
    },
    {
      icon: faAward,
      title: 'Champion Bloodline',
      description:
        'Walt is a descendant of champion bloodlines, making his puppies ideal for those looking for show-quality Bullies with a heritage of excellence.',
    },
  ];

  return (
    <section className="relative bg-gray-50 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Parent Information Hero Section */}
        <div className="relative mb-20">
          <div
            className={`relative rounded-3xl shadow-2xl overflow-hidden h-[550px] lg:h-[600px] bg-gradient-to-br from-blue-600 to-blue-800 transition-all duration-500 ease-in-out ${
              loaded ? 'animate-fade-in' : ''
            }`}
          >
            {/* Background Image Overlay with Hover Effect */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out hover:bg-contain"
              style={{
                backgroundImage: `url(${parentInfo.image})`,
                backgroundSize: loaded ? 'cover' : 'contain',
              }}
            ></div>

            {/* Overlay for Text */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white p-10 bg-gradient-to-b from-transparent to-gray-900">
              <div
                className={`transform transition duration-1000 ${
                  loaded ? 'scale-100' : 'scale-90 opacity-0'
                }`}
              >
                <h2 className="text-5xl font-extrabold mb-4">{parentInfo.name}</h2>
                <p className="text-lg max-w-2xl mx-auto">
                  {parentInfo.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div
          className={`text-center transition duration-1000 ${
            loaded ? 'animate-slide-up' : 'translate-y-10 opacity-0'
          }`}
        >
          <h3 className="text-4xl font-bold mb-4 text-gray-800">
            Why Choose a Red Lion Puppy?
          </h3>
          <p className="text-gray-600 text-lg max-w-xl mx-auto mb-12">
            The Red Lion bloodline is known for producing strong, healthy, and
            well-tempered Bullies. Here’s what makes our puppies stand out:
          </p>
        </div>

        {/* Selling Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {sellingPoints.map((point, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-500 ${
                loaded ? 'animate-scale-up' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-blue-100 text-blue-600 p-5 rounded-full shadow-md mb-6">
                <FontAwesomeIcon icon={point.icon} className="text-3xl" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{point.title}</h4>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MeetTheParentsSection;
