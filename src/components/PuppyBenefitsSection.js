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
    <div className="p-8 bg-blue-50 rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-bold mb-4">What Do You Get When You Buy One of Our Puppies?</h2>
      <p className="text-gray-700 mb-6">Each puppy comes with everything you need to start your journey together:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center space-x-4">
            <FontAwesomeIcon icon={benefit.icon} className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PuppyBenefitsSection;
