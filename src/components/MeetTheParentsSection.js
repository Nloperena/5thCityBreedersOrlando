import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDumbbell,
  faHeart,
  faShieldAlt,
  faAward,
} from '@fortawesome/free-solid-svg-icons';
import parentImage from '../assets/dogstransparent.png';

function MeetTheParentsSection() {
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
    <section className="py-12 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">
            Meet the Parents of Our Latest Litter
          </h2>
          <p className="text-gray-700 text-lg">
            Get to know the proud parents of our latest puppies. Selected for
            their excellent health, temperament, and pedigree, Walt and Celine
            are a perfect match.
          </p>
        </div>

        {/* Parents Information */}
        <div className="flex flex-col lg:flex-row items-center bg-white rounded-xl shadow-xl overflow-hidden mb-16">
          <img
            src={parentInfo.image}
            alt={parentInfo.name}
            className="w-full lg:w-1/2 h-96 object-cover"
          />
          <div className="p-8 lg:p-12">
            <h3 className="text-3xl font-bold mb-4">{parentInfo.name}</h3>
            <p className="text-gray-600 text-lg">{parentInfo.description}</p>
          </div>
        </div>

        {/* Selling Points */}
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h3 className="text-3xl font-extrabold mb-6 text-center">
            Why Choose a Red Lion Puppy?
          </h3>
          <p className="text-gray-700 text-lg mb-8 text-center">
            The Red Lion bloodline is known for producing strong, healthy, and
            well-tempered Bullies. Here’s what makes our puppies stand out:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sellingPoints.map((point, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
                  <FontAwesomeIcon icon={point.icon} className="text-3xl" />
                </div>
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
