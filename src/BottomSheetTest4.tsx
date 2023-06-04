import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import BottomSheet, {
  BottomSheetModal,
  BottomSheetVirtualizedList,
} from '@gorhom/bottom-sheet';
import moment from 'moment';
import {screenHeight, screenWidth} from './AnimationPractice';

const foodOptions = [
  {id: 0, type: '연차', icon: '✈️'},
  {id: 1, type: '반차(오전)', icon: '🌞'},
  {id: 2, type: '반차(오후)', icon: '🌜'},
  {id: 3, type: '직접입력', icon: '⏰'},
];

const availableChoices = ['hot dog', 'pizza'];

const BottomSheetTest4 = () => {
  const [selectedDates, setSelectedDates] = useState({}) as any;
  const [activeModalIndex, setActiveModalIndex] = useState(null) as any;
  const bottomSheetRef = React.useRef(null) as any;

  const onDayPress = (day: any) => {
    const dateString = day.dateString;
    const selected = !selectedDates[dateString];
    setSelectedDates({...selectedDates, [dateString]: selected});
    bottomSheetRef.current?.expand();
  };

  const onModalChoicePress = (choice: any) => {
    const date = Object.keys(selectedDates).find(date => selectedDates[date]);
    // do something with the selected date and choice
    console.log(`Selected ${choice} for ${date}`);
    setActiveModalIndex(null);
  };

  const renderModalContent = () => {
    const date = Object.keys(selectedDates).find(date => selectedDates[date]);
    if (!date) return null;

    const choices = availableChoices.map(choice => (
      <TouchableOpacity
        key={choice}
        style={styles.modalChoiceButton}
        onPress={() => onModalChoicePress(choice)}>
        <Text>{choice}</Text>
      </TouchableOpacity>
    ));

    return (
      <View style={styles.modalContentContainer}>
        <Text style={styles.modalTitle}>{date}</Text>
        {choices}
      </View>
    );
  };

  const renderSelectedDates = () => {
    const selectedDatesList = Object.keys(selectedDates).filter(
      date => selectedDates[date],
    );

    return (
      <View style={styles.selectedDatesContainer}>
        {selectedDatesList.map(date => (
          <TouchableOpacity
            key={date}
            style={styles.selectedDateButton}
            onPress={() => setActiveModalIndex(date)}>
            <Text>{date}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.selectedDateButton}
          onPress={() => setActiveModalIndex(null)}>
          <Text>pizza</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderBottomSheetHeader = () => (
    <View style={styles.bottomSheetHeader}>
      <View style={styles.bottomSheetHandle} />
    </View>
  );

  return (
    <View style={styles.container}>
      <CalendarList
        style={styles.calendar}
        onDayPress={onDayPress}
        markedDates={selectedDates}
        markingType="multi-dot"
        pastScrollRange={0}
        futureScrollRange={365}
        horizontal={true}
      />
      {renderSelectedDates()}
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={['10%', '30%']}
        index={activeModalIndex ? 1 : 0}
        onChange={index =>
          setActiveModalIndex(index ? Object.keys(selectedDates)[0] : null)
        }
        handleComponent={renderBottomSheetHeader}>
        {renderModalContent()}
      </BottomSheet>
    </View>
  );
};

export default BottomSheetTest4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  calendar: {
    height: 350,
  },
  selectedDatesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    position: 'absolute',
    top: 400,
  },
  selectedDateButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    marginRight: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalChoiceButton: {
    padding: 10,
  },
  bottomSheetHeader: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomSheetHandle: {
    width: 50,
    height: 6,
    backgroundColor: '#D1D1D1',
    borderRadius: 3,
    alignSelf: 'center',
    marginVertical: 10,
  },
  modalContentContainer: {
    backgroundColor: 'white',
    padding: 20,
    height: 200,
  },
});
