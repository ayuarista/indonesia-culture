import React from "react";

const FunFact = ({ event }) => {
  return (
    <div className="mt-3 text-justify text-black text-pretty text-base/relaxed">
      {event.funFact.map((fact, index) => (
        <div key={index} className="mb-6">
            <div>
              <h1 className="font-semibold text-xl xl:text-[26px]">{fact.title}</h1>
              <p className="mt-1 lg:text-[15px]/relaxed xl:text-[17px]/relaxed">{fact.desc}</p>
              <hr className="text-gray-200 mt-7"/>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-5 mt-4">
            <div className="bg-red-50 p-5 rounded-lg">
              <h1 className="font-semibold text-lg xl:text-xl">{fact.title2}</h1>
              <p className="mt-1 font-semibold text-lg xl:text-xl">{fact.subtitle}</p>
              <ul className="list-disc ml-5 mt-3">
                {fact.sublist.map((item, idx) => (
                  <li key={idx} className="lg:text-[15px]/relaxed xl:text-[17px]/relaxed mt-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:h-54 xl:h-60 w-full">
              <img src={fact.image} alt={fact.title} className="w-full h-full object-cover rounded-lg"/>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto mt-3 xl:mt-4 gap-5">
            <div className="p-5 bg-yellow-50 rounded-lg">
              <p className="font-semibold text-lg xl:text-xl">{fact.subtitle2}</p>
              <ul className="list-disc ml-5 mt-2">
                {fact.sublist2.map((item, idx) => (
                  <li key={idx} className="lg:text-[15px]/relaxed xl:text-[17px]/relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 bg-blue-50 rounded-lg">
              <p className="mt-3 font-semibold text-lg xl:text-xl">{fact.subtitle3}</p>
              <ul className="list-disc ml-5 mt-2">
                {fact.sublist3.map((item, idx) => (
                  <li key={idx} className="lg:text-[15px]/relaxed xl:text-[17px]/relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FunFact;
