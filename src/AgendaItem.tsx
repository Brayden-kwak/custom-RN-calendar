import isEmpty from 'lodash/isEmpty';
import React, {useCallback} from 'react';
import {
  StyleSheet,
  Alert,
  View,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
// import testIDs from '../testIDs';

interface ItemProps {
  item: any;
}

const AgendaItem = (props: ItemProps) => {
  const {item} = props;

  //   const buttonPressed = useCallback(() => {
  //     Alert.alert('Show me more');
  //   }, []);

  //   const itemPressed = useCallback(() => {
  //     Alert.alert(item.name);
  //   }, [item.name]);

  if (isEmpty(item)) {
    return (
      <View style={styles.emptyItem}>
        <Text style={styles.emptyItemText}>No Events Planned Today</Text>
      </View>
    );
  }

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

          {/* 아이콘 자리 -> 텍스트로 대체 */}

          {/* 아이콘 자리 -> 텍스트로 대체 */}
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
            <Text style={{color: '#1A1818', fontSize: 16, paddingRight: 5}}>
              {item.name}
            </Text>
            <View style={{height: 8, width: 2, backgroundColor: '#E2E5EA'}} />
            <Text style={{color: '#1A1818', fontSize: 16, paddingLeft: 5}}>
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
};

export default React.memo(AgendaItem);

const styles = StyleSheet.create({
  item: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    flexDirection: 'row',
  },
  itemHourText: {
    color: 'black',
  },
  itemDurationText: {
    color: 'grey',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  itemTitleText: {
    color: 'black',
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  emptyItem: {
    paddingLeft: 20,
    height: 52,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  emptyItemText: {
    color: 'lightgrey',
    fontSize: 14,
  },
});
