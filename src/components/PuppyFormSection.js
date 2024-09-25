import React from 'react';
import PuppyForm from './Form'; // Replace with your form component

function PuppyFormSection() {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Reserve Your Puppy Today!</h2>
      <p className="text-gray-700 mb-6">
        Fill out the form below to start the adoption process. We look forward to helping you find your new furry friend!
      </p>
      <PuppyForm /> {/* Replace with your form component */}
    </div>
  );
}

export default PuppyFormSection;
