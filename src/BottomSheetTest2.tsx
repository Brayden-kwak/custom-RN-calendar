import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import BottomSheet from '@gorhom/bottom-sheet';

export default function BottomSheetTest2() {
  const [selectedDates, setSelectedDates] = useState([]) as any;
  const [selectedDate, setSelectedDate] = useState('') as any;
  const [selectedFood, setSelectedFood] = useState('') as any;

  // Bottom sheet ref
  const bottomSheetRef = React.useRef(null) as any;

  // Callbacks
  const handleDatesSelect = (dates: any) => {
    setSelectedDates(Object.keys(dates));
  };

  const handleDateSelect = (date: any) => {
    setSelectedDate(date);
    bottomSheetRef.current?.expand();
  };

  const handleFoodSelect = (food: any) => {
    setSelectedFood(food);
    bottomSheetRef.current?.close();
  };

  // Render calendar
  const renderCalendar = () => {
    return (
      <View style={styles.calendarContainer}>
        <CalendarList
          horizontal={true}
          onDayPress={day => handleDateSelect(day.dateString)}
          onDayChange={handleDatesSelect}
          markedDates={selectedDates.reduce((acc: any, date: any) => {
            acc[date] = {selected: true, selectedColor: '#2E66E7'};
            return acc;
          }, {})}
        />
        {selectedDate ? (
          <TouchableOpacity
            style={styles.selectedDateButton}
            onPress={() => bottomSheetRef.current?.expand()}>
            <Text style={styles.selectedDateText}>{selectedDate}</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  };

  // Render bottom sheet
  const renderBottomSheet = () => {
    return (
      <BottomSheet ref={bottomSheetRef} snapPoints={['50%']} index={-1}>
        <View style={styles.bottomSheetContainer}>
          <Text style={styles.bottomSheetTitle}>{selectedDate}</Text>
          <TouchableOpacity
            style={styles.foodButton}
            onPress={() => handleFoodSelect('hot dog')}>
            <Text style={styles.foodButtonText}>Hot Dog</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.foodButton}
            onPress={() => handleFoodSelect('pizza')}>
            <Text style={styles.foodButtonText}>Pizza</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    );
  };

  return (
    <View style={styles.container}>
      {renderCalendar()}
      {renderBottomSheet()}
      {selectedFood ? (
        <View style={styles.selectedFoodContainer}>
          <Text style={styles.selectedFoodText}>
            {selectedDate} - {selectedFood}
          </Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  calendarContainer: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  selectedDateButton: {
    marginTop: 10,
    alignSelf: 'center',
    padding: 10,
    backgroundColor: '#2E66E7',
    borderRadius: 10,
  },
  selectedDateText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomSheetContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomSheetTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  foodButton: {
    padding: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginBottom: 10,
  },
  foodButtonText: {
    fontSize: 18,
  },
  selectedFoodContainer: {
    backgroundColor: '#2E66E7',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedFoodText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
