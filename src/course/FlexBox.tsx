import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const FlexBox = () => {
  return (
    <View style={styles.parentView}>
      <View style={styles.box1}>
        <Text>Box 1</Text>
      </View>
      <View style={styles.box2}>
        <Text>Box 2</Text>
      </View>
      <View style={styles.box1}>
        <Text>Box 3</Text>
      </View>
      <View style={styles.box2}>
        <Text>Box 4</Text>
      </View>
      <View style={styles.box1}>
        <Text>Box 5</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    width: '100%',
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
    // flexDirection: 'column-reverse',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
  },
});
