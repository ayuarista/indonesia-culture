import { useState } from "react";
import { events } from "../../data/CalenderEventsData";
import { calculateDaysLeft } from "../../components/Organisms/calculateDays";
import CardCalenderEvents from "../../components/Card/CardCalenderEvents";
import Breadcrumbs from "../../components/Organisms/Breadcrumbs";
import { useParams } from "react-router-dom";

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
    <div className="p-6 text-black pt-20 lg:mx-8">
      <div className="flex items-center justify-center">
        <div className="flex-1 border-t-2 border-red-700"></div>
        <h2 className="mx-4 text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-0% from-dark-red to-80% to-light-red bg-clip-text text-transparent">Calender Events Festival</h2>
        <div className="flex-1 border-t-2 border-red-700"></div>
      </div>

      <div className="mb-6">
        <label className="block mb-1 font-medium text-gray-700">
          Filter by month:
        </label>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="border border-gray-400 rounded px-4 py-2 focus:outline-none"
        >
          {months.map((month) => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </select>
      </div>

      {filteredEvents.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center p-8 rounded-xl bg-gray-50">
        <p className="text-3xl xl:text-4xl font-semibold text-gray-700 mb-2">No Events This Month</p>
        <p className="text-gray-400 text-sm xl:text-base max-w-md">
          Stay tuned! New cultural events and updates might appear next month. 🗓️✨
        </p>
      </div>
      
      ) : (
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
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
