import React from 'react';
import ButtonProvince from '../ButtonProvince';

const CardProvince = () => {
  const provinces = [
    {
      image:
        'https://images.unsplash.com/photo-1735301709065-d0e8fc055baa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      path: '/province/kalimantan',
      location: 'Kalimantan',
    },
    {
      image:
        'https://images.unsplash.com/photo-1735301709065-d0e8fc055baa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      path: '/province/sumatera',
      location: 'Sumatera',
    },
    {
      image:
        'https://images.unsplash.com/photo-1735301709065-d0e8fc055baa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      path: '/province/sulawesi',
      location: 'Sulawesi',
    },
    {
      image:
        'https://images.unsplash.com/photo-1735301709065-d0e8fc055baa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      path: '/province/kalimantan',
      location: 'Kalimantan',
    },
    {
      image:
        'https://images.unsplash.com/photo-1735301709065-d0e8fc055baa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      path: '/province/sumatera',
      location: 'Sumatera',
    },
    {
      image:
        'https://images.unsplash.com/photo-1735301709065-d0e8fc055baa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      path: '/province/sulawesi',
      location: 'Sulawesi',
    },
  ];

  return (
    <div className="grid grid-cols-3 place-items-center gap-4 mt-10">
      {provinces.map((prov, index) => (
        <div key={index} className="relative">
          <img
            src={prov.image}
            alt={prov.location}
            className="w-80 h-80 object-right object-cover rounded-lg"
          />
          <div className="absolute bottom-0">
            <ButtonProvince path={prov.path} location={prov.location} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProvince;
