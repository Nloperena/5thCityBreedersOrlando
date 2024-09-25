import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faSmile, faBrain, faHandshake, faBroom, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import loyalImage from '../assets/bullyprotection.png'; // Replace with actual image paths
import familyImage from '../assets/bullyplaying.png';
import trainingImage from '../assets/puppyattention.png';
import workingDogImage from '../assets/puppywork.png';
import groomingImage from '../assets/puppygrooming.png';
import healthImage from '../assets/puppy1.png';

const cardsData = [
  {
    title: 'Loyal and Protective Nature',
    icon: faShieldAlt,
    image: loyalImage,
    description: 'Devoted companions who naturally guard their families. They are fiercely loyal and will always have your back in any situation. Their protective instincts ensure a safe environment for you and your loved ones.',
  },
  {
    title: 'Great Family Pets',
    icon: faSmile,
    image: familyImage,
    description: 'Gentle and affectionate, especially good with children. They enjoy being part of family activities and are patient playmates. Their loving demeanor fosters strong bonds with all family members.',
  },
  {
    title: 'Intelligent and Trainable',
    icon: faBrain,
    image: trainingImage,
    description: 'Quick learners eager to please their owners. They excel in obedience training when positive reinforcement is used. Their intelligence makes them adaptable to various commands and tricks.',
  },
  {
    title: 'Versatile Working Dog',
    icon: faHandshake,
    image: workingDogImage,
    description: 'Athletic and capable of various tasks and activities. Originally bred for farm work, they can herd, hunt, and guard effectively. Their energy levels make them excellent companions for outdoor enthusiasts.',
  },
  {
    title: 'Low Maintenance Grooming',
    icon: faBroom,
    image: groomingImage,
    description: 'Short coat requires minimal care. A simple brushing routine keeps their coat healthy and shiny. This low-maintenance aspect saves time and reduces grooming expenses.',
  },
  {
    title: 'Health and Longevity',
    icon: faHeartbeat,
    image: healthImage,
    description: 'Generally robust with fewer genetic issues. They typically have a lifespan of 10-15 years, providing long-term companionship. Responsible breeding practices have enhanced their overall health profile.',
  },
];

function AboutCards() {
  return (
    <section className="bg-gray-900 text-white py-16 px-8"> {/* Adjusted padding for spacing */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Why Buy an American Bulldog?</h2>
        <p className="text-gray-400 mb-8">Discover the unique traits that make American Bulldogs the perfect addition to any family.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData.map((card, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="h-100 overflow-hidden flex items-center justify-center"> {/* Increased height from h-64 to h-72 */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full object-center object-cover hover:scale-105 transition-transform duration-300"
              /> {/* Used object-center for better positioning */}
            </div>
            <div className="p-6 text-center">
              <FontAwesomeIcon icon={card.icon} className="text-yellow-400 text-4xl mb-4" />
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-300">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutCards;
