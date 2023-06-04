import React, {useCallback, useRef, useState, useEffect, memo} from 'react';
import {FlatList, Platform, View, Text, SafeAreaView} from 'react-native';

import {
  AgendaList,
  CalendarProvider,
  ExpandableCalendar,
} from 'react-native-calendars';
import AgendaItem from './AgendaItem';
import {getMarkedDates, getTheme} from './AgendaItems';
import dummyData from '../dummyData.json';
// @ts-ignore
import styled, {css} from 'styled-components/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import moment from 'moment';
import {screenWidth, screenHeight} from './AnimationPractice';

// const ITEMS: any[] = agendaItems;
// "react-native-calendars": "^1.1275.0",

const EmptyItem = memo(() => {
  return (
    <View>
      <Text>휴가인 동료가 없어요</Text>
    </View>
  );
});

const CalendarTest = () => {
  const [dummyCoWorkersData, setDummyCoWorkersData] = useState('') as any;
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [customDate, setCustomDate] = useState(moment()) as any;
  const [changeSelectedDay, setChangeSelectedDay] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const marked = useRef(getMarkedDates({changeSelectedDay, isCalendarOpen}));
  const theme = useRef(getTheme());
  //   const todayBtnTheme = useRef({
  //     todayButtonTextColor: themeColor,
  //   });

  useEffect(() => {
    const selectedDate =
      changeSelectedDay !== '' ? moment(changeSelectedDay) : moment();
    const startOfWeek = selectedDate.startOf('week');
    // console.log('changeSelectedDay', changeSelectedDay);
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
        // console.log('CLOSED!!!');
        return currentWeeklyDate.includes(item.startDate);
        // return Object.values(currentWeeklyDate).includes(item.startDate);
        // && item.type !== '발생연차'
      }

      if (
        Object.values(datesInMonth).includes(item.startDate) &&
        isCalendarOpen === true
      ) {
        // console.log('OPEN!!!');
        return Object.values(datesInMonth).includes(item.startDate);
        // || item.type !== '발생연차'
      }
    });

    setDummyCoWorkersData(filteredDataByMonthWeek);
  }, [isCalendarOpen, changeSelectedDay]);

  // const onDateChanged = useCallback((date, updateSource) => {
  //   console.log('ExpandableCalendarScreen onDateChanged: ', date, updateSource);
  // }, []);

  // const onMonthChange = useCallback(({dateString}) => {
  //   console.log('ExpandableCalendarScreen onMonthChange: ', dateString);
  // }, []);

  const handleDayChange = (day: any) => {
    setChangeSelectedDay(day);
    setCustomDate(day);
  };

  const onCalendarToggled = (open: boolean) => {
    setIsCalendarOpen(open);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    setCustomDate(moment(date).format('YYYY-MM-DD'));
    hideDatePicker();
  };

  const renderItem = useCallback(({item}: any) => {
    return <AgendaItem item={item} />;
  }, []);

  //   const data2 = [] as any;

  //   dummyData.data.forEach((item: any) => {
  //     const {
  //       id,
  //       startDate,
  //       endDate,
  //       name,
  //       color,
  //       period,
  //       type,
  //       reason,
  //       detailType,
  //       approvalStatus,
  //       approvalDate,
  //       remainHoliday,
  //     } = item;
  //     const startDateMoment = moment(startDate);
  //     const endDateMoment = moment(endDate);

  //     while (startDateMoment <= endDateMoment) {
  //       const currentDateStr = startDateMoment.format('YYYY-MM-DD');
  //       const existingItem = data2.find(
  //         (items: any) => items.title === currentDateStr,
  //       );
  //       const newItem = {
  //         id,
  //         startDate,
  //         endDate,
  //         name,
  //         color,
  //         period,
  //         type,
  //         reason,
  //         detailType,
  //         approvalStatus,
  //         approvalDate,
  //         remainHoliday,
  //       };
  //       if (existingItem) {
  //         existingItem.data.push(newItem);
  //       } else {
  //         data2.push({title: currentDateStr, data: [newItem]});
  //       }
  //       startDateMoment.add(1, 'day');
  //     }
  //   });

  const itemsOfAgenda = {} as any;

  if (Object.keys(dummyCoWorkersData).length > 0) {
    dummyCoWorkersData.forEach((item: any) => {
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

  if (Object.keys(itemsOfAgenda).length > 0) {
    for (let i = 0; i < Object.keys(itemsOfAgenda).length; i++) {
      formattedSectionData.push({
        title: Object.keys(itemsOfAgenda)[i],
        data: Object.values(itemsOfAgenda)[i],
      });
    }
  }

  const flatList = useRef<FlatList>(null);

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

  const renderArrow = (direction: any) => {
    return (
      <RenderArrowContainerView>
        <RenderLeftArrowBoxView>
          {direction === 'left' && <Text>Left</Text>}
        </RenderLeftArrowBoxView>
        <RenderRightArrowBoxView>
          {direction === 'right' && <Text>Right</Text>}
        </RenderRightArrowBoxView>
      </RenderArrowContainerView>
    );
  };

  //   const memoizedRenderHeader = useMemo(() => renderHeader, []);
  //   const memoizedRenderArrow = useMemo(() => renderArrow, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth,
      }}>
      {/* @ts-ignore */}
      <CalendarProvider
        // onMonthChange={onMonthChange}
        // disabledOpacity={0.6}
        // theme={todayBtnTheme.current}
        // todayBottomMargin={16}
        // onMonthChange
        date={moment().format('YYYY-MM-DD')}
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
        style={{
          width: screenWidth,
          height: screenHeight,
          marginTop: 20,
          marginBottom: 20,
        }}>
        {/* <ExpandableCalendar
            //   testID={testIDs.expandableCalendar.CONTAINER}
            // horizontal={false}
            // hideArrows
            // disablePan
            // hideKnob
            // initialPosition={ExpandableCalendar.positions.OPEN}
            // calendarStyle={styles.calendar}
            // headerStyle={styles.header} // for horizontal only
            // disableWeekScroll
            theme={theme.current}
            // disableAllTouchEventsForDisabledDays
            firstDay={7}
            markedDates={marked.current}
            // animateScroll
            // closeOnDayPress={false}
        /> */}
        <ExpandableCalendar
          markedDates={marked.current}
          markingType={'multi-dot'}
          onDayPress={({dateString}) => {
            setChangeSelectedDay(dateString);
            setCustomDate(dateString);
          }}
          firstDay={7}
          allowShadow={false}
          //@ts-ignore
          initialPosition={ExpandableCalendar.positions.CLOSED}
          calendarWidth={screenWidth}
          renderHeader={date => renderHeader(date)}
          renderArrow={renderArrow}
          //   renderHeader={date => renderHeader(date)}
          //   renderArrow={renderArrow}
          onCalendarToggled={onCalendarToggled}
          theme={theme.current}
          futureScrollRange={36}
          pastScrollRange={36}
          closeOnDayPress={false}
          animateScroll
          style={{
            borderRadius: 15,
            width: screenWidth,
            overflow: 'hidden',
          }}
          // dayComponent={day => renderDay(day)}
        />

        {/* {Object.keys(dummyCoWorkersData).length > 0 && (
          <AgendaList
            // sections={data2}
            scrollToNextEvent
            viewOffset={15}
            markToday={true}
            sections={formattedSectionData}
            renderItem={renderItem}
            dayFormat={'yyyy년 M월 d일 ddd요일'}
            onScrollToIndexFailed={info => {
              const wait = new Promise((resolve: any) =>
                setTimeout(resolve, 500),
              );
              wait.then(() => {
                flatList.current?.scrollToIndex({
                  index: info.index,
                  animated: true,
                });
              });
            }}
            sectionStyle={{
              width: screenWidth * 0.9,
              marginBottom: 10,
            }}
          />
        )}
        {Object.keys(dummyCoWorkersData).length === 0 && <EmptyItem />} */}
        {/* <FlatList
            data={dummyData.data}
            renderItem={renderItem2}
            decelerationRate="fast"
            keyExtractor={(item: any) => `${item.id}`}
            showsVerticalScrollIndicator={false}
        /> */}
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
      </CalendarProvider>
    </SafeAreaView>
  );
};

export default CalendarTest;

const CalendarHeaderTitleText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
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
