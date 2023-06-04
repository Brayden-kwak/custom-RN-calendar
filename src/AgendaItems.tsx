import {Platform} from 'react-native';
import dummyData from '../dummyData.json';
import isEmpty from 'lodash/isEmpty';

import Moment from 'moment';
import {extendMoment} from 'moment-range';

//@ts-ignore
const moment = extendMoment(Moment);

const today = new Date().toISOString().split('T')[0];
const fastDate = getPastDate(3);
const futureDates = getFutureDates(12);
const dates = [fastDate, today].concat(futureDates);

function getFutureDates(numberOfDays: number) {
  const array = [];
  for (let index = 1; index <= numberOfDays; index++) {
    let d = Date.now();
    if (index > 8) {
      // set dates on the next month
      const newMonth = new Date(d).getMonth() + 1;
      d = new Date(d).setMonth(newMonth);
    }
    const date = new Date(d + 864e5 * index); // 864e5 == 86400000 == 24*60*60*1000
    const dateString = date.toISOString().split('T')[0];
    array.push(dateString);
  }
  return array;
}
function getPastDate(numberOfDays: number) {
  return new Date(Date.now() - 864e5 * numberOfDays)
    .toISOString()
    .split('T')[0];
}

export const agendaItems = [
  {
    title: dates[0],
    data: [{hour: '12am', duration: '1h', title: 'First Yoga'}],
  },
  {
    title: dates[1],
    data: [
      {hour: '4pm', duration: '1h', title: 'Pilates ABC'},
      {hour: '5pm', duration: '1h', title: 'Vinyasa Yoga'},
    ],
  },
  {
    title: dates[2],
    data: [
      {hour: '1pm', duration: '1h', title: 'Ashtanga Yoga'},
      {hour: '2pm', duration: '1h', title: 'Deep Stretches'},
      {hour: '3pm', duration: '1h', title: 'Private Yoga'},
    ],
  },
  {
    title: dates[3],
    data: [{hour: '12am', duration: '1h', title: 'Ashtanga Yoga'}],
  },
  {
    title: dates[4],
    data: [{}],
  },
  {
    title: dates[5],
    data: [
      {hour: '9pm', duration: '1h', title: 'Middle Yoga'},
      {hour: '10pm', duration: '1h', title: 'Ashtanga'},
      {hour: '11pm', duration: '1h', title: 'TRX'},
      {hour: '12pm', duration: '1h', title: 'Running Group'},
    ],
  },
  {
    title: dates[6],
    data: [{hour: '12am', duration: '1h', title: 'Ashtanga Yoga'}],
  },
  {
    title: dates[7],
    data: [{}],
  },
  {
    title: dates[8],
    data: [
      {hour: '9pm', duration: '1h', title: 'Pilates Reformer'},
      {hour: '10pm', duration: '1h', title: 'Ashtanga'},
      {hour: '11pm', duration: '1h', title: 'TRX'},
      {hour: '12pm', duration: '1h', title: 'Running Group'},
    ],
  },
  {
    title: dates[9],
    data: [
      {hour: '1pm', duration: '1h', title: 'Ashtanga Yoga'},
      {hour: '2pm', duration: '1h', title: 'Deep Stretches'},
      {hour: '3pm', duration: '1h', title: 'Private Yoga'},
    ],
  },
  {
    title: dates[10],
    data: [{hour: '12am', duration: '1h', title: 'Last Yoga'}],
  },
  {
    title: dates[11],
    data: [
      {hour: '1pm', duration: '1h', title: 'Ashtanga Yoga'},
      {hour: '2pm', duration: '1h', title: 'Deep Stretches'},
      {hour: '3pm', duration: '1h', title: 'Private Yoga'},
    ],
  },
  {
    title: dates[12],
    data: [{hour: '12am', duration: '1h', title: 'Last Yoga'}],
  },
  {
    title: dates[13],
    data: [{hour: '12am', duration: '1h', title: 'Last Yoga'}],
  },
];

