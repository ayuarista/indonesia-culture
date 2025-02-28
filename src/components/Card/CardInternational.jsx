import React from 'react';

const CardInternational = ({ title, location, description, image, onClick }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg cursor-pointer" onClick={onClick}>
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-sm text-gray-600">{location}</p>
      <p className="text-sm mt-1">{description}</p>
    </div>
  );
};

export default CardInternational;
