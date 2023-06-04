import {View, Text, Pressable, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const CalendarHeader = (props: any) => {
  return (
    <View style={C.header}>
      <Pressable
        onPress={props.moveToPrevMonth.bind(this, props.month)}
        style={({pressed}) => pressed && C.pressed}>
        <Text>Prev</Text>
      </Pressable>
      <View style={{flexDirection: 'row'}}>
        <Text>{props.year}년 </Text>
        <Text>{props.month}월</Text>
      </View>
      <Pressable
        onPress={props.moveToNextMonth.bind(this, props.month)}
        style={({pressed}) => pressed && C.pressed}>
        <Text>Next</Text>
      </Pressable>
    </View>
  );
};

export default CalendarHeader;

const C = StyleSheet.create({
  header: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.3,
  },
});
