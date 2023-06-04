import React, {useState, useEffect, useRef, memo, useCallback} from 'react';
import {View, SafeAreaView, Platform, FlatList, Text} from 'react-native';
import {
  AgendaList,
  CalendarProvider,
  ExpandableCalendar,
} from 'react-native-calendars';
import CoWorkersAgendaItem from './CoWorkersAgendaItem';
import {getMarkedDates, getTheme} from './CoWorkersAgendaItems';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

// import moment from 'moment';
import Moment from 'moment';
import {extendMoment} from 'moment-range';

//@ts-ignore
import styled, {css} from 'styled-components/native';
import dummyData from '../dummyData.json';

import {screenHeight, screenWidth} from './AnimationPractice';
import {TouchableOpacity} from 'react-native-gesture-handler';

//@ts-ignore
const moment = extendMoment(Moment);

const commuteTime = [
  {id: 0, date: '2023-04-13', startTime: '09:05', endTime: '18:00'},
  {id: 1, date: '2023-04-14', startTime: '09:00', endTime: '18:00'},
  {id: 2, date: '2023-04-15', startTime: '09:10', endTime: '18:00'},
  {id: 3, date: '2023-04-16', startTime: '09:00', endTime: '18:00'},
  {id: 4, date: '2023-04-17', startTime: '09:30', endTime: '18:00'},
];

const holidayList = [
  {id: 0, date: '2023-04-04', endDate: '2023-04-08', icon: '🌞'},
  {id: 1, date: '2023-04-12', endDate: '2023-04-24', icon: '🌞'},
  {id: 2, date: '2023-04-15', endDate: '2023-04-24', icon: '✈️'},
  {id: 3, date: '2023-04-20', endDate: '2023-04-24', icon: '🌜'},
  {id: 4, date: '2023-04-29', endDate: '2023-04-24', icon: '🌜'},
];

const EmptyItem = memo((props: any) => {
  const selectedDate =
    props.changeSelectedDay !== ''
      ? moment(props.changeSelectedDay).format('M월 D일')
      : moment().format('M월 D일');
  return (
    <EmptyView>
      <EmptyText>{selectedDate}에 휴가인 동료가 없어요</EmptyText>
    </EmptyView>
  );
});

export const sortedData = (data: any) => {
  const sortedData = data?.sort((val1: any, val2: any) => {
    const a = new Date(val1) as any;
    const b = new Date(val2) as any;
    return a - b;
  });

  return sortedData;
};

