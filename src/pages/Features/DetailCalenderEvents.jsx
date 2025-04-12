import { useParams } from "react-router-dom";
import { events } from "../../data/CalenderEventsData";
import { MdOutlineDateRange } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import FunFactSection from "../../components/Organisms/FunFact";
import Breadcrumbs from "../../components/Organisms/Breadcrumbs";

export default function DetailCalenderEvents() {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Calender Events", path: "/features/calender-events" },
    { label: events.find((e) => e.id === parseInt(useParams().id)).name },
  ];
  const { id } = useParams();
  const event = events.find((e) => e.id.toString() === id);

  if (!event) return <p>Event not found</p>;

  return (
    <div className="p-6 pt-20 text-black mx-8 lg:mx-10">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="relative">
        <img
          src={event.img}
          alt={event.name}
          className="w-full object-cover h-72 mt-4 rounded-lg object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 h-72  transition-all duration-300 ease-in-out bg-gradient-to-t from-light-red via-black/10 to-transparent p-5 flex items-end">
          <h1 className="mx-auto font-bold lg:text-3xl xl:text-4xl text-white">
            {event.name}
          </h1>
        </div>
      </div>
      <div>
        <div className="flex items-center mt-5  gap-3">
          <h1 className="font-semibold text-2xl xl:text-[27px]">What is {event.name}?</h1>
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-red-50 text-red-400">
            <IoLocationSharp className="lg:text-base xl:text-xl" />
            <h1 className="lg:text-sm xl:text-base">{event.location}</h1>
          </div>
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-blue-400">
            <MdOutlineDateRange className="lg:text-base xl:text-xl" />
            <h1 className="lg:text-sm xl:text-base">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday:"long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </h1>
          </div>
        </div>
        <p className="mt-3 text-justify text-black text-pretty text-[15px]/relaxed xl:text-[17px]/relaxed">
          {event.description}
        </p>
        <hr className="text-gray-200 mt-7"/>
        <FunFactSection event={event} />
      </div>
    </div>
  );
}

