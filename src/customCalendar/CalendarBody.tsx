import {View, Text, Pressable, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

const divideArray = (data = [] as any, size = 1) => {
  const array = [];
  for (let i = 0; i < data.length; i += size) {
    array.push(data.slice(i, i + size));
  }
  return array;
};

const isSameObj = (obj1: any, obj2: any) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

const CalendarBody = (props: any) => {
  const [totalDays, setTotalDays] = useState([]) as any;
  const [totalDaysByState, setTotalDaysByState] = useState({}) as any;
  const [pressedDate, setPressedDate] = useState({
    state: '',
    year: 0,
    month: 0,
    date: 0,
  });
  const [week, setWeek] = useState(0);
  const [isViewTotalDays, setIsViewTotalDays] = useState(true);
  const {year, month, date} = props;

  useEffect(() => {
    getTotalDays(year, month);
  }, [year, month, date]);

  useEffect(() => {
    totalDays.forEach((item: any, index: number) => {
      if (item.includes(date)) {
        setWeek(index);
      }
    });
  }, [date, totalDays]);

  const getTotalDays = (year: number, month: number) => {
    const prevMonthLastDate = new Date(year, month - 1, 0).getDate();
    const prevMonthLastDay = new Date(year, month - 1, 0).getDay();
    const currentMonthLastDate = new Date(year, month, 0).getDate();
    const currentMonthLastDay = new Date(year, month, 0).getDay();

    const prevDays = Array.from(
      {length: prevMonthLastDay + 1},
      (_, i) => prevMonthLastDate - prevMonthLastDay + i,
    );
    const currentDays = Array.from(
      {length: currentMonthLastDate},
      (_, i) => i + 1,
    );
    const nextDays = Array.from(
      {length: 6 - currentMonthLastDay},
      (_, i) => i + 1,
    );

    setTotalDays(divideArray([...prevDays, ...currentDays, ...nextDays], 7));

    setTotalDaysByState({
      prev: {
        daysList: prevMonthLastDay !== 6 ? prevDays : [],
        year: month === 1 ? year - 1 : year,
        month: month === 1 ? 12 : month - 1,
      },
      curr: {daysList: currentDays, year: year, month: month},
      next: {
        daysList: nextDays,
        year: month === 12 ? year + 1 : year,
        month: month === 12 ? 1 : month + 1,
      },
    });
  };

  const handlePressDay = () => {
    setPressedDate(pressedDate);
    if (pressedDate.state === 'prev' || pressedDate.state === 'next') {
      props.moveToSpecificYearMonth(pressedDate.year, pressedDate.month);
    }
  };

  const onSwipeLeft = () => {
    if (isViewTotalDays === true) {
      props.moveToNextMonth(month);
    }
    if (isViewTotalDays === false) {
      if (totalDays[week + 1] === undefined) {
        props.moveToNextMonth(month);
        setWeek(0);
      } else {
        setWeek(week + 1);
      }
    }
  };

  const onSwipeRight = () => {
    if (isViewTotalDays === true) {
      props.moveToPrevMonth(month);
    }
    if (isViewTotalDays === true) {
      if (totalDays[week - 1] === undefined) {
        props.moveToPrevMonth(month);
        if (
          new Date(year, month - 1, 0).getDay() === 4 ||
          new Date(year, month - 1, 0).getDay() === 5
        ) {
          setWeek(5);
        } else {
          setWeek(4);
        }
      } else {
        setWeek(week - 1);
      }
    }
  };

  const onSwipeUp = () => {
    setIsViewTotalDays(false);
  };
  const onSwipeDown = () => {
    setIsViewTotalDays(true);
  };

  return (
    <GestureRecognizer
      onSwipeUp={onSwipeUp}
      onSwipeDown={onSwipeDown}
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      config={{velocityThreshold: 0.1}}>
      <View style={C.dayOfWeek}>
        {dayOfWeek.map((day: any, index: number) => (
          <View style={C.box} key={index}>
            <Text style={changeColorByDay(day).dayOfWeek}>{day}</Text>
          </View>
        ))}
      </View>
      <View>
        {isViewTotalDays ? (
          <View style={C.totalDays}>
            {Object.keys(totalDaysByState).map((state: any) =>
              totalDaysByState[state].daysList.map((day: any) => {
                const checkPressedDate = {
                  state: state,
                  year: totalDaysByState[state].year,
                  month: totalDaysByState[state].month,
                  date: day,
                };
                return (
                  <View style={C.box} key={uuidv4()}>
                    <Pressable
                      onPress={handlePressDay.bind(this, checkPressedDate)}
                      style={({pressed}) => {
                        return [
                          pressedDate.date === checkPressedDate.date &&
                          pressedDate.month === checkPressedDate.month &&
                          pressedDate.year === checkPressedDate.year
                            ? C.pressedDate
                            : null,
                          pressed && C.pressed,
                        ];
                      }}>
                      <Text
                        style={[
                          [
                            isSameObj(
                              {state: 'curr', ...props.today},
                              checkPressedDate,
                            )
                              ? C.today
                              : state === 'prev' || state === 'next'
                              ? C.prev
                              : C.curr,
                          ],
                        ]}>
                        {day}
                      </Text>
                    </Pressable>
                  </View>
                );
              }),
            )}
          </View>
        ) : (
          <View style={{width: '100%', flexDirection: 'row'}}>
            {totalDays[week]?.map((item: any, index: number) => {
              const checkPressDate = {
                year: year,
                month: month,
                date: item,
              };
              return (
                <View style={C.box} key={index}>
                  <Pressable
                    onPress={handlePressDay.bind(this, checkPressDate)}
                    style={({pressed}) => {
                      return [
                        pressedDate.date === checkPressDate.date &&
                        pressedDate.month === checkPressDate.month &&
                        pressedDate.year === checkPressDate.year
                          ? C.pressedDate
                          : null,
                        pressed && C.pressed,
                      ];
                    }}>
                    <Text
                      style={[
                        [
                          isSameObj({...props.today}, checkPressDate)
                            ? C.today
                            : C.curr,
                        ],
                      ]}>
                      {item}
                    </Text>
                  </Pressable>
                </View>
              );
            })}
          </View>
        )}
      </View>
    </GestureRecognizer>
  );
};

export default CalendarBody;

const C = StyleSheet.create({
  dayOfWeek: {
    flexDirection: 'row',
  },
  totalDays: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: '14.2%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  prev: {
    color: 'gray',
    fontSize: 24,
  },
  next: {
    color: 'gray',
    fontSize: 24,
  },
  curr: {
    color: 'black',
    fontSize: 24,
  },
  today: {
    color: '#2196f3',
    fontSize: 24,
  },
  pressedDate: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.3,
  },
});

const changeColorByDay = (day: any) =>
  StyleSheet.create({
    dayOfWeek: {
      color: day === 'Sun' ? 'red' : day === 'Sat' ? 'blue' : 'gray',
      fontSize: 16,
    },
  });
