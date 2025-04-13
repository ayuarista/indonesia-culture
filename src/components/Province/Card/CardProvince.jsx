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
        'https://images.unsplash.com/photo-1692506881758-cad2a6129bf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D',
      path: '/province/sumatra',
      location: 'Sumatra',
    },
    {
      image:
        'https://images.unsplash.com/photo-1582426007790-f5a2e2392dd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D',
      path: '/province/sulawesi',
      location: 'Sulawesi',
    },
    {
      image:
        'https://images.unsplash.com/photo-1560998264-8dca42822b68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D',
      path: '/province/java',
      location: 'Java',
    },
    {
      image:
        'https://images.unsplash.com/photo-1630553069081-962b9270a00e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D',
      path: '/province/bali-nusa-tenggara',
      location: 'Bali & Nusa Tenggara',
    },
    {
      image:
        'https://images.unsplash.com/photo-1703769605332-79bcf45d1c5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D',
      path: '/province/maluku-papua',
      location: 'Maluku & Papua',
    },
  ];

  return (
    <div className="grid grid-cols-3 place-items-center gap-4 mt-10 mx-8 lg:mx-12">
      {provinces.map((prov, index) => (
        <div key={index} className="relative mb-8">
          <img
            src={prov.image}
            alt={prov.location}
            className="w-80 h-72 object-right object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 w-full">
            <ButtonProvince path={prov.path} location={prov.location} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProvince;
