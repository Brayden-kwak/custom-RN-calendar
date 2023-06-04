import React, {useState, useEffect, useRef, useCallback, memo} from 'react';
import {Platform, Text, View} from 'react-native';
import {ExpandableCalendar, CalendarProvider} from 'react-native-calendars';
import {FlashList} from '@shopify/flash-list';
//@ts-ignore
import styled, {css} from 'styled-components/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import dummyData from '../../dummyData.json';
import Moment from 'moment';
import {extendMoment} from 'moment-range';
import {screenWidth, screenHeight} from '../AnimationPractice';

//@ts-ignore
const moment = extendMoment(Moment);

const getTheme = () => {
  const disabledColor = 'grey';

  return {
    // arrows
    arrowColor: 'black',
    arrowStyle: {padding: 0},
    // knob
    expandableKnobColor: 'blue',
    // month
    monthTextColor: 'black',
    textMonthFontSize: 16,
    textMonthFontFamily: 'HelveticaNeue',
    textMonthFontWeight: 'bold' as const,
    // day names
    textSectionTitleColor: 'black',
    textDayHeaderFontSize: 12,
    textDayHeaderFontFamily: 'HelveticaNeue',
    textDayHeaderFontWeight: 'normal' as const,
    // dates
    dayTextColor: 'blue',
    todayTextColor: '#af0078',
    textDayFontSize: 18,
    textDayFontFamily: 'HelveticaNeue',
    textDayFontWeight: '500' as const,
    textDayStyle: {marginTop: Platform.OS === 'android' ? 2 : 4},
    // selected date
    selectedDayBackgroundColor: 'blue',
    selectedDayTextColor: 'white',
    // disabled date
    textDisabledColor: disabledColor,
    // dot (marked date)
    dotColor: 'blue',
    selectedDotColor: 'white',
    disabledDotColor: disabledColor,
    dotStyle: {marginTop: -2},
  };
};

const getMarkedDates = () => {
  const newMarkedDates = {} as any;
  let dateList = [] as any;
  let myDataList = [] as any;
  let coWorkerDataList = [] as any;

  dummyData.data
    // .filter((item: any) => item.type !== '발생연차')
    .map((data: any) => {
      const {startDate, endDate} = data;
      const startDate2 = moment(startDate);
      const endDate2 = moment(endDate);

      if (startDate2.format('YYYY-MM-DD') === endDate2.format('YYYY-MM-DD')) {
        dateList.push(startDate2.format('YYYY-MM-DD'));
      } else {
        while (startDate2.isSameOrBefore(endDate2)) {
          dateList.push(startDate2.format('YYYY-MM-DD'));
          startDate2.add(1, 'days');
        }
      }
    });

  const dateList2 = [...new Set(dateList)];
  // sortedData(dateList2);

  dateList2.map(() => {
    let myData = false;
    let coWorkerData = false;
    myDataList.push(myData);
    coWorkerDataList.push(coWorkerData);
  });

  dummyData.data
    // .filter((item: any) => item.type !== '발생연차')
    .map((data: any) => {
      const {startDate, endDate, id} = data;

      const dates = Array.from(moment.range(startDate, endDate).by('day')).map(
        (m: any) => m.format('YYYY-MM-DD'),
      );

      dateList2.map((data2: any, index: number) => {
        if (id === 12 && dates.includes(data2)) {
          myDataList[index] = true;
        }

        if (id !== 12 && dates.includes(data2)) {
          coWorkerDataList[index] = true;
        }
      });
    });

  dateList2.forEach((data: any, index: any) => {
    let startDate = data;
    let temp = [];

    const myData1 = {key: 'myData', color: '#407DF1'};
    const coWorkerData1 = {key: 'coWorkerData', color: '#B1B5BD'};

    if (myDataList[index]) {
      temp.push(myData1);
    }

    if (coWorkerDataList[index]) {
      temp.push(coWorkerData1);
    }

    newMarkedDates[startDate] = {
      dots: temp,
    };
  });

  return newMarkedDates;
};

