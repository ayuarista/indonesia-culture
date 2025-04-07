import { useState } from "react";
// import { events } from "./EventData";
import { events } from "../../data/CalenderEventsData";
import { calculateDaysLeft } from "../Organisms/calculateDays";

const months = [
  { label: "Semua Bulan", value: "" },
  { label: "Januari", value: "01" },
  { label: "Februari", value: "02" },
  { label: "Maret", value: "03" },
  { label: "April", value: "04" },
  { label: "Mei", value: "05" },
  { label: "Juni", value: "06" },
  { label: "Juli", value: "07" },
  { label: "Agustus", value: "08" },
  { label: "September", value: "09" },
  { label: "Oktober", value: "10" },
  { label: "November", value: "11" },
  { label: "Desember", value: "12" },
];

export default function CalenderEvents() {
  const [selectedMonth, setSelectedMonth] = useState("");

  const filteredEvents = events.filter((event) => {
    if (!selectedMonth) return true;
    const eventMonth = new Date(event.date).toISOString().slice(5, 7);
    return eventMonth === selectedMonth;
  });

  return (
    <div className="p-6 text-black">
      <h2 className="text-2xl font-bold mb-4">Kalender Event Budaya</h2>

      <div className="mb-6">
        <label className="block mb-1 font-medium text-gray-700">
          Filter berdasarkan bulan:
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
        <p className="text-gray-500">Tidak ada event di bulan ini.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => {
            const daysLeft = calculateDaysLeft(event.date);
            return (
              <div
                key={event.id}
                className="border rounded-2xl p-4 shadow bg-white hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold">{event.name}</h3>
                <p className="text-sm text-gray-600">
                  Lokasi: {event.location}
                </p>
                <p className="text-sm text-gray-600">
                  Tanggal:{" "}
                  {new Date(event.date).toLocaleDateString("id-ID", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>

                <p className="mt-2 font-medium text-blue-600">
                  {daysLeft > 0
                    ? `Tersisa ${daysLeft} hari lagi`
                    : "Sedang berlangsung atau sudah lewat"}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
