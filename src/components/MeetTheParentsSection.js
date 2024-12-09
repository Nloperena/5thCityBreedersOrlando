import React, { useState, useEffect } from 'react';
import { fetchParents } from '../services/contentfulService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MeetTheParentsSection({ onParentSelect }) {
  const [parents, setParents] = useState([]);
  const [currentParentIndex, setCurrentParentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    fetchParents().then((data) => {
      setParents(data);
      if (data.length > 0) {
        onParentSelect(data[0].id); // Automatically select the first parent
      }
    });
  }, [onParentSelect]);

  const handleNextParent = () => {
    // Only change parent if we have more than one
    if (parents.length > 1) {
      const newIndex = (currentParentIndex + 1) % parents.length;
      setCurrentParentIndex(newIndex);
      onParentSelect(parents[newIndex].id);
    }
  };

  const handlePreviousParent = () => {
    // Only change parent if we have more than one
    if (parents.length > 1) {
      const newIndex = (currentParentIndex - 1 + parents.length) % parents.length;
      setCurrentParentIndex(newIndex);
      onParentSelect(parents[newIndex].id);
    }
  };

  if (parents.length === 0)
    return (
      <section className="p-8 bg-gray-100 text-center">
        <p className="text-gray-600 animate-pulse">Loading parents...</p>
      </section>
    );

  const currentParent = parents[currentParentIndex];
  const multipleParents = parents.length > 1;

  return (
    <section 
      className="py-16 px-8 bg-gradient-to-b from-blue-50 to-blue-100 relative overflow-hidden mb-16"
      style={{
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Light pattern background */}
      <div className="absolute inset-0 z-0 bg-cover opacity-10" style={{ backgroundImage: "url('/assets/pawbg.png')" }}></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Bigger, bolder headline */}
        <h2 
          className="text-6xl md:text-7xl font-extrabold text-blue-800 mb-10 underline decoration-wavy decoration-blue-500"
          data-aos="fade-up"
        >
          Meet the Parents
        </h2>

        <div 
          className="bg-white shadow-xl rounded-xl p-8 transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative"
          data-aos="fade-up"
        >
          {currentParent.images && currentParent.images.length > 0 ? (
            <div className="overflow-hidden rounded-md mb-6 relative">
              <img
                src={currentParent.images[0]}
                alt={currentParent.name}
                className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          ) : (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-md mb-6">
              <p className="text-gray-500">Image not available</p>
            </div>
          )}
          
          <h3 className="text-3xl font-bold mb-4 text-gray-800">{currentParent.name}</h3>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">{currentParent.description}</p>

          <div className="flex justify-center space-x-4 mt-8">
            {/* Previous Button */}
            <button
              onClick={handlePreviousParent}
              disabled={!multipleParents}
              className={`px-4 py-2 rounded-full font-bold flex items-center space-x-2 transition-colors duration-300 active:scale-95
                ${multipleParents ? 'bg-blue-800 text-white hover:bg-blue-700 cursor-pointer' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}
              `}
              title={multipleParents ? "See previous parent" : "Only one parent available"}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>Prev</span>
            </button>

            {/* Next Button */}
            <button
              onClick={handleNextParent}
              disabled={!multipleParents}
              className={`px-4 py-2 rounded-full font-bold flex items-center space-x-2 transition-colors duration-300 active:scale-95
                ${multipleParents ? 'bg-blue-800 text-white hover:bg-blue-700 cursor-pointer' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}
              `}
              title={multipleParents ? "See next parent" : "Only one parent available"}
            >
              <span>Next</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MeetTheParentsSection;
