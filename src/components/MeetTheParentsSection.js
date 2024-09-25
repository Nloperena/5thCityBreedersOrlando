import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faHeart, faShieldAlt, faAward } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome icons
import parentImage from '../assets/dogstransparent.png';

function MeetTheParentsSection() {
  const parentInfo = {
    name: 'Rex & Bella',
    description: 'Rex and Bella are the proud parents of our latest litter. Rex is a champion bloodline American Bully with exceptional strength and temperament. Bella is known for her nurturing nature and excellent health. Together, they produce some of the finest puppies, inheriting their wonderful traits and pedigree.',
    image: parentImage,
  };

  const sellingPoints = [
    {
      icon: faDumbbell,
      title: 'Strength & Power',
      description: 'Rex represents the Red Lion bloodline, known for its impressive strength and muscular build. These traits are passed down to his puppies, making them strong and agile companions.',
    },
    {
      icon: faHeart,
      title: 'Temperament',
      description: 'Despite their powerful appearance, Rex and Bella are gentle and loving dogs. Their puppies inherit this balanced temperament, making them great family pets.',
    },
    {
      icon: faShieldAlt,
      title: 'Health & Pedigree',
      description: 'The Red Lion bloodline is renowned for its health and longevity. Bella’s exceptional health and Rex’s strong pedigree ensure that their puppies are born with excellent genetics.',
    },
    {
      icon: faAward,
      title: 'Champion Bloodline',
      description: 'Rex is a descendant of champion bloodlines, making his puppies ideal for those looking for show-quality Bullies with a heritage of excellence.',
    },
  ];

  return (
    <section className="p-8 bg-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Meet the Parents of Our Latest Litter</h2>
        <p className="text-gray-700 mb-8">
          Get to know the proud parents of our latest puppies. Selected for their excellent health, temperament, and pedigree, Rex and Bella are a perfect match.
        </p>
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 mb-8">
          <img
            src={parentInfo.image}
            alt={parentInfo.name}
            className="w-full md:w-2/3 lg:w-1/2 h-96 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-2xl font-bold mb-2">{parentInfo.name}</h3>
          <p className="text-gray-600">{parentInfo.description}</p>
        </div>
        
        {/* Selling Points Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-3xl font-bold mb-4">Why Choose a Red Lion Puppy?</h3>
          <p className="text-gray-700 mb-6">
            The Red Lion bloodline is known for producing strong, healthy, and well-tempered Bullies. Here’s what makes our puppies stand out:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sellingPoints.map((point, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <FontAwesomeIcon icon={point.icon} className="text-blue-600 text-4xl mb-4" />
                <h4 className="text-xl font-bold mb-2">{point.title}</h4>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MeetTheParentsSection;