export const themeColor = '#00AAAF';
export const lightThemeColor = '#f2f7f7';

export function getTheme() {
  const disabledColor = 'grey';

  return {
    // arrows
    arrowColor: 'black',
    arrowStyle: {padding: 0},
    // knob
    expandableKnobColor: themeColor,
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
    dayTextColor: themeColor,
    todayTextColor: '#af0078',
    textDayFontSize: 18,
    textDayFontFamily: 'HelveticaNeue',
    textDayFontWeight: '500' as const,
    textDayStyle: {marginTop: Platform.OS === 'android' ? 2 : 4},
    // selected date
    selectedDayBackgroundColor: themeColor,
    selectedDayTextColor: 'white',
    // disabled date
    textDisabledColor: disabledColor,
    // dot (marked date)
    dotColor: themeColor,
    selectedDotColor: 'white',
    disabledDotColor: disabledColor,
    dotStyle: {marginTop: -2},
  };
}

export function getMarkedDates() {
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
}

// export function getMarkedDates(props: any) {
//   const {changeSelectedDay, isCalendarOpen} = props;

//   const selectedDate =
//     changeSelectedDay !== '' ? moment(changeSelectedDay) : moment();
//   const startOfWeek = selectedDate.startOf('week');
//   console.log('changeSelectedDay', changeSelectedDay);
//   let currentWeeklyDate = [] as any;

//   for (let i = 0; i < 7; i++) {
//     currentWeeklyDate.push(
//       startOfWeek.clone().add(i, 'days').format('YYYY-MM-DD'),
//     );
//   }

//   // 선택된 날짜의 모든 월의 날짜를 구하는 방식. 단, 오늘기준은 빠져있음.
//   const firstDayOfMonth = moment(selectedDate).startOf('month');
//   const lastDayOfMonth = moment(selectedDate).endOf('month');
//   console.log('firstDayOfMonth222', firstDayOfMonth);
//   const datesInMonth = [] as any;

//   let currentMonthlyDate = firstDayOfMonth;

//   while (currentMonthlyDate <= lastDayOfMonth) {
//     datesInMonth.push(currentMonthlyDate.clone().format('YYYY-MM-DD'));
//     currentMonthlyDate.add(1, 'days');
//   }

//   const filteredDataByMonthWeek = dummyData.data.filter((item: any) => {
//     if (
//       Object.values(currentWeeklyDate).includes(item.startDate) &&
//       isCalendarOpen === false
//     ) {
//       console.log('CLOSED!!!');
//       return currentWeeklyDate.includes(item.startDate);
//       // return Object.values(currentWeeklyDate).includes(item.startDate);
//       // && item.type !== '발생연차'
//     }

//     if (
//       Object.values(datesInMonth).includes(item.startDate) &&
//       isCalendarOpen === true
//     ) {
//       console.log('OPEN!!!');
//       return Object.values(datesInMonth).includes(item.startDate);
//       // || item.type !== '발생연차'
//     }
//   });

//   dummyData.data.filter((item: any) => {
//     // return firstDayOfMonth <= moment(item.startDate).format('YYYY-MM-DD') <= lastDayOfMonth
//     const dateToCheck = moment(item.startDate);
//     const startDate = moment(selectedDate).startOf('month');
//     const endDate = moment(selectedDate).endOf('month');

//     return dateToCheck.isBetween(startDate, endDate, 'day');
//   });

//   const newMarkedDates = {} as any;
//   let dateList = [] as any;
//   let myDataList = [] as any;
//   let coWorkerDataList = [] as any;

//   dummyData.data
//     // .filter((item: any) => item.type !== '발생연차')
//     .map((data: any) => {
//       const {startDate, endDate} = data;
//       const startDate2 = moment(startDate);
//       const endDate2 = moment(endDate);

