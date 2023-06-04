import React, {useEffect, useState, useRef, memo, useCallback} from 'react';
import styled, {css} from 'styled-components/native';
import {StyleSheet, FlatList, Platform, View} from 'react-native';
import {
  ExpandableCalendar,
  AgendaList,
  CalendarProvider,
} from 'react-native-calendars';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {getMarkedDates, getTheme} from './AgendaItems';
import AgendaItem from './AgendaItem';
import dummyData from '../dummyData.json';
import moment from 'moment';
import {screenWidth, screenHeight} from './AnimationPractice';

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

const Original = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [customDate, setCustomDate] = useState(moment()) as any;
  const [changeSelectedDay, setChangeSelectedDay] = useState('');
  const [dummyCoWorkersData, setDummyCoWorkersData] = useState('') as any;

  const marked = useRef(getMarkedDates());
  const theme = useRef(getTheme());
  const todayBtnTheme = useRef({
    todayButtonTextColor: 'blue',
  });

  const flatList = useRef<FlatList>(null);

  useEffect(() => {
  
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
    const firstDayOfMonth = moment(selectedDate).startOf('month');
    const lastDayOfMonth = moment(selectedDate).endOf('month');

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
  }, [isCalendarOpen, changeSelectedDay]);

  // const onDateChanged = useCallback((date, updateSource) => {
  //   console.log('ExpandableCalendarScreen onDateChanged: ', date, updateSource);
  // }, []);

  // const onMonthChange = useCallback(({dateString}) => {
  //   console.log('ExpandableCalendarScreen onMonthChange: ', dateString);
  // }, []);

  const renderItem = useCallback(({item}: any) => {
    return <AgendaItem item={item} />;
  }, []);

  const itemsOfAgenda = {} as any;

  if (dummyCoWorkersData && Object.keys(dummyCoWorkersData).length > 0) {
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

  if (dummyCoWorkersData && Object.keys(itemsOfAgenda).length > 0) {
    for (let i = 0; i < Object.keys(itemsOfAgenda).length; i++) {
      formattedSectionData.push({
        title: Object.keys(itemsOfAgenda)[i],
        data: Object.values(itemsOfAgenda)[i],
      });
    }
  }
  console.log("formattedSectionData",formattedSectionData)
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

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

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    setCustomDate(moment(date).format('YYYY-MM-DD'));
    hideDatePicker();
  };

  const onCalendarToggled = (open: boolean) => {
    setIsCalendarOpen(open);
  };

  return (
    <CalendarProvider
      date={moment(customDate).format('YYYY-MM-DD')}
      // onDateChanged={onDateChanged}
      // onMonthChange={onMonthChange}
      showTodayButton
      // disabledOpacity={0.6}
      theme={todayBtnTheme.current}
      // todayBottomMargin={16}
    >
      <ExpandableCalendar
        // horizontal={false}
        // hideArrows
        // disablePan
        // hideKnob
        markingType={'multi-dot'}
        renderHeader={date => renderHeader(date)}
        initialPosition={ExpandableCalendar.positions.CLOSED}
        onDayPress={({dateString}) => {
          setChangeSelectedDay(dateString);
          setCustomDate(dateString);
        }}
        onCalendarToggled={onCalendarToggled}
        // calendarStyle={styles.calendar}
        // headerStyle={styles.header} // for horizontal only
        // disableWeekScroll
        theme={theme.current}
        // disableAllTouchEventsForDisabledDays
        closeOnDayPress={false}
        firstDay={7}
        markedDates={marked.current}
        //   leftArrowImageSource={leftArrowIcon}
        //   rightArrowImageSource={rightArrowIcon}
        // animateScroll
      />
      {dummyCoWorkersData && Object.keys(dummyCoWorkersData).length > 0 && (
        <AgendaList
          sections={formattedSectionData}
          renderItem={renderItem}
          scrollToNextEvent
          sectionStyle={styles.section}
          markToday={true}
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
        />
      )}
      {(!dummyCoWorkersData ||
        Object.keys(dummyCoWorkersData).length === 0) && (
        <EmptyItem changeSelectedDay={changeSelectedDay} />
      )}

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
  );
};

export default Original;

const styles = StyleSheet.create({
  calendar: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    backgroundColor: 'lightgrey',
  },
  section: {
    backgroundColor: 'lightgray',
    color: 'grey',
    textTransform: 'capitalize',
  },
});

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
