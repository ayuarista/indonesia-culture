import { useState } from "react";
import { events } from "../../data/CalenderEventsData";
import { calculateDaysLeft } from "../../components/Organisms/calculateDays";
import CardCalenderEvents from "../../components/Card/CardCalenderEvents";

const months = [
  { label: "All Months", value: "" },
  { label: "January", value: "01" },
  { label: "February", value: "02" },
  { label: "March", value: "03" },
  { label: "April", value: "04" },
  { label: "May", value: "05" },
  { label: "June", value: "06" },
  { label: "July", value: "07" },
  { label: "August", value: "08" },
  { label: "September", value: "09" },
  { label: "October", value: "10" },
  { label: "November", value: "11" },
  { label: "December", value: "12" },
];

export default function CalenderEvents() {
  const [selectedMonth, setSelectedMonth] = useState("");

  const filteredEvents = events.filter((event) => {
    if (!selectedMonth) return true;
    const eventMonth = new Date(event.date).toISOString().slice(5, 7);
    return eventMonth === selectedMonth;
  });

  return (
    <div className="p-6 text-black pt-20">
      <h2 className="text-2xl font-bold mb-4">Cultural Event Calendar</h2>

      <div className="mb-6">
        <label className="block mb-1 font-medium text-gray-700">
          Filter by month:
        </label>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="border rounded px-4 py-2"
        >
          {months.map((month) => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </select>
      </div>

      {filteredEvents.length === 0 ? (
        <p className="text-gray-500">No events this month.</p>
      ) : (
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => {
            const daysLeft = calculateDaysLeft(event.date);

            return (
              <CardCalenderEvents
                id={event.id}
                img={event.img}
                title={event.name}
                place={event.location}
                date={new Date(event.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
                cardDesc={event.cardDesc}
                daysLeft={
                  daysLeft > 0
                    ? `${daysLeft} days left`
                    : "Festival is over"
                }
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