const EmptyItem = memo((props: any) => {
  const selectedDate =
    props.selectDate !== ''
      ? moment(props.selectDate).format('M월')
      : moment().format('M월');
  if (props.isCalendarOpen === false) {
    return (
      <EmptyView>
        <EmptyText>해당주에는 휴가인 동료가 없어요</EmptyText>
      </EmptyView>
    );
  }
  if (props.isCalendarOpen === true) {
    return (
      <EmptyView>
        <EmptyText>{selectedDate}에는 휴가인 동료가 없어요</EmptyText>
      </EmptyView>
    );
  }

  return null;
});

const ExpandableFlat = () => {
  const [data, setData] = useState(dummyData.data);
  const [selectDate, setSelectDate] = useState(moment().format('YYYY-MM-DD'));
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [customDate, setCustomDate] = useState(moment()) as any;
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const marked = useRef(getMarkedDates());
  const theme = useRef(getTheme());

  useEffect(() => {
    const selectedDate = selectDate !== '' ? moment(selectDate) : moment();
    const startOfWeek = selectedDate.startOf('week');

    let currentWeeklyDate = [] as any;

    for (let i = 0; i < 7; i++) {
      currentWeeklyDate.push(
        startOfWeek.clone().add(i, 'days').format('YYYY-MM-DD'),
      );
    }

    // 선택된 날짜의 모든 월의 날짜를 구하는 방식. 단, 오늘기준은 빠져있음.
    const firstDayOfMonth = moment(selectDate).startOf('month');
    const lastDayOfMonth = moment(selectDate).endOf('month');

    const datesInMonth = [] as any;

    let currentMonthlyDate = firstDayOfMonth;

    while (currentMonthlyDate <= lastDayOfMonth) {
      datesInMonth.push(currentMonthlyDate.clone().format('YYYY-MM-DD'));
      currentMonthlyDate.add(1, 'days');
    }

    //====================================================================
    const newData = [];

    for (const item of dummyData.data) {
      const start = moment(item.startDate);
      const end = moment(item.endDate);

      while (start <= end) {
        newData.push({
          id: item.id,
          name: item.name,
          color: item.color,
          startDate: item.startDate,
          endDate: item.endDate,
          period: item.period,
          type: item.type,
          reason: item.reason,
          detailType: item.detailType,
          approvalStatus: item.approvalStatus,
          approvalDate: item.approvalDate,
          remainHoliday: item.remainHoliday,
          chainDate: start.format('YYYY-MM-DD'),
        });

        start.add(1, 'days');
      }
    }

    const filteredDataByMonth2 = newData.filter((item: any) =>
      datesInMonth.includes(item.chainDate),
    );

    const filteredDataByWeek2 = newData.filter((item: any) =>
      currentWeeklyDate.includes(item.chainDate),
    );

    console.log('month', filteredDataByMonth2);
    console.log('week', filteredDataByWeek2);

    //====================================================================

    // const filteredDataByMonth = dummyData.data.filter(
    //   (item: any) =>
    //     datesInMonth.includes(item.startDate) ||
    //     datesInMonth.includes(item.endDate),
    // );

    // const filteredDataByWeek = dummyData.data.filter(
    //   (item: any) =>
    //     currentWeeklyDate.includes(item.startDate) ||
    //     currentWeeklyDate.includes(item.endDate),
    // );

    if (isCalendarOpen === true) {
      setData(filteredDataByMonth2);
    }

    if (isCalendarOpen === false) {
      setData(filteredDataByWeek2);
    }
  }, [isCalendarOpen, selectDate]);

  let result = [] as any;

  data.forEach((item: any) => {
    const {id, name, color, startDate, endDate, period, type, reason} = item;
    let date = moment(startDate);
    const endDateMoment = moment(endDate);
    while (date.isSameOrBefore(endDateMoment, 'day')) {
      const formattedDate = date.format('YYYY-MM-DD');
      if (!result.includes(formattedDate)) {
        result.push(formattedDate);
      }
      result.push({
        id,
        name,
        color,
        startDate,
        endDate,
        period,
        type,
        reason,
      });
      date.add(1, 'day');
    }
  });

  const stickyHeaderIndices = result
    .map((item: any, index: number) => {
      if (typeof item === 'string') {
        return index;
      } else {
        return null;
      }
    })
    .filter((item: any) => item !== null) as number[];

  const renderItem = ({item}: any) => {
    if (typeof item === 'string') {
      return (
        <Text
          style={{
            width: screenWidth,
            backgroundColor: '#fff',
            height: 45,
            fontSize: 12,
            color: '#93979F',
            marginLeft: 10,
            paddingTop: 12,
            paddingBottom: 10,
            justifyContent: 'center',
          }}>
          {moment(item).format('yyyy년 M월 D일 ddd요일')}
        </Text>
      );
    } else {
      return (
        <View
          key={`${item.id}`}
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: '#fff',
            paddingTop: 20,
            marginLeft: 20,
            width: screenWidth * 0.9,
            height: 70,
            flex: 1,
            bottom: 10,
          }}>
          {/* {item.type !== '발생연차' && ( */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
            }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#936FFA',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 16,
              }}>
              <Text style={{color: '#fff'}}>{item.name.slice(1, 3)}</Text>
            </View>
            <View
              style={{
                width: 'auto',
                height: 35,
                flexDirection: 'column',
                marginLeft: 15,
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#1A1818',
                    fontSize: 16,
                    paddingRight: 5,
                  }}>
                  {item.name}
                </Text>
                <View
                  style={{
                    height: 8,
                    width: 2,
                    backgroundColor: '#E2E5EA',
                  }}
                />
                <Text
                  style={{
                    color: '#1A1818',
                    fontSize: 16,
                    paddingLeft: 5,
                  }}>
                  {item.type}
                </Text>
              </View>
              <Text style={{color: '#93979F', fontSize: 12, paddingLeft: 3}}>
                1일
              </Text>
            </View>
          </View>
          {/* )} */}
        </View>
      );
    }
  };

  const renderEmptyItem = ({item}: any) => {
    console.log('renderEmptyItem---> ', item);
    return (
      <EmptyView>
        <EmptyText>휴가 내역이 없습니다.</EmptyText>
      </EmptyView>
    );
  };

  const onDateChanged = useCallback((date: any, updateSource: any) => {
    setSelectDate(date);
    console.log(
      'ExpandableCalendarScreen onDateChanged---: ',
      date,
      updateSource,
    );
  }, []);

  const onMonthChange = useCallback(({dateString}: any) => {
    setSelectDate(dateString);
    console.log('ExpandableCalendarScreen onMonthChange: ', dateString);
  }, []);

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

  const onCalendarToggled = (open: boolean) => {
    setIsCalendarOpen(open);
  };

  return (
    <CalendarProvider
      date={moment(customDate).format('YYYY-MM-DD')}
      showTodayButton
      onDateChanged={onDateChanged}
      onMonthChange={onMonthChange}
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
        theme={theme.current}
        markingType={'multi-dot'}
        firstDay={7}
        markedDates={marked.current}
        initialPosition={ExpandableCalendar.positions.CLOSED}
        onCalendarToggled={onCalendarToggled}
        renderHeader={date => renderHeader(date)}
        renderArrow={renderArrow}
        style={{
          borderRadius: 15,
          width: screenWidth,
          overflow: 'hidden',
        }}
      />
      <FlashListBoxView>
        {data && Object.keys(data).length > 0 && (
          <FlashList
            data={result}
            renderItem={renderItem}
            ListEmptyComponent={renderEmptyItem}
            stickyHeaderIndices={stickyHeaderIndices}
            getItemType={(item: any) => {
              return typeof item === 'string' ? 'sectionHeader' : 'row';
            }}
            keyExtractor={(item: any, index) => item + index}
            estimatedItemSize={1000}
            showsVerticalScrollIndicator={false}
          />
        )}
        {(!data || Object.keys(data).length === 0) && (
          <EmptyItem selectDate={selectDate} isCalendarOpen={isCalendarOpen} />
        )}
      </FlashListBoxView>
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

export default ExpandableFlat;

const FlashListBoxView = styled.View`
  flex: 1;
  width: ${screenWidth}px;
  height: ${screenHeight}px;
  margin-top: 20px;
  margin-left: 20px;
`;

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

const EmptyView = styled.View`
  width: ${screenWidth}px;
  height: ${screenHeight * 0.4}px;
  align-items: center;
  justify-content: center;
`;

const EmptyText = styled.Text`
  font-size: 16px;
  color: #6b6e77;
`;
