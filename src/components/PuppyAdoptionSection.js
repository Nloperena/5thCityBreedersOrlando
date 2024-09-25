import React from 'react';
import PuppyInfoSection from './PuppyInfoSection';
import PuppyBenefitsSection from './PuppyBenefitsSection';
import PuppyFormSection from './PuppyFormSection';
import MeetTheParentsSection from './MeetTheParentsSection'; // Import the new component

function PuppyAdoptionSection() {
  return (
    <section className="p-8 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Info and Benefits Section */}
        <div className="w-full lg:w-1/2">
          <PuppyInfoSection />
          <PuppyBenefitsSection /> {/* Add the new benefits section here */}
        </div>
        {/* Form Section */}
        <div className="w-full lg:w-1/2">
          <PuppyFormSection />
        </div>
      </div>
      {/* Meet the Parents Section */}
      <MeetTheParentsSection /> {/* Add the new Meet the Parents section here */}
    </section>
  );
}

export default PuppyAdoptionSection;