//       if (startDate2.format('YYYY-MM-DD') === endDate2.format('YYYY-MM-DD')) {
//         dateList.push(startDate2.format('YYYY-MM-DD'));
//       } else {
//         while (startDate2.isSameOrBefore(endDate2)) {
//           dateList.push(startDate2.format('YYYY-MM-DD'));
//           startDate2.add(1, 'days');
//         }
//       }
//     });

//   const dateList2 = [...new Set(dateList)];
//   // sortedData(dateList2);

//   dateList2.map(() => {
//     let myData = false;
//     let coWorkerData = false;
//     myDataList.push(myData);
//     coWorkerDataList.push(coWorkerData);
//   });

//   dummyData.data
//     // .filter((item: any) => item.type !== '발생연차')
//     .map((data: any) => {
//       const {startDate, endDate, id} = data;

//       const dates = Array.from(moment.range(startDate, endDate).by('day')).map(
//         (m: any) => m.format('YYYY-MM-DD'),
//       );

//       dateList2?.map((data2: any, index: number) => {
//         if (id === 12 && dates.includes(data2)) {
//           myDataList[index] = true;
//         }

//         if (id !== 12 && dates.includes(data2)) {
//           coWorkerDataList[index] = true;
//         }
//       });
//     });

//   dateList2.forEach((data: any, index: any) => {
//     let startDate = data;
//     let temp = [];

//     const myData1 = {key: 'myData', color: '#407DF1'};
//     const coWorkerData1 = {key: 'coWorkerData', color: '#B1B5BD'};

//     if (myDataList[index]) {
//       temp.push(myData1);
//     }

//     if (coWorkerDataList[index]) {
//       temp.push(coWorkerData1);
//     }

//     newMarkedDates[startDate] = {
//       dots: temp,
//     };
//   });

//   return newMarkedDates;
// }

// export function getMarkedDates() {
//   const marked = {} as any;

//   //   const dummyCoWorkersData =
//   //     getDummyData &&
//   //     getDummyData.filter((item: any, index: number) => {
//   //       if (
//   //         currentWeeklyDate.includes(item.startDate) ||
//   //         isCalendarOpen === false
//   //       ) {
//   //         console.log('CLOSED!!!');
//   //         return (
//   //           currentWeeklyDate.includes(item.startDate) && item.type !== '발생연차'
//   //         );
//   //       }

//   //       if (datesInMonth.includes(item.startDate) && isCalendarOpen === true) {
//   //         console.log('OPEN!!!');
//   //         return (
//   //           datesInMonth.includes(item.startDate) || item.type !== '발생연차'
//   //         );
//   //       }
//   //     });

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

//   console.log('data2 == ', data2);

//   data2.forEach((item: any) => {
//     // NOTE: only mark dates with data
//     if (item.data && item.data.length > 0 && !isEmpty(item.data[0])) {
//       marked[item.title] = {marked: true};
//     } else {
//       marked[item.title] = {disabled: true};
//     }
//   });
//   return marked;
// }

// const data = [
//   {
//     id: 0,
//     startDate: '2023-04-01',
//     endDate: '2023-04-03',
//   },
//   {
//     id: 1,
//     startDate: '2023-04-03',
//     endDate: '2023-04-03',
//   },
// ];

// const data2 = [
//   {
//     title: '2023-04-01',
//     data: [
//       {
//         id: 0,
//         startDate: '2023-04-01',
//         endDate: '2023-04-03',
//       },
//     ],
//   },
//   {
//     title: '2023-04-02',
//     data: [
//       {
//         id: 0,
//         startDate: '2023-04-01',
//         endDate: '2023-04-03',
//       },
//     ],
//   },
//   {
//     title: '2023-04-03',
//     data: [
//       {
//         id: 0,
//         startDate: '2023-04-01',
//         endDate: '2023-04-03',
//       },
//       {
//         id: 1,
//         startDate: '2023-04-03',
//         endDate: '2023-04-03',
//       },
//     ],
//   },
// ];
