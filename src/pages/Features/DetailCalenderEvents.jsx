import { useParams } from "react-router-dom";
import { events } from "../../data/CalenderEventsData";

export default function DetailCalenderEvents() {
  const { id } = useParams();
  const event = events.find((e) => e.id.toString() === id);

  if (!event) return <p>Event not found</p>;

  return (
    <div className="p-6 pt-20 text-black">
      <h1 className="text-3xl font-bold">{event.name}</h1>
      <img src={event.img} alt={event.name} className="w-full mt-4 rounded" />
      <p className="text-gray-600 mt-2">
        <strong>Location:</strong> {event.location}
      </p>
      <p className="text-gray-600">
        <strong>Date:</strong>{" "}
        {new Date(event.date).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <p className="mt-4 text-justify">{event.description}</p>
    </div>
  );
}
