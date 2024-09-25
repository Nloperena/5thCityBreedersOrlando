import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faShieldAlt, faHeart, faSmile } from '@fortawesome/free-solid-svg-icons';

function PuppyInfoSection() {
  const features = [
    {
      icon: faPaw,
      title: 'Purebred Puppies',
    },
    {
      icon: faShieldAlt,
      title: 'Health Guarantee',
    },
    {
      icon: faHeart,
      title: 'Support & Care',
    },
    {
      icon: faSmile,
      title: 'Happy Companions',
    },
  ];

  return (
    <div className="p-8 bg-blue-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Why Choose Our Puppies?</h2>
      <p className="text-gray-700 mb-6">
        We offer the best quality puppies that come with a health guarantee, lifetime support, and the joy of adding a new member to your family.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-4">
            <FontAwesomeIcon icon={feature.icon} className="text-blue-600 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PuppyInfoSection;
