import { useParams } from "react-router-dom";
import { events } from "../../data/CalenderEventsData";
import { MdOutlineDateRange } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export default function DetailCalenderEvents() {
  const { id } = useParams();
  const event = events.find((e) => e.id.toString() === id);

  if (!event) return <p>Event not found</p>;

  return (
    <div className="p-6 pt-16 text-black">
      <div className="relative">
        <img
          src={event.img}
          alt={event.name}
          className="w-full object-cover h-72 mt-4 rounded-lg object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 h-72  transition-all duration-300 ease-in-out bg-gradient-to-t from-light-red via-black/10 to-transparent p-5 flex items-end">
          <h1 className="mx-auto font-bold text-4xl text-white">
            {event.name}
          </h1>
        </div>
      </div>
      <div>
        <div className="flex items-center mt-5  gap-3">
          <h1 className="font-semibold text-2xl">What is {event.name}?</h1>
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-red-50 text-red-400">
            <IoLocationSharp className="text-xl" />
            <h1 className="">{event.location}</h1>
          </div>
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-blue-400">
            <MdOutlineDateRange className="text-xl" />
            <h1 className="">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday:"long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </h1>
          </div>
        </div>
        <p className="mt-3 text-justify text-black text-pretty text-base/relaxed">
          {event.description}
        </p>
        <hr className="text-gray-200 mt-3"/>
        <div className="mt-3 text-justify text-black text-pretty text-base/relaxed">
          {event.funFact.map((fact, index) => (
            <div key={index} className="mb-2">
              <h1 className="font-semibold text-xl">{fact.title}</h1>
              <p className="mt-1">{fact.desc}</p>
              <hr className="text-gray-200 mt-3"/>
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
      </div>
    </div>
  );
}

{
  /* <p className="text-gray-600">
        <strong>Date:</strong>{" "}
        {new Date(event.date).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p> */
}
