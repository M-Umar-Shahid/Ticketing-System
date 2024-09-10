import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from "date-fns";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Event details for the calendar
  const events = {
    "2022-01-03": [
      { title: "Design review", time: "10AM" },
      { title: "Sales meeting", time: "2PM" },
    ],
    "2022-01-07": [{ title: "Date night", time: "6PM" }],
    "2022-01-12": [{ title: "Sam's birthday party", time: "2PM" }],
    "2022-01-22": [
      { title: "Maple syrup museum", time: "3PM" },
      { title: "Hockey game", time: "7PM" },
    ],
    "2022-02-04": [{ title: "Cinema with friends", time: "9PM" }],
  };

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";
    return (
      <div className="flex items-center justify-between py-4">
        <h1 className="text-xl font-bold text-gray-900">
          {format(currentMonth, dateFormat)}
        </h1>
        <div className="flex space-x-4">
          <button
            className="text-gray-500"
            onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          >
            &#60;
          </button>
          <button className="px-4 py-1 text-sm bg-gray-200 rounded-lg">
            Today
          </button>
          <button
            className="text-gray-500"
            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          >
            &#62;
          </button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return (
      <div className="grid grid-cols-7 text-xs font-semibold text-center text-gray-500">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="py-2">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, "d");
        const fullDate = format(day, "yyyy-MM-dd");
        const hasEvent = events[fullDate];

        days.push(
          <div
            className={`relative p-4 border h-28 ${
              !isSameMonth(day, monthStart) ? "bg-gray-100" : "bg-white"
            }`}
            key={day}
            onClick={() => setSelectedDate(day)}
          >
            <span
              className={`text-sm font-bold ${
                isSameDay(day, selectedDate)
                  ? "bg-indigo-600 text-white rounded-full px-2"
                  : ""
              }`}
            >
              {formattedDate}
            </span>
            {hasEvent && (
              <ul className="mt-2 space-y-1">
                {hasEvent.map((event, index) => (
                  <li key={index} className="text-sm">
                    <span className="font-semibold">{event.title}</span>{" "}
                    <span className="text-xs text-gray-500">{event.time}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg w-full mx-auto">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