const TextCalendar = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [customDate, setCustomDate] = useState(moment()) as any;
  const [changeSelectedDay, setChangeSelectedDay] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [dummyCoWorkersData, setDummyCoWorkersData] = useState(
    dummyData.data,
  ) as any;

  const marked = useRef(getMarkedDates());
  const theme = useRef(getTheme());

  const flatList = useRef<FlatList>(null);

  useEffect(() => {
    console.log('=== 1 ===');
    const selectedDate =
      changeSelectedDay !== '' ? moment(changeSelectedDay) : moment();
    const startOfWeek = selectedDate.startOf('week');

    let currentWeeklyDate = [] as any;

    for (let i = 0; i < 7; i++) {
      currentWeeklyDate.push(
        startOfWeek.clone().add(i, 'days').format('YYYY-MM-DD'),
      );
    }

    // 선택된 날짜의 모든 월의 날짜를 구하는 방식. 단, 오늘기준은 빠져있음.
    const firstDayOfMonth = moment(changeSelectedDay).startOf('month');
    const lastDayOfMonth = moment(changeSelectedDay).endOf('month');

    const datesInMonth = [] as any;

    let currentMonthlyDate = firstDayOfMonth;

    while (currentMonthlyDate <= lastDayOfMonth) {
      datesInMonth.push(currentMonthlyDate.clone().format('YYYY-MM-DD'));
      currentMonthlyDate.add(1, 'days');
    }

    const filteredDataByMonthWeek = dummyData.data.filter((item: any) => {
      if (
        Object.values(currentWeeklyDate).includes(item.startDate) &&
        isCalendarOpen === false
      ) {
        console.log('CLOSED!!!');
        return Object.values(currentWeeklyDate).includes(item.startDate);
        // && item.type !== '발생연차'
      }

      if (
        Object.values(datesInMonth).includes(item.startDate) &&
        isCalendarOpen === true
      ) {
        console.log('OPEN!!!');
        return Object.values(datesInMonth).includes(item.startDate);
        // || item.type !== '발생연차'
      }
    });

    setDummyCoWorkersData(filteredDataByMonthWeek);
    console.log('=== 2 ===');
  }, [isCalendarOpen, changeSelectedDay]);

  console.log('dummyCoWorkersData', dummyCoWorkersData);

  const handleDayChange = (day: any) => {
    console.log('=== 4 ===');
    setChangeSelectedDay(day);
    setCustomDate(day);
  };

  const onCalendarToggled = (open: boolean) => {
    console.log('=== 5 ===');
    setIsCalendarOpen(open);
  };

  const showDatePicker = () => {
    console.log('=== 6 ===');
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    console.log('=== 7 ===');
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    console.log('=== 8 ===');
    setCustomDate(moment(date).format('YYYY-MM-DD'));
    hideDatePicker();
  };

  const renderItem = useCallback(({item}: any) => {
    console.log('=== 9 ===');
    return <CoWorkersAgendaItem item={item} />;
  }, []);

  const itemsOfAgenda = {} as any;

  if (dummyCoWorkersData && Object.keys(dummyCoWorkersData).length > 0) {
    dummyCoWorkersData.forEach((item: any) => {
      console.log('=== 10 ===');
      const startDate = moment(item.startDate);
      const endDate = moment(item.endDate);
      for (let date = startDate; date <= endDate; date.add(1, 'days')) {
        const dateStr = date.format('YYYY-MM-DD');
        if (!itemsOfAgenda[dateStr]) {
          itemsOfAgenda[dateStr] = [];
        }
        itemsOfAgenda[dateStr].push(item);
      }
    });
  }

  let formattedSectionData = [] as any;

  if (dummyCoWorkersData && Object.keys(itemsOfAgenda).length > 0) {
    for (let i = 0; i < Object.keys(itemsOfAgenda).length; i++) {
      formattedSectionData.push({
        title: Object.keys(itemsOfAgenda)[i],
        data: Object.values(itemsOfAgenda)[i],
      });
    }
  }

  const renderHeader = (date: any) => {
    const month = date?.toString('yyyy년 MMMM');
    return (
      <>
        <HeaderTochableOpacity onPress={showDatePicker}>
          <View>
            <CalendarHeaderTitleText>{month}</CalendarHeaderTitleText>
          </View>
        </HeaderTochableOpacity>
        <WeekDayNameView>
          <DayNameBoxView>
            <DayNameSundayText>일</DayNameSundayText>
            <DayNameWeekDaysText>월</DayNameWeekDaysText>
            <DayNameWeekDaysText>화</DayNameWeekDaysText>
            <DayNameWeekDaysText>수</DayNameWeekDaysText>
            <DayNameWeekDaysText>목</DayNameWeekDaysText>
            <DayNameWeekDaysText>금</DayNameWeekDaysText>
            <DayNameSaturdayText>토</DayNameSaturdayText>
          </DayNameBoxView>
        </WeekDayNameView>
      </>
    );
  };

  const renderDay = (date: any) => {
    const [weekends, setWeekends] = useState([]) as any;
    const [state, setState] = useState({
      selectedDates: '' as any,
      markedDates: [] as any,
    });

    console.log('marekdDate', state);

    const onSelectedDate = (day: any) => {
      let tempSelectedDates = sortedData([...state.selectedDates] as any);
      let selected = true;

      // 선택된 날짜를 다시 선택 할 때
      if (state.markedDates[day.dateString]?.selected === true) {
        selected = !state.markedDates[day.dateString].selected;

        const updateMarkedDates = {
          ...state.markedDates,
          ...{[day.dateString]: {selected, selectedColor: '#407DF1'}},
        };

        for (let key in updateMarkedDates) {
          if (key === day.dateString) {
            delete updateMarkedDates[day.dateString];
          }
        }
        setState({markedDates: updateMarkedDates, selectedDates: ''});
      } else {
        tempSelectedDates.push(day.dateString);
        const updateMarkedDates = {
          ...state.markedDates,
          ...{[day.dateString]: {selected, selectedColor: '#407DF1'}},
        };
        setState({
          markedDates: updateMarkedDates,
          selectedDates: tempSelectedDates,
        });
      }
    };

    useEffect(() => {
      const extractMonth = moment(date.date.dateString);
      const firstDayOfMonth = extractMonth.clone().startOf('month');

      let firstSaturdayOfMonth = firstDayOfMonth.clone().weekday(6);
      let firstSundayOfMonth = firstDayOfMonth.clone().weekday(0);

      if (firstSaturdayOfMonth.isBefore(extractMonth)) {
        firstSaturdayOfMonth = firstSaturdayOfMonth.add(7, 'days');
      }
      if (firstSundayOfMonth.isBefore(extractMonth)) {
        firstSundayOfMonth = firstSundayOfMonth.add(7, 'days');
      }

      const weekendsInMonth = [];

      while (firstSaturdayOfMonth.month() === extractMonth.month()) {
        weekendsInMonth.push(firstSaturdayOfMonth.format('YYYY-MM-DD'));
        firstSaturdayOfMonth.add(7, 'days');
      }
      while (firstSundayOfMonth.month() === extractMonth.month()) {
        weekendsInMonth.push(firstSundayOfMonth.format('YYYY-MM-DD'));
        firstSundayOfMonth.add(7, 'days');
      }

      setWeekends(weekendsInMonth);
    }, [date.date.dateString]);

    const selectedHoliday = formattedSectionData.filter((item: any) =>
      item.title.includes(date.date.dateString),
    );

    const today = moment().format('YYYY-MM-DD');

    return (
      <TouchableOpacity onPress={() => onSelectedDate(date.date.day)}>
        {today === date.date.dateString && (
          <View style={{backgroundColor: 'blue'}}>
            <Text>{date.date.day}</Text>
          </View>
        )}
        {today !== date.date.dateString &&
          !weekends.includes(date.date.dateString) && (
            <View style={{backgroundColor: 'green'}}>
              <Text>{date.date.day}</Text>
            </View>
          )}
        {today !== date.date.dateString &&
          weekends.includes(date.date.dateString) && (
            <View style={{backgroundColor: 'green'}}>
              <Text>{date.date.day}</Text>
            </View>
          )}
        {selectedHoliday.length > 0 && (
          <View>
            <Text>✈️</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const today = moment().format('YYYY-MM-DD');
  console.log('changeSelectedDay', changeSelectedDay);
  console.log('customDate', customDate);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth,
      }}>
      <CalendarProvider
        date={moment(customDate).format('YYYY-MM-DD')}
        onDateChanged={handleDayChange}
        showTodayButton={true}
        todayButtonStyle={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          height: 30,
          shadowColor: '#B1B5BD',
        }}
        theme={{
          todayButtonTextColor: '#407DF1',
        }}
        // onMonthChange
        style={{
          width: screenWidth,
          height: screenHeight,
          marginTop: 20,
          marginBottom: 20,
        }}>
        <ExpandableCalendar
          markedDates={marked.current}
          markingType={'custom'}
          onDayPress={({dateString}) => {
            setChangeSelectedDay(dateString);
            setCustomDate(dateString);
          }}
          firstDay={7}
          allowShadow={false}
          initialPosition={ExpandableCalendar.positions.OPEN}
          calendarWidth={screenWidth}
          renderHeader={date => renderHeader(date)}
          onCalendarToggled={onCalendarToggled}
          theme={theme.current}
          closeOnDayPress={false}
          // animateScroll
          // futureScrollRange={36}
          // pastScrollRange={36}
          style={{
            borderRadius: 15,
            width: screenWidth,
            overflow: 'hidden',
          }}
          //   dayComponent={day => renderDay(day)}
          dayComponent={({date, state, marking}: any) => {
            return (
              <>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedDay(date.dateString);
                  }}
                  style={{
                    width: 30,
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:
                      selectedDay === date.dateString ||
                      today === date.dateString
                        ? '#407DF1'
                        : '',
                    borderRadius: 30,
                  }}>
                  <Text
                    style={{textAlign: 'center', color: 'black', fontSize: 20}}>
                    {date.day}
                  </Text>
                </TouchableOpacity>
                {commuteTime.map((item: any) => {
                  return (
                    <>
                      {item.date === date.dateString && (
                        <View>
                          <Text style={{fontSize: 12}}>{item.startTime}</Text>
                          <Text style={{fontSize: 12}}>{item.endTime}</Text>
                        </View>
                      )}
                    </>
                  );
                })}
                {holidayList.map((item: any) => {
                  return (
                    <>
                      {item.date === date.dateString && (
                        <View style={{position: 'absolute', right: -2, top: 6}}>
                          <Text style={{fontSize: 12}}>{item.icon}</Text>
                        </View>
                      )}
                    </>
                  );
                })}
              </>
            );
          }}
        />

        {/* {today === date.dateString && (
                    <View
                      style={{backgroundColor: 'blue', width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 30}}>
                      <Text>{date.day}</Text>
                    </View>
                  )} */}

        <BorderBottomView />

        {dummyCoWorkersData && Object.keys(dummyCoWorkersData).length > 0 && (
          <AgendaList
            scrollToNextEvent
            viewOffset={15}
            markToday={true}
            sections={formattedSectionData}
            renderItem={renderItem}
            // ListEmptyComponent={EmptyItem}
            dayFormat={'M월 d일 ddd요일'}
            // onScrollToIndexFailed={info => {
            //   const wait = new Promise((resolve: any) =>
            //     setTimeout(resolve, 500),
            //   );
            //   wait.then(() => {
            //     flatList.current?.scrollToIndex({
            //       index: info.index,
            //       animated: true,
            //     });
            //   });
            // }}
            ListEmptyComponent={EmptyItem}
            sectionStyle={{
              width: screenWidth * 0.9,
              marginBottom: 10,
            }}
          />
        )}
        {(!dummyCoWorkersData ||
          Object.keys(dummyCoWorkersData).length === 0) && (
          <EmptyItem changeSelectedDay={changeSelectedDay} />
        )}
      </CalendarProvider>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        locale="ko-KR"
        display="spinner"
        positiveButton={{label: '확인', textColor: '#000'}}
        negativeButton={{label: '취소', textColor: '#999'}}
        cancelTextIOS="취소"
        confirmTextIOS="확인"
        textColor="#000"
      />
    </SafeAreaView>
  );
};

