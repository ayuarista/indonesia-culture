import React from "react";

const FunFact = ({ event }) => {
  return (
    <div className="mt-3 text-justify text-black text-pretty text-base/relaxed">
      {event.funFact.map((fact, index) => (
        <div key={index} className="mb-6">
            <div>
              <h1 className="font-semibold text-xl">{fact.title}</h1>
              <p className="mt-1">{fact.desc}</p>
              <hr className="text-gray-200 mt-7"/>
            </div>
          <div className="flex items-center gap-5 mt-4">
            <div className="w-1/2 bg-red-50 p-9 rounded-lg">
              <h1 className="font-semibold text-lg">{fact.title2}</h1>
              <p className="mt-1 font-semibold text-lg">{fact.subtitle}</p>
              <ul className="list-disc ml-5 mt-2">
                {fact.sublist.map((item, idx) => (
                  <li key={idx} className="text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/2">
                <img src={fact.image} alt={fact.title} className="w-full h-52 rounded-lg object-cover"/>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-5">
            <div className="p-5 bg-yellow-50 rounded-lg">
              <p className="font-semibold text-lg">{fact.subtitle2}</p>
              <ul className="list-disc ml-5 mt-2">
                {fact.sublist2.map((item, idx) => (
                  <li key={idx} className="text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 bg-blue-50 rounded-lg">
              <p className="mt-3 font-semibold text-lg">{fact.subtitle3}</p>
              <ul className="list-disc ml-5 mt-2">
                {fact.sublist3.map((item, idx) => (
                  <li key={idx} className="text-base">
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
