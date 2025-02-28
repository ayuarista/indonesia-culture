import React from 'react';

const Popup = ({ title, location, description, image, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-3/4 md:w-1/2 lg:w-1/3">
        <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>✕</button>
        <img src={image} alt={title} className="w-full h-56 object-cover rounded-md" />
        <h2 className="text-xl font-semibold mt-2">{title}</h2>
        <p className="text-sm text-gray-600">{location}</p>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Popup;
