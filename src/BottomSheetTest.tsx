import React, {useRef, useState, useCallback} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import BottomSheet from '@gorhom/bottom-sheet';

type BottomSheetData = {
  id: number;
  snapPoints: string[];
};

const BottomSheetTest = () => {
  const [bottomSheets, setBottomSheets] = useState<BottomSheetData[]>([]);

  const createBottomSheet = () => {
    const newBottomSheet: BottomSheetData = {
      id: bottomSheets.length + 1,
      snapPoints: ['25%', '50%', '75%'],
    };
    setBottomSheets([...bottomSheets, newBottomSheet]);
  };

  //   const dismissBottomSheet = (id: number) => {
  //     const updatedBottomSheets = bottomSheets.filter(sheet => sheet.id !== id);
  //     setBottomSheets(updatedBottomSheets);
  //   };

  const bottomSheetRefs = useRef<(BottomSheet | null)[]>([]);

  const handleSheetRef = useCallback((ref: BottomSheet | null, id: number) => {
    if (ref) {
      bottomSheetRefs.current[id - 1] = ref;
    } else {
      bottomSheetRefs.current[id - 1] = null;
    }
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={createBottomSheet} onPressIn={() => {}}>
        <View style={styles.button}>
          <Text>Create Bottom Sheet</Text>
        </View>
      </TouchableOpacity>
      {bottomSheets.map(sheet => (
        <BottomSheet
          key={sheet.id}
          ref={ref => handleSheetRef(ref, sheet.id)}
          snapPoints={sheet.snapPoints}
          //   onDismiss={() => dismissBottomSheet(sheet.id)}
        >
          <View style={styles.bottomSheetContent}>
            <Text>Bottom Sheet {sheet.id}</Text>
            <TouchableOpacity
              onPress={() => bottomSheetRefs.current[sheet.id - 1]?.close()}>
              <View style={styles.button}>
                <Text>Close</Text>
              </View>
            </TouchableOpacity>
          </View>
        </BottomSheet>
      ))}
    </View>
  );
};

export default BottomSheetTest;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 10,
  },
  bottomSheetContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
});
