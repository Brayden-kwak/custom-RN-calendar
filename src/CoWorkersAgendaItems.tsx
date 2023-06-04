import dummyData from '../dummyData.json';
import Moment from 'moment';
import {extendMoment} from 'moment-range';

//@ts-ignore
const moment = extendMoment(Moment);

export const themeColor = '#407DF1';

export const getTheme = () => {
  const disabledColor = 'grey';
  return {
    'stylesheet.expandable.main': {},
    'stylesheet.calendar.main': {
      base: {
        borderRadius: 30,
      },
    },
    knobContainer: {
      position: 'absolute',
      bottom: -20,
    },
    agendaTodayColor: '#407DF1',
    todayTextColor: '#407DF1',
    agendaDayTextColor: 'gray',
    calendarBackground: '#fff',
    borderRadius: 30,
    selectedDayBackgroundColor: '#407DF1',
    dotColor: '#407DF1',
    // @ts-ignore
    reservationsBackgroundColor: '#fff',
  };
  //   return {
  //     // knob
  //     expandableKnobColor: disabledColor,
  //     knobContainer: {
  //       top: 10,
  //     },
  //     // dates
  //     textDayFontSize: 18,
  //     textDayFontFamily: 'Pretendard',
  //     textDayStyle: {marginTop: Platform.OS === 'android' ? 2 : 4},
  //     // selected date
  //     selectedDayBackgroundColor: themeColor,
  //     selectedDayTextColor: 'white',
  //     // disabled date
  //     textDisabledColor: disabledColor,
  //     // dot (marked date)
  //     dotColor: themeColor,
  //     selectedDotColor: 'white',
  //     disabledDotColor: disabledColor,
  //     dotStyle: {marginTop: 2},
  //     todayTextColor: '#407DF1',
  //   };
};

export const getMarkedDates = () => {
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