export default TextCalendar;

const HeaderContainerView = styled.View`
  width: ${screenWidth * 0.9}px;
  height: ${(screenHeight * 0.115) / 2}px;
  background-color: #fff;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin: 10px 0 0 0;
`;

const BorderBottomView = styled.View`
  width: ${screenWidth}px;
  border-bottom-width: 1px;
  border-bottom-color: #e2e5ea;
  margin-top: 20px;
`;

const HeaderTitleText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
  padding-left: 20px;
`;

const CalendarHeaderTitleText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

const BackTouchableOpacity = styled.TouchableOpacity`
  widht: 60px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

const HeaderTochableOpacity = styled.TouchableOpacity`
  bottom: 15px;
`;

const WeekDayNameView = styled.View`
  flex-direction: column;
  margin-top: 5px;
  background-color: #fff;
  z-index: 1;
`;

const DayNameBoxView = styled.View`
  flex-direction: row;
  z-index: 2;
  position: absolute;
  width: ${screenWidth * 0.835}px;
  ${Platform.select({
    ios: css`
      top: 25px;
    `,
    android: css`
      top: 25px;
    `,
  })};
  ${Platform.select({
    ios: css`
      left: -204px;
    `,
    android: css`
      left: -216px;
    `,
  })};
  align-self: center;
  background-color: #fff;
  justify-content: space-between;
`;

