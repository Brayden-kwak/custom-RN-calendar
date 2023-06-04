import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CalendarHeader from './CalendarBody';
import CalendarBody from './CalendarHeader';

const CustomCalendar = () => {
  const DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth() + 1;
  const DAY = DATE.getDate();
  const today = {year: YEAR, month: MONTH, date: DAY};

  const [year, setYear] = useState(YEAR);
  const [month, setMonth] = useState(MONTH);
  const [date, setDate] = useState(DAY);

  const moveTONextMonth = (month: number) => {
    if (month === 12) {
      setYear((prevYear: number) => prevYear + 1);
      setMonth(1);
    } else {
      setMonth((prevMonth: number) => prevMonth + 1);
    }
  };

  const moveToPrevMonth = (month: number) => {
    if (month === 1) {
      setYear((prevYear: number) => prevYear - 1);
      setMonth(12);
    } else {
      setMonth((prevMonth: number) => prevMonth - 1);
    }
  };

  const moveToSpecificYearMonth = (year: number, month: number) => {
    setYear(year);
    setMonth(month);
  };

  return (
    <View style={C.calendarContainer}>
      <CalendarHeader
        month={month}
        year={year}
        moveToNextMonth={moveTONextMonth}
        moveToPrevMonth={moveToPrevMonth}
        moveToSpecificYearMonth={moveToSpecificYearMonth}
      />
      <CalendarBody
        month={month}
        year={year}
        today={today}
        date={date}
        moveToNextMonth={moveTONextMonth}
        moveToPrevMonth={moveToPrevMonth}
        moveToSpecificYearMonth={moveToSpecificYearMonth}
      />
    </View>
  );
};

export default CustomCalendar;

const C = StyleSheet.create({
  calendarContainer: {
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
});
