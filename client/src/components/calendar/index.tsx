import React, { useState } from "react";
import { getDaysOfAMonth } from "../../helpers/date";
import DatePicker from "../DatePicker";
import "./Calendar.css";
import CalendarHeader from "./CalendarHeader";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const currentDate = new Date().getDate();

  return (
    <div className="Calendar">
      <div className="Calendar__Header">
        <CalendarHeader
          month={currentMonth}
          year={currentYear}
          onPreviousMonth={() => {
            let month = currentMonth;
            let year = currentYear;
            month--;
            if (month < 0) {
              month = 11;
              year--;
            }
            setCurrentMonth(month);
            setCurrentYear(year);
          }}
          onNextMonth={() => {
            let month = currentMonth;
            let year = currentYear;
            month++;
            if (month > 11) {
              month = 0;
              year++;
            }
            setCurrentMonth(month);
            setCurrentYear(year);
          }}
        />
      </div>
      <div className="DatePicker">
        <DatePicker
          currentYear={currentYear}
          currentMonth={currentMonth}
          currentDate={currentDate}
          days={getDaysOfAMonth(currentMonth).map(
            (day, i) => day && String(i + 1)
          )}
        />
      </div>
    </div>
  );
};

export default Calendar;