const DayNameSundayText = styled.Text`
  color: #ff4e4e;
`;

const DayNameSaturdayText = styled.Text`
  color: #b1b5bd;
`;

const DayNameWeekDaysText = styled.Text`
  color: #b1b5bd;
`;

const RenderArrowContainerView = styled.View`
  margin-bottom: 40px;
`;

const RenderLeftArrowBoxView = styled.View`
  left: 75px;
  bottom: 15px;
  width: 40px;
  height: 40px;
  margin-bottom: -40px;
  justify-content: center;
  align-items: center;
`;

const RenderRightArrowBoxView = styled.View`
  right: 75px;
  bottom: 15px;
  width: 40px;
  height: 40px;
  margin-bottom: -40px;
  justify-content: center;
  align-items: center;
`;

const EmptyView = styled.View`
  align-items: center;
  justify-content: flex-start;
  height: ${screenHeight}px;
  top: 100px;
`;

const EmptyText = styled.Text`
  color: #6b6e77;
  font-size: 16px;
`;

// ******************** 아이콘과 함께 출력되는 로직 - press 불가능 ********************
// *********************************** 삭제X ***********************************
// const renderDay = (date: any) => {
//   const [weekends, setWeekends] = useState([]) as any;
//   const [state, setState] = useState({
//     selectedDates: '' as any,
//     markedDates: [] as any,
//   });

