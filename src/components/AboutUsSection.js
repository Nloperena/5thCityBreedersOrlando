import React from 'react';
import { Link } from 'react-router-dom'; 
import breedersImage from '../assets/littlegirlwith bullies.png'; 
import breedersImage2 from '../assets/dogs.png'

function AboutUsSection() {
  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">

        {/* First Section - Image on the Right */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">About Us</h2>
            <p className="text-lg text-gray-700 mb-4">
              At 5th City Breeders, our passion for American Bullies is matched only by our dedication to their well-being...
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our breeding practices prioritize health, temperament, and structure...
            </p>
            {/* Contact Button */}
            <Link to="/contact">
              <button className="bg-blue-800 text-white rounded-lg px-6 py-3 mt-4 hover:bg-blue-900">
                Contact Us
              </button>
            </Link>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src={breedersImage}
              alt="Breeders"
              className="rounded-lg shadow-lg object-cover w-full h-96"
            />
          </div>
        </div>

        {/* Second Section - Image on the Left */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our mission is to raise American Bullies that not only look beautiful but also have the ideal temperament...
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We carefully select our breeding pairs to ensure that each puppy inherits the best traits...
            </p>
            {/* Contact Button */}
            <Link to="/puppies">
              <button className="bg-blue-800 text-white rounded-lg px-6 py-3 mt-4 hover:bg-blue-900">
                See Puppies
              </button>
            </Link>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src={breedersImage2}
              alt="Breeders"
              className="rounded-lg shadow-lg object-cover w-full h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
