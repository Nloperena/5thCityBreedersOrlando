import React, { useState, useEffect } from 'react';
import { puppies } from '../puppies';
import PuppyCard from './PuppyCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

const PuppiesList = () => {
  const [puppyData, setPuppyData] = useState(puppies);

  // Set the puppies' date of birth to 9 weeks ago from 9 days before November 4
  const referenceDate = new Date('2024-11-04');
  referenceDate.setDate(referenceDate.getDate() - 9); // 9 days before November 4
  const puppiesBirthDate = new Date(referenceDate);
  puppiesBirthDate.setDate(puppiesBirthDate.getDate() - 63); // 9 weeks * 7 days

  useEffect(() => {
    console.log('Puppies data:', puppyData);
  }, [puppyData]);

  const today = new Date();
  const ageInWeeks = Math.floor(
    (today - puppiesBirthDate) / (7 * 24 * 60 * 60 * 1000)
  );

  return (
    <section className="bg-gradient-to-br from-blue-700 to-blue-800 text-white p-8 relative overflow-hidden">
      {/* Parallax Paw Icons */}
      <div className="absolute inset-0 -z-10 flex flex-wrap justify-around opacity-20">
        {[...Array(20)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faPaw}
            className="text-white animate-pulse"
            style={{
              fontSize: `${2 + Math.random() * 3}rem`,
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translate(-50%, -50%) scale(${0.8 + Math.random() * 0.4})`,
              animation: `parallaxMove ${10 + Math.random() * 10}s infinite alternate ease-in-out`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative">
        <p className="text-xl font-semibold mb-4">
          Puppies are now {ageInWeeks} weeks old!
        </p>

        <h2 className="text-3xl font-bold mb-6">See Our Puppies</h2>
        <p>Reserving a puppy requires putting down a retainer</p>

        {/* Grid layout for puppies - 3 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {puppyData.map((puppy, index) => (
            <div
              key={index}
              className="transform transition duration-300 hover:scale-105 hover:rotate-1 hover:shadow-2xl"
            >
              <PuppyCard puppy={puppy} />
            </div>
          ))}
        </div>
      </div>

      {/* Parallax Animation CSS */}
      <style>{`
        @keyframes parallaxMove {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(10px) translateX(10px); }
        }
      `}</style>
    </section>
  );
};

export default PuppiesList;
