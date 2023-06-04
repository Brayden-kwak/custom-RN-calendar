import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import moment from 'moment';
import {Agenda} from 'react-native-calendars';
import {screenWidth, screenHeight} from './AnimationPractice';

const dummyCoWorkersData = [
  {
    id: 0,
    name: '홍길훈',
    color: '#936FFA',
    startDate: '2023-02-28',
    endDate: '2023-03-28',
    type: '연차',
    reason: '-',
    detailType: '연차휴가',
  },
  {
    id: 1,
    name: '홍길동',
    color: '#FFDA46',
    startDate: '2023-03-02',
    endDate: '2023-03-18',
    type: '무급휴가',
    reason: '-',
    detailType: '일반휴가',
  },
  {
    id: 2,
    name: '홍길순',
    color: '#74C84C',
    startDate: '2023-02-27',
    endDate: '2023-03-03',
    type: '연차',
    reason: '-',
    detailType: '연차',
  },
  {
    id: 3,
    name: '홍길자',
    color: '#5F8AFA',
    startDate: '2023-04-02',
    endDate: '2023-04-04',
    type: '반차(오후)',
    reason: '-',
    detailType: '일반휴가',
  },
  {
    id: 4,
    name: '홍길복',
    color: '#76D7C5',
    startDate: '2023-03-18',
    endDate: '2023-03-28',
    type: '예비군/민방위',
    reason: '-',
    detailType: '일반휴가',
  },
  {
    id: 5,
    name: '홍길손',
    color: '#FB9270',
    startDate: '2023-03-18',
    endDate: '2023-03-28',
    type: '연차',
    reason: '-',
    detailType: '연차',
  },
  {
    id: 6,
    name: '홍길문',
    color: '#936FFA',
    startDate: '2023-05-28',
    endDate: '2023-06-28',
    type: '특별휴가',
    reason: '-',
    detailType: '일반휴가',
  },
];

