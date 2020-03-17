import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./DatePicker.css";
import DatePickerWeekDays from "./DatePickerWeekDays";

interface Props {
  days: string[];
  currentYear: string | number;
  currentMonth: string | number;
  currentDate: string | number;
}

const DatePicker: React.FC<Props> = ({
  days = [],
  currentDate,
  currentMonth,
  currentYear
}) => {
  const [mDays, setMDays] = useState<{ [key: string]: string[] }>({});

  useEffect(() => {
    const daysArray: { [key: string]: string[] } = {};
    for (let i = 0; i < 5; i++) {
      let array = days.splice(0, 7);
      if (array.length < 7) {
        const newArray = new Array(7);
        for (let j = 0; j < 7; j++) {
          newArray.push(array[j] || -j);
        }
        array = newArray;
      }
      daysArray[`week_${String(i + 1)}`] = array;
    }
    setMDays(daysArray);
  }, [days]);

  return (
    <Container fluid>
      {mDays &&
        Object.values(mDays).map((mDay, i) => (
          <Row key={i}>
            <DatePickerWeekDays
              currentYear={currentYear}
              currentMonth={currentMonth}
              currentDate={currentDate}
              weekDays={mDay}
            />
          </Row>
        ))}
    </Container>
  );
};

export default DatePicker;
