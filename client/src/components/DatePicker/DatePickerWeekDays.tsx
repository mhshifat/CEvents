import React from "react";
import { Col } from "react-bootstrap";
import DatePickerDay from "./DatePickerDay";

interface Props {
  weekDays: string[];
  currentYear: string | number;
  currentMonth: string | number;
  currentDate: string | number;
}

const DatePickerWeekDays: React.FC<Props> = ({
  weekDays,
  currentYear,
  currentMonth,
  currentDate
}) => {
  return (
    <>
      {weekDays &&
        weekDays.map(
          weekDay =>
            weekDay && (
              <Col key={weekDay} xs={12} md>
                <DatePickerDay
                  key={weekDay}
                  day={weekDay}
                  currentYear={currentYear}
                  currentMonth={currentMonth}
                />
              </Col>
            )
        )}
    </>
  );
};

export default DatePickerWeekDays;
