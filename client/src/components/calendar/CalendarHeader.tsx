import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  month: string | number;
  year: string | number;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
}

const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const CalendarHeader: React.FC<Props> = ({
  year,
  month,
  onPreviousMonth,
  onNextMonth
}) => {
  return (
    <>
      <span onClick={onPreviousMonth}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </span>
      <span>
        <strong>
          {months[+month]} {year}
        </strong>
      </span>
      <span onClick={onNextMonth}>
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
    </>
  );
};

export default CalendarHeader;
