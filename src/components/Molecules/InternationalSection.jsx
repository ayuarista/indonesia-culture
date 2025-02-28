import React, { useState } from 'react';
import { DataInternational } from '../../data/card/DataInternational';
import CardInternational from '../Card/CardInternational';
import Popup from '../Popup/PopUpInternational';

const InternationalSection = () => {
  const [selectedAward, setSelectedAward] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Awards & Recognitions</h1>
      {Object.keys(DataInternational).map((category) => (
        <div key={category} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DataInternational[category].map((award) => (
              <CardInternational key={award.id} {...award} onClick={() => setSelectedAward(award)} />
            ))}
          </div>
        </div>
      ))}
      {selectedAward && <Popup {...selectedAward} onClose={() => setSelectedAward(null)} />}
    </div>
  );
};

export default InternationalSection;
