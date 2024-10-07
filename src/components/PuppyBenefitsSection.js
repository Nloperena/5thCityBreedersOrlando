import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBone, faCertificate, faHome, faMedkit } from '@fortawesome/free-solid-svg-icons';

function PuppyBenefitsSection() {
  const benefits = [
    {
      icon: faBone,
      title: 'Starter Kit',
      description: 'Includes food, toys, and accessories to help your puppy adjust to their new home.',
    },
    {
      icon: faCertificate,
      title: 'Registration Papers',
      description: 'All our puppies come with full registration and pedigree papers.',
    },
    {
      icon: faHome,
      title: 'House Training Guide',
      description: 'Step-by-step guide to help you train your puppy quickly and effectively.',
    },
    {
      icon: faMedkit,
      title: 'Health Certificate',
      description: 'Certified health certificate from a licensed veterinarian ensuring your puppy is in top health.',
    },
  ];

  return (
    <div className="p-10 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl shadow-xl mt-10">
      <h2 className="text-4xl font-extrabold mb-6 text-blue-700">What Do You Get When You Buy One of Our Puppies?</h2>
      <p className="text-gray-700 mb-8 text-lg">Each puppy comes with everything you need to start your journey together:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className="flex items-center space-x-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="p-4 bg-blue-100 rounded-full">
              <FontAwesomeIcon icon={benefit.icon} className="text-blue-600 text-3xl" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-800">{benefit.title}</h3>
              <p className="text-gray-600 mt-2">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PuppyBenefitsSection;
