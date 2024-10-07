import React, { useState, useEffect } from 'react';
import { puppies } from '../puppies';
import PuppyCard from './PuppyCard';

// Set the starting date to 4 weeks ago from today
const startDate = new Date();
startDate.setDate(startDate.getDate() - 28);

const PuppiesList = () => {
  const [puppyData, setPuppyData] = useState(puppies);

  useEffect(() => {
    // Log the data to confirm it is loading correctly
    console.log('Puppies data:', puppyData);
  }, [puppyData]);

  const today = new Date();
  const ageInWeeks = Math.floor((today - startDate) / (7 * 24 * 60 * 60 * 1000));

  return (
    <section className="bg-blue-800 text-white p-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xl font-semibold mb-4">Puppies are now {ageInWeeks} weeks old!</p>

        <h2 className="text-3xl font-bold mb-6">See Our Puppies</h2>
        <p>Reserving a puppy requires putting down a retainer</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {puppyData.map((puppy, index) => (
            <PuppyCard key={index} puppy={puppy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PuppiesList;