const CalendarTest2 = () => {
  const [currentMonth, setCurrentMonth] = useState(moment().format('YYYY-MM'));
  const [selectedDay, setSelectedDay] = useState('');
  console.log('setSelectedDay', selectedDay);
  // color variables instruction.
  // https://github.com/wix/react-native-calendars/issues/1383

  // items에 들어갈 로직
  const itemsOfAgenda = dummyCoWorkersData.reduce((acc: any, curr) => {
    const startDate = curr.startDate;
    if (!acc[startDate]) {
      acc[startDate] = [];
    }
    acc[startDate].push(curr);
    return acc;
  }, {});

  const renderKnob = () => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#D6DAE1',
          width: 40,
          height: 6,
          borderRadius: 3,
          marginTop: 10,
        }}
      />
    );
  };

  // const renderDay = (day: any) => {

  //   const dates = Object.keys(itemsOfAgenda);
  //   // console.log(dates)
  //   const dayFormat = moment(day).format('YYYY-MM-DD')
  //   // console.log(dayFormat);

  //   const dd = dates.filter((item: any) => item === dayFormat);
  //   // console.log("dd",dd)
  //   console.log("day",day)
  //   // let tempDateVal;
  //   // for(let i = 0; i < dates.length; i++) {
  //   //   tempDateVal = moment(dates[i]).format('MM월 DD일 ddd요일');
  //   // }
  //   // console.log('day', tempDateVal);
  //   // const bb = dates.map(item => item);

  //   // const dayNum = moment(day).format('MM월 DD일 ddd요일');

  //   const month = new Date(day).getMonth();
  //   const date = new Date(day).getDate();

  //   // console.log("month", month)
  //   // console.log("date", date)

  //   return (
  //     <View>
  //       <Text>{ month}</Text>
  //     </View>
  //   );
  // };

  const calendarTheme = {
    arrowColor: 'blue',
    'stylesheet.calendar.header': {
      // week: {
      //   marginTop: 5,
      //   flexDirection: 'row',
      //   justifyContent: 'space-between',
      // },
      fontSize: 16,
    },
    'stylesheet.agenda.main': {
      // reservations: {
      //   backgroundColor: '#F4F6FB',
      // },
    },
    'stylesheet.agenda.list': {
      container: {
        flexDirection: 'column',
        backgroundColor: '#fff',
      },
      dayNum: {
        fontSize: 12,
        color: '#93979F',
        marginTop: 20,
      },
      dayText: {
        fontSize: 12,
        color: '#93979F',
        marginTop: 20,
      },
      day: {
        backgroundColor: '#fff',
        width: 63,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        flexDirection: 'row',
      },
      indicator: {
        // display: 'none',
      },
    },
  };

  const onMonthChange = (month: any) => {
    setCurrentMonth(moment(month.dateString).format('YYYY-MM'));
  };

  return (
    <View
      style={{
        width: screenWidth * 0.9,
        height: screenHeight * 0.75,
        borderRadius: 10,
        marginTop: 20,
      }}>
      <View
        style={{
          backgroundColor: '#F4F6FB',
          padding: 10,
          alignSelf: 'center',
          width: screenWidth * 0.9,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          paddingTop: 20,
          paddingBottom: 20,
        }}>
        <Text style={{fontSize: 17, fontWeight: 'bold', textAlign: 'center'}}>
          {moment(currentMonth).format('YYYY년 MM월')}
        </Text>
      </View>
      <Agenda
        selected={new Date().toISOString().split('T')[0]}
        hideKnob={false}
        showClosingKnob={true}
        refreshing={true}
        // pastScrollRange={50}
        // futureScrollRange={50}
        // renderDay={(day: any, item: any) => {
        //  if(item.startDate === item.startDate) {
        //   console.log("dd")
        //  } else {
        //   console.log("ccc")
        //  }
        //   const formattedDate = moment(item.startDate).format('MM월 DD일 ddd요일');

        //   // console.log("formattedDate", formattedDate)
        //   return (
        //     <View>
        //       <Text>{formattedDate}</Text>
        //     </View>
        //   );
        // }}
        renderKnob={renderKnob}
        onMonthChange={onMonthChange}
        items={itemsOfAgenda}
        renderItem={(item: any) => (
          <View
            style={{
              alignItems: 'flex-start',
              justifyContent: 'center',
              backgroundColor: '#fff',
              paddingTop: 10,
              paddingRight: 20,
              paddingLeft: 5,
              flex: 1,
            }}>
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
                  // marginLeft: 15,
                }}>
                <Text style={{color: '#fff'}}>{item.name.slice(1, 3)}</Text>
                {/* <BusinessTrip
                  style={{position: 'absolute', left: 25, top: 25}}
                  width={15}
                  height={15}
                /> */}
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
                    style={{color: '#1A1818', fontSize: 16, paddingRight: 5}}>
                    {item.name}
                  </Text>
                  <View
                    style={{height: 8, width: 2, backgroundColor: '#E2E5EA'}}
                  />
                  <Text
                    style={{color: '#1A1818', fontSize: 16, paddingLeft: 5}}>
                    {item.type}
                  </Text>
                </View>
                <Text style={{color: '#93979F', fontSize: 12, paddingLeft: 3}}>
                  1일
                </Text>
              </View>
            </View>
          </View>
        )}
        rowHasChanged={(r1: any, r2: any) => {
          return r1.text !== r2.text;
        }}
        theme={{
          ...calendarTheme,
          agendaTodayColor: '#407DF1',
          agendaKnobColor: 'blue',
          agendaDayTextColor: 'gray',
          calendarBackground: '#F4F6FB',
          selectedDayBackgroundColor: '#407DF1',
          todayTextColor: '#407DF1',
          dotColor: '#407DF1',
          // @ts-ignore
          reservationsBackgroundColor: '#fff',
        }}
        calendarStyle={{
          backgroundColor: '#F4F6FB',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
        onDayPress={(item: any) => setSelectedDay(item.dateString)}
        renderEmptyData={() => {
          return (
            <View
              style={{
                backgroundColor: '#fff',
                flex: 1,
                alignItems: 'center',
                width: screenWidth * 0.9,
                marginTop: 50,
              }}>
              <Text style={{color: '#93979F', fontSize: 16}}>
                {moment(selectedDay).format('M월 D일')}에 휴가인 동료가 없어요
              </Text>
            </View>
          );
        }}
        // renderList={() => {
        //   return (
        //     <View style={{backgroundColor: '#fff', flex: 1}}>
        //       <Text>아무 정보가 없을 때</Text>
        //     </View>
        //   );
        // }}
      />
    </View>
  );
};

export default CalendarTest2;
