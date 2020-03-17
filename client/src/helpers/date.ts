import moment from "moment";

export const getDaysOfAMonth = (month: string | number) => {
  var count = moment()
    .month(month)
    .daysInMonth();
  var days = [];
  for (var i = 1; i < count + 1; i++) {
    days.push(
      moment()
        .month(month)
        .date(i)
    );
  }
  return days;
};
