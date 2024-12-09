import React, { useState } from 'react'; // Correct import for useState
import MeetTheParentsSection from './MeetTheParentsSection'; // Import MeetTheParentsSection
import PuppiesList from './PuppiesList'; // Import PuppiesList
import PuppyBenefitsSection from './PuppyBenefitsSection';

function ParentSection() {
  const [selectedParentId, setSelectedParentId] = useState(null); // Define useState

  return (
    <div>
      {/* Pass setSelectedParentId as onParentSelect */}
      <MeetTheParentsSection onParentSelect={setSelectedParentId} />
      <PuppyBenefitsSection></PuppyBenefitsSection>
      {/* Render PuppiesList only if a parent is selected */}
      {selectedParentId && <PuppiesList selectedParentId={selectedParentId} />}
    </div>
  );
}

export default ParentSection;
