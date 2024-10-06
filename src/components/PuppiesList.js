import React, { useState } from 'react';
import { puppies } from '../puppies';
import PuppyCard from './PuppyCard';

const PuppiesList = () => {
  const [puppyData] = useState(puppies);

  return (
    <section className="bg-blue-800 text-white p-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">See Our Puppies</h2>

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
