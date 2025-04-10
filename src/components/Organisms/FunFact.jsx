
import React from "react";

const FunFact = ({ event }) => {
  return (
    <div className="mt-3 text-justify text-black text-pretty text-base/relaxed">
      {event.funFact.map((fact, index) => (
        <div key={index} className="mb-6">
          <h1 className="font-semibold text-xl">{fact.title}</h1>
          <p className="mt-1">{fact.desc}</p>
          <hr className="text-gray-200 mt-3" />
          {fact.subtitle && (
            <div className="mt-3">
              <h1 className="font-semibold text-lg">{fact.title2}</h1>
              <p className="mt-1 font-semibold text-lg">{fact.subtitle}</p>
              <ul className="list-disc ml-5 mt-2">
                {fact.sublist.map((item, idx) => (
                  <li key={idx} className="text-base">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-1 font-semibold text-lg">{fact.subtitle2}</p>
              <ul className="list-disc ml-5 mt-2">
                {fact.sublist2.map((item, idx) => (
                  <li key={idx} className="text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FunFact;