//   const onSelectedDate = (day: DateData) => {
//     let tempSelectedDates = sortedData([...state.selectedDates] as any);
//     let selected = true;

//     // 선택된 날짜를 다시 선택 할 때
//     if (state.markedDates[day.dateString]?.selected === true) {

//       selected = !state.markedDates[day.dateString].selected;

//       const updateMarkedDates = {
//         ...state.markedDates,
//         ...{[day.dateString]: {selected, selectedColor: '#407DF1'}},
//       };

//       for (let key in updateMarkedDates) {
//         if (key === day.dateString) {
//           delete updateMarkedDates[day.dateString];
//         }
//       }
//       setState({markedDates: updateMarkedDates, selectedDates: ''});
//     } else {
//       tempSelectedDates.push(day.dateString);
//       const updateMarkedDates = {
//         ...state.markedDates,
//         ...{[day.dateString]: {selected, selectedColor: '#407DF1'}},
//       };
//       setState({
//         markedDates: updateMarkedDates,
//         selectedDates: tempSelectedDates,
//       });
//     }
//   };

//   useEffect(() => {
//     const extractMonth = moment(date.date.dateString);
//     const firstDayOfMonth = extractMonth.clone().startOf('month');

//     let firstSaturdayOfMonth = firstDayOfMonth.clone().weekday(6);
//     let firstSundayOfMonth = firstDayOfMonth.clone().weekday(0);

//     if (firstSaturdayOfMonth.isBefore(extractMonth)) {
//       firstSaturdayOfMonth = firstSaturdayOfMonth.add(7, 'days');
//     }
//     if (firstSundayOfMonth.isBefore(extractMonth)) {
//       firstSundayOfMonth = firstSundayOfMonth.add(7, 'days');
//     }

//     const weekendsInMonth = [];

//     while (firstSaturdayOfMonth.month() === extractMonth.month()) {
//       weekendsInMonth.push(firstSaturdayOfMonth.format('YYYY-MM-DD'));
//       firstSaturdayOfMonth.add(7, 'days');
//     }
//     while (firstSundayOfMonth.month() === extractMonth.month()) {
//       weekendsInMonth.push(firstSundayOfMonth.format('YYYY-MM-DD'));
//       firstSundayOfMonth.add(7, 'days');
//     }

//     setWeekends(weekendsInMonth);
//   }, []);

//   const selectedHoliday = formattedSectionData.filter((item: any) =>
//     item.title.includes(date.date.dateString),
//   );

//   return (
//     <RenderDayContainer onPress={() => onSelectedDate}>
//       {today === date.date.dateString && (
//         <TodayBox>
//           <TodayText>{date.date.day}</TodayText>
//         </TodayBox>
//       )}
//       {today !== date.date.dateString &&
//         !weekends.includes(date.date.dateString) && (
//           <WeekdayText>{date.date.day}</WeekdayText>
//         )}
//       {today !== date.date.dateString &&
//         weekends.includes(date.date.dateString) && (
//           <WeekendText>{date.date.day}</WeekendText>
//         )}
//       {selectedHoliday.length > 0 && <TextIcon>✈️</TextIcon>}
//     </RenderDayContainer>
//   );
// };
// ******************** 아이콘과 함께 출력되는 로직 - press 불가능 ********************
// *********************************** 삭제X ***********************************
