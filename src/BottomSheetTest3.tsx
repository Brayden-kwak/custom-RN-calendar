import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import BottomSheetModal from '@gorhom/bottom-sheet';
import {screenHeight, screenWidth} from './AnimationPractice';

// const foodOptions = ['Hot Dog', 'Pizza'];

const BottomSheetTest3 = () => {
  const [selectedDates, setSelectedDates] = useState([]) as any;
  const [selectedFood, setSelectedFood] = useState({}) as any;
  const [selectedDateText, setSelectedDateText] = useState('') as any;
console.log("selectedFood111", selectedFood)

if(selectedFood) {
    // selectedFood.map((item: any) => console.log(item))
    for(let i = 0; i < Object.keys(selectedFood).length; i++) {
        console.log("selectedFood====", Object.keys(selectedFood)[i])
        console.log("selectedFood====", Object.values(selectedFood)[i])
    }
}

  const onDayPress = (day: any) => {
    const dateString = day.dateString;
    const food = selectedFood[dateString] || '';
    setSelectedDateText(dateString);
    bottomSheetModalRef.current?.expand();
  };

  const onFoodPress = (dateString: any, food: any) => {
    const newSelectedFood = {...selectedFood, [dateString]: food};
    setSelectedFood(newSelectedFood);
    bottomSheetModalRef.current?.close();
    setSelectedDates([...selectedDates, dateString]);
  };

  const renderFoodButton = (dateString: any) => {
    const food = selectedFood[dateString] || '';
    return (
      <View style={styles.selectedFoodContainer}>
        <Text style={styles.selectedFoodText}>{dateString}</Text>
        <TouchableOpacity
          style={styles.foodButton}
          onPress={() =>
            onFoodPress(dateString, food === 'Hot dog' ? 'Pizza' : 'Hot dog')
          }>
          <Text style={styles.selectedFoodText}>{food || 'Select food'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderSelectedDates = () => {
    return (
      <View style={styles.selectedDatesContainer}>
        {selectedDates.map((dateString: any) => (
          <View key={dateString}>
            <Text style={styles.selectedDateText}>{dateString}</Text>
            {renderFoodButton(dateString)}
          </View>
        ))}
      </View>
    );
  };

  const bottomSheetModalRef = React.useRef(null) as any;

  return (
    <View style={styles.container}>
      <CalendarList
        horizontal={true}
        style={styles.calendar}
        markingType={'period'}
        onDayPress={onDayPress}
        markedDates={{
          ...selectedDates.reduce((obj: any, dateString: any) => {
            obj[dateString] = {selected: true};
            return obj;
          }, {}),
        }}
      />
      {/* {selectedDates.length > 0 && (
        <>
          {selectedFood.map((item: any) => {
            return <Text>{item}</Text>;
          })}
        </>
      )} */}
      {selectedDates.length > 0 && renderSelectedDates()}
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={['50%']}
        // backgroundColor="#F5F5F5"
        enablePanDownToClose={true}>
        <View style={styles.bottomSheetContainer}>
          <Text>Select Food</Text>
          <TouchableOpacity
            style={styles.foodButton}
            onPress={() => onFoodPress(selectedDateText, 'Hot dog')}>
            <Text style={styles.selectedFoodText}>Hot dog</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.foodButton}
            onPress={() => onFoodPress(selectedDateText, 'Pizza')}>
            <Text style={styles.selectedFoodText}>Pizza</Text>
          </TouchableOpacity>
        </View>
      </BottomSheetModal>
    </View>
  );
};

export default BottomSheetTest3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  calendar: {
    height: screenHeight,
  },
  selectedDatesContainer: {
    backgroundColor: 'blue',
  },
  calendarContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  selectedFoodContainer: {
    width: screenWidth,
    height: 30,
  },
  bottomSheetContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    height: 'auto',
  },
  selectedDateText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  selectedDateModalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  foodButton: {
    padding: 12,
    backgroundColor: '#DDDDDD',
    borderRadius: 8,
    marginRight: 8,
  },
  selectedFoodButton: {
    backgroundColor: '#007AFF',
  },
  selectedFoodText: {
    fontWeight: 'bold',
  },
});
