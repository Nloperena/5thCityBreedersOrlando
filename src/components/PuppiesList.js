import React, { useState, useEffect } from 'react';
import { fetchPuppies, fetchParents } from '../services/contentfulService';
import PuppyCard from './PuppyCard';

function PuppiesList({ selectedParentId }) {
  // Keep track of puppies and their age
  const [puppies, setPuppies] = useState([]);
  const [litterDoB, setLitterDoB] = useState(null);
  const [age, setAge] = useState('');

  // Function to figure out how old the puppies are
  const calculateAge = (dob) => {
    const dobDate = new Date(dob);      // Date they were born
    const now = new Date();             // Today
    const difference = Math.floor((now - dobDate) / (1000 * 60 * 60 * 24)); // Days difference

    const weeks = Math.floor(difference / 7);   // How many full weeks
    const days = difference % 7;                // How many days after full weeks
    return `${weeks} week${weeks !== 1 ? 's' : ''} and ${days} day${days !== 1 ? 's' : ''}`;
  };

  useEffect(() => {
    // Fetch parent info to get when the litter was born
    fetchParents().then((parents) => {
      const selectedParent = parents.find((parent) => parent.id === selectedParentId);
      if (selectedParent && selectedParent.litterDoB) {
        setLitterDoB(selectedParent.litterDoB);
        setAge(calculateAge(selectedParent.litterDoB));
      }
    });

    // Fetch puppies for this parent
    fetchPuppies().then((data) => {
      const filteredPuppies = data.filter((puppy) =>
        puppy.parentIds.includes(selectedParentId)
      );
      setPuppies(filteredPuppies);
    });
  }, [selectedParentId]);

  return (
    <section
      className="relative py-16 "
      style={{
        backgroundImage: `url('/assets/pawbg.png')`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Navy Blue Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: 'rgba(10, 25, 47, 0.8)', 
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center text-white z-10">
        {/* Headline */}
        <h2 className="text-5xl font-extrabold mb-4 drop-shadow-md">Puppies</h2>

        {/* Subheading */}
        <p className="text-lg mb-6 font-medium drop-shadow-sm">
          {litterDoB
            ? `These puppies are ${age} old, born on ${new Date(litterDoB).toLocaleDateString()}`
            : 'The age of these puppies will be displayed here when available.'}
        </p>

        {/* Puppies Grid */}
        {puppies.length === 0 ? (
          <p className="text-center text-gray-300">No puppies available for this parent.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* We pass the index to each card so we can use it for animation delays */}
            {puppies.map((puppy, index) => (
              <PuppyCard key={puppy.id} puppy={puppy} delayIndex={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default PuppiesList;
