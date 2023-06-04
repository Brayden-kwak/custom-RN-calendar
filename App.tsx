import React from 'react';
import {Dimensions, SafeAreaView} from 'react-native';
// import BottomSheetTest from './src/BottomSheetTest';
// import BottomSheetTest2 from './src/BottomSheetTest2';
// import BottomSheetTest3 from './src/BottomSheetTest3';
// import BottomSheetTest4 from './src/BottomSheetTest4';
// import CalendarTest from './src/CalendarTest';
// import CalendarTest1 from './src/CalendarTest1';
// import CalendarTest2 from './src/CalendarTest2';
// import FigmaReactNative from './src/FigmaReactNative';
// import FigmaReactNAtive_Locofy from './src/FigmaReactNative_Locofy';
// import ExpandableFlat from './src/flatlistTest/ExpandableFlat';
// import Original from './src/Original';
// import Expandable from './src/original/Expandable';
// import TextCalendar from './src/TextCalendar';
import CustomCalendar from './src/customCalendar/CustomCalendar';

export const screenWidth = Dimensions.get('window').width;

const App = () => {
  return (
    <SafeAreaView
      style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      {/* <CalendarTest /> */}
      {/* <Original /> */}
      {/* <CalendarTest1 /> */}
      {/* <Expandable /> */}
      {/* <ExpandableFlat /> */}
      {/* <BottomSheetTest /> */}
      {/* <BottomSheetTest4 /> */}
      {/* <FigmaReactNative /> */}
      {/* <FigmaReactNAtive_Locofy /> */}
      {/* <TextCalendar /> */}
      <CustomCalendar />
    </SafeAreaView>
  );
};

export default App;
